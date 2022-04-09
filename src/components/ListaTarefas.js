import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Modal,
    TextInput,
    TouchableWithoutFeedback
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';





export default function () {

    let [auxiliar, setAuxiliar] = useState([ ]);

    let [visible, setVisible] = useState(false);


    let [novaItemLista, setNovaItemLista] = useState('');

    //itemLista deve ter: id, descrição

    let [itemLista, setItemLista] = useState([ ]);
    
    let [idTarefa, setIdTarefa] = useState();
    let [descricao, setDescricao] = useState();
    

    //Função que busca uma tarefa
    function BuscarTarefa(id){

        
      let novaListaTarefas = [... itemLista];

      novaListaTarefas = novaListaTarefas.filter((item) => {
            if(item.id == id){
                setDescricao(item.descricao);
                setIdTarefa(item.id);
                return true;
            }

            else{
                return false;
            }
      });
    
      setVisible(true);
 
    }



    function alterar() {
        let novaListaTarefas = [... itemLista];

        novaListaTarefas = novaListaTarefas.filter((item) => {
              if(item.id == idTarefa){
                 item.descricao = descricao;
                  return true;
              }
  
              else{
                  return true;
              }
        });
      
        setItemLista(novaListaTarefas);
        setVisible(false);
        setNovaItemLista('');

    }


    function adicionarItemLista() {

        if (novaItemLista != '') {
            itemLista.push({ id: String(new Date().getTime()), descricao: novaItemLista });
            setItemLista([...itemLista]);
            setNovaItemLista('');
        } else {
            alert('Insira um nome para a tarefa!');
        }

    }



    function deletaritemLista(index) {

        let novaItemListas = [...itemLista];

        novaItemListas = novaItemListas.filter((item) => {

            if (item.id != index) {
                return true;
            }
            else {
                return false;
            }


        });

        setItemLista(novaItemListas);

    }






    return (

        <View style={styles.container}>

            <View style={styles.secao1}>

                <View style={styles.botaoAdicionar}>
                    <Text style={styles.titulo}>Tarefas</Text>


                    <TouchableOpacity onPress={() => adicionarItemLista()} >
                        <Text style={styles.adicionar}>+</Text>
                    </TouchableOpacity>

                </View>

                <View>
                    <TextInput
                        value={novaItemLista}
                        style={styles.inserirTarefa}
                        returnKeyType="search"
                        onChangeText={setNovaItemLista}
                        placeholder="Insira o nome da tarefa"
                        placeholderTextColor="#ff7b00" />
                </View>





                <View>

                    <FlatList
                        data={itemLista}
                        keyExtractor={(item) => item.id}
                        renderItem={(({ item }) =>

                            <View style={styles.botaoitemLista}>
                                <View style={styles.espacamento}>
                                    <Text style={styles.textoBotaoitemLista}> {item.descricao}</Text>


                                    <View style={styles.espacamento}>
                                       {/*  <Pressable onPress={() =>   setAuxiliar([...itemLista])}>*/}
                                            <TouchableOpacity onPress={() => BuscarTarefa(item.id)}>
                                                <Text style={{ marginRight: 15 }}>
                                                    {/* Editar um item */}
                                                    <MaterialIcons name="edit" size={24} color="#ff7b00" />
                                                </Text>
                                                {/*<Text>{item.id}</Text>*/}
                                            </TouchableOpacity>
                                        {/*  </Pressable>*/}


                                        <TouchableWithoutFeedback onPress={() => deletaritemLista(item.id)}>
                                            <Text style={{ marginRight: 5 }}>
                                                {/* Excluir um item */}
                                                <AntDesign name="delete" size={24} color="#ff7b00" />
                                            </Text>
                                        </TouchableWithoutFeedback>

                                    </View>
                                </View>
                            </View>

                        )}
                    />

                </View>







                <Modal 
                    visible={visible}
                    animationType="fade"
                    onRequestClose={() => {
                        alert("O modal foi fechado");
                        setVisible(!visible);
                    }}
                >
                    <View style={styles.modal}>
                        <Text style={styles.textoModal}>Insira o nome da tarefa</Text>

                        <TextInput style={styles.modalInput}
                            value={descricao}
                            onChangeText={setDescricao}
                            placeholder={'Insira'}
                        />


                        <TouchableOpacity onPress={alterar}>
                            <Text style={styles.editarTarefaBtn}>Editar Tarefa</Text>
                        </TouchableOpacity>


                    </View>
                </Modal>

            </View>
        </View>


    );



}



const styles = StyleSheet.create({


    container: {
        flex: 1,
    },

    secao1: {
        flex: 1,
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },

    titulo: {

        color: '#ff7b00',
        fontSize: 36

    },



    inserirTarefa: {

        marginVertical: 20,
        color: '#ff7b00',
        fontSize: 20,
        borderWidth: 1,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: '#ff7b00',

    },


    botaoitemLista: {
        backgroundColor: 'black',
        padding: 15,
        marginBottom: 10,
        borderColor: '#ff7b00',
        borderRadius: 20,
        borderWidth: 1
    },

    textoBotaoitemLista: {
        color: '#ff7b00',
        fontSize: 22,
        fontWeight: 'bold'
    },

    botaoAdicionar: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20
    },

    adicionar: {
        color: '#ff7b00',
        fontSize: 36
    },


    espacamento: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    modal: {

        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        paddingTop: 300,
    },

    textoModal:{

        color: '#ff7b00',

    },

    modalInput:{

        color: '#ff7b00',
        marginTop: 5,
        marginBottom: 10

    },


    editarTarefaBtn:{

        backgroundColor: '#ff7b00',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10

    }

})

