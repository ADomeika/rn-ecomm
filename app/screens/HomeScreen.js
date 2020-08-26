import React from 'react';
import { StyleSheet, View } from 'react-native';

import Screen from '../components/shared/Screen';
import CategorySection from '../components/homescreen/sections/CategorySection';
import SearchSection from '../components/homescreen/sections/SearchSection';
import ProductSection from '../components/homescreen/sections/ProductSection';

export default function HomeScreen() {
  return (
    <Screen>
      <SearchSection />
      <View style={styles.section}>
        <CategorySection />
      </View>
      <View style={[styles.section, { paddingHorizontal: 10, flex: 1 }]}>
        <ProductSection />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
  },
});
