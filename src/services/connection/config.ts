import axios from 'axios';

export const https = axios.create({
	// eslint-disable-next-line @typescript-eslint/naming-convention
	baseURL: 'https://localhost:3000/api/v1/',
});
