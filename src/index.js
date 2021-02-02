import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FilterableProductTable } from './started/index.js'
import {Hooks} from './react-hook/index.js'

// 进行渲染
ReactDOM.render(
    // <Game />,
    <Hooks />,
    // root was in ~/public/index.html
    document.getElementById('root')
);