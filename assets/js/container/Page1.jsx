import React, {Component} from 'react';
import Header from '../component/Header';
import Menu from '../component/Menu';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
/*
export default class Page1 extends Component {
  render() {
    return (
      <main>
        <Header title="ページ１"/>
        <Menu />
      </main>
    )
  }
}
*/

export default class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['hello', 'world', 'click', 'me']
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => {
      return (
        <div key={item} onClick={() => this.handleRemove(i)}>
          {item}
        </div>
      );
    });

    return (
      <div>
        <Header title="ページ１"/>
        <Menu />
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example">
          {items}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
