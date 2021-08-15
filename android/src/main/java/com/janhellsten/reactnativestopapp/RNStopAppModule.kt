package com.hellsten.reactnativestopapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

class RNStopAppModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "RNStopAppModule"

    override fun getConstants(): MutableMap<String, Any> {
        return hashMapOf("count" to 1)
    }

    @ReactMethod
    public void stopApp() {
        android.os.Process.killProcess(android.os.Process.myPid());
        System.exit(0);
  }
}
