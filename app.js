import { multiply } from "./helpers/multiply.js";

console.clear();



//feedback errors
multiply(4)
  .then((file) => console.log(file,'created'))
  .catch((err) => console.log(err))
