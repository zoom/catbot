module.exports = async (req, res) => {
  let { zoomApp, zoomError, zoomWebhook, databaseModels } = res.locals;
  if (!zoomError) {
    let { type, command, payload } = zoomWebhook;
    let { toJid, userId, accountId } = payload;
    try {
      await zoomApp.sendMessage({
        to_jid: toJid,
        account_id: accountId,
        content: {
          head: {
            type: 'message',
            text: 'Unknown command',
            style: {
              bold: true
            }
          },
          body: [
            {
              type: 'message',
              text: `I'm sorry, I don't recognize your command. Here are the examples of available commands:`
            },
            {
              type: 'message',
              text: 'vote',
              style: {
                bold: true
              }
            },
            {
              type: 'message',
              text: 'Click a button to vote your Favorite food'
            }
          ]
        }
      });
      res.send('success');
    } catch (e) {
      res.send('fail');
    }
  }
  else{
    res.send('fail');
  }
};
