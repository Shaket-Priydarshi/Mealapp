import { Text, View,Pressable ,StyleSheet} from 'react-native'
 

const CategoryGridTiles=({title,color})=>{
   
    return (
      <View>
        <Pressable>
            <View>
            <Text>{title}</Text>
            </View>
        </Pressable>
       
      </View>
    )
 
}

export default CategoryGridTiles;

const styles = StyleSheet.create({
    
})