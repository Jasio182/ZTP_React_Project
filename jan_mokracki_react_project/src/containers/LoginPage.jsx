import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { useContext } from 'react';
import { userAuthString } from '../DataContext';
import { bookList } from '../DataContext';
import {GetBooksRequest} from './APILogic';

function LoginPage(props) {
    const {authString, setAuthString} = useContext(userAuthString)
    const {listOfBooks, setListOfBooks} = useContext(bookList);

    async function GetBooks() {
        try {
            var books = await GetBooksRequest(authString);
            setListOfBooks(JSON.parse(books));
            props.onLogin();
        }
        catch (err) {
            console.log(err);
            alert("Wrong login or password!");
        }
    }

    async function Login(username, password) {
        await setAuthString("Basic " + window.btoa(username + ':' + password));
        console.log(authString+" from Login fun")
        await GetBooks();
    }
    
    return (
        <div>
            <h1>Sign In</h1>
            <LoginForm onLogin={Login} />
        </div>
    )
}

export default LoginPage;