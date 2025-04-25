import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBluesky } from "@fortawesome/free-brands-svg-icons/faBluesky";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { faPatreon } from "@fortawesome/free-brands-svg-icons/faPatreon";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faTwitch } from "@fortawesome/free-brands-svg-icons/faTwitch";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
import React, { useState } from "react";

interface InternalLink {
  name: string;
  tooltip: string;
  href: string;
}

interface NavbarProps {
  internalLinks: InternalLink[];
}

export default function Navbar(props: NavbarProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkModeCallback = React.useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode, setDarkMode]);

  React.useEffect(() => {
    const htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const externalLinks = [
    {
      tooltip: "Follow me on Bluesky",
      url: "https://bsky.app/profile/surisamu.bsky.social",
      icon: faBluesky,
    },
    {
      tooltip: "Join my community on Discord",
      url: "#",
      icon: faDiscord,
    },
    {
      tooltip: "Support me on Patreon",
      url: "https://www.patreon.com/c/SurisSkeptic",
      icon: faPatreon,
    },
    {
      tooltip: "Watch me on Twitch",
      url: "hhttps://www.twitch.tv/nekosuris",
      icon: faTwitch,
    },
    {
      tooltip: "Watch me on YouTube",
      url: "https://bsky.app/profile/surisamu.bsky.social",
      icon: faYoutube,
    },
  ];

  return (
    <nav>
      <ul>
        <li>
          <strong>NekoSuris</strong>
        </li>
        {props.internalLinks.map((internalLink) => (
          <li>
            <a
              href={`#${internalLink.href}`}
              data-tooltip={internalLink.tooltip}
              data-placement="left"
            >
              {internalLink.name}
            </a>
          </li>
        ))}
      </ul>
      <ul>
        {externalLinks.map((externalLink) => (
          <li>
            <a
              target="_blank"
              href={externalLink.url}
              data-tooltip={externalLink.tooltip}
              data-placement="left"
            >
              <FontAwesomeIcon icon={externalLink.icon} />
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            onClick={toggleDarkModeCallback}
            data-tooltip={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            data-placement="left"
          >
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
