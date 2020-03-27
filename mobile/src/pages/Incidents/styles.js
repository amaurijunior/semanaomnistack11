import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'

 
export default StyleSheet.create({

    container: {

            flex: 1,
            paddingHorizontal:24,
            paddingTop: Constants.statusBarHeight +20
            
    },

    header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',


    },
    headertext:{
        fontSize: 15,
        color: '#737380',


    },

    textbold:{
        fontWeight:'bold',


    },

    title:{
            fontSize:30,
            marginBottom:16,
            marginTop:48,
            color:'#13131a',
            fontWeight:'bold',

    },
    description:{

        fontSize:16,
        lineHeight:24,
        color:'#737380'


    },

    incidentslist:{
        marginTop:32,
        


    },
    
    incidents:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#FFF',
        marginBottom:16

    },

    incproperties:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold'

    },

    incvalue:{
        marginTop:8,
        fontSize:15,
        marginBottom:24,
        color:'#737380'

    },

    detailsbutton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    detailsbuttontext:{

        color:'#e02041',
        fontSize:15,
        fontWeight:'bold'
    }

});