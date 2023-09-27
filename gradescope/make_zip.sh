#!/usr/bin/env bash

# copy files with tests
cp ../index.test.js ./
# copy package.json

TESTS=$(ls ../*.test.js)
zip -r gradescope.zip setup.sh run_autograder package.json jest.config.js $TESTS

# remove copied files
rm ./index.test.js