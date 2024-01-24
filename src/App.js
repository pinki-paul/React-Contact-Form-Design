import React from 'react';
import Nav from './components/Navigation/Nav';
import './App.css';
import Contact from './components/ContactUs/Contact';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div>
      <Nav />
      <main className='main_container'>
        <Contact />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
