import { writeFileSync } from "node:fs";

export const multiply = async (number = 5) => {
  try {

    console.log("**************");
    console.log(" T A B L E S ");
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
