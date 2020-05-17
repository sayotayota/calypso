const Command = require('../Command.js');
const fetch = require('node-fetch');

module.exports = class YoMommaCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'yomomma',
      aliases: ['yourmom', 'ym'],
      usage: '',
      description: 'Says a random yo momma joke.',
      type: 'fun',
    });
  }
  async run(message) {
    try {
      const res = (await fetch.get('https://api.yomomma.info'));
      const joke = JSON.parse(res.text);
      message.channel.send(joke.joke);
    } catch (err) {
      message.client.logger.error(err.stack);
      message.channel.send(`Sorry ${message.member}, something went wrong. Please try again in a few seconds.`);
    }
  }
};
