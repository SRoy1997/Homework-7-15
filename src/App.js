import Child from "./Child";

export default function App() {
  const user = {
    firstName: "Sarah",
    lastName: "Roy",
  };

  return <div className="App">{Child(user)}</div>;
}
