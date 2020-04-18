#!/usr/bin/env node
const got = require('got')
const cryptoRandomString = require('crypto-random-string')

require('yargs')
  .showHelpOnFail(true)
  .scriptName("contralto-tool.js")
  .usage('$0 <cmd> [args]')
  .command('stage-secret', 'Generate a random string for TeletenorApiStageSecret', () => { }, function () {
    var stageSecret = cryptoRandomString({ length: 12 })
    console.log(`TeletenorApiStageSecret: ${stageSecret}`)
  })
  .command('set-webhook', 'Set Telegram Bot Webhook for teletenor', (yargs) => {
    return yargs.options({
      'u': {
        alias: 'url',
        describe: 'TeletenorUpdateWebhookApiURL, this is printed as output when deployed.'
      },
      't': {
        alias: 'token',
        describe: 'Telegram Bot Token.'
      }
    })
  }, async function (argv) {
    var setWebhookUrl = `https://api.telegram.org/bot${argv.token}/setWebhook`
    var options = {
      method: 'POST',
      json: {
        "url": argv.url,
        "allowed_updates": ["inline_query","chosen_inline_result", "message"]
      },
      responseType: 'json',
      resolveBodyOnly: true
    }
    await  got(setWebhookUrl, options)
      .then((body)=> {
        console.log(JSON.stringify(body, null, 2))
      }).catch((err) => {
        console.log(err)
      });
  })
  .command('get-webhook', 'Get Info for Telegram Bot Webhook', (yargs) => {
    return yargs.options({
      't': {
        alias: 'token',
        describe: 'Telegram Bot Token.'
      }
    })
  }, async function (argv) {
    var getWebhookUrl = `https://api.telegram.org/bot${argv.token}/getWebhookInfo`
    var options = {
      method: 'GET',
      responseType: 'json',
      resolveBodyOnly: true
    }
    await  got(getWebhookUrl, options)
      .then((body)=> {
        console.log(JSON.stringify(body, null, 2))
      }).catch((err) => {
        console.log(err)
      });
  })
  .command('delete-webhook', 'Delete webhook URL for Telegram Bot', (yargs) => {
    return yargs.options({
      't': {
        alias: 'token',
        describe: 'Telegram Bot Token.'
      }
    })
  }, async function (argv) {
    var deleteWebhookUrl = `https://api.telegram.org/bot${argv.token}/deleteWebhook`
    var options = {
      method: 'POST',
      responseType: 'json',
      resolveBodyOnly: true
    }
    await  got(deleteWebhookUrl, options)
      .then((body)=> {
        console.log(JSON.stringify(body, null, 2))
      }).catch((err) => {
        console.log(err)
      });
  })
  .help()
  .argv
