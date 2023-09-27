#!/usr/bin/env bash

# Loop through all subdirectories to find test files
test_cases=$(find .. -type f -name "*.test.js" -maxdepth 2)
for test in $test_cases; do
  # Get the parent directory name
  parent_dir=$(basename "$(dirname "$test")")
  mkdir -p ${parent_dir}
  cp "${test}" "${test#*/}"
done

find . -type f -name '*.test.js' -exec zip gradescope.zip setup.sh run_autograder package.json jest.config.js {} +

# Remove test files from gradescope after zip
rm ./*.test.js