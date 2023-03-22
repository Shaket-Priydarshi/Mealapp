import { FlatList } from "react-native";

import CategoryGridTiles from "../components/CategoryGridTiles";
import { CATEGORIES } from "../data/dummy-data";



function CategoriesScreens({navigation}) {
  const renderCategoriesItem = (itemData) => {
    const pressHandler = () => {
       navigation.navigate('MealsOverview',{
        categoryId:itemData.item.id
       })
    };
    return (
      <CategoryGridTiles
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoriesItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreens;
