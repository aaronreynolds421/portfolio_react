import "./App.css";

function Header() {
  return (
    <nav className="nav-bar">
      <p>Logo</p>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
function App() {
  return (
    <>
      <Header /> {/*how to call a component*/}
      <h1>Homepage</h1>
      <p>This is the homepage</p>
    </>
  );
}

export default App;
