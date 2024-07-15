import EventEmitter from 'events';
import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

export enum JobsEventsManager {
  OnNotifyOnDiscord = 'Jobs::notify-on-discord',
}

class JobsManager extends EventEmitter {
  constructor() {
    super();
  }

  onNotifyOnDiscord(params: { content: string; channel: string }) {
    this.emit(JobsEventsManager.OnNotifyOnDiscord, params);
  }
}

const jobsEvents = new JobsManager();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const DISCORD_TOKEN = process.env.BOT_TOKEN;

client.once('ready', () => {
  console.log('Bot de Discord listo!');
});

client.login(DISCORD_TOKEN);

jobsEvents.on(JobsEventsManager.OnNotifyOnDiscord, ({ content, channel }) => {
  new Promise(() => {
    async function message() {
      const guild = client.guilds.cache.first(); // Suponiendo que el bot está en un solo servidor
      if (!guild) {
        console.error('El bot no está en ningún servidor.');
        return;
      }

      const discordChannel = guild.channels.cache.find(
        (ch) => ch.name === channel
      );
      if (!discordChannel || !discordChannel.isTextBased()) {
        console.error(`No se encontró el canal de texto: ${channel}`);
        return;
      }

      try {
        await discordChannel.send(content);
        console.log('Mensaje enviado a Discord:', content);
      } catch (error) {
        console.error('Error al enviar el mensaje a Discord:', error);
      }
    }

    message();
  });
});

export { jobsEvents };
