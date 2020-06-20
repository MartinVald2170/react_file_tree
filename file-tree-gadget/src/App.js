import React, { useState } from 'react';

function App() {
  return <div> 
  <Folder name="Desktop">
    <Folder name="Music">
    <File name="All_Star.mp4"/>
    <File name="Despacito.mp4"/>
    </Folder> 

     <File name="dogs.jpg" /> 
  <File name="cats.png" />

    </Folder>
  <Folder name="Application" />
 
  </div>
}

const Folder = (props) => {
  const [isOpen, setIsOpen ] = useState(true);
  const { name, children } = props;

  const handleClick = () => setIsOpen(!isOpen);
  
  return <div>
    <span onClick={handleClick}>{name}</span>
    <div style={{ marginLeft: "17px"}}>
    {isOpen ? children : null}
    </div>
  </div>
};

const File = (props) => {
  return <div>{props.name}</div>
}



export default App;
