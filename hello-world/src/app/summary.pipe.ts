import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(text: string, limit?: number): any {
    if (!text)
      return null;

    let actualLimit = (limit) ? limit : 50;
    return text.substr(0, actualLimit) + '...';
  }

}
