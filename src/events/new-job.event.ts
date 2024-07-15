import EventEmitter from 'events';

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

jobsEvents.on(JobsEventsManager.OnNotifyOnDiscord, ({ content, channel }) => {
  new Promise(() => {
    async function message() {
      //TODO: Configurar el service de discord
      console.log('Contenido: ', content);
      console.log('Channel: ', channel);
    }

    message();
  });
});

export { jobsEvents };
