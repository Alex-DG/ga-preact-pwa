import axios from 'axios';
require("babel-polyfill");

const BASE_URL = 'http://localhost:8000'

const configUrl = `${BASE_URL}/api/v1/config-sample`;

const getConfigSample = async () => {
  try {
    const response = await axios.get(configUrl)
    return response.data.config;
  } catch (e) {
    console.log(e);
  }
};

export { getConfigSample };
