import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Code, Function as LambdaFunction, Runtime } from "aws-cdk-lib/aws-lambda";
import { join } from "path";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { GenericTable } from "./GenericTable";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

export class LocationStack extends Stack {

  private api = new RestApi(this, 'locationApi');
  private locationTable = new GenericTable(
    'LocationTable',
    'locationId',
    this
  );

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const helloLambda = new LambdaFunction(this, "lambdaHello", {
      runtime: Runtime.NODEJS_16_X,
      code: Code.fromAsset(join(__dirname,'..','services', 'hello')),
      handler: 'hello.main'
    });

    // Hello API lambd integration
    const helloLambdaIntegration = new LambdaIntegration(helloLambda);
    const helloLambdaResource = this.api.root.addResource('hello'); // ..... /hello
    helloLambdaResource.addMethod('GET', helloLambdaIntegration);


    const helloAwsNodeLambda = new NodejsFunction(this, "helloAwsNodeLambda", {
      runtime: Runtime.NODEJS_16_X,      
      entry: join(__dirname,'..','services', 'aws-node-lambda', 'hello.ts'),
      handler: 'handler',
    });
  }
}
