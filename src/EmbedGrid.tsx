import styles from "./EmbedGrid.module.css";
//import FourthwallEmbed from "./FourthwallEmbed";
import TwitchChatEmbed from "./TwitchChatEmbed";
import TwitchEmbed from "./TwitchEmbed";

export default function Navbar() {
  const CHANNEL = "nekosuris";
  const CHANNEL_PARENT = "localhost";
  //const FOURTHWALL = "https://suris-shop.fourthwall.com/";
  const WIDTH = "100%";
  const HEIGHT = "100%";

  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <TwitchEmbed
          channel={CHANNEL}
          parent={CHANNEL_PARENT}
          autoplay={true}
          muted={true}
          width={WIDTH}
          height={HEIGHT}
        />
      </div>
      <div className={styles.div2}>
        <TwitchChatEmbed
          channel={CHANNEL}
          parent={CHANNEL_PARENT}
          width={WIDTH}
          height={HEIGHT}
        />
      </div>
    </div>
  );
}
