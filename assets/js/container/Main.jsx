import React, {Component} from 'react';
import Header from '../component/Header';
import Menu from '../component/Menu';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Header title="メイン"/>
        <Menu />
        
      </main>
    )
  }
}
