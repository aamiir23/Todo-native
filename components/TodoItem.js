import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import '../styles';
import styles from '../styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <View>

    <TouchableOpacity onPress={() => onToggleComplete(todo.id)}>
      <View  style={styles.todoItem}>
        <Text style={{ textDecoration: todo.completed ? 'line-through' : 'line-through', fontSize:14, textAlign:'center', color:'#1d3557' }}>
          {todo.text}
        </Text>
        <TouchableOpacity onPress={() => onDelete(todo.id)}>
          <Text style={{color:'#e63946', textAlign:'center', fontSize:12,}}> ❌ </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default TodoItem;