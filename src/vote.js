module.exports = async (req, res) => {
  let { zoomApp, zoomError, zoomWebhook, databaseModels,request } = res.locals;
  if (!zoomError) {
    let { type, data, command, payload } = zoomWebhook;
    let { toJid, userId, accountId } = payload;
    try {
      await zoomApp.sendMessage({
        to_jid: toJid,
        account_id: accountId,
        content: {
          head: {
            type: 'message',
            text: 'Select your favorite food',
            style: {
              bold: true
            }
          },
          body: [
            {
              type: 'actions',
              items: [
                {
                  value: 'apple',
                  style: 'Default',
                  text: 'apple'
                },
                {
                  value: 'banana',
                  style: 'Default',
                  text: 'banana'
                },
                {
                  value: 'durian',
                  style: 'Danger',
                  text: 'durian'
                }
              ]
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
