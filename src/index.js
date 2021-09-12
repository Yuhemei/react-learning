import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Game} from './squre-game/index' //方块格子游戏
import {FilterableProductTable} from './react-philosphy'//商店组件
import {HookExample} from './react-hook/index.js' //hook demo
import {GraphinApp} from './graphin-test'
// 进行渲染
ReactDOM.render(
    <HookExample />,
    // <GraphinApp />,
    // root was in ~/public/index.html
    document.getElementById('root')
);