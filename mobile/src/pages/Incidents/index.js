import React, {useEffect, useState} from 'react';
import {View, Image , Text, TouchableOpacity,FlatList} from 'react-native'
import { Feather } from '@expo/vector-icons'
import imglogo from '../../assets/logo.png';
import styles from './styles'
import {useNavigation, useRoute} from '@react-navigation/native'

import api from '../../services/api'

export default function incidents(){

    const [incident,setincidents] = useState([]);
    const [total,settotal] = useState(0);
    const [page, setpage]= useState(1);
    const [loading, setloading]= useState(false);
      
    const navigation = useNavigation();

    function navigatetodetail(incident){

        navigation.navigate('details',{incident});
    }

async function loadincident(){
    if(loading){
        return;
    }
    if(total > 0 && incidents.length == total){
        return;
    }
    setloading(true);

    const response = await api.get('incidents', {params: {page}})
    setincidents([... incident, ... response.data]);
    settotal(response.headers['x-total-count']);
    setpage(page+1);
    setloading(false);

}

    useEffect(()=>{
        loadincident();
    },[]);


    return(
    <View style= {styles.container}>  
    <View style= {styles.header}>
        <Image source={imglogo}/>
        <Text style={styles.headertext}>
    Total de <Text style={styles.textbold} >{total} casos</Text>

        </Text>
    </View>
        <Text style={styles.title}>Bem Vindo!</Text>
        <Text style= {styles.description}>Escolha um dos casos abaixo e seja o herói dele</Text>

        <FlatList 
        style={styles.incidentslist}
        showsVerticalScrollIndicator= {false}
        onEndReached={loadincident}
        onEndReachedThreshold={0.2}
        keyExtractor={incident=> String(incident.id)}
        data={incident}
        renderItem={( { item: incident})=> (
            <View style={styles.incidents}>
             <Text style={styles.incproperties}>ONG:</Text>
             <Text style={styles.incvalue}>{incident.name}</Text>

             <Text style={styles.incproperties}>caso</Text>
             <Text style={styles.incvalue}>{incident.title}</Text>

             <Text style={styles.incproperties}>value:</Text>
             <Text style={styles.incvalue}>{Intl.NumberFormat('pt-BR',{style: 'currency',currency:'BRL'}).format(incident.value)}</Text>
             
             <TouchableOpacity style={styles.detailsbutton} onPress={()=>navigatetodetail(incident)}>

                 <Text style={styles.detailsbuttontext}>Ver Mais informações</Text>
                 <Feather name="arrow-right" size={16} color="#e02041"/>
             </TouchableOpacity>
             </View>
        )}
        />

    </View>
         );

}