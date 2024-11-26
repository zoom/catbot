#### THIS REPO IS DEPRECATED

Please visit our new [Rivet sample app](https://github.com/zoom/rivet-javascript-sample).

---

# Catbot

Use of this sample app is subject to our [Terms of Use](https://zoom.us/docs/en-us/zoom_api_license_and_tou.html).

This is a sample Chatbot app using the [Zoom Chatbot CLI NPM Package](https://www.npmjs.com/package/@zoomus/chatbot-cli).

![Zoom Chatbot Message Action](https://camo.githubusercontent.com/2ceee337f68b591dc41118741df967a5ab33f07968505b01e0694ce400ea3f86/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f757365722d636f6e74656e742e73746f706c696768742e696f2f31393830382f31353738343336373936303734)

[To create this Chatbot from scratch with the Chatbot CLI, click here to follow the step by step tutorial on our docs.](https://marketplace.zoom.us/docs/guides/chatbots/using-the-chatbot-cli)

To run the completed Chatbot code locally, continue reading below.

## Local/Development Setup

To run the completed Chatbot locally, follow these steps,

1. In terminal:

   `$ git clone https://github.com/zoom/catbot.git`

   `$ cd catbot`

   `$ npm install`

   `$ ngrok http 3000`

1. If you haven't already, head over to https://marketplace.zoom.us/develop/create and create a Chatbot named **catbot**.


1. Add your https Ngrok URL and slash command to your Chatbot app in the Zoom App Marketplace:

   | Input        | Description | Example Value           |
   | -------------|-------------|-------------------------|
   | Development Redirect URL for OAuth |  It can be found in marketplace under App Credentials.   | https://{{subdomain}}.ngrok.io/auth    |
   | Whitelist URL |   It can be found in marketplace under App Credentials.  | https://{{subdomain}}.ngrok.io |
   | Deauth Endpoint URL  |  It can be found in marketplace under Information.  | https://{{subdomain}}.ngrok.io/deauth |
   | Development and Production Bot Endpoint URL  | It can be found in marketplace under Features.  | https://{{subdomain}}.ngrok.io/command |
   | Slash Command | How you address your Chatbot. Currently slash commands need to be globally unique, so you won't be able to use the word `catbot`. It can be found in marketplace under Features. | catbot123 |

   > NOTE: Make sure to click "Save" after entering the Development and Production Bot Endpoint URL and the Slash Command.

1. Open the `.development.env` file and fill in the following values:

   | Key        |  Description          |     Example Value    |
   | ------------- |-------------|---------|
   | `zoomClientId`  | Development Client ID of your Chatbot. It can be found in marketplace under App Credentials. | `UD20wEqgQMyNmiR5IhinXA` |
   | `zoomClientSecret`  | Development Client Secret of your Chatbot. It can be found in marketplace under App Credentials. | `zlqppuDRGzQzW9j2eBpbUmyREPSbuTSU` |
   | `zoomVerifyCode`  | Verification Token of your Chatbot. It can be found in marketplace under Features. | `uaJs0IZvTIC0aP_Vs6d6IQ` |
   | `zoomBotJid`  | Development Bot JID of your Chatbot. It can be found in marketplace under Features. | `v1wjk1u1acrraq_mhwf2gclg@xmpp.zoom.us` |
   | `zoomRedirect_uri`  | Your ngrok URL with the `auth` path appended to the end. | `https://{{subdomain}}.ngrok.io/auth` |
	 | `catApiKey`  | [Get your Cat API Key here](https://thecatapi.com/). | `71c45d-530d-4280-96f8-6ec16f2315` |

   Save and close the `.development.env` file.

1. In terminal:

   `$ npm run start`

1. On your App Marketplace Dashboard, go to the Local Test page and click Install. After you click the Authorize button, you should be taken to your redirect url.

1. Now that your Chatbot is installed on your Zoom account, go to a Zoom Chat channel and type,

   `/catbot picture`

   You should see a picture of a cat!

## Need help?

If you're looking for help, try [Developer Support](https://devsupport.zoom.us) or our [Developer Forum](https://devforum.zoom.us). Priority support is also available with [Premier Developer Support](https://zoom.us/docs/en-us/developer-support-plans.html) plans.
