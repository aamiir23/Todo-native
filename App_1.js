import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GroupList from './components/GroupList';
import TodoList from './components/TodoList';
import styles from './styles';

const GROUPS_STORAGE_KEY = '@groups';

const App = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [newGroupName, setNewGroupName] = useState('');

  useEffect(() => {
    loadGroupsFromStorage();
  }, []);

  const loadGroupsFromStorage = async () => {
    try {
      const storedGroups = await AsyncStorage.getItem(GROUPS_STORAGE_KEY);
      if (storedGroups) {
        setGroups(JSON.parse(storedGroups));
      }
    } catch (error) {
      console.error('Error loading groups from storage:', error);
    }
  };

  const saveGroupsToStorage = async (groupsToSave) => {
    try {
      await AsyncStorage.setItem(GROUPS_STORAGE_KEY, JSON.stringify(groupsToSave));
    } catch (error) {
      console.error('Error saving groups to storage:', error);
    }
  };

  const handleSelectGroup = (groupId) => {
    setSelectedGroupId(groupId);
  };

  const handleAddTodo = (text) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === selectedGroupId) {
        return {
          ...group,
          todos: [...group.todos, { id: Date.now(), text, completed: false }],
        };
      }
      return group;
    });
    setGroups(updatedGroups);
    saveGroupsToStorage(updatedGroups);
  };

  const handleToggleComplete = (todoId) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === selectedGroupId) {
        return {
          ...group,
          todos: group.todos.map((todo) =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
          ),
        };
      }
      return group;
    });
    setGroups(updatedGroups);
    saveGroupsToStorage(updatedGroups);
  };

  const handleDeleteTodo = (todoId) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === selectedGroupId) {
        return {
          ...group,
          todos: group.todos.filter((todo) => todo.id !== todoId),
        };
      }
      return group;
    });
    setGroups(updatedGroups);
    saveGroupsToStorage(updatedGroups);
  };

  const handleCreateGroup = () => {
    if (newGroupName.trim() === '') {
      Alert.alert('Error', 'Group name cannot be empty');
      return;
    }

    const newGroupId = Date.now(); // Unique ID for the new group
    const newGroup = { id: newGroupId, name: newGroupName, todos: [] };
    const updatedGroups = [...groups, newGroup];
    setGroups(updatedGroups);
    saveGroupsToStorage(updatedGroups);

    setSelectedGroupId(newGroupId); // Select the newly created group
    setNewGroupName(''); // Clear the input field
  };

  const handleDeleteGroup = (groupId) => {
    const updatedGroups = groups.filter((group) => group.id !== groupId);
    setGroups(updatedGroups);
    saveGroupsToStorage(updatedGroups);

    // Reset selection if the deleted group was selected
    if (groupId === selectedGroupId) {
      setSelectedGroupId(null);
    }
  };

  const handleBackPress = () => {
    setSelectedGroupId(null); // Clear selected group when going back
  };

  const selectedGroup = groups.find((group) => group.id === selectedGroupId);

  return (
    <View style={styles.container2}>
      <View style={styles.container}>
        <Text style={styles.title}>GO Grab TODOs</Text>
        {!selectedGroupId && (
          <>
            <View style={styles.createGroupInput}>
              <TextInput
                style={styles.createGroupTextInput}
                placeholder="Enter group name"
                value={newGroupName}
                onChangeText={setNewGroupName}
              />
              <TouchableOpacity onPress={handleCreateGroup} style={styles.createGroupButton}>
                <Text style={styles.createGroupButtonText}>Create Group</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 24, textAlign: 'center', width: '100%', fontWeight: '600', marginTop: 15 }}>
              Groups
            </Text>
            <GroupList
              contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
              style={styles.groupList}
              groups={groups}
              onSelectGroup={handleSelectGroup}
              onDeleteGroup={handleDeleteGroup}
            />
          </>
        )}
        {selectedGroupId && (
          <>
            <Text onPress={handleBackPress} style={styles.backButton}>
              Back
            </Text>
            <TodoList
              style={styles.todoList}
              todos={selectedGroup.todos}
              onAddTodo={handleAddTodo}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTodo}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default App;
