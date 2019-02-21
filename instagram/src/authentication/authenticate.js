import React from 'react';


const authenticate = App => LoginPage => props => {
    if (localStorage.getItem('username')) {
        return <App />;
    }
    return <LoginPage />;
}


export default authenticate;