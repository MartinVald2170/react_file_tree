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
  const direction = isOpen? "down" : "right";

  const handleClick = () => setIsOpen(!isOpen);
  
  return <div>
    <span onClick={handleClick}>
    <i className="green folder outline icon"></i>
    <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
    <div style={{ marginLeft: "17px"}}>
    {isOpen ? children : null}
    </div>
  </div>
};

const File = (props) => {
  const { name } = props;
  const FileExtension = name.split('.')[1];
  const fileIcons = {

    mp4: "headphones" ,
    jpg: "file image",     
    png: "file image outline",
  };

  return <div>
     <i className={` ${fileIcons[FileExtension]} icon`}></i>
    {name}
    </div>
};



export default App;
