import React from 'react';

import { useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import Input from '../../form/input';
import styles from '../../form/form.module.css';

// Context
import { Context } from '../../context/UserContext';



function Register(){

    const [user, setUser] = useState({});
    const {register} = useContext(Context);

    function handleChange(e){

        setUser({...user, [e.target.name]: e.target.value})

    }

    function handleSubmit(e) {

        e.preventDefault();

        //enviar o usuario para o banco
        register(user)

        


    }


    return(
        <section className = {styles.form_container}>
            <h1>Registrar</h1>
            
            <form onSubmit={handleSubmit}>

                <Input text="Nome" type="text" name = "name" placeholder = "Digite o Seu Nome" handleOnChange={handleChange}></Input>

                <Input text="Telefone" type="text" name = "phone" placeholder = "Digite o Seu Telefone" handleOnChange={handleChange}></Input>

                <Input text="E-mail" type="email" name = "email" placeholder = "Digite o Seu e-mail" handleOnChange={handleChange}></Input>

                <Input text="Senha" type="password" name = "password" placeholder = "Digite a Sua Senha" handleOnChange={handleChange}></Input>
                
                <Input text="Confirmação de Senha" type="password" name = "confirmpassword" placeholder = "Confirme a Sua Senha" handleOnChange={handleChange}></Input>

                <input type="submit" value = "Cadastrar"/>

            </form>

            <p>Já tem conta? <Link to = '/login'>Clique Aqui</Link></p>


        </section>
    )

}

export default Register;