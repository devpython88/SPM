export interface SPMConfig {
  details: Details,
  files: Files,
  compiler: Compiler
}

export interface Details {
  project_name: string
}

export interface Files {
  output_exe: string,
  source_files: Array<string>
}

export interface Compiler {
  flags: string,
  cxx_binary: string
}