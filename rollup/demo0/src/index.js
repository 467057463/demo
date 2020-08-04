import { logA } from './lib';
import lodash from 'lodash';

class Person{
  constructor(name){
    this.name = name;
  }
  sayName(){
    return this.name;
  }
}

export default Person;

