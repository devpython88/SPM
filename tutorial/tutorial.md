# This is the SPM tutorial

## Table of contents
- [Setup](#setup)
- [Example configuration](#example-configuration)
- [Start build](#start-build)

## Setup
### Step 1. Install zip file
### Step 2. Use `sudo cp /path/to/spm /usr/bin` to install SPM system-wide
### Step 3. Check version using `spm --vers`

## Example configuration
  SPM utilises TOML-based configuration files.<br>
  So you need to learn TOML which is infact very easy.

  Example config:
  ```toml
  [details]
  project_name = "YourProject" # Required

  [files]
  output_exe = "path/to/output.exe" # Required
  source_files = ["path/to/main.cpp"] # Required (add more as needed)

  # Optional
  [compiler]
  flags = "C Flags" # Optional
  cxx_binary = "path/to/g++" # Optional
  ```

## Start build
  ### Step 1. Navigate to the directory where the configuration and source files are located `cd path/to/dir`
  ### Step 2. Start the build process by running `spm --config /path/to/config.toml`
  ### Step 3. Run the EXE file `./myapp`
