import './2-Styling/2-App/App.scss';
import Header from './1-Components/Header.js'
import routes from './routes';
import Footer from './1-Components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
