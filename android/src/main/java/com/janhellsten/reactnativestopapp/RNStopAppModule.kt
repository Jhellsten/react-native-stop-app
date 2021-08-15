package com.hellsten.reactnativestopapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import kotlin.system.exitProcess


class RNStopApp(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {



    override fun getName() = "RNStopApp"

    override fun getConstants(): MutableMap<String, Any> {
        return hashMapOf("count" to 1)
    }

    @ReactMethod
    fun stopApp() {
        android.os.Process.killProcess(android.os.Process.myPid())
        exitProcess(0)
  }
}
