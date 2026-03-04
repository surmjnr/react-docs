import banafoImage from '../pictures/Banafo.jpeg';

export function Newbutton() {
  return (
    <button className="myButton"> new button </button>
  );
}

const userInfo ={
  name:"Kofi",
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

export default function Smallfu() {
  return (
    <div className='profileInformation'>
      <div className='content'>
      <ProfileInfo />
      <p>Small component with new button</p>
      <Newbutton />
      </div>
    </div>
  );
}
