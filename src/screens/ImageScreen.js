import React from 'react'
import {Button,View, Text, StyleSheet,Image} from 'react-native'

const ImageScreen=({navigation,route})=>{
    console.log(route);
    return(
        <View style={Styles.mainView}>
            <Text>Imagenes</Text>
            <Button
            title='ir al Inicio'
            onPress={()=>{navigation.popToTop()}}
            />
            <Image
            style={Styles.ImagenEstilo}
            source={{
                uri:route.params
            }}
            ></Image>
        </View>
    );
}

const Styles=StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    ImagenEstilo:{
        width:400,
        height:400,
        marginTop:25
        
    }
});

export default ImageScreen