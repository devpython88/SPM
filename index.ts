import { argv, exit } from "process";
import yargs from "yargs";
import { SPMConfig } from "./interfaces";
import { exists, existsSync, readFileSync } from "fs";
import * as toml from 'toml'
import { build } from "./spm";

const args = yargs(argv.slice(2))
  .option("vers", {
    type: "boolean",
    description: "Shows version"
  })
  .option("config", {
    alias: "c",
    type: "string",
    description: "Specifies the config file and starts build"
  })
  .help()
  .parseSync();

if (args.vers){
  console.log("Simple Project Manager v1.0a1");
  exit(0);
}

if (args.config){
  if (!existsSync(args.config)){
    console.error(`The config file '${args.config}' does not exist.`);
    exit(1);
  }

  const config: SPMConfig = toml.parse(readFileSync(args.config).toString());

  build(config);
}