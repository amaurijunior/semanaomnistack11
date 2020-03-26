import React , { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import heroimg from '../../assets/heroes.png';
import logoimg from '../../assets/logo.svg';
import{FiLogIn} from 'react-icons/fi';
import api from '../../services/api';


export default function Logon(){
    
    const [id,setid] = useState('');
    const history = useHistory();
    async function handlerlogon(l){
        l.preventDefault();

        try{
            const response = await api.post('session',{id});
            console.log(response.data.name);

            localStorage.setItem("ongid",id);
            localStorage.setItem("ongname",response.data.name);
            history.push('/profiles');
        }
        catch
        (err){
            alert('falha no login')
                }


    }

return(


      <div className="logon-container">

            <section className="form">
                <img src={logoimg} alt= 'logoheros'/>
                <form onSubmit={handlerlogon}>
                    <h1>Faça seu Logon</h1>

                        <input placeholder='Sua ID'
                        value={id}
                        onChange={l => setid(l.target.value)}
                        />

                        <button className="button" type="submit">Entrar</button>

                        <Link className="back-link" to="/cadastro">
                            <FiLogIn  size={18} color= "#e02041"/>

                            
                            Não tenho cadastro
                            
                            </Link>

                </form>
            </section>

                <img src={heroimg} alt='heros'/>

      </div>





);



}