export default function base_url() {
  try {
    const url = new URL(import.meta.env.BASE_URL);
    return url.host;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e: unknown) {
    return "localhost";
  }
}
