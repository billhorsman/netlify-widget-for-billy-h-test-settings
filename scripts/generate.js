const fse = require("fs-extra");

const data = fse.readFileSync("src/index.html");
const slug = process.env.EVENT || "demo/awesomeconf";
const widget = `<tito-widget event="${slug}"></tito-widget>`;
const title = process.env.TITLE || "Tito Widget";
const html = data
  .toString()
  .replace(/{{ WIDGET }}/g, widget)
  .replace(/{{ TITLE }}/g, title)
  .replace(/{{ EVENT }}/g, slug);
fse.mkdirsSync("dist");
fse.writeFileSync("dist/index.html", html);
