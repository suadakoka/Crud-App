export default {
  post: async (url, body, options) => {
    const response = await fetch(url, {
      method: "POST",
      body: body,
      headers: options.headers,
      credentials: options.withCredentials ? "include" : "same-origin",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Something went wrong");
    }

    return response.json();
  },
};
