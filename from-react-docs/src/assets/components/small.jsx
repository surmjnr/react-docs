import banafoImage from '../pictures/Banafo.jpeg';
import { useState } from 'react';

export function Newbutton({ onClick, label }) {
  return (
    <button className="myButton" onClick={onClick}>
      {label}
    </button>
  );
}

const userInfo ={
  name:"Kofi",
  nmae2:"Banafo",
  age: 4,
  country: "Ghana",
  image: banafoImage,
  imageSize: 100,
  imageWidth: 100,
};
export function ProfileInfo(){
  return(
    <div className='profileInformation'>
      <div className='content'>
      <img src={userInfo.image} alt="profile picture"
      style={
        {
        width:userInfo.imageWidth,
        height: userInfo.imageSize,
        borderRadius: "50%",
        }
    } />
    <p>My name is {userInfo.name}</p>
      </div>
    
    </div>

  );
}
export function ProfileInfo2(){
  return(
    <div className='profileInformation'>
      <div className='content'>
      <img src={userInfo.image} alt="profile picture"
      style={
        {
        width:userInfo.imageWidth,
        height: userInfo.imageSize,
        borderRadius: "50%",
        }
    } />
    <p>My name is {userInfo.nmae2}</p>
    <p>My age is {userInfo.age}</p>
    <p>I am from {userInfo.country}</p>
      </div>
    
    </div>

  );
} 
const skills = [
  { title: 'Hardware', isselected: true, id: 1 },
  { title: 'software', isselected: true, id: 2 },
  { title: 'networking', isselected: true, id: 3 },
];

export  function Skillset() {
  const listItems = skills.map(skill =>
    <li
      key={skill.id}
      style={{
        color: skill.isselected ? 'magenta' : 'darkgreen'
      }}
    >
      {skill.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}


export default function Smallfu() {
  const [clickCount, setClickCount] = useState(0);
  const showProfileInfo = false;

  function handleButtonClick() {
    setClickCount((prev) => prev + 1);
  }

  return (
    <div className='profileInformation'>
      <div className='content'>
        {showProfileInfo ? <ProfileInfo2 /> : <ProfileInfo />}
        <p>Small component with new button</p>
        <Skillset />
        <Newbutton onClick={handleButtonClick} label="Button 1" />
        <p>Button clicked {clickCount} times</p>
        <Newbutton onClick={handleButtonClick} label="Button 2" />
        <p>Button clicked {clickCount} times</p>
      </div>
    </div>
  );
}
