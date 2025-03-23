export const naverFetchInterceptor = (originalFetch) => async (url, options = {}) => {
    if (url === "https://nid.naver.com/oauth2.0/token" && options.method === "POST") {
      const response = await originalFetch(url, options);
      const clonedResponse = response.clone();
      const body = await clonedResponse.json();

      if (body.expires_in) {
        body.expires_in = Number(body.expires_in);
      }
  
      const modifiedResponse = new Response(JSON.stringify(body), {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
      });
  
      return Object.defineProperty(modifiedResponse, "url", { value: url });
    }
  
    return originalFetch(url, options);
  };