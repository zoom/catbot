
module.exports = {
  log:function(info){
    // info.message,info.type
    // console.log(info.type,info.message);
  },
  botCommands: [
    {
      command: 'help',
      callback: require('./src/help.js')
    },
    {
      command:'vote',
      callback:require('./src/vote')
    },
    {
      callback:require('./src/noCommand.js') // no right command,will call this function
    },
    {
      command: 'picture',
      callback: require('./src/catPicture.js')
    }
  ],
  botActions: [
    {
      command:'interactive_message_actions',
      callback:require('./src/catVote.js')
    }
  ],
  apis: [
    { url: '/command', method: 'post', zoomType: 'command' },
    {
      url: '/auth',
      method: 'get',
      callback: require('./src/auth'),
      zoomType: 'auth'
    },
    {
      url:'/test',
      method:'get',
      callback:function(req,res){
        res.send('test success');
      }
    }
  ]
};
