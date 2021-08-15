import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View, NativeModules } from 'react-native'
import RNStopApp, { TestButton, stopApp } from 'react-native-stop-app'

const App = () => {
  useEffect(() => {
    console.log(RNStopApp)
    console.log(NativeModules)
  })

  return <View style={styles.container}>
    <TestButton />
    <View>
      <Button onPress={() => stopApp()} title="Stop the app">
        <Text>
          You can test the method inside this!
        </Text>
      </Button>
    </View>
    
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

export default App
