#!/usr/bin/env bash

# install node and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | bash - &&\
apt-get install -y nodejs

# install dependencies
cd /autograder/source
npm install