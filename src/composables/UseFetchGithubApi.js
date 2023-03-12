import { ref } from "vue";

export const UseFetchGithubApi = () => {
  const fetchData = async (username) => {
    const url = `https://api.github.com/users/${username}/repos`;

    const defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    const response = await fetch(url, {
      method: "GET",
      headers: { ...defaultHeaders },
      // body: null,
    });

    return response.json();
  };

  return { fetchData };
};
