FROM ubuntu:22.04

RUN apt update && apt install -y curl git unzip

RUN git clone https://github.com/flutter/flutter.git -b stable
ENV PATH="$PATH:/flutter/bin"

RUN flutter doctor

RUN apt-get clean && rm -rf /var/lib/apt/lists/* var/tmp/*

WORKDIR /app