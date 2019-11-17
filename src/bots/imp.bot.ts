import {Observable, from, interval, pipe} from 'rxjs';
import {switchMap, zip, map, scan, tap, throttleTime} from 'rxjs/operators';

import { registry, Bot, Reply } from '../bot';

export const IMP_BOT: Bot = {
  name: 'imp',
  description: 'stays drunk for 5 seconds, he is don’t mind to drink, when he is fresh. each 3 drinks he says a random not said joke and then repeats \n.'
};


registry.addBot(IMP_BOT,
  pipe(
    throttleTime(5000),
    map(() => {
      return "joke";
    })
  ));