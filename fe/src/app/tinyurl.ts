import { environment } from '../environments/environment';

export class Tinyurl {

  id: string;
  url: string = environment.baseUrl;
  key: string;
  date: string;

}
