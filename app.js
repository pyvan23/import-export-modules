import { multiply } from "./helpers/multiply.js";
import { hideBin } from 'yargs/helpers'
import yargs from 'yargs'

console.clear();
const argv = yargs(hideBin(process.argv)).options('b',{
  alias:'base',
  type:'number'
})
.argv
//feedback errors
multiply(4)
.then((file) => console.log(file, 'created'))
.catch((err) => console.log(err))

console.log(process.argv)
console.log(argv);