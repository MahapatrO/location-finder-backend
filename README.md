# location-finder-backend

AWS CDK Project Demo

git setup
npm init -y
npm i -D aws-cdk typescript ts-node jest ts-jest @types/jest @types/node @types/prettier
npm i aws-cdk-lib constructs
tsc -init
change target to "target": "ES2018", in tsconfig.json
update tsconfig file properly
create cdk.json

cdk synth --- it will create cdk.out


 
# AWS Lambda Nodejs

npm install --save-dev esbuild@0

# Webpack setup (optional) - if you are using AWS Lambda nodejs webpack setup is not required
npm i -D webpack webpack-cli ts-loader @types/webpack

create file - webpack.config.ts