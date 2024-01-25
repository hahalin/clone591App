import { View, Button, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PropertyDetails = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <View style={styles.item}>
            <Image source={item.imageUrl} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.location}</Text>
            <Text>{item.price}</Text>
            <Button title="返回" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
    },
    image: {
        width: '100%', // 或者您希望的宽度
        height: 200, // 或者您希望的高度
        resizeMode: 'cover'
    }
});

export default PropertyDetails;
