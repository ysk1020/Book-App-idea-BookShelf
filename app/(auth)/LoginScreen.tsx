import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import React from 'react';

 
const LoginScreen = () => {
  const router = useRouter();

  return (
    <ThemedView className="flex-1 items-center justify-center p-6">
      <ThemedText type="title" className="text-center mb-6">
        Welcome to the Login Screen
      </ThemedText>
    </ThemedView>
  );
};
 
 export default LoginScreen