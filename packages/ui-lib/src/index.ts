import lodash from "lodash";
export function add(a: number, b: number) {
  console.log(2);
  return lodash.add(a,b);
}

export function multi(a:number,b:number){
  console.log(1);
  return lodash.multiply(a,b);
}
export function divide(a:number, b:number){
  console.log('2.4.1');
  return a/b;
}
export function minus(a:number,b:number){
  return a-b;
}