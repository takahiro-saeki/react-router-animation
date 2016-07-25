import React, {Component} from 'react';
import Header from '../component/Header';
import Menu from '../component/Menu';

export default class Page2 extends Component {
  render() {
    return (
      <main>
        <Header title="ページ2"/>
        <Menu />
      </main>
    )
  }
}
