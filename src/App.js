import './2-Styling/2-App/App.scss';
import Header from './1-Components/Header.js'
import routes from './routes';
import Footer from './1-Components/Footer';
import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from './3-Ducks/userReducer'




function App(props) {

  useEffect(() => {
    console.log(props)
    if (!props.userID) {
      axios.get(`/auth/user`).then((res) => {
        console.log(res.data)
        props.loginUser(res.data.user_id);
      }).catch(err => console.log(err))
    }
  }, [props])

  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps, { loginUser })(App)
