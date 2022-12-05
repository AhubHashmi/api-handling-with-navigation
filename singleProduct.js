import {View,Text} from 'react-native'

function Product ({navigation,route}){

    console.log(route.params)

    return <>
    <View>
        <Text>{route.params.title}</Text>
    </View>
    </>
}
export default Product