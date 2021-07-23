import React,{useEffect,useState} from 'react'
import {Button,View, Text, StyleSheet} from 'react-native'


const DetailScreen=({navigation, route})=>{
    const peticion=new XMLHttpRequest();
    const pelicula=route.params.pelicula.tituloIngles;
    const imagenPelicula =route.params.pelicula.imagen;
    useEffect(()=>{
        peticion.open('GET',`http://www.omdbapi.com/?apikey=a6571bef&t=${pelicula}`);
        peticion.send();
        peticion.onload=()=>{
            if(peticion.status=200){
                let respuesta=JSON.parse(peticion.response);
                console.log(peticion.responseText);
                setDataPelicula(respuesta);
            }else{
                console.log(`peticion HTTP fallida ${peticion.status}`);
            }
            
        };
    },[]);
    const [dataPelicula,setDataPelicula]=useState(null);
    console.log(route);
    
    return(
        <View style={Styles.mainView}>
            <Text>{(dataPelicula===null?'':dataPelicula.Title)}</Text>
            <Text>{(dataPelicula===null?'':dataPelicula.Released)}</Text>
            <Text>{(dataPelicula===null?'':dataPelicula.Plot)}</Text>
            <Button
            title='Ver Imagenenes'
            onPress={()=>{navigation.navigate('Inicio-a-Imagen',imagenPelicula)}}
            />
        </View>
    );
}

const Styles=StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    }
    });

export default DetailScreen

{/* <Text style={{fontSize:100}}>{pelicula.titulo}</Text>
            <Text style={{fontSize:100}}>{pelicula.numeroPantalla}</Text>
            <Button
            title='ir al inicio'
            onPress={()=>{navigation.popToTop()}}
            />
            <Button
            title='ir a las imagenes'
            onPress={()=>{navigation.navigate('Inicio-a-Imagen')}}
            />
            <Button
            title='Mas detalles'
            onPress={()=>{
                pelicula.numeroPantalla=pelicula.numeroPantalla+1;
                navigation.push('Detalles-a-Detalles',
            {pelicula:pelicula}
            )}}
            /> */}