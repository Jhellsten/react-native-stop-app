//
//  RNStopAppModule.swift
//  RNStopAppModule
//
//  Copyright © 2021 Jan Hellsten. All rights reserved.
//

import Foundation

@objc(RNStopAppModule)
class RNStopAppModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
