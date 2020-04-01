import React from 'react';
import ContactList from './components/ContactList';

//import Contact from "./components/Contact";

const user1 = {
  name:'Melinda Coleman',
  avatar:'https://randomuser.me/api/portraits/women/19.jpg',
  status: true
}

const user2 ={
  name: 'Tyler Watts',
  avatar: 'https://randomuser.me/api/portraits/men/19.jpg',
  status: false 
}

const user3 ={
  name: 'Lauren Holland',
  avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
  status: true 
}

function App() {
  return (
    <div className="App">
     <ContactList/>
    </div>
  );
}

export default App;
