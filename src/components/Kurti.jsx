import React from 'react'
import img1 from "../../assets/images/kurti1.jpg";
import img2 from "../../assets/images/kurti2.jpg";
import img3 from "../../assets/images/kurti3.jpg";
import img4 from "../../assets/images/kurti4.jpg";
import Product from './Product';

const products = [
    { id: 1, name: ' Purple Saree', price: '$10', image: img1, rating: '⭐⭐⭐⭐', tag: "bangle" },
    { id: 2, name: 'Banrasee Orange Saree', price: '$20', image: img2, rating: '⭐⭐⭐', tag: "ring"  },
    { id: 3, name: 'Banrasee Haldi Saree', price: '$30', image: img3, rating: '⭐⭐⭐⭐', tag : "bangle"  },
    { id: 4, name: 'Jaipuri  Saree', price: '$30', image: img4, rating: '⭐⭐⭐', tag: "payal"  },
    // Add more products as needed
];

const Kurti = () => {
    return (
        <Product products={products} />
    )
}

export default Kurti
