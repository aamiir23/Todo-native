import React from 'react';
import { FlatList } from 'react-native';
import GroupItem from './GroupItem';
import styles from '../styles';

const GroupList = ({ groups, onSelectGroup, onDeleteGroup }) => {
  return (
    <FlatList
      style={styles.groupList}
      data={groups}
      renderItem={({ item }) => <GroupItem group={item} onSelectGroup={onSelectGroup} onDeleteGroup={onDeleteGroup} />}
    />
  );
};

export default GroupList;