import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//navigation.navigate('Home')
const CustomDrawer = ({}) => {
  return (
    <View style_={styles.drawer}>
      <TouchableOpacity onPress={() => {console.log('test');}}>
        <Text>Home</Text>
      </TouchableOpacity>
      {/* 其他导航链接 */}
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    width: 300, // 侧边栏宽度
    padding: 20,
    backgroundColor: 'white',
    // 其他样式
  },
  // 其他样式
});

export default CustomDrawer;
