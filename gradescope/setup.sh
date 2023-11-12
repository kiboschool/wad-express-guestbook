#!/usr/bin/env bash

# install node and npm
echo "David"
curl -SLO https://deb.nodesource.com/nsolid_setup_deb.sh
chmod 500 nsolid_setup_deb.sh
./nsolid_setup_deb.sh 18
apt-get install nodejs -y

# install dependencies
cd /autograder/source
npm install