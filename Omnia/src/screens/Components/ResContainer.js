import React from 'react';
import { View, Text, StyleSheet,PixelRatio,Dimensions } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 500;

export function normalize(size) {
  const newSize = size * scale 
    return Math.round(PixelRatio.roundToNearestPixel(newSize))  
}

const ResContainer = ({ Name,Category,Driver,JobDescription}) => {

  return (

    <View style={styles.container}>
        <View style={styles.headingView}>
          <Text style={styles.title}>{"\ "}{Name}</Text>
          <Text style={{margin:10}}> {Category}</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={styles.loc}> Driver: </Text>
      <Text style={styles.Driver}>{Driver} </Text>
      </View>
      <Text style={styles.loc}> Job Description: </Text>
      <View style={styles.JobDescription}>
      <Text style={styles.description}> {JobDescription}</Text>
      </View>
      <Text style={{lineHeight:5}}>{"\n"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        borderColor: "#737373",
        borderWidth:2,
        borderRadius: 10,
        width:"98%",
        alignSelf:'center',
        backgroundColor:"#d0b4dc"
    },
    headingView:{
        justifyContent:'space-between',
        flexDirection:'row',
    },
    loc:{
        fontSize: 18,
        lineHeight:30,
        fontWeight: 'bold'
    },
    description:{
      fontSize: 18,
      lineHeight:30
  },
    JobDescription:{
      backgroundColor:"#d0b4dc",
      width:"95%",
      alignSelf:'center'
  },
    title:{
      color:"black",
      fontSize: normalize(27),
    },
    Driver:{
      color:"black",
      fontSize: 17,
      lineHeight:30,
    }
  });

export default ResContainer;