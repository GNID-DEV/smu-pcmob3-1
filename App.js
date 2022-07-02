import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./BlockRGB";

function HomeScreen() {
  const [colorArray, setColorArray] = useState([
    { red: 255, green: 0, blue: 0, id: "0" },
    { red: 0, green: 255, blue: 0, id: "1" },
    { red: 0, green: 0, blue: 255, id: "2" },
  ]);

  function renderItem({ item }) {
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} />;
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
          width: "38%",
          height: 30,
          margin: 10,
          alignItems: "center",
          justifyContent: "center", 
          borderWidth: 2,
          borderRadius: 10,
          backgroundColor: "#F2A099",
          borderColor: "#8C2703", 
        }}
        onPress={addColor}
      >
        <Text
          style={{
            color: "#8C2703",
            fontSize: 11,
            
          }}
        >
          ADD COLOUR
        </Text>
      </TouchableOpacity>

{/* Reset Color Styling */}
      <TouchableOpacity
        style={{ 
          width: "38%",
          height: 30,
          marginTop: 10,
          margin: 10,
          alignItems: "center",
          justifyContent: "center", 
          borderWidth: 2,
          borderRadius: 10,
          backgroundColor: "#BFBFBA",
          borderColor: "#6F7355", 
        }}
        onPress={resetColor}
      >
        <Text
          style={{
            color: "#0D0D0D",
            fontSize: 11,
            
          }}
        >
          RESET COLOUR
        </Text>
      </TouchableOpacity>
      <FlatList style={styles.list} data={colorArray} renderItem={renderItem} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Colour List" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    alignContent: "space-between",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  list: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    

  },
});
