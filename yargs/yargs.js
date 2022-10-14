import { hideBin } from "yargs/helpers";
import yargs from "yargs";




export const argv = yargs(hideBin(process.argv))
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe:'its the table number that output'
  })
  .options("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe:'list table'
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "Base must be a number";
    }
    return true;
  }).argv;
