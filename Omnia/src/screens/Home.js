import React,{useEffect} from 'react';
import {Text,StyleSheet,View,TouchableOpacity,Image,FlatList,Dimensions,LogBox} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ResContainer from "./Components/ResContainer.js"

const Home= ({navigation}) => {

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])

  const filterArray=[{source: (require('../../assets/grocery.png')),Name:"Groceries"}
,{source: (require('../../assets/medications.png')),Name:"Medications"}
,{source: (require('../../assets/post-office.png')),Name:"Post Office"}
,{source: (require('../../assets/deliveryman.png')),Name:"Delivery"},
{source: (require('../../assets/others.png')),Name:"Others"},

]

Jobs=[{Name:"Take Parcel to the post office",JobDescription:"I don't have access to a car and could use someone's help taking my parcel to the post office!",Driver:"John Smith",Category:"Post Ofiice"
},{Name:"Pick up dry-cleaning",JobDescription:"I have dry cleaning to pick up or an event tonight but I'm running short on time and need to get ready. Required: Someone to pick up my dry cleaning.",Driver:"Jane Doe",Category:"Dry cleaning"
},{Name:"Shopping Spree!",JobDescription:"Unfortunately don't have access to a car but have a list of items from a clothing shop that aren't available online. Could use someone's help to pick up the items for me!",Driver:"Mike Jones",Category:"Post Ofiice"
}]

  return (
    <>
      <KeyboardAwareScrollView
      // style={{backgroundColor: "#E6E6FA"}}
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

      <Text style={{fontSize:20,paddingTop:30,paddingLeft:15,paddingBottom:15,fontWeight:'bold'}}>Create Job</Text>
      <FlatList
      keyExtractor={filterArray => filterArray.Name}
      data={filterArray}
      horizontal={true}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={{borderWidth:1,borderColor:"black",padding:30,height:150,backgroundColor:"#E6E6FA",borderRadius:5}} onPress={()=>navigation.navigate("Job")}>
            <Image source={item.source} style={{resizeMode:'contain',width: (Dimensions.get('screen').width) / 3,height:70,marginBottom:15}}/>
            <Text style={{textAlign:'center',fontSize:20,width:"100%"}}>{item.Name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  <Text style={{fontSize:20,paddingTop:30,paddingLeft:15,paddingBottom:15,fontWeight:"bold"}}>Past Jobs</Text>

  <FlatList
      keyExtractor={Jobs => Jobs.Name}
      data={Jobs}
      scrollEnabled={false}
      renderItem={({ item }) => {
        return (
          <View>
            <ResContainer
              Name={item.Name}
              Driver={item.Driver}
              Category={item.Category}
              JobDescription={item.JobDescription}
            /> 
            <Text style={{fontSize:7}}>{"\n"}</Text>
          </View>
        );
      }}
    />


      </KeyboardAwareScrollView>
    </>
  );
};


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