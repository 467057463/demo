// import { logA } from './lib';
import _ from 'lodash';
import $ from 'jquery';

class Person{
  constructor(name){
    this.name = name;
  }
  sayName(){
    const $p = $("p");
    return _.add(this.name, $p.length);
  }
}

export default Person;

