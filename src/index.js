import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Something from './Components/states'
import Hook from "./Components/hooks"
import Timer from './Components/timer'
import 'bootstrap/dist/css/bootstrap.min.css';


import Container from './Components/userBar'
ReactDOM.render(<Timer/>,document.getElementById('root')
);

// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);
