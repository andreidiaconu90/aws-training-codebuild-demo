#! /bin/bash
npm install -g serverless
npm install
serverless deploy --stage $env  --verbose