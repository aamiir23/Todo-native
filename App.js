import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import GroupList from './components/GroupList';
import TodoList from './components/TodoList';
import styles from './styles';

const App = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [newGroupName, setNewGroupName] = useState('');

  useEffect(() => {
    console.log('groups loading');
    const groupsData = require('./groups.json'); // Assuming groups.json is in the same directory
    setGroups(groupsData);
  }, []);

  const handleSelectGroup = groupId => {
    setSelectedGroupId(groupId);
  };

  const handleAddTodo = text => {
    const updatedGroups = groups.map(group => {
      if (group.id === selectedGroupId) {
        return {
          ...group,
          todos: [...group.todos, { id: Date.now(), text }]
        };
      }
      return group;
    });
    setGroups(updatedGroups);
  };

  const handleToggleComplete = todoId => {
    const updatedGroups = groups.map(group => {
      if (group.id === selectedGroupId) {
        return {
          ...group,
          todos: group.todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
          )
        };
      }
      return group;
    });
    setGroups(updatedGroups);
  };

  const handleDeleteTodo = todoId => {
    const updatedGroups = groups.map(group => {
      if (group.id === selectedGroupId) {
        return {
          ...group,
          todos: group.todos.filter(todo => todo.id !== todoId)
        };
      }
      return group;
    });
    setGroups(updatedGroups);
  };

  const handleCreateGroup = () => {
    if (newGroupName.trim() === '') {
      return; // Prevent empty group names
    }

    const newGroupId = Date.now(); // Unique ID for the new group
    setGroups([...groups, { id: newGroupId, name: newGroupName, todos: [] }]);
    setSelectedGroupId(newGroupId); // Select the newly created group
    setNewGroupName(''); // Clear the input field
  };

  const handleDeleteGroup = groupId => {
    // Confirmation prompt before deletion (optional)
    if (window.confirm('Are you sure you want to delete this group?')) {
      const updatedGroups = groups.filter(group => group.id !== groupId);
      setGroups(updatedGroups);

      // Reset selection if the deleted group was selected
      if (groupId === selectedGroupId) {
        setSelectedGroupId(null);
      }
    }
  };

  const handleBackPress = () => {
    setSelectedGroupId(null); // Clear selected group when going back
  };

  const selectedGroup = groups.find(group => group.id === selectedGroupId);

  return (
    <View style={styles.container2}>
      <View style={styles.container}>
        <Text style={styles.title}>GO Grab TODOs</Text>
        {!selectedGroupId && ( // Display group list when no group is selected
          <>
              <View style={styles.createGroupInput}>
                <TextInput
                  style={styles.createGroupTextInput}
                  placeholder="Enter group name" value={newGroupName}
                  onChangeText={setNewGroupName}
                  />
                <TouchableOpacity onPress={handleCreateGroup} style={styles.createGroupButton}>
                  <Text style={styles.createGroupButtonText}>Create Group</Text>
                </TouchableOpacity>
            </View> 
            <Text
            style={{ fontSize:24, textAlign:'center', width:'100%', fontWeight:600, marginTop:15 }}
            > Groups </Text>
          <GroupList
            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            style={styles.groupList}
            groups={groups}
            onSelectGroup={handleSelectGroup}
            onDeleteGroup={handleDeleteGroup}
            />
        </>
        )}
            {/* {!selectedGroupId && ( // Input field to create new group (when no group is selected)
              )} */}
        {selectedGroupId && ( // Display todo list and back button when a group is selected
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