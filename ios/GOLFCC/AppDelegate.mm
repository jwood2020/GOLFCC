#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
<<<<<<< HEAD
=======
#import <Firebase.h>
>>>>>>> 64d4952831eee4047c22d889e4eaa8dabb37e4e4

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
<<<<<<< HEAD
=======
  [FIRApp configure];
>>>>>>> 64d4952831eee4047c22d889e4eaa8dabb37e4e4
  self.moduleName = @"GOLFCC";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
