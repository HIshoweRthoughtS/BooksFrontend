import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool',
  standalone: true
})
export class BoolPipe implements PipeTransform {
  //todo: unzufrieden. vllt tostring pipe:
  //inp: 3 -> drei mal gelesen | oder | gelesen? ja, drei mal

  translate:{[key:string]:string} = {
    "true": "Ja",
    "false": "Nein"
  }

  transform(value: number | undefined, german:boolean = false): string {
    let ret = "true";
    if (!value || value === 0) {
      ret = "false";
    }

    if (german) {
      ret = this.translate[ret];
    }

    return ret;
  }

}
