import * as toml from 'toml'
import { Compiler, Details, Files, SPMConfig } from './interfaces';
import { exec } from 'child_process';
import { exit } from 'process';

export function build(config: SPMConfig){
  // Define default values forr optional things
  let cxxFlags = "-std=c++11";
  let cxxBinary = "/usr/bin/g++";

  // Get the sections
  
  let details: Details = config.details;
  let files: Files = config.files;

  let compiler: Compiler = {
    flags: cxxFlags,
    cxx_binary: cxxBinary
  };

  if ("compiler" in config){
    compiler = config.compiler;
    if (!compiler.cxx_binary) compiler.cxx_binary = cxxBinary;
    if (!compiler.flags) compiler.flags = cxxFlags;
  }

  // Initiate the compile command
  let compileCommand: string = `${compiler.cxx_binary} ${compiler.flags} -o ${files.output_exe} `;

  if ("source_files" in files) compileCommand += `${files.source_files}`;

  console.log(`Compile command :: '${compileCommand}'`);
  console.log("Starting build...");

  // STart build
  exec(compileCommand, (err) => {
    if (!err){ exit(0); }
    console.error(`During compilation of '${files.output_exe}' an error ocurred.`);
    console.error(`Error message: ${err?.message}`);
  });
}