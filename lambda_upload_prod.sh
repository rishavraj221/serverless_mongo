zip -r function.zip node_modules/ collections/ helpers/ index.mjs package-lock.json package.json
aws lambda update-function-code --function-name demo --zip-file fileb://function.zip
rm -r function.zip