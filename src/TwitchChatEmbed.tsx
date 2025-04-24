// Default values:
// Channel: nekosuris
// Parent: (current host name)
// Width: 700
// Height: 300
interface TwitchChatEmbedProps {
  channel: string;
  parent: string;
  width: string | number;
  height: string | number;
}

export default function TwitchChatEmbed(props: TwitchChatEmbedProps) {
  return (
    <iframe
      src={`https://www.twitch.tv/embed/${props.channel}/chat?parent=${props.parent}`}
      height={props.width}
      width={props.height}
    ></iframe>
  );
}
