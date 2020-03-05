const app = require('../app');
const supertest = require('supertest');
const superRequest = supertest(app);
const dotenv = require('dotenv');
const fs = require('fs-extra');
const nodepath = require('path');
const envConfig = dotenv.parse(fs.readFileSync(nodepath.resolve(`.test.env`)));

for (const k in envConfig) {
  process.env[k] = envConfig[k];
}

jest.mock('../src/help', function() {
  return jest.fn().mockImplementation(async (req,res) => {
    res.locals.zoomApp={
        sendMessage:function(){
            //mock empty sendmessage
            console.log('run sendmessage');
        }
    };
    res.locals.zoomWebhook={type:'one',payload:{
        toJid:'jidstring', userJid:'useridstring', accountId:'accountidstring'
    }};
    jest.resetModules();
    const originalModule = jest.requireActual('../src/help');
    originalModule(req,res);
  });
});

describe('request api test', () => {
  test('get test api test', async () => {
    const res = await superRequest.get('/test');
    expect(res.status).toBe(200);
    expect(res.text).toBe('test success');
  });


  test('help command test', async () => {
    const res = await superRequest
      .post('/command')
      .send({
        event: 'bot_notification',
        payload: {
          accountId: process.env.accountId,
          channelName: 'fox jiang',
          cmd: 'help',
          name: 'fox jiang',
          robotJid: process.env.zoomBotJid,
          toJid: 'tojidstring',
          userId: 'useridstring',
          userJid: 'userjidstring',
          userName: 'fox jiang'
        }
      })
      .set('clientid', process.env.zoomClientId)
      .set('authorization',process.env.zoomVerifyCode);

     expect(res.text).toBe('success');
     
  });
});
