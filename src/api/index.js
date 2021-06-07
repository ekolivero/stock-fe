import axios from "axios";

export const client = axios.create({
  timeout: 1000 * 15,
  params: {
    apiKey: window.__env.apiKey || process.env.REACT_APP_POLYGON_API_KEY,
  },
});

client.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
		if (error.response.status === 429) {
			const error = new Error("You've exceeded the maximum requests per minute, run the project with mocked data :)")
			
			error.response = error

			throw error 
		}
		throw error
  }
);
