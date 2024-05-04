import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import React from 'react'

const Product = ({ products }) => {
    const renderProduct = ({ item }) => (
        <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={styles.productPrice}>{item.price}</Text>
                <Text style={styles.productPrice}>{item.rating}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            style={styles.flatList}
            data={products}
            renderItem={renderProduct}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    flatList: {
        padding: 10,
        backgroundColor: "#eae2ff"
    },
    productContainer: {
        flex: 1,
        margin: 5,
        padding: 10,
        maxWidth: 175,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: '#f4f1ff',
        elevation: 6, // Android shadow effect
        shadowColor: '#796ea2', // iOS shadow effect
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.4, // Increase opacity for darker shadow
        shadowRadius: 4,
        borderRadius: 9,
    },
    productImage: {
        width: 150,
        height: 220,
        marginBottom: 10,
        borderRadius: 5,
    },
    productName: {
        fontSize: 15,
    },
    productPrice: {
        fontSize: 16,
        marginTop: 5,
        marginRight: 15,
    },
});

export default Product