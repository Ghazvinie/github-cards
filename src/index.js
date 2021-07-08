import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];


class Card extends React.Component {
  render() {
    return this.props.data.map(profile => {
      return (
        <div className="github-profile">
          <img src={profile.avatar_url} alt="null" />
          <div className="info">
            <div className="name">{profile.name}.</div>
            <div className="company">{profile.company}</div>
          </div>
        </div>
      );
    })
  }
}

const CardList = (props) => (
  <div>
    <Card data={testData}/>
  </div>
)


class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <CardList />
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


