"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = build;
const child_process_1 = require("child_process");
const process_1 = require("process");
function build(config) {
    // Define default values forr optional things
    let cxxFlags = "-std=c++11";
    let cxxBinary = "/usr/bin/g++";
    // Get the sections
    let details = config.details;
    let files = config.files;
    let compiler = {
        flags: cxxFlags,
        cxx_binary: cxxBinary
    };
    if ("compiler" in config) {
        compiler = config.compiler;
        if (!compiler.cxx_binary)
            compiler.cxx_binary = cxxBinary;
        if (!compiler.flags)
            compiler.flags = cxxFlags;
    }
    // Initiate the compile command
    let compileCommand = `${compiler.cxx_binary} ${compiler.flags} -o ${files.output_exe} `;
    if ("source_files" in files)
        compileCommand += `${files.source_files}`;
    console.log(`Compile command :: '${compileCommand}'`);
    console.log("Starting build...");
    // STart build
    (0, child_process_1.exec)(compileCommand, (err) => {
        if (!err) {
            (0, process_1.exit)(0);
        }
        console.error(`During compilation of '${files.output_exe}' an error ocurred.`);
        console.error(`Error message: ${err === null || err === void 0 ? void 0 : err.message}`);
    });
}
