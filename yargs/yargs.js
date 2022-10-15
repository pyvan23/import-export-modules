import { hideBin } from "yargs/helpers";
import yargs from "yargs";


export const argv = yargs(hideBin(process.argv))
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'its the table number that output'
  })
  .options('e', {
    alias: "extend",
    type: "number",
    default:10,
    describe: 'number to limit number of the table'
  })
  .options("l", {
    alias: "list",
    type: "boolean",
    default: false,
    describe: 'list table'
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "Base must be a number";
    }
    return true;
  }).argv;
