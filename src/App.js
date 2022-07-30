// App.js

import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Script from './components/Script';

class App extends Component {

  render() {
    return (
      <div>
    
  
        <Header /> 

        <div>
               
        
              
                
    <div className="clear"></div>

   
    <section id="content">

        <div className="content-wrap">
            
        <About /> 
        <Portfolio /> 
        <Contact /> 



            


            

        </div>

    </section>
    
    <Footer /> 
    
    </div>
        
        <Script />

       

      </div>
    );
  }
}

export default App;