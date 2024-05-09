import React, { useEffect, useState } from 'react';
import img1 from "../../assets/images/bangle1.jpg";
import img2 from "../../assets/images/necklace1.jpg";
import img3 from "../../assets/images/necklace2.jpg";
import img4 from "../../assets/images/necklace3.jpg";
import img5 from "../../assets/images/necklace4.jpg";
import img6 from "../../assets/images/necklace5.jpg";
import img7 from "../../assets/images/bangle2.jpg";
import img8 from "../../assets/images/bangle3.jpg";
import img9 from "../../assets/images/bangle4.jpg";
import img10 from "../../assets/images/bangle5.jpg";
import img11 from "../../assets/images/bangle6.jpg";
import img12 from "../../assets/images/earrings1.jpg";
import img13 from "../../assets/images/necklace6.jpg";
import img14 from "../../assets/images/necklace7.jpg";
import img15 from "../../assets/images/necklace8.jpg";
import img16 from "../../assets/images/necklace9.jpg";

import Product from './Product';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';

const products = [
    { id: 1, name: 'bangle', price: '$10', image: img1, rating: '⭐⭐⭐⭐', tag: "bangle" },
    { id: 2, name: '', price: '$20', image: img2, rating: '⭐⭐⭐', tag: "necklace" },
    { id: 3, name: '', price: '$20', image: img5, rating: '⭐⭐⭐', tag: "necklace" },
    { id: 4, name: '', price: '$20', image: img6, rating: '⭐⭐⭐', tag: "necklace" },
    { id: 5, name: '', price: '$20', image: img3, rating: '⭐⭐⭐', tag: "necklace" },
    { id: 6, name: '', price: '$20', image: img4, rating: '⭐⭐⭐', tag: "necklace" },
    { id: 7, name: 'Gold plated Bangle', price: '$30', image: img7, rating: '⭐⭐⭐⭐', tag: "bangle" },
    { id: 8, name: 'Gold plated Bangle', price: '$30', image: img8, rating: '⭐⭐⭐⭐', tag: "bangle" },
    { id: 9, name: 'Gold plated Bangle', price: '$30', image: img9, rating: '⭐⭐⭐⭐', tag: "bangle" },
    { id: 10, name: 'Gold plated Bangle', price: '$30', image: img10, rating: '⭐⭐⭐⭐', tag: "bangle" },
    { id: 11, name: 'Gold plated Bangle', price: '$30', image: img11, rating: '⭐⭐⭐⭐', tag: "bangle" },
    { id: 12, name: 'Jaipuri  Saree', price: '$30', image: img12, rating: '⭐⭐⭐', tag: "ear-rings" },
    { id: 13, name: '', price: '$20', image: img13, rating: '⭐⭐⭐', tag: "necklace" },
    { id: 14, name: '', price: '$20', image: img14, rating: '⭐⭐⭐', tag: "necklace" },
    { id: 15, name: '', price: '$20', image: img15, rating: '⭐⭐⭐', tag: "necklace" },
    { id: 16, name: '', price: '$20', image: img16, rating: '⭐⭐⭐', tag: "necklace" },

    // Add more products as needed
];

const filters = ["All", "bangle", "necklace", "ear-rings", "rings"]

const Jewellery = () => {

    const [selectedFilter, setSelectedFilter] = useState("All")
    // console.log(selectedFilter);
    let filterProducts = products;
    if (selectedFilter != "All") {
        filterProducts = products.filter((product) => product.tag == selectedFilter)
    }
    return (
        <View style={{flex:1, paddingTop:35}}>
            <ScrollView horizontal style={{ padding:10 , backgroundColor: "#eae2ff", maxHeight:60, }}>
                {filters.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => setSelectedFilter(item)} style={styles.fitlerButton}>
                        <Text style={styles.filterText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Product products={filterProducts} />
        </View>
    )
}
const styles = StyleSheet.create({
    fitlerButton: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        alignSelf: "center",
        backgroundColor: "#BBA0FF",
        marginHorizontal: 10,
        // marginTop:1,
        borderRadius: 5,
        elevation: 6, // Android shadow effect
        shadowColor: '#796ea2', // iOS shadow effect
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.4, // Increase opacity for darker shadow
        shadowRadius: 4,
    },
    filterText: {
        fontSize: 15,
    }
})
export default Jewellery;
