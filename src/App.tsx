import "./App.sass";
import TwitchEmbedGrid from "./TwitchEmbedGrid";
import Navbar from "./Navbar";
import base_url from "./base_url";
import AboutGrid from "./AboutGrid";

function App() {
  const internalLinks = [
    {
      name: "Streaming",
      href: "streaming",
      tooltip: "Watch me on Twitch",
      component: <TwitchEmbedGrid />,
    },
    {
      name: "About",
      href: "about",
      tooltip: "About Me",
      component: <AboutGrid />,
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
          <section id={internalLink.href}>{internalLink.component}</section>
        ))}
      </main>
      <footer className="container">Debug: base_url={base_url()}</footer>
    </>
  );
}

export default App;
