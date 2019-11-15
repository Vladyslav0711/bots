import {Observable, from, interval, merge} from 'rxjs';
import {switchMap, zip, map, takeUntil, mergeMap} from 'rxjs/operators';

import {registry, Bot, Reply} from '../bot';
import {hodorYell} from './hodor-yell';

export const DANNY_BOT: Bot = {
  name: 'danny',
  description: 'Holds the door.'
};

registry.addBot(DANNY_BOT, holdTheDoor);

function holdTheDoor(message$: Observable<string>): Observable<string> {
  return merge(
    message$.pipe(
      switchMap(m =>
        interval(3000).pipe(
          map(i => 'I am the Queen!'),
        )
      )
    ),

    message$.pipe(
      switchMap(m =>
        interval(3000).pipe(
          map(i => 'I need your love!'),
        )
      )
    )

    // switchMap( p=>
    //   interval(3000).pipe(
    //     map(j => 'I need your love')
    //   )
    // )

  )
}
