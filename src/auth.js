// let jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  let { zoomApp, zoomError,databaseModels,request} = res.locals;
  if (!zoomError) {
    // let tokens = zoomApp.auth.getTokens(); //get zoom token
    // let userInfo = jwt.decode(zoomApp.auth.tokens.access_token); //parse token to multiple information
    /* 
      UserInfo:{
        clientId:string;
        code:string;
        userId:string;
        accountId:string;
        [propName: string]:string | number;  
      }
    */
    
    res.render('index');
  }
  else{
    res.send('error in auth');
  }
};
