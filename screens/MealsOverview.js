import { StyleSheet, Text, View, FlatList } from "react-native";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import React,{useLayoutEffect} from "react";
import MealItem from "../components/MealItem";

const MealsOverview = ({ route,navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(()=>{
      const categoryTitle=CATEGORIES.find((category)=>category.id===catId).title;
      navigation.setOptions({
        title:categoryTitle
      })

  },[catId,navigation])
  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      id:item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return (
      <MealItem {...mealItemProps} />
    );
  };
  return (
    <View>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
