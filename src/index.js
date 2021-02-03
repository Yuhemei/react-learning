import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FilterableProductTable } from './react-philosphy/index.js'
import {HookExample} from './react-hook/index.js'
import {GraphinApp} from './graphin-test'
// 进行渲染
ReactDOM.render(
    // <Game />,
    <GraphinApp />,
    // root was in ~/public/index.html
    document.getElementById('root')
);