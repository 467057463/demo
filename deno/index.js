import { white, bgRed } from "https://deno.land/std/fmt/colors.ts";
console.log(bgRed(white("hello world!")));


let rsa = Deno.readFileSync(Deno.dir("home") + "/.ssh/id_rsa");

rsa = new TextDecoder().decode(rsa);

console.log(rsa)

fetch('http://www.baidu.com')
  .then(res => {
    console.log(res)
  })