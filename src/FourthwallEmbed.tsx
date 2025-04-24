// Default values:
// URL: https://suris-shop.fourthwall.com/
// Width: 100%
// Height: 800px
interface FourthwallEmbedProps {
  url: string;
  width: string | number;
  height: string | number;
}

export default function FourthwallEmbed(props: FourthwallEmbedProps) {
  return (
    <iframe
      src={props.url}
      style={{
        width: props.width,
        height: props.height,
        border: "none",
        overflow: "hidden",
      }}
      allowFullScreen
    ></iframe>
  );
}
