export let logA = (operator: any) => {
  console.log(operator, 'function logA called', 'bbbbbb')
}

export function logB(value: number, value1: number) :number {
  return value + value1;
}
