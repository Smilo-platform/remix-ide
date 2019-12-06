#!/bin/bash

$(aws ecr get-login --no-include-email --region eu-central-1)

docker build -t didux/remix:prod .
docker tag didux/remix:prod 462619610638.dkr.ecr.eu-central-1.amazonaws.com/didux/remix:prod
docker push 462619610638.dkr.ecr.eu-central-1.amazonaws.com/didux/remix:prod