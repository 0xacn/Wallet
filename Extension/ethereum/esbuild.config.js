const { build } = require("esbuild");
require("dotenv").config();

const options = {
  entryPoints: ["./src/ethereum.ts"],
  outdir: "../../Application/Light Safari Extension/Resources",
  tsconfig: "tsconfig.json",
  bundle: true,
  minify: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
};

build(options).catch(() => {
  return process.exit(1);
});
