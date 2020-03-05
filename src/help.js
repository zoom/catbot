module.exports = async (req, res) => {
  let { zoomApp, zoomError, zoomWebhook,request } = res.locals;

  if (!zoomError) {
    let { type, payload } = zoomWebhook;
    let { toJid, userJid, accountId } = payload;
    try {
      await zoomApp.sendMessage({
        to_jid: toJid,
        account_id: accountId,
        user_jid: userJid,
        is_visible_you: true,
        content: {
          head: {
            type: 'message',
            text: `Hi there - I'm ${process.env.NAME} bot`,
            style: {
              bold: true
            }
          },
          body: [
            {
              type: 'message',
              text: 'Here are some quick tips to get started!'
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
  } else {
    res.send('fail');
  }
};
