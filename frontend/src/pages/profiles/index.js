import React,{useEffect,useState} from 'react';
import imglogo from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';
  
export default function Profile(){
const [incidents,setincidents]= useState([]);
const ongname= localStorage.getItem('ongname');
const ongid= localStorage.getItem('ongid');
const history= useHistory();

    useEffect(()=>{
        api.get('profile',{
            headers:{authorization:ongid}
        }).then(response =>{
            setincidents(response.data);
        })


    },[ongid]);


    async function heandleDeleteinc(id){
        try{
                await api.delete(`/incidents/${id}`,{headers:{authorization:ongid}});

                setincidents(incidents.filter(incidents => incidents.id !== id));
        }
        catch(err)
        {

            alert('erro ou deletar');
        }

    };

    function heandleLogout(){

        localStorage.clear();
        history.push('/');

    }

return (

    <div className="profile-container">
        <header>
            <img src={imglogo} alt="Be The Hero"/>
            <span>Bem vinda , {ongname}</span>
            <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
            <button onClick={()=>heandleLogout()} type="button">
                <FiPower size={18} color="#e02041"/>
            </button>
        </header>

        <h1>Casos Cadastrados</h1>
        <ul>  
            {
                incidents.map(incidents => (<li key={incidents.id}>
                    <strong>Caso:</strong>
                    <p>{incidents.title}</p>
                    <strong>Descrição:</strong>
                    <p>{incidents.description}</p>
                    <strong>Valor:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incidents.value)}</p>
                        <button onClick={() => heandleDeleteinc(incidents.id)} type="button">
                            <FiTrash2 size={20} color="a8a8b3"/>
                        </button>
    
                </li>))
            }
        </ul>
    </div>

)



}