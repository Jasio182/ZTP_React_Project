import React from 'react';
import BookList from '../components/BookList';
import AddBookForm from '../components/forms/AddBookForm';
import RemoveBookForm from '../components/forms/RemoveBookForm';
import { useContext } from 'react';
import { userAuthString } from '../DataContext';
import { bookList } from '../DataContext';
import { useState } from 'react';
import {GetBooksRequest} from './APILogic';
import {AddBookRequest} from './APILogic';
import {RemoveBookRequest} from './APILogic';


function DashboardPage(props) {
    const {listOfBooks, setListOfBooks} = useContext(bookList);
    const {authString, setAuthString} = useContext(userAuthString);
    const [bookListVisible, setBookListVisible] = useState(true);

    function Logout() {
        document.cookie = "JSESSIONID=;expires=" + new Date(0).toUTCString();
        setAuthString("");
        props.onLogout();
    }

    async function AddBook(title, author, year) {
        try {
            await AddBookRequest(authString, title, author, year);
        }
        catch (err) {
            console.log(err);
            alert(err);
        }
        finally {
            var books = await GetBooksRequest(authString);
            setListOfBooks(JSON.parse(books));
            RestartBookList();
        }
    }

    async function RemoveBook(id) {
        try {
            await RemoveBookRequest(authString, id);
        }
        catch (err) {
            console.log(err);
            alert(err);
        }
        finally {
            var books = await GetBooksRequest(authString);
            setListOfBooks(JSON.parse(books));
            RestartBookList();
        }
    }

    function RestartBookList(){
        setBookListVisible(false);
        setBookListVisible(true);
    }

    return (
        <div>
            <h1>Dashboard</h1>
            {bookListVisible && <BookList />}
            <AddBookForm addBook={AddBook} />
            <RemoveBookForm removeBook={RemoveBook}/>
            <br/>
            <button onClick={Logout}>Logout</button>
        </div>
    );
}

export default DashboardPage;