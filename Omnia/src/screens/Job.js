import React from 'react';
import {Text, StyleSheet, View, ScrollView, TextInput} from 'react-native';

const Job = () => {
  return (
    <>
      <Text style={{fontSize: 100}}>Hi</Text>
      <Text>Job title</Text>
      <TextInput>Enter your job title</TextInput>
      <Text>Job description</Text>
      <TextInput>Enter your job description here</TextInput>
    </>
  );
};

const styles = StyleSheet.create({});

export default Job;
