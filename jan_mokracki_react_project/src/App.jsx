import React from 'react';
import { useState } from 'react';
import DashboardPage from './containers/DashboardPage';
import LoginPage from './containers/LoginPage';
import { userAuthString } from './DataContext';
import { bookList } from './DataContext';

function App() {

  const [loginNeeded, setLoginNeeded] = useState(true);
  const [authString, setAuthString] = useState("none");
  const [listOfBooks, setListOfBooks] = useState({ "statusCode": 200, "data": [{}] });
  function LoggedIn() {
    setLoginNeeded(false);
  }

  function LoggedOut() {
    setLoginNeeded(true);
  }

  return (
    <div>
      <userAuthString.Provider value={{ authString, setAuthString }}>
        <bookList.Provider value={{ listOfBooks, setListOfBooks }}>
          {loginNeeded && <LoginPage onLogin={LoggedIn} />}
          {!loginNeeded && <DashboardPage onLogout={LoggedOut} />}
        </bookList.Provider>
      </userAuthString.Provider>
    </div>
  );
}

export default App;
