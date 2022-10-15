import { writeFileSync } from "node:fs";
import Color from "colors";




export const multiply = async (base = 5, l = false, e = 10) => {
  try {



    let out = "";

    for (let index = 1; index <= e; index++) {
      out += `${base} X ${index} = ${base * e}\n`;
    }

    if (l) {
      console.log("**************");
      console.log(Color.cyan(` T A B L E : ${base} `));
      console.log("**************");

      console.log(out.america);

    }

    writeFileSync(`tabla-${base}.txt`, out);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};
