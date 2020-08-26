import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../../config/colors';

export default function SearchSection() {
  return (
    <View style={styles.searchWrapper}>
      <MaterialIcons name='search' size={26} color={colors.grey} />
      <TextInput placeholder='Search...' style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    alignItems: 'center',
    backgroundColor: colors.lightgrey,
    borderRadius: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 16,
    flex: 1,
    paddingHorizontal: 5,
  },
});
