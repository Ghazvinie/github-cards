import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Card extends React.Component {
  render() {
    return ( 
      <div className="github-profile">
        One Github Profile...
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    );
  }
}

ReactDOM.render(
  <App title="The GitHub Cards App" />,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


