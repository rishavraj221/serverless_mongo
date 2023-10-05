Compress-Archive -Path collections/, helpers/, node_modules/, index.mjs, package-lock.json, package.json -DestinationPath function.zip
aws lambda update-function-code --function-name demo --zip-file fileb://function.zip
Remove-Item -Path function.zip -Force
