import {Observable, from, interval, merge, pipe} from 'rxjs';
import {switchMap, zip, map, takeUntil, mergeMap} from 'rxjs/operators';

import {registry, Bot, Reply} from '../bot';
import {hodorYell} from './hodor-yell';

export const DANNY_BOT: Bot = {
  name: 'danny',
  description: 'Holds the door.'
};

registry.addBot(DANNY_BOT, pipe(
  switchMap(n =>
    interval(3000).pipe(
      map(m => "I am the Queen 🔥 I need your love 💙")
    ))
));


