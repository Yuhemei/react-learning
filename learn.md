# 关于React的学习笔记

## 基础知识

### State

1. 不可以直接修改，需要`this.setState({comment: 'Hello'})`
2. this.props 和 this.state 可能会异步更新

   ```js
   // Correct
    this.setState((state, props) => ({
    counter: state.counter + props.increment
    }));
    ```
3. 