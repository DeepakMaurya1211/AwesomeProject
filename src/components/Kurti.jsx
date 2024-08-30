import React from 'react'
import { View } from 'react-native-animatable';
import img1 from "../../assets/images/kurti1.jpg";
import img2 from "../../assets/images/kurti2.jpg";
import img3 from "../../assets/images/kurti3.jpg";
import img4 from "../../assets/images/kurti4.jpg";
import Product from './Product';
import { ScrollView } from 'react-native-gesture-handler';

const products = [
    { id: 1, name: 'kurti', price: '$10', image: img1, rating: '⭐⭐⭐⭐', tag: "bangle" },
    { id: 2, name: 'Short kurti', price: '$20', image: img2, rating: '⭐⭐⭐', tag: "ring"  },
    { id: 3, name: 'long kurti', price: '$30', image: img3, rating: '⭐⭐⭐⭐', tag : "bangle"  },
    { id: 4, name: 'Short kurti', price: '$30', image: img4, rating: '⭐⭐⭐', tag: "payal"  },
    // Add more products as needed
];

const Kurti = () => {
    return (
        
        <View style={{flex:1, paddingTop:35,}}>
        <Product products={products} />
         </View>
    )
}

export default Kurti
