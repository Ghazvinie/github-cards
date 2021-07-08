import './App.css';





const Main = ({title}) => (
  <div className="header">{title}</div>
);






const App = ({title}) => (
  <Main title="The GitHub Cards App" />
);

// ReactDOM.render(
// 	<App title="The GitHub Cards App" />,
//   mountNode,
// );

export default App;
