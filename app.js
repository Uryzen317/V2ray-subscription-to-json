const axios = require("axios");
const child_process = require("node:child_process");

const subURL = "";
axios.get(subURL).then((value) => {
  const urlConfigs = Buffer.from(value.data, "base64")
    .toString("utf-8")
    .split("\n");

  urlConfigs.map((urlConfig) => {
    const name = urlConfig.split("#")[1];
    child_process.exec(
      `python3 ./url-to-json.py "${urlConfig}" "${name}"`,
      (err, _stdout, _stderr) => {
        if (err) console.log("error : ", err);
      }
    );
  });
});
