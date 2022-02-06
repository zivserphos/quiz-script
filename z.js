const a = async () =>
  console.log(
    await axios.get(
      "http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all",
      {
        proxy: {
          port: 8115,
          host: " socks5h://127.0.0.1:9050",
        },
      }
    )
  );

a();
