import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  location(url) {
    this.changeColor()
    browserHistory.push(url)
    setTimeout(() => this.remove(), 1000)
  }

  changeColor() {
    document.body.classList.add('animated', 'fadeInLeft')
  }

  remove() {
    document.body.classList.remove('animated', 'fadeInLeft')
  }

  render() {
    return (
      <section className="menu">
        <div onClick={() => this.location('/')}>メイン</div>
        <div onClick={() => this.location('/page1')}>ページ1</div>
        <div onClick={() => this.location('/page2')}>ページ2</div>
        <div onClick={() => this.location('/page3')}>ページ3</div>
      </section>
    )
  }
}
