import React from 'react';
import './index.css';

// 组件
// 顶部SearchBar
function SearchBar(props) {
    // name label value
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <p>
                <input type="checkbox"/>
                {''}
                Only show products in stock
            </p>
        </form>
    )
};
// 类名
function CategoryRow(props) {
    return (
        <tr>
            <th colSpan="2">{props.cate}</th>
        </tr>
    )
};

// 价目表的一行
function ProductRow(props) {
    const product = props.product
    const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>{product.name}</span>
    return (
        <tr>
            <td>
                {name}
            </td>
            <td>{product.price}</td>
        </tr>
    )
};
class ProductTable extends React.Component {
    render() {
        const rows = [];
        let lastCategory = null;
        this.props.products.forEach((product) => {
            if (product.category !== lastCategory) {
                rows.push(
                    <CategoryRow
                        cate={product.category}
                        key={product.category} />
                )
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            )
            lastCategory = product.category;
        })
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )

    }
}
// 拆分后的整体
class FilterableProductTable  extends React.Component{
    render(){
        return(
            <div>
                <SearchBar/>
                <ProductTable products={this.props.products}/>
            </div>
        )
    }
}

// 总体
class TestPageOld extends React.PureComponent {
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
        let row = []
        this.state.mainList.forEach(el => {
            if (el.category === name) {
                row.push(<li key={el.name}>{el.name}:{el.price}</li>)
            }
        })
        return row
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


export { FilterableProductTable  };