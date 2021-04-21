#!/bin/bash

docker build --tag server .
docker run --init --publish 8080:8080 server