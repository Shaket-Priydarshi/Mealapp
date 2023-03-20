import { View, Text, StyleSheet, FlatList } from "react-native";
import CategoryGridTiles from "../components/CategoryGridTiles";
import { CATEGORIES } from "../data/dummy-data";

const renderCategoriesItem = (itemData) => {
  return  <CategoryGridTiles title={itemData.item.title} color={itemData.item.color}/>;
};

function CategoriesScreens() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoriesItem}
    />
  );
}

export default CategoriesScreens;

const styles = StyleSheet.create({});
