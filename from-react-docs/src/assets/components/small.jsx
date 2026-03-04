


export function Newbutton() {
  return (
    <button className="myButton"> new button </button>
  );
}

export default function Smallfu() {
  return (
    <>
      <p>Small component with new button</p>
      <Newbutton />
    </>
  );
}