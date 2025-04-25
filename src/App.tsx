import "./App.sass";
import TwitchEmbedGrid from "./TwitchEmbedGrid";
import Navbar from "./Navbar";

function App() {
  const internalLinks = [
    {
      name: "Streaming",
      href: "streaming",
      tooltip: "Watch me on Twitch",
      component: <TwitchEmbedGrid />,
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <Navbar internalLinks={internalLinks} />
      </div>
      <header className="container">Header</header>
      <main className="container">
        {internalLinks.map((internalLink) => (
          <section id={internalLink.href}>
            <h2>{internalLink.name}</h2>
            {internalLink.component}
          </section>
        ))}
      </main>
      <footer className="container">Footer</footer>
    </>
  );
}

export default App;
