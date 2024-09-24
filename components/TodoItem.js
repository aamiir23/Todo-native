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
      <Text style={{
        textDecorationLine: todo.completed ? 'line-through' : 'none',
        textDecorationStyle: todo.completed ? 'solid' : 'none',
        textDecorationColor: todo.completed ? '#111111' : 'none',
        fontSize: 14,
        textAlign: 'center',
        // color: '#fff00f',
        }}>
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