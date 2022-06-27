import { App } from "aws-cdk-lib";
import { LocationStack } from "./LocationStack";

const app = new App();
const locationStack = new LocationStack(app, 'location-finder', {
    stackName: 'LocationFinder'
})