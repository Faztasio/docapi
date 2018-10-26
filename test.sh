#!/bin/bash
for filename in /tests/*.js; do
    for ((i=0; i<=3; i++)); do
        node $filename
    done
done

# Tests all files in /tests
