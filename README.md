# React Native Stop App

Simple library for stopping app and killing it's current process.

## Getting started

`$ npm install react-native-stop-app --save` or `$ yarn add react-native-stop-app`
React Native Stop APP Module help us stop application work on Android, IOS

## Usage

React Native version 0.64+ should handle linking automatically and usage is really simple as shown on the example.

⬇️

```javascript import function to stop the app

import { stopApp } from 'react-native-stop-app';
const stopAppOnPress = () => stopApp();

You can also import TestButton for simple testing.
Here is an example component that you can easily use for testing.

import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TestButton } from 'react-native-stop-app'

const StopAppExample = () => {
  return <View style={styles.container}>
        <TestButton />
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
  },
})

export default StopAppExample

```