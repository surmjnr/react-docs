//import Smallfu from './assets/components/small'
import './assets/components/small.css'
import List from './assets/components/app';
import './App.css'

// function App() {

//   return (
//     <>
//       <Smallfu  />
//     </>
//   )
// }

// export default App
// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '(packed)'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
      <List />
    </section>
  );
}

