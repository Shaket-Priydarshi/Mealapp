import { Image, StyleSheet, Text, View,ScrollView, Button } from "react-native";
import List from "../components/List";
import Subtitle from "../components/Subtitle";
import { MEALS } from "../data/dummy-data";
import MealView from "./MealView";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

export default function MealsDetails({ route,navigation}) {
  const mealId = route.params.mealId;
  const selectedMeals = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler=()=>{
console.log('press')
  }
  useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton icon='star' color='white' onPress={headerButtonPressHandler}/>
            }
        })
  },[navigation,headerButtonPressHandler])
  return (
    <ScrollView style={styles.root}> 
      <Image source={{ uri: selectedMeals.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeals.title}</Text>
      <MealView
        duration={selectedMeals.duration}
        complexity={selectedMeals.complexity}
        affordability={selectedMeals.affordability}
        textStyle={styles.detailsText}
      />
      <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
        <Subtitle>ingredients</Subtitle>
        <List data={selectedMeals.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeals.steps} />
      </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    root:{
        marginBottom:32
    },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailsText: {
    color: "white",
  },
  listContainer:{
    width:'80%',
  },
  listOuterContainer:{
    alignItems:'center'
  }
});
