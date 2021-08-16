# React Native Stop App

Simple library for stopping app and killing it's current process.

## Getting started

`$ npm install react-native-stop-app --save` or `$ yarn add react-native-stop-app`
React Native Stop APP Module help us stop application work on Android, IOS

## Usage

React Native version 0.64+ should handle linking automatically and usage is really simple.

⬇️

```javascript
import { stopApp } from 'react-native-stop-app';
const stopAppOnPress = () => stopApp();
```