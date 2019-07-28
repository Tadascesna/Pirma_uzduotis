import React from 'react';
import classes from './App.module.css';
import Navigation from './containers/Navigation/Navigation'
import Background from './components/Background/Background'
import MainBody from './components/MainBody/MainBody'
import Auxiliary from './hoc/Auxiliary';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <Auxiliary>

      <Background></Background>

      <div className={classes.container}>
        <Navigation></Navigation>
        <MainBody></MainBody>
        <Footer></Footer>
      </div>

    </Auxiliary>


  );
}

export default App;
