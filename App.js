import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import GroupList from './components/GroupList';
import TodoList from './components/TodoList';
import styles from './styles';

const App = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  useEffect(() => {
    console.log('groups loading lwde');
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

  // const selectedGroup = groups.find(group => group.id === selectedGroupId);


  const handleBackPress = () => {
    setSelectedGroupId(null); // Clear selected group when going back
  };

  const selectedGroup = groups.find(group => group.id === selectedGroupId);



  return (
    <View style={styles.container2}>
    <View style={styles.container}>
      <Text style={styles.title}>Hi! I'm ToDo Ka 14</Text>
      {selectedGroupId && (
        <>
          <Text
  onPress={handleBackPress}
  style={
    styles.backButton
  }
>BACK</Text>
          <TodoList
            style={styles.todoList}
            todos={selectedGroup.todos}
            onAddTodo={handleAddTodo}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
          />
        </>
      )}
      {!selectedGroupId && 
      <GroupList
      contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
      style={styles.groupList} groups={groups} onSelectGroup={handleSelectGroup} />}
    </View>
    </View>
  );
};

export default App;