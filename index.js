/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler'
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);


// import React, { useState } from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import AppNavigator from './src/navigation/Appnavigator';
// import SplashScreen from './src/screens/Splashscreen/Splashscreen';
// function App() {
//   const [showSplash, setShowSplash] = useState(true);

//   const handleSplashFinish = () => {
//     setShowSplash(false);
//   };

//   if (showSplash) {
//     return (
//       <SafeAreaProvider>
//         <SplashScreen onFinish={handleSplashFinish} />
//       </SafeAreaProvider>
//     );
//   }

//   return (
//     <SafeAreaProvider>
//       <AppNavigator />
//     </SafeAreaProvider>
//   );
// }

// export default App;