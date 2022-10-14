import { multiply } from "./helpers/multiply.js";
import { argv } from './yargs/yargs.js'
console.clear();


//feedback errors
multiply(argv.b, argv.l)
  .then((file) => console.log(file, "created"))
  .catch((err) => console.log(err));

console.log(argv);
