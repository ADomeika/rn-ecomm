import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

export default function Card({ item }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} tint='light' />

      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.itemName}>
          {item.name}
        </Text>
        <Text
          style={[
            styles.itemPrice,
            { textDecorationLine: item.salePrice ? 'line-through' : 'none' },
          ]}
        >
          ${item.rrp}
        </Text>
      </View>
      {item.salePrice && (
        <Text style={styles.salePrice}>Sale Price: ${item.salePrice}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 3,
    flex: 1,
    overflow: 'hidden',
  },
  image: {
    height: 120,
    width: '100%',
  },
  textContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  itemName: {
    flex: 2,
  },
  itemPrice: {
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  salePrice: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 18,
    color: colors.danger,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
