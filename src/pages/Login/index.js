import React, {useState,useContext} from 'react';

import Logo from "assets/logo.svg";
import {MESSAGES} from '../../common/constants'
import './index.scss';
 import {postLoginApi} from '../../services/services'
 import { useHistory, useLocation } from 'react-router';
import { UserContext} from '../../context/userContext'
const formFields = [
    {type: 'email', name: 'email', placeholder: 'Enter work email'},
    {type: 'password', name: 'password', placeholder: 'Enter password'}
];

const Login = () => {
    const [values, setValues] = useState({[formFields[0].name]: '', [formFields[1].name]: ''});
    const [isError,setError] =useState(false)
    const history =useHistory();

    const user = useContext(UserContext);
    
    const onChangeInput = ({target}) => {
        const name= target.name;
        const value =target.value;
        setValues(prev=>({...prev,[name]:value})) 
    }

    const onSubmitForm = async (e) => {
      e.preventDefault();
      const status =await postLoginApi(values);
      if(!status?.isLoggedIn){
          setError(true)
          return
      }
      user.setUser({email:values.email,isLoggedIn:true});
      console.log('after state')
      history.push('/')
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src={Logo} className="header__logo" alt="logo" />
                <div className="header-wrapper">
                    <span className="title">Joonko's Jobs Manager</span>
                    <span className="subtitle">Enter your details</span>
                </div>
                <form className="auth-form" onSubmit={onSubmitForm}>
                    {formFields.map(({type, name, placeholder}) => (
                        <input
                            key={`form__${name}`}
                            type={type}
                            name={name}
                            placeholder={placeholder}
                            value={values[name]}
                            onChange={onChangeInput}
                        />
                    ))}
                    <button type="submit">Log in</button>
                </form>
               { isError && <span className="error-msg">{MESSAGES.LOGIN_ERROR_MSG}</span>} 
            </div>
        </div>
    )
}

export default Login;