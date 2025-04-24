import "./App.sass";
import EmbedGrid from "./EmbedGrid";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
      </div>
      <header className="container">Header</header>
      <main className="container">
        <EmbedGrid />
      </main>
      <footer className="container">Footer</footer>
    </>
  );
}

export default App;
