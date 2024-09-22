import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';


const GroupItem = ({ group, onSelectGroup }) => {
  return (
    <TouchableOpacity onPress={() => onSelectGroup(group.id)}>
      <Text
      style={styles.groupName}
      >{group.name}</Text>
    </TouchableOpacity>
  );
};

export default GroupItem;