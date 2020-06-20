import React from 'react';

function App() {
  return <div> 
  <Folder />
  <Folder />
  <Folder />
  </div>
}

const Folder = () => {
  const name="my_desktop";
  return <h4>{name}</h4>
};




export default App;
