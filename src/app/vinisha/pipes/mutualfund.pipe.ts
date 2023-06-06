import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mutualfund'
})

@Pipe({name:'searchCity'})
export class MutualfundPipe implements PipeTransform {

  transform(value: any[], name:string ) {
    let filterdNames= value.filter(
      x => x.type.includes(name)
  )

  console.log(filterdNames);

  return filterdNames;

  }

}
