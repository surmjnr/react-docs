import banafoImage from '../pictures/Banafo.jpeg';

export function Newbutton() {
  return (
    <button className="myButton"> new button </button>
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

export default function Smallfu() {
   const showProfileInfo = false;

  return (
    <div className='profileInformation'>
      <div className='content'>
      {showProfileInfo ? <ProfileInfo2 /> : <ProfileInfo />}
      <p>Small component with new button</p>
      <Newbutton />
      </div>
    </div>
  );
}
