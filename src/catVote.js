let request = require('request');
module.exports = async (req, res) => {

  let { zoomApp, zoomError, zoomWebhook, databaseModels } = res.locals;
  let { type, payload } = zoomWebhook;
  let { toJid, accountId, actionItem, userId } = payload;

  request({
    url: 'https://api.thecatapi.com/v1/votes',
    method: 'POST',
    headers: { // process.env.catApiKey is your cat api key stored in your database
      'x-api-key': process.env.catApiKey
    },
    json: { // payload.actionItem is the button action payload sent from zoom chat
      "image_id": payload.actionItem.value.substr(1),
      "value": parseInt(payload.actionItem.value[0])
    }
  }, async function(error, response, body) {
    if(error) {
      // handle error
    } else {
      // send Chatbot message to Zoom Chat by passing in a message object
      await zoomApp.sendMessage({
        to_jid: toJid,
        account_id: accountId,
        visible_to_user: userId,
        content: {
          body: [{
            type: 'message',
            text: `${payload.actionItem.text} received`
          }]
        }
      });
    }
  })
};
