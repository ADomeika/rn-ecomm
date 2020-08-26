import React from 'react';
import { FlatList } from 'react-native';

import CategoryItem from '../CategoryItem';

const DATA = [
  {
    backgroundColor: '#fae818',
    icon: 'truck',
    iconColor: '#fff',
    title: 'Cars',
  },
  {
    backgroundColor: '#f7907b',
    icon: 'laptop',
    iconColor: 'white',
    title: 'Jobs',
  },
  {
    backgroundColor: '#627d93',
    icon: 'tools',
    iconColor: 'white',
    title: 'Tools',
  },
  {
    backgroundColor: '#38e4d3',
    icon: 'home',
    iconColor: 'white',
    title: 'Houses',
  },
  {
    backgroundColor: '#33d27b',
    icon: 'laptop',
    iconColor: 'white',
    title: 'Electronics',
  },
];

export default function CategorySection() {
  const renderItem = ({
    item: { backgroundColor, icon, iconColor, title },
  }) => {
    return (
      <CategoryItem
        backgroundColor={backgroundColor}
        icon={icon}
        iconColor={iconColor}
        title={title}
      />
    );
  };

  return (
    <FlatList
      horizontal
      data={DATA}
      keyExtractor={(item) => item.title}
      renderItem={renderItem}
    />
  );
}
