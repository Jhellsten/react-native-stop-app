import * as React from 'react'
import { Button, NativeModules, StyleSheet, Text, View } from 'react-native'

/**
 * Will stop the app on iOS and Android
 *
 * @returns void
 */

export const stopApp = (): void => NativeModules.RNStopApp.stopApp()

/**
 * Returns an view with test button to stop the app.
 *
 * @returns JSX.Element
 */

export const TestButton = () => {
  console.log('NativeModules', NativeModules)
  return (
    <View style={styles.container}>
      <Text>Test to stop app!</Text>
      <Button
        onPress={() => NativeModules.RNStopApp.stopApp()}
        title='Stop the app'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
})

export default NativeModules.RNStopApp
