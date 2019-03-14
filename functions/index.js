const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.PushNotification = functions.https.onRequest((request, res) => {
  const registrationToken = request.body.token;

  console.log(registrationToken);

  const notification = {
    title: "test-title",
    body: "test-body"
  };

  const payload = {
    notification,
    webpush: {
      notification: {
        actions: [
          {
            action: "like",
            title: "Yaaaaa!"
          }
        ]
      }
    },
    token: registrationToken
  };

  admin
    .messaging()
    .send(payload)
    .then(response => {
      // Response is a message ID string.
      console.log("Successfully sent message:", response);
      res.send(
        `MESSAGE RESPONCE: ${JSON.stringify(
          responce
        )}, TOKEN: ${registrationToken}`
      );
      return response;
    })
    .catch(error => {
      console.log("Error sending message:", error);
      throw error;
    });
});
