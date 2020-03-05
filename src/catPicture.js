let request = require('request');
module.exports = async (req, res) => {

  let { zoomApp, zoomError, zoomWebhook, databaseModels } = res.locals;
  let { type, payload } = zoomWebhook;
  let { toJid, accountId, actionItem, userId } = payload;

  // get a cat photo from the cat api
  request({
    url: 'https://api.thecatapi.com/v1/images/search?mime_types=jpg,png',
    method: 'GET',
    headers: {
      'x-api-key': process.env.catApiKey
    }
  }, async function(error, response, body) {
    if (error) {
      // handle error
    } else {
      // cat api image response payload
      body = JSON.parse(body)
      // send Chatbot message to Zoom Chat by passing in a message object
      await zoomApp.sendMessage({
        to_jid: zoomWebhook.payload.toJid,
        account_id: zoomWebhook.payload.accountId,
        user_jid: zoomWebhook.payload.userJid,
        content: {
          header: {
            text: 'Cat Picture'
          },
          body: [{
            type: 'section',
            sections: [{
              type: 'attachments',
              img_url: body[0].url,
              resource_url: body[0].url,
              information: {
                title: {
                  text: 'Meow'
                },
                description: {
                  text: 'Click to download me'
                }
              }
            },
            {
              type: 'actions',
              items: [
                {
                  text: 'Up Vote',
                  value: `1${body[0].id}`,
                  style: 'Primary'
                },
                {
                  text: 'Down Vote',
                  value: `0${body[0].id}`,
                  style: 'Danger'
                }
              ]
            }], // zoomWebhook is the slash command payload sent from zoom chat
            footer: `Sent by ${zoomWebhook.payload.userName}`
          }]
        }
      })
    }
  })
}
