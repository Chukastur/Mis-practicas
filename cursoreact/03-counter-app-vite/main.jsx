import React from 'react';
import {createRoot} from 'react-dom/client';
import { CounterApp } from './CounterApp';
//import { FirstApp } from "./FirstApp";
import './styles.css'


const root = createRoot(document.getElementById('root'));
 root.render (
    <React.StrictMode>
        <CounterApp value = { 20 }/>
    </React.StrictMode>
);
 