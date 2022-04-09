import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    KeyboardAvoidingView,
    SafeAreaView,
    StatusBar
} from 'react-native';


import ModalHorizontal from './ModalHorizontal';
import ListaTarefas from './ListaTarefas';







const { width } = Dimensions.get("window");

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" />


            <View style={styles.lista}>
                <ListaTarefas />
            </View>

            <View style={styles.modal} >
                <KeyboardAvoidingView
                    behavior={'position'}
                >

                    <ModalHorizontal />

                </KeyboardAvoidingView>

            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingVertical: 10,


    },

    lista: {
        flex: 8,



    },

    modal: {
        flex: 4,



    }

});
