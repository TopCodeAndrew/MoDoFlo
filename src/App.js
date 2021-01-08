import './2-Styling/2-App/App.scss';
import Header from './1-Components/Header.js'
import routes from './routes';


function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
