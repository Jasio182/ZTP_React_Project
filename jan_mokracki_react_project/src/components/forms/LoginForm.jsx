import {useRef} from 'react';
import React from 'react';

function LoginForm(props) {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    
    function handleSubmit(event) {
        event.preventDefault();
        const user =  usernameInputRef.current.value;
        const pass = passwordInputRef.current.value;
        props.onLogin(user, pass);
    };

    return (
        <div>
            <form id="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="Username">Username:</label><br />
                <input type="text" id="username" name="Username" required ref={usernameInputRef} /><br />
                <label htmlFor="Password">Password:</label><br />
                <input type="password" id="password" name="Password" required ref={passwordInputRef}/><br /><br />
                <input type="submit" value="Sign in"/>
            </form>
        </div>
    );
}

export default LoginForm;