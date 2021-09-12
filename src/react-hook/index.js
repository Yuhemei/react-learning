import React, { useState } from 'react'
class Clock extends React.Component {
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isToggleOn: true
        };
        this.timeButtonClick = this.timeButtonClick.bind(this);
    }
    // 生命周期
    // 挂载
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    // 销毁
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    // 刷新时间的方法
    tick() {
        this.setState({
            date: new Date()
        });
    }
    timeButtonClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
        console.log("state是",this.state);
        if(this.state.isToggleOn){
            clearInterval(this.timerID);
        }else{
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
        }
      }
    render() {
        return (
            <div>
                <h1>把复杂的生活过简单</h1>
                <button onClick={this.timeButtonClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
function HookExample() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Clock />
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    )
}

export { HookExample }