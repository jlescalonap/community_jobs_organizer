// logger.ts

class LoggerUtil {
  debug(content: string, notify: boolean = false) {
    console.log(content);
    if (notify) {
      console.log(content);
    }
  }
  critical(content: string) {
    console.error(content);
  }
}

const Logger = new LoggerUtil();

const Critical = (message: string) => Logger.critical(message);

export { Critical, Logger };
