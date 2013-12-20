###### exec grunt && sync it with amazon s3 bucket

#! /bin/bash

###grunt --force
cd dist
aws s3 sync . s3://pestsh