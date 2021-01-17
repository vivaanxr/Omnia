import React,{useState} from 'react';
import {Text,View,TextInput, Button} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from "./styles.js"

const Job= ({navigation}) => {
  const [job,setJob]=useState("");
  const [jobDescription,setJobDescription]=useState("");

  return (
    
      <KeyboardAwareScrollView>
        <Text style={{fontSize:12}}>Job Title</Text>
        
        <TextInput
        style = {styles.input}
        placeholder = 'Title'
        placeholderTextColor ='#aaaaaa'
        onChangeText={(text) => setJob(text)}
        value={job}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />
    
        <Text style={{fontSize:12}}>Job Description</Text>
        <TextInput
        style={styles.input}
        placeholder= 'Description'
        placeholderTextColor= '#aaaaa'
        onChangeText={(text) => setJobDescription(text)}
        value={jobDescription}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />
        
        <Text style ={{fontSize:12}}>Application Deadline</Text>

            <TextInput
              style={styles.input}
              placeholder= 'Day'
              placeholderTextColor= '#aaaaa'
            />
            <Text style={{fontSize:10}}>Day</Text>

            <TextInput
              style={styles.input}
              placeholder='Month'
              placeholderTextColor='#aaaaa'
            />
            <Text style={{fontSize:10}}>Month</Text>

            <TextInput
              style={styles.input}
              placeholder='Year'
              placeholderTextColor='#aaaaa'
            />
            <Text style={{fontSize:10}}>Year</Text>

        
            <View style={{ flexDirection:"row" }}>
    <View >
        <Button title="Submit" style={styles.button}
        onPress={()=>navigation.navigate("Home")}
        >Submit</Button>
    </View>
    <View >
        <Button title="Cancel" style={styles.button}
        onPress={()=>navigation.navigate("Home")}
        >Cancel</Button>
    </View>
</View>

        </KeyboardAwareScrollView>

    
  );
};

export default Job;