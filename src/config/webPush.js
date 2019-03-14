const webpush = require("web-push");

const config = () => {
  const vapidKey = webpush.generateVAPIDKeys();
  return {
    publicKey: vapidKey.publicKey,
    privateKey: vapidKey.privateKey
  };
};

export default config();
