// import React from 'react';
// import {
//   View,
//   Text,
//   StatusBar,
//   TouchableOpacity,
// } from 'react-native';
// import { COLORS } from '../../constants/theme';
// import styles from './styles';
// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Vistara Group</Text>
//         <Text style={styles.headerSubtitle}>Welcome to the app</Text>
//       </View>

//       <View style={styles.content}>
//         <Text style={styles.welcomeText}>
//           Your navigation is set up and ready to go!
//         </Text>
        
//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Get Started</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default HomeScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/theme';
import images from '../../constants/images';
 import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [companyCode, setCompanyCode] = useState('');

  const handleSubmit = () => {
    if (companyCode.trim()) {
      navigation.navigate('Login', { companyCode });
    } else {
      alert('Please enter a company code');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          {/* Logo */}
          <Image
            source={images.splashLogo}
            style={styles.logo}
            resizeMode="contain"
          />

          {/* Title */}
          {/* <Text style={styles.title}>Vistara Group</Text>
          <Text style={styles.subtitle}>Enter your company code to continue</Text> */}

          {/* Company Code Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Company Code</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter company code"
              placeholderTextColor={COLORS.lightGray}
              value={companyCode}
              onChangeText={setCompanyCode}
              autoCapitalize="characters"
              autoCorrect={false}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={[
              styles.submitButton,
              !companyCode.trim() && styles.submitButtonDisabled,
            ]}
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;