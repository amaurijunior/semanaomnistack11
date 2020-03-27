import React from 'react';
import {View,Image,Text,TouchableOpacity, Linking} from 'react-native';
import {Feather} from '@expo/vector-icons'
import styles from './styles';
import imglogo from '../../assets/logo.png';
import {useNavigation, useRoute} from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer';
import incidents from '../incidents';



export default function details(){
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = `ola ${incident.name} gostaria de ajudar no caso "${incident.title}" `

    function naigateback(){

        navigation.goBack();
    }

    function sendmail(){
        MailComposer.composeAsync({
            subject:`Herói do caso: ${incident.title} ` ,
            recipients:['amauripsj@gmail.com'],
            body: message,

        });

    }

    function sendwhatsapp(){

        Linking.openURL(`whatsapp://send?phone=${incident.whats}&text=${message}`)


        
    }

return(
<View style={styles.container}>
    <View style= {styles.header}>
        <Image source={imglogo}/>
        <TouchableOpacity onPress={naigateback}>
            <Feather name='arrow-left' size={35} color='#e82041'/>
        </TouchableOpacity>
    </View>

    <View style={styles.incident}>

             <Text style={[styles.incproperties, {marginTop:0}]}>ONG:</Text>
             <Text style={styles.incvalue}> {incident.name} de {incident.city} {incident.uf} </Text>

             <Text style={styles.incproperties}>Descrição:</Text>
             <Text style={styles.incvalue}>{incident.description}</Text>

             <Text style={styles.incproperties}>Valor:</Text>
             <Text style={styles.incvalue}>{Intl.NumberFormat('pt-BR',{style: 'currency',currency:'BRL'}).format(incident.value)}</Text>

    </View>

    <View style={styles.contactbox}>
        <Text style={styles.herotitle}>Salve o dia</Text>
        <Text style={styles.herotitle}>seja o heroi desse caso.</Text>
        <Text style={styles.herodescription}>Entre em contato:</Text>

        <View style={styles.actions}>
        <TouchableOpacity style={styles.action} onPress={sendwhatsapp}>
            <Text style={styles.actionstext}>Whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action} onPress={sendmail}>
            <Text style={styles.actionstext}>E-Mail</Text>
        </TouchableOpacity>
        

        </View>

 
    </View>



</View>

);



}