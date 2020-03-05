module.exports = async (req, res) => {
  let { zoomApp, zoomError, zoomWebhook, databaseModels,request } = res.locals;
  if (!zoomError) {
    let { type, payload } = zoomWebhook;
    let { toJid, accountId, actionItem } = payload;
    try {
      await zoomApp.sendMessage({
        to_jid: toJid,
        account_id: accountId,
        content: {
          head: {
            type: 'message',
            text: 'Your favorite food',
            style: {
              bold: true
            }
          },
          body: [
            {
              type: 'message',
              text: `thanks for you select "${actionItem.text}"`
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
