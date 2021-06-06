import axios from "axios"

export const client = axios.create({
	timeout: 1000 * 15,
	baseURL: "https://api.polygon.io",
	params: {
		apiKey: process.env.REACT_APP_POLYGON_API_KEY
	}
})