import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventdefault();
        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value});
    }

    render(){
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" handleChange={this.handleChange}  name="email" value={this.state.email} label='email' required />
                  
                    <FormInput type="password" handleChange={this.handleChange} name="password" value={this.state.password} label='password' required />

                    <CustomButton type="submit" value="Submit">
                        Sign Up
                    </CustomButton>    
                </form>
            </div>
        )
    }
}

export default SignIn;