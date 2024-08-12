import { Pipe, PipeTransform } from '@angular/core';


interface machineToHuman {
  QuoteColors: {
    1: string,
    2: string,
    3: string,
    4: string,
    5: string,
    6: string,
  }
}
interface machine2Human {
  [key:string]: {
    [key:number]: string
  }
}

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {

  transform(value: string, args?: string): string {
    //parts has to have 3 items
    const parts:string[] = value.split('-');
    let ret:string = args || 'fail';
    switch (parts[0]) {
      default:
      case 'human': {
        break;
      }
      case 'machine': {
        ret = this.toHumanMap[parts[1]][parseInt(parts[2])];
        break;
      }
    }
    return ret;
  }

  private readonly toHumanMap: machine2Human = {
    QuoteColors: {
      1: 'yellow',
      2: 'green',
      3: 'orange',
      4: 'blue',
      5: 'purple',
      6: 'pink',
    }
  }

  private readonly LanguageMap = {

  }

}
