import React from 'react';
import './index.css';

// 组件
// 输入框
// eslint-disable-next-line 
function InputItem(props) {
    // name label value
    return (
        <div>
            <label for={props.name}>{props.label}</label>
            <input name={props.name} type="text" value={props.value}></input>
        </div>
    )
};

// 选择框
// eslint-disable-next-line 
function CheckItem(props) {
    return (
        <input type="checkbox" name="check"></input>
    )
};
// 标题栏
// eslint-disable-next-line 
function TitleItem(props) { };

// 类名
// eslint-disable-next-line 
function CataItem(props) { };
// eslint-disable-next-line 
// 价目表的一项
// eslint-disable-next-line 
function PriceItem(props) {

};

// 总体
class TestPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            mainList: [
                { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
                { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
                { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
                { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
                { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
                { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
            ]
        }
        this.getLi = this.getLi.bind(this)
    }
    getLi(name) {
        this.state.mainList.forEach(el => {
            if (el.category === name) {
                    return <li key={el.name}>{el.name}:{el.price}</li>
            }
        })
    }
    render() {

        return (
            <div className="test-page-container">
                <input type="text" placeholder="Search..."></input>
                <input type="checkbox"></input>
                <span>Only show products in stock</span>
                <h5>Name  Price</h5>
                <h5>Sporting Goods</h5>
                <ul>
                    {this.getLi("Sporting Goods")}
                </ul>
                <h5>Electronics</h5>
                <ul>
                    {this.getLi("Electronics")}
                </ul>
            </div>
        )
    }
}
// ReactDOM.render(
//     <TestPage />,
//     document.getElementById('philosphy')
// )
export { TestPage };