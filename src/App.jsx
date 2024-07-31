import Avatar from "./components/Avatar";

function App() {
  return (
    <>
      <h1 className="bg-slate-300">React + Vite</h1>
      <Avatar
        size="small"
        src="https://robohash.org/minam.png?set=set4"
        alt="random img"
      />
    </>
  );
}

export default App;
