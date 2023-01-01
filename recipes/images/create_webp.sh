#!/bin/bash

filename=$(basename -- "$1")
filename="${filename%.*}"
cwebp -q 75 $1 -o $filename.webp