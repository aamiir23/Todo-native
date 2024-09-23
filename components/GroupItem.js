import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';


const GroupItem = ({ group, onSelectGroup, onDeleteGroup }) => {
  return (
    <TouchableOpacity
    style={{  flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'100%', flex:1,}}
    onPress={() => onSelectGroup(group.id)}>
      <Text
      style={styles.groupName}
      >{group.name}</Text>
      
          <TouchableOpacity onPress={() => onDeleteGroup(group.id)}>
            <Text style={styles.deleteButton}>❌</Text>
          </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default GroupItem;
