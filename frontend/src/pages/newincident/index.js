import React,{useState} from 'react';
import './styles.css';
import imglogo from '../../assets/logo.svg';
import {Link,useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'


export default function Newincident(){

    const [title,setTitle]= useState('');
    const [description,setDescription]= useState('');
    const [value,setValue]= useState('');
    const ongid = localStorage.getItem('ongid');
    const history = useHistory();

async function handlernew(e){

        e.preventDefault();

        const data={
            title,
            description,
            value

        };

        try{
                await api.post('incidents', data ,{headers:{authorization:ongid}})
                history.push('/profiles');

        }
        catch(err)
        {

            alert('falha ao criar caso');
        }
}

return (


    <div className="new-incident-container">

        <div className="content">
            <section>
                <img src={imglogo} alt="be the hero"/>         
                <h1>Cadastrar novo Caso</h1>
                <p>Descreva o caso e a forma de resolve-lo</p>  
                
                <Link className="back-link" to="/profiles">
                    <FiArrowLeft size= {18} color="#e02041"/>
                    Voltar para home

                </Link>

            </section>


            <form onSubmit={handlernew}>
            <input 
                placeholder="titulo do caso"
                value={title}
                onChange={e=>setTitle(e.target.value)}
                />
            <textarea  
                placeholder="Descrição"
                value={description}
                onChange={e=>setDescription(e.target.value)}
                />
            <input 
                placeholder="Valor e Reais"
                value={value}
                onChange={e=>setValue(e.target.value)}
                />
           
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>

    </div>
)



}