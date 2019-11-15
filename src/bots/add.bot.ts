import {Observable, from, interval, pipe} from 'rxjs';
import {switchMap, zip, map, scan, tap} from 'rxjs/operators';

import { registry, Bot, Reply } from '../bot';

export const ADD_BOT: Bot = {
  name: 'add',
  description: 'adding'
};

let findNumber = (message: string): number => +message.split(' ')[1];

let append = (list: number[], elem: number) => [...list, elem];

let joinExpression  = (list: number[]): string => {
  let sum = list.reduce((sum, current)=> sum+current);
  let result = list.join(' + ');
  result= 0 + " + " + result + " = " + sum;
  return result;
};

registry.addBot(ADD_BOT, pipe(
  map(findNumber),
  scan(append, []),
  map(joinExpression)
));






// function addNumber(): Observable<string> {
//  
// }
