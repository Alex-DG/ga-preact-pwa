import axios from 'axios';

const BASE_URL = 'http://localhost:8000'
const configUrl = `${BASE_URL}/api/v1/config-sample`;

const getConfigSample = async () => {
  try {
    const res = await axios.get(configUrl)
    return res;
  } catch (e) {
    console.log(e);
  }
};

export { getConfigSample };
