import React, { useRef } from 'react'
import './Login.css'
import { FaUserAlt, FaKey } from "react-icons/fa";
import {LoginContext} from '../../../shared/context/login.provider'
import { lightBlue } from '@material-ui/core/colors';

const Login = () => {
    const {
       login
      } = React.useContext(LoginContext);
    const formRef = useRef(null);

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log("user", formRef)
        const usuario = formRef.current[0].value;
        var password = formRef.current[1].value;
        console.log("usuario", usuario);
        console.log("usuario", password);
        login(usuario,password);
    }
    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-md-12" style={{ display: 'flex', alignItems: 'center',backgroundColor: '#3f0f40'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-2">
                                <div className="card" style={{ borderRadius: 15 }}>
                                    <div className="container">
                                        <div className="my-3">
                                            <div className="col-lg-12" >
                                                <h1 className="title" style={{ textAlign: 'center', color: '#2C3286' }} >Login</h1>
                                            </div>
                                            <div className="col-lg-12 my-4">
                                                <p style={{ color: '#7E7E7E' }}>Ingresa las credenciales para obtener acceso.</p>
                                            </div>
                                            <form onSubmit={handleSubmit} ref={formRef} >
                                                <div className="row">
                                                    <div className="col-12 mb-3 mt-2">
                                                        <div className="row">
                                                            <div className="col-md-12 " style={{ textAlign:'start'}}>
                                                                <label htmlFor="usuario"
                                                                    className="col-form-label" >Usuario:</label>
                                                            </div>
                                                            <div className="col-md-12 form-group">
                                                                <div className="input-group" >
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text form-login icon-input">
                                                                            <FaUserAlt /></span>
                                                                    </div>
                                                                    <input type="text" placeholder="Usuario"
                                                                        formcontrolname="usuario"
                                                                        className="form-control form-login border-left-0" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-md-12 form-group" style={{ textAlign:'start'}}>
                                                                <label htmlFor="password"
                                                                    className="col-form-label">Contraseña:</label>
                                                            </div>
                                                            <div className="col-md-12 form-group">
                                                                <div className="input-group">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text form-login icon-input"> <FaKey /></span>
                                                                    </div>
                                                                    <input type="password" placeholder="Contraseña"
                                                                        formcontrolname="password"
                                                                        className="form-control form-login border-left-0" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-12 form-group d-grid my-4">
                                                    <button className="btn btn-login" style={{backgroundColor:lightBlue}} type="submit">Iniciar sesión</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export { Login };