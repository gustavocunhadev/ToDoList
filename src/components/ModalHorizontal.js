import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
} from 'react-native';


export default function () {

    let [anuncios, setAnuncios] = useState([

        {
            id: 0,
            imagem: require('../../img/anuncio1.jpg'),
            titulo: 'Frases Inspiradoras',
            descricao: 'Para começar o dia bem!'
        },

        {
            id: 1,
            imagem: require('../../img/anuncio2.jpg'),
            titulo: 'Arte visual',
            descricao: 'Imagens bonitas para você'
        },

        {
            id: 2,
            imagem: require('../../img/anuncio3.jpg'),
            titulo: 'Modernismo',
            descricao: 'Arte da seção modernismo'
        },

    ]);

    return (
        <View style={styles.container}>
            <FlatList
                snapToInterval={100}
                horizontal
                data={anuncios}
                keyExtractor={((item) => item.id)}
                renderItem={(({ item }) =>
                    <View style={styles.anuncios}>

                        <View style={{ backgroundColor: 'grey', borderRadius: 10 }}>
                            <Image
                                source={item.imagem}
                                style={{ width: 200, height: 100, borderRadius: 10 }}
                            />

                            <Text style={styles.texto}>{item.titulo}</Text>

                            <Text style={styles.texto}>{item.descricao}</Text>

                            <TouchableOpacity onPress={() => alert("Pegadinha")}>

                                <Text style={styles.botao}>Conhecer</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

        </View>
    );



}



const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'black',
        marginHorizontal: 20,

    },

    anuncios: {

        margin: 20

    },

    botao: {
        flex: 0,
        backgroundColor: '#ff7b00',
        paddingHorizontal: 16,
        paddingVertical: 9,
        width: 100,
        marginVertical: 10,
        marginHorizontal: 50,
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 16,
        color: 'black',
    },

    texto: {

        color: 'white',
        marginLeft: 10,
        marginVertical: 5

    }


})