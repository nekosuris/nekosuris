import styles from "./TwitchEmbedGrid.module.sass";
import TwitchChatEmbed from "./TwitchChatEmbed";
import TwitchEmbed from "./TwitchEmbed";
import base_url from "./base_url";

export default function Navbar() {
  const CHANNEL = "nekosuris";
  const CHANNEL_PARENT = base_url();
  const WIDTH = "100%";
  const HEIGHT = "100%";

  return (
    <div className={styles.parent}>
      <div className={styles.twitch}>
        <TwitchEmbed
          channel={CHANNEL}
          parent={CHANNEL_PARENT}
          autoplay={true}
          muted={true}
          width={WIDTH}
          height={HEIGHT}
        />
      </div>
      <div className={styles.twitchchat}>
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
