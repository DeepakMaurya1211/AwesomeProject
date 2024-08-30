// App.js

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import img1 from "../../assets/images/app_logo1.png";
import img2 from "../../assets/images/bu_logo.png";
import { ViewPropTypes } from "deprecated-react-native-prop-types";

const data = [
  { title: "", image: require("../../assets/images/thumbnail1.png") },
  { title: "", image: require("../../assets/images/thumbnail2.png") },
  { title: "", image: require("../../assets/images/thumbnail3.png") },
  { title: "", image: require("../../assets/images/thumbnail4.png") },
  // Add more items as needed
];

export default function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderItem = ({ item }) => {
    return (
      
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        
        {/* <Text style={styles.title}>{item.title}</Text> */}
      </View>
      
    
    );
  };
  App.navigationOptions = {
    headerShown: false,
  };

  return (
    <View
      style={{
        width: "100%",
        paddingTop: 50,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <View>
        <Image source={img1} style={styles.logoImage} />
        
        
      </View >
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={350}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        containerStyle={{ marginTop:-200 }}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      {/* <View>
       <Image source={img2} style={styles.buLogo}  />
        </View>
       */}
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#f5fcff",
    padding: "10px",
  },
  // item: {

  //   backgroundColor: '#BBA0FF',
  //   borderRadius: 20,
  //   height: 300,
  //   padding: 10,

  //   // marginLeft: 1,
  //   // marginRight: 1,
  // },
  image: {
    width: "100%",
    height: "70%",
    borderRadius: 20,
  },
  //   title: {
  //     fontSize: 20,
  //     fontWeight: 'bold',
  //     textAlign: 'center',
  //   },
  dot: {
    marginBottom: 500,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#115335",
  },
  inactiveDot: {
    backgroundColor: "#129459",
  },
  logoImage: {
    width: 250 ,
    height: 50,
    marginLeft: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  //  buLogo: {
  //   //  width:2,
  //   //  height:2,
  //    marginBottom:10,
  //  } 
});
