import React,{useState} from 'react';
import {Text,StyleSheet,View,TouchableOpacity,Image,FlatList,Dimensions} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Home= ({navigation}) => {
  const search1 = React.createRef();
  const [value,setValue]=useState("");

  const filterArray=[{source: (require('../../assets/grocery.png')),Name:"Groceries"}
,{source: (require('../../assets/medications.png')),Name:"Medications"}
,{source: (require('../../assets/post-office.png')),Name:"Post Office"}
,{source: (require('../../assets/deliveryman.png')),Name:"Delivery"},
{source: (require('../../assets/others.png')),Name:"Others"},
]

  return (
    <>
      <KeyboardAwareScrollView
      style={{backgroundColor: "#fff"}}
      >

      <View style={{width:"100%",height:3,backgroundColor:"#ededed"}}/>
      <Text style={{lineHeight:5}}>{"\n"}</Text>


      <View style={{flexDirection:'row',alignContent:"space-between",paddingBottom:20,paddingLeft:10}}>

      <View style={{width:"80%",backgroundColor:"#f0f0f0",borderWidth:1,flexDirection:'row',borderRadius:10}}>
      <Image source={require("../../assets/loc.png")} style={{width:50,height:50}}/>
      <Text style={{lineHeight:33,fontSize:20,paddingTop:10}}>Current Address:</Text>
      </View>

        <TouchableOpacity style={{paddingLeft:20}}>
        <Image source={require("../../assets/add_button2.png")} style={{width:40,height:40,marginTop:7}}/>
        </TouchableOpacity>
      </View>

      <View style={{width:"100%",height:3,backgroundColor:"#ededed",lineHeight:1}}/>

      <Text style={{fontSize:20,paddingTop:30,paddingLeft:30}}>Jobs</Text>
      <Text style={{fontSize:10}}>{"\n"}</Text>
      <FlatList
      data={filterArray}
      horizontal={true}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={{borderWidth:1,borderColor:"#f2f2f2",padding:30,height:150}}>
            <Image source={item.source} style={{resizeMode:'contain',width: (Dimensions.get('screen').width) / 3,height:70,marginBottom:15}}/>
            <Text style={{textAlign:'center',fontSize:20,width:"100%"}}>{item.Name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  <Text style={{fontSize:20,paddingTop:30,paddingLeft:30}}>Past Jobs</Text>




      </KeyboardAwareScrollView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default Home;

      {/* <View style={{width:"100%",height:3,backgroundColor:"#ededed"}}/>
      <TouchableOpacity style={{justifyContent:"center",alignItems:'center'}}
      onPress={() => navigation.navigate('Job')}
      >
      <Image source={require("../../assets/tempButton.png")} style={{width:200,height:200,resizeMode:'contain',alignItems:'center'}}/>
      </TouchableOpacity>

      <SearchBar
          text={value}
          ref={search1}
          barTintColor="#ffffff"
          placeholder="Search"
          onSearchButtonPress={() => search1.current.blur()}
          onCancelButtonPress={() => search1.current.blur()}
             /> */}