import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '../../Card';

const DATA = [
  {
    id: '1',
    name:
      'Acer 15.6" Chromebook, Chrome OS, Intel Celeron N3060 Dual-Core Processor, 2GB RAM, 16GB Internal Storage',
    rrp: 199,
    category: 'electronics',
    salePrice: 179,
    shortDescription:
      'Acer expands upon its already dominant Chromebook position with an affordable 15.6&quot; HD Chromebook, letting you see more, do more and explore more than ever before. With a 27 percent larger screen area than the 13.3-inch Chromebook and a 24 percent larger screen than a 14-inch Chromebook.',
    image:
      'https://sm.pcmag.com/t/pcmag_uk/review/a/acer-chrom/acer-chromebook-15-cb3-532-c47c_vzen.1024.jpg',
  },
  {
    id: '2',
    name: 'Peugeot 308',
    rrp: '2999',
    category: 'cars',
    shortDescription: 'Peugeot Car, good condition and blab lab bla',
    image:
      'https://cdn1.buyacar.co.uk/sites/buyacar/files/styles/w860/public/peugeot_308_dimensions_header.jpg?itok=tJnM_cEp',
  },
  {
    id: '3',
    name:
      'Acer 15.6" Chromebook, Chrome OS, Intel Celeron N3060 Dual-Core Processor, 2GB RAM, 16GB Internal Storage',
    rrp: 199,
    category: 'electronics',
    salePrice: 179,
    shortDescription:
      'Acer expands upon its already dominant Chromebook position with an affordable 15.6&quot; HD Chromebook, letting you see more, do more and explore more than ever before. With a 27 percent larger screen area than the 13.3-inch Chromebook and a 24 percent larger screen than a 14-inch Chromebook.',
    image:
      'https://sm.pcmag.com/t/pcmag_uk/review/a/acer-chrom/acer-chromebook-15-cb3-532-c47c_vzen.1024.jpg',
  },
  {
    id: '4',
    name: 'Peugeot 308',
    rrp: '2999',
    category: 'cars',
    shortDescription: 'Peugeot Car, good condition and blab lab bla',
    image:
      'https://cdn1.buyacar.co.uk/sites/buyacar/files/styles/w860/public/peugeot_308_dimensions_header.jpg?itok=tJnM_cEp',
  },
  {
    id: '5',
    name:
      'Acer 15.6" Chromebook, Chrome OS, Intel Celeron N3060 Dual-Core Processor, 2GB RAM, 16GB Internal Storage',
    rrp: 199,
    category: 'electronics',
    salePrice: 179,
    shortDescription:
      'Acer expands upon its already dominant Chromebook position with an affordable 15.6&quot; HD Chromebook, letting you see more, do more and explore more than ever before. With a 27 percent larger screen area than the 13.3-inch Chromebook and a 24 percent larger screen than a 14-inch Chromebook.',
    image:
      'https://sm.pcmag.com/t/pcmag_uk/review/a/acer-chrom/acer-chromebook-15-cb3-532-c47c_vzen.1024.jpg',
  },
  {
    id: '6',
    name: 'Peugeot 308',
    rrp: '2999',
    category: 'cars',
    shortDescription: 'Peugeot Car, good condition and blab lab bla',
    image:
      'https://cdn1.buyacar.co.uk/sites/buyacar/files/styles/w860/public/peugeot_308_dimensions_header.jpg?itok=tJnM_cEp',
  },
];

export default function ProductSection() {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => console.log(item)}
        style={{ flex: 1, margin: 5 }}
      >
        <Card item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
