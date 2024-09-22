import React from 'react';
import { FlatList } from 'react-native';
import GroupItem from './GroupItem';
import styles from '../styles';

const GroupList = ({ groups, onSelectGroup }) => {
  return (
    <FlatList
      style={styles.groupList}
      data={groups}
      renderItem={({ item }) => <GroupItem group={item} onSelectGroup={onSelectGroup} />}
    />
  );
};

export default GroupList;