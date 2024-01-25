/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';

import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  DrawerLayoutAndroid,
  VirtualizedList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer, ServerContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PropertiesList from './components/PropertiesList.jsx';
import PropertyDetails from './components/PropertyDetails.jsx';
import CustomDrawer from './components/CustomDrawer.jsx';
import QueryDrawer from './components/QueryDrawer.jsx';
import properties from './model/PropertyData.js';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

//const Drawer = createDrawerNavigator();


function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator();

  const isDarkMode = useColorScheme() === 'dark';
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const drawerSearch = () => {
    drawer.current.closeDrawer();
  }

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <QueryDrawer onSearch={drawerSearch}></QueryDrawer>
    </View>
  );

  const getItem = properties.map(n => {
    n.id, n.title
  })
  const renderItem = properties.map(n => {
    return (
      <View >
        <Text>{n.title}</Text>
      </View>
    );
  })

  const SearchButton = () => {
    return <Button
      title="更多條件"
      onPress={() => drawer.current.openDrawer()}
    />;
  }

  return (
    <NavigationContainer>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={350}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        <View style={styles.container}>
          <SearchButton></SearchButton>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={PropertiesList} options={{title:'',headerShown:false}} />
            <Stack.Screen name="Details" component={PropertyDetails} options={{title:'',headerShown:false}} />
          </Stack.Navigator>
        </View>
      </DrawerLayoutAndroid>
    </NavigationContainer>
  );




  const handleSearch = () => {
    // 處理查詢邏輯
    console.log('query');
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /* <Drawer.Screen name="Search">
  {() => <QueryDrawer onSearch={handleSearch} />} */

  // <Drawer.Screen name="Search" component={() => <QueryDrawer onSearch={handleSearch} />} /> 

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    console.log(isDrawerOpen);
    // 在 isDrawerOpen 更新后执行其他操作
  }, [isDrawerOpen]);


  const toggleDrawer = () => {
    console.log('toggleDrawer called');
    //Alert.alert('You tapped the button!');
    setIsDrawerOpen(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <Button title="Menu" onPress={() => toggleDrawer()} />
      {isDrawerOpen && <CustomDrawer />}
      <PropertiesList />
    </View>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <PropertiesList />
    </SafeAreaView>
  );
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'top' , 
    justifyContent: 'flex-start',
    padding: 4,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default App;
