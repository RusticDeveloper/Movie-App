import React from 'react'
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={Styles.mainView}>
            <Text>Inicio</Text>
            <TouchableOpacity
            style={Styles.touchView}
                onPress={() => {
                    navigation.navigate('Inicio-a-Detalles',
                        {
                            pelicula: {
                                tituloIngles:'Spider-Man',
                                titulo: 'Spiderman',
                                lanzamiento: 1998,
                                numeroPantalla: 1,
                                imagen:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gratistodo.com%2Fwp-content%2Fuploads%2F2016%2F09%2Fimagenes-de-Spiderman-7-800x656.jpg&f=1&nofb=1'
                            }
                        })
                }}>
                <View>
                    <Text style={Styles.touchText}>
                        Spider-Man
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.touchView}
                onPress={() => {
                    navigation.navigate('Inicio-a-Detalles',
                        {
                            pelicula: {
                                tituloIngles:'Star+Wars',
                                titulo: 'Star wars',
                                lanzamiento: 1977,
                                numeroPantalla: 1,
                                imagen:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FUHTSj3_-peudjTCtAEEfH9Rm8E4%3D%2F0x0%3A1536x864%2F1200x800%2Ffilters%3Afocal(646x310%3A890x554)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F58953911%2Fstar_wars_logo_new_tall.0.jpg&f=1&nofb=1'
                            }
                        })
                }}>
                <View>
                    <Text style={Styles.touchText}>
                    Star wars
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.touchView}
                onPress={() => {
                    navigation.navigate('Inicio-a-Detalles',
                        {
                            pelicula: {
                                tituloIngles:'Black+Panther',
                                titulo: 'Pantera negra',
                                lanzamiento: 2018,
                                numeroPantalla: 1,
                                imagen:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.t13.cl%2Fimages%2Foriginal%2F2017%2F11%2F1510518309-1.jpg&f=1&nofb=1'
                            }
                        })
                }}>
                <View>
                    <Text style={Styles.touchText}>
                    Pantera Negra
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.touchView}
                onPress={() => {
                    navigation.navigate('Inicio-a-Detalles',
                        {
                            pelicula: {
                                tituloIngles:'The+Matrix',
                                titulo: 'la Matrix',
                                lanzamiento: 1995,
                                numeroPantalla: 1,
                                imagen:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.richardcrouse.ca%2Fwp-content%2Fuploads%2F2013%2F09%2Fmatrix-reload.jpg&f=1&nofb=1'
                            }
                        })
                }}>
                <View>
                    <Text style={Styles.touchText}>
                    La Mastrix
                    </Text>
                </View>
            </TouchableOpacity>
            
        </View>
    );
}

const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchView:{
        marginBottom:30,
        width:150,
        height:50,
        alignItems:'center',
        backgroundColor:'orange',
        borderWidth:5,
        borderRadius:10,        
        },
        touchText:{
            textAlign:'center',
            padding:5,
            fontSize:20,
            fontWeight:'bold',
            color:'white'
        }
});

export default HomeScreen