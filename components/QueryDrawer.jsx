// QueryDrawer.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const QueryDrawer = ({ onSearch }) => {
  const [query, setQuery] = useState({ city: '', rooms: '', elevator: false, manager: false });

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <Text>查詢條件</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setQuery({ ...query, city: text })}
        placeholder="縣市"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setQuery({ ...query, city: text })}
        placeholder="區域"
      />
      {/* 其他查詢條件... */}
      <Button title="搜尋" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:300,
    paddingTop: 20,
    paddingLeft: 10,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  // 更多樣式...
});

export default QueryDrawer;
