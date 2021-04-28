import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Something from './Components/states'
import Timer from "./Components/timer"
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(<App/>,document.getElementById('root')
);

// setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);
