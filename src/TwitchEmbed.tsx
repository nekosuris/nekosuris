// Default values:
// Channel: nekosuris
// Parent: (current host name)
// Autoplay: true
// Width: 100%
// Height: 100%
interface TwitchEmbedProps {
  channel: string;
  parent: string;
  autoplay: boolean;
  muted: boolean;
  width: string | number;
  height: string | number;
}

export default function TwitchEmbed(props: TwitchEmbedProps) {
  return (
    <div
      className="twitch-embed-container"
      style={{
        aspectRatio: "16/9",
        maxWidth: "none",
        minWidth: "100% !important",
      }}
    >
      <iframe
        src={`https://player.twitch.tv/?channel=${props.channel}&parent=${props.parent}&autoplay=${props.autoplay}&muted=${props.muted}&time=0s`}
        style={{ border: "none" }}
        width={props.width}
        height={props.height}
        allowFullScreen
      ></iframe>
    </div>
  );
}
