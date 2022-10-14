import { writeFileSync } from "node:fs";
import Color from "colors";




export const multiply = async (number = 5) => {
    try {
        Color.setTheme({
            custom: ['red', 'underline']
          });

    console.log("**************");
    console.log(Color.cyan(" T A B L E S "));
    console.log("**************");

    let out = "";

    for (let index = 1; index <= 10; index++) {
      out += `${number} X ${index} = ${number * index}\n`;
    }
    console.log(out);

    writeFileSync(`tabla-${number}.txt`, out);

    return `tabla-${number}.txt`;
  } catch (err) {
    throw err;
  }
};
