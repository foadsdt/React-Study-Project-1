import React, { Component } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './style.css';

import App from './App';

const element = document.getElementById('root');
const root = createRoot(element)

root.render(<App/>)

