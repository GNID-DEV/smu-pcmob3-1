import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./BlockRGB";



function HomeScreen({navigation}) {
  const [colorArray, setColorArray] = useState([]);

function renderItem({ item }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { ...item })}>
      <BlockRGB red={item.red} green={item.green} blue={item.blue} />
    </TouchableOpacity>
  );
}

//Add Color Function
function addColor() {
  setColorArray([
    {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256),
      id: `${colorArray.length}`,
    },
    ...colorArray,
  ]);
}

//Reset Color Function
  function resetColor(){
    setColorArray([]);
  }


  
//Add Color Styling
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ 
          width: "80%",
          height: 30,
          marginTop: 20,
          marginBottom: 10,
          alignItems: "center",
          justifyContent: "center", 
          borderRadius: 0,
          backgroundColor: "#730217",
          borderWidth: 1,
          borderColor: "#D9933D", 
        }}
        onPress={addColor}
      >
        <Text
          style={{
            color: "#F29F8D",
            fontSize: 14,
            
          }}
        >
          + ADD COLOUR
        </Text>
      </TouchableOpacity>

{/* Reset Color Styling */}
      <TouchableOpacity
        style={{ 
          width: "80%",
          height: 30,
          marginTop: 0,
          margin: 10,
          alignItems: "center",
          justifyContent: "center", 
          borderRadius: 0,
          backgroundColor: "#262626",
          borderWidth: 1,
          borderColor: "#D9933D", 
        }}
        onPress={resetColor}
      >
        <Text
          style={{
            color: "#D9D9D9",
            fontSize: 14,
            
          }}
        >
          - RESET COLOUR
        </Text>
      </TouchableOpacity>
      <FlatList style={styles.list} data={colorArray} renderItem={renderItem} numColumns={5} />
    </View>
  );
}

function DetailsScreen({ route }) {
  // Destructure this object so we don't have to type route.params.red etc
  const { red, green, blue } = route.params;
 
  return (
    <View style={[styles.container, { backgroundColor: `rgb(${red}, ${green}, ${blue})` },]}>
      <View style={{ 
          width: "30%",
          height: 30,
          marginTop: "10%",
          alignItems: "center",
          justifyContent: "center", 
          borderWidth: 2,
          borderRadius: 0,
          backgroundColor: "#A6243C",
          borderColor: "#D96C75",  
        }}>
          <Text style={styles.detailTextRed}>Red: {red}</Text>
      </View>

      <View style={{ 
          width: "30%",
          height: 30,
          marginTop: 5,
          alignItems: "center",
          justifyContent: "center", 
          borderWidth: 2,
          borderRadius: 0,
          backgroundColor: "#4F5902",
          borderColor: "#95A617",  
        }}>
          <Text style={styles.detailTextGreen}>Green: {green}</Text>
      </View>

      <View style={{ 
          width: "30%",
          height: 30,
          marginTop: 5,
          alignItems: "center",
          justifyContent: "center", 
          borderWidth: 2,
          borderRadius: 0,
          backgroundColor: "#0F3759",
          borderColor: "#1B57A6",  
        }}>
           <Text style={styles.detailTextBlue}>Blue: {blue}</Text>
      </View>

    </View>
  );
 }
 

// StackNavigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Colour List" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    alignContent: "space-between",
    backgroundColor: "#0D0D0D",
    alignItems: "center",
  },

  list: {
    width: "80%",
    margin: 10,

  },

  detailTextRed: {
  color: "#F2D4C2",
  fontSize: 14,
  fontWeight: "normal",
  
  },

  detailTextGreen: {
  color: "#D9C6B0",
  fontSize: 14,
  fontWeight: "normal",
  
  },

  detailTextBlue: {
  color: "#9BDAF2",
  fontSize: 14,
  fontWeight: "normal",
  
  },

});


