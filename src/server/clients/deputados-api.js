import axios from 'axios';

import { BASE_URL } from '../config';

const client = axios({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: { accept: 'application/json' },
});

export default client;
