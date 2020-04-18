# contralto-tool

This is a small commandline tool to help with the setup of [teletenor-contralto](https://github.com/tabby-jun/teletenor-contralto), which is a serverless deployment of [teletenor](https://github.com/tabby-jun/teletenor)

## Help

```
contralto-tool.js <cmd> [args]

Commands:
  contralto-tool.js stage-secret    Generate a random string for
                                    TeletenorApiStageSecret
  contralto-tool.js set-webhook     Set Telegram Bot Webhook for teletenor
  contralto-tool.js get-webhook     Get Info for Telegram Bot Webhook
  contralto-tool.js delete-webhook  Delete webhook URL for Telegram Bot

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```
---

```
contralto-tool.js stage-secret

Generate a random string for TeletenorApiStageSecret

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

---

```
contralto-tool.js set-webhook

Set Telegram Bot Webhook for teletenor

Options:
  --version    Show version number                                     [boolean]
  --help       Show help                                               [boolean]
  -u, --url    TeletenorUpdateWebhookApiURL, this is printed as output when
               deployed.
  -t, --token  Telegram Bot Token.
```

---

```
contralto-tool.js get-webhook

Get Info for Telegram Bot Webhook

Options:
  --version    Show version number                                     [boolean]
  --help       Show help                                               [boolean]
  -t, --token  Telegram Bot Token.
```

---

```
contralto-tool.js delete-webhook

Delete webhook URL for Telegram Bot

Options:
  --version    Show version number                                     [boolean]
  --help       Show help                                               [boolean]
  -t, --token  Telegram Bot Token.
```

## License

This is licensed as GNU General Public License v3.0 or later.