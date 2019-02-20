import React from 'react';

// const authenticate = App => LoginPage =>
//     class extends React.Component {
//         render() {
//             return (
//                 <App />
//             );
//         }
//     };

// export default authenticate;

const authenticate = App => LoginPage => props => {
    if (localStorage.getItem('username')) {
    // class App extends React.Component {
    //     render() {
    //         return (
    //             <App />
    //         );
    //     }
    // };
    return <App />;
    }
    return <LoginPage />;
}


export default authenticate;