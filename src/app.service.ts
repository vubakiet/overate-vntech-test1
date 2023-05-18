import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSortArrayByAscending(array: Array<string | number>) {
    const sortedArr = array.sort((a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      }
      if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
      }
      return typeof a === 'number' ? -1 : 1;
    });

    return sortedArr;
  }

  getSortArrayByDescending(array: Array<string | number>) {
    const sortedArr = array.sort((a, b) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return b - a;
      }
      if (typeof a === 'string' && typeof b === 'string') {
        return b.localeCompare(a);
      }
      return typeof a === 'number' ? -1 : 1;
    });

    return sortedArr;
  }
}
