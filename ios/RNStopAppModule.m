//
//  RNStopAppModule.m
//  RNStopAppModule
//
//  Copyright © 2021 Jan Hellsten. All rights reserved.
//

#import "RNStopAppModule.h"

@implementation RNStopApp

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(stopApp)
{
    exit(0);
}

@end
