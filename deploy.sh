#!/bin/bash

$(aws ecr get-login --no-include-email --region eu-west-1)

docker build -t smilo/remix:dev -f Dockerfile.test .
docker tag smilo/remix:dev 462619610638.dkr.ecr.eu-west-1.amazonaws.com/smilo/remix:dev
docker push 462619610638.dkr.ecr.eu-west-1.amazonaws.com/smilo/remix:dev