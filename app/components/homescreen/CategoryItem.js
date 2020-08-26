import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../config/colors';

export default function CategoryItem({
  backgroundColor = colors.black,
  icon,
  iconColor = colors.white,
  title,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log(title)}
    >
      <View style={[styles.categoryIcon, { backgroundColor }]}>
        <FontAwesome5 name={icon} color={iconColor} size={28} />
      </View>

      <View>
        <Text style={styles.categoryTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  categoryIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    height: 70,
    width: 70,
    borderRadius: 40,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  categoryTitle: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
});
