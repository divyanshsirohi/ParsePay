// Import necessary libraries and hooks from React and React Native
import React, { useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  PermissionsAndroid,
  Text,
} from 'react-native';

// Import the SMS listener library for Android
import SmsListener from 'react-native-android-sms-listener';

// Main App Component
function App() {
  // Determine if dark mode is enabled on the device
  const isDarkMode = useColorScheme() === 'dark';

  /**
   * useEffect hook runs on component mount.
   * It requests SMS permissions and sets up a listener for incoming SMS messages.
   */
  useEffect(() => {
    /**
     * Requests SMS permissions at runtime.
     * Required permissions: READ_SMS, RECEIVE_SMS
     */
    async function requestSMSPermission() {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_SMS,
          PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
        ]);

        if (
          granted['android.permission.READ_SMS'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.RECEIVE_SMS'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('✅ SMS permissions granted');
        } else {
          console.warn('❌ SMS permissions denied');
        }
      } catch (err) {
        console.warn('⚠️ Permission error:', err);
      }
    }

    // Call the permission request function
    requestSMSPermission();

    /**
     * Set up SMS listener using the SmsListener package.
     * This will trigger whenever a new SMS is received.
     */
    const subscription = SmsListener.addListener(message => {
      console.log('📩 New SMS:', message.body);
      handleSms(message.body); // Custom parser for extracting expense info
    });

    // Clean up: remove SMS listener on component unmount
    return () => subscription.remove();
  }, []);

  /**
   * Basic SMS parser function.
   * You can replace this with a proper regex-based parser for amount/vendor extraction.
   */
  function handleSms(body) {
    console.log('🧠 Parsed SMS:', body);

    // TODO: Replace with actual regex-based parser and store results in local DB
    // Example:
    // const expense = parseSms(body);
    // saveExpenseToStorage(expense);
  }

  // App UI
  return (
    <View style={styles.container}>
      {/* StatusBar color based on theme */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {/* Basic placeholder text */}
      <Text style={styles.statusText}>📡 Listening for SMS...</Text>
    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusText: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 18,
  },
});

// Export App as default
export default App;
