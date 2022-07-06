import { Configuration } from "webpack";
import { resolve } from "path";

const config: Configuration ={
    mode: 'none',
    entry: {
        //put our paths to lambdas
        'nodeHelloLambda': './services/aws-node-lambda/hello.ts'
    },
    target: 'node',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options : {
                        // pass special tsconfig file
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output:  {
        libraryTarget: 'commonjs2',
        path: resolve(__dirname, 'build'),
        filename: '[name]:[name].js'
    }
}