"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const yargs_1 = __importDefault(require("yargs"));
const fs_1 = require("fs");
const toml = __importStar(require("toml"));
const spm_1 = require("./spm");
const args = (0, yargs_1.default)(process_1.argv.slice(2))
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
if (args.vers) {
    console.log("Simple Project Manager v1.0a1");
    (0, process_1.exit)(0);
}
if (args.config) {
    if (!(0, fs_1.existsSync)(args.config)) {
        console.error(`The config file '${args.config}' does not exist.`);
        (0, process_1.exit)(1);
    }
    const config = toml.parse((0, fs_1.readFileSync)(args.config).toString());
    (0, spm_1.build)(config);
}
