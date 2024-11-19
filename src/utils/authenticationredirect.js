export function authentication(url) {
    const authentication = process.env.authentication_URL?.split(",") || [];

    return authentication.includes(url);
}
  