import { writeFileSync } from "node:fs";
import Color from "colors";




export const multiply = async (base = 5, l = false) => {
  try {
    Color.setTheme({
      custom: ['red', 'underline']
    });

   
    let out = "";

    for (let index = 1; index <= 10; index++) {
      out += `${base} X ${index} = ${base * index}\n`;
    }

    if (l) {
      console.log("**************");
      console.log(Color.cyan(` T A B L E : ${base} `));
      console.log("**************");
  
      console.log(out);

    }

    writeFileSync(`tabla-${base}.txt`, out);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};
