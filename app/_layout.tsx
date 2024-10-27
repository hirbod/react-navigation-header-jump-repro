import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';

import { useColorScheme } from '@/hooks/useColorScheme';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';



export { ErrorBoundary } from 'expo-router'


const App = () => {
  return <Slot />
}

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <App />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
