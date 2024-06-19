import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

import { StatusBar } from 'react-native';
import { Loading } from './src/components/Loading';
import { NewGroup } from './src/screens/NewGroup';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />
      { fontsLoaded ? <NewGroup /> : <Loading /> }
    </ThemeProvider>
  );
}