#!/bin/bash

$(aws ecr get-login --no-include-email --region eu-west-1)

docker build -t smilo/remix:latest .
docker tag smilo/remix:latest 462619610638.dkr.ecr.eu-west-1.amazonaws.com/smilo/remix:latest
docker push 462619610638.dkr.ecr.eu-west-1.amazonaws.com/smilo/remix:latest