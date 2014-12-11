#!/bin/bash

curl "https://api.spark.io/v1/devices/${DEVICE_ID}/digitalread" \
  -d "access_token=${ACCESS_TOKEN}" -d params=D0

#The parameter must be the pin (A0 to A7, D0 to D7). The return value will be 1 if the pin is HIGH, 0 if the pin is LOW, and -1 if the read fails.

