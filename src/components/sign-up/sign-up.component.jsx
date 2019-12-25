import React from 'react';

import FromInput from '../form-input';
import CustomButton from '../custom-button';
import {auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styes.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmdPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('Password didnt match');
            return;
        }
       try{
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        createUserProfileDocument(user, {displayName});
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmdPassword: ''
        });

       }catch(error){
        console.log(error);
       }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h1 className='title'>I do not have a account</h1>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FromInput lable='Name' type='text' name='displayName' value={displayName} onClick={this.handleChange} required />
                    <FromInput lable='E-mail' type='email' name='email' value={email} onClick={this.handleChange} required />
                    <FromInput lable='Password' type='password' name='password' value={password} onClick={this.handleChange} required />
                    <FromInput lable='Confirm Password' type='password' name='confirmPassword' value={confirmPassword} onClick={this.handleChange} required />

                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
