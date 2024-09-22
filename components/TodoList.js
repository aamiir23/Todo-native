import React, { useState } from 'react';
import { View, FlatList, TextInput, Button, Text } from 'react-native';
import TodoItem from './TodoItem';
import styles from '../styles';

const TodoList = ({ todos, onAddTodo, onToggleComplete, onDelete }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      onAddTodo(newTodoText);
      setNewTodoText('');
    }
  };

  return (
    <View 
    style={styles.container}
    >
        <View
        style={styles.todoList}
        
        >

<TextInput
  value={newTodoText}
  onChangeText={setNewTodoText}
  placeholder="Add a todo"
  style={{ fontSize: 20, textAlign: 'center', border: '2px dashed blue', 
    // backgroundColor:'yellow',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius:10,
    marginVertical:5,
   }} // Set border style to dashed
/>
      <Button title="Add" onPress={handleAddTodo} 
  style={{ fontSize: 20, textAlign: 'center', border: '2px dashed blue', 
    backgroundColor:'yellow',
    
}} // Set border style to dashed
/>
      <Text
        style={{ fontSize: 20, textAlign: 'center',
            fontWeight:600,
        // backgroundColor:'yellow',
        marginVertical:15,
        }} // Set border style to dashed
      
      >* List Items *</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
            <TodoItem
            todo={item}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
            />
        )}
        />
        </View>
    </View>
  );
};

export default TodoList;