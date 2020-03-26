import React ,{useState}from 'react';
import './styles.css';
import imglogo from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api.js'


export default function Register(){

    const history = useHistory();

const [name,setname]= useState('');
const [email,setemail]= useState('');
const [whats,setwhatsapp]= useState('');
const [city,setcity]= useState('');
const [uf,setuf]= useState('');

       async function handleRegister(e){
                e.preventDefault();
                const data = {name,email,whats,city,uf};
              try{const response = await  api.post('ongs',data);

              alert(`Seu Id de acesso: ${response.data.id}`)
              history.push('/');}

              catch{

                alert('erro no cadastro tente novamente')
              }

        }
        
return (
    <div className="register-container">

        <div className="content">
            <section>
                <img src={imglogo} alt="be the hero"/>         
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem seus casos</p>  
                
                <Link className="back-link" to="/">
                    <FiArrowLeft size= {18} color="#e02041"/>
                    Já tenho Cadastro

                </Link>

            </section>


            <form onSubmit={handleRegister}>
            <input placeholder="Nome da ONG"
                value={name}
                onChange={e => setname(e.target.value)}
            />
            <input type="email" placeholder="E-mail"
                value={email}
                onChange={e => setemail(e.target.value)}
            />
            <input placeholder="Whatsapp"
            value={whats}
            onChange={e => setwhatsapp(e.target.value)}
            />

            <div className="inputgroup">
                <input placeholder="Cidade"
                value={city}
                onChange = {e => setcity(e.target.value)}
                />
                <input placeholder="UF" style={{width: 80 }}
                value={uf}
                onChange={e => setuf(e.target.value)}
                />
            </div>
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>

    </div>



);


}