import React from 'react';
import img1 from "../../assets/images/saree1.jpg";
import img2 from "../../assets/images/saree2.jpg";
import img3 from "../../assets/images/saree3.jpg";
import img4 from "../../assets/images/saree4.jpg";
import img5 from "../../assets/images/saree5.jpg";
import img6 from "../../assets/images/saree6.jpg";
import img7 from "../../assets/images/saree7.jpg";
import img8 from "../../assets/images/saree8.jpg";
import Product from './Product';

const products = [
    { id: 8, name: 'Jaipuri  Saree', price: '$30', image: img8, rating: '⭐⭐⭐'  },
    { id: 1, name: 'Banarasi Purple Saree', price: '$10', image: img1, rating: '⭐⭐⭐⭐' },
    { id: 2, name: 'Banarasi Orange Saree', price: '$20', image: img2, rating: '⭐⭐⭐'  },
    { id: 3, name: 'Banarasi Haldi Saree', price: '$30', image: img3, rating: '⭐⭐⭐⭐'  },
    { id: 4, name: 'Ghagra Choli', price: '$30', image: img5, rating: '⭐⭐⭐⭐'  },
    { id: 5, name: 'Jaipuri  Saree', price: '$30', image: img4, rating: '⭐⭐⭐'  },
    { id: 6, name: 'Ghagra Choli', price: '$30', image: img6, rating: '⭐⭐⭐'  },
    { id: 7, name: 'Jaipuri saree', price: '$30', image: img7, rating: '⭐⭐⭐'  },
    // Add more products as needed
];

const Saree = () => {
    return (
        <Product products={products} />
    )
}
export default Saree;
