export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
/* 
@Injectable is not needed, you don't expect anything injected here.

it is recommended that you always add @Injectable
*/