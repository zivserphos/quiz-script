const { SocksProxyAgent } = require("socks-proxy-agent");
const axios = require("axios");
const proxy = "socks://localHost:9050";
const agent = new SocksProxyAgent(proxy);

async function request(baseURL) {
  try {
    const client = axios.create({ baseURL, httpAgent: agent });
    const res = await client.get("/");
    console.log(res.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.message);
    }
    return "Failed.";
  }
}

request(
  "http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all"
);
