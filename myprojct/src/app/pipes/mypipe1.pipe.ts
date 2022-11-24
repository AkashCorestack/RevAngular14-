import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe1'
})
export class Mypipe1Pipe implements PipeTransform {

  transform(value: any, fst:string)  {

    if (value.length === 0 || fst === '') {
      return value;
    }
     const users = [];
for (let i = 0; i < value.length; i++) {
  if(value[i]==fst )
  {
    users.push(value[i]);
  }
  else if( value[i].substr(0,fst.length) == fst ){
    users.push(value[i]);

  }
  } 
    return users;
  }

  }


