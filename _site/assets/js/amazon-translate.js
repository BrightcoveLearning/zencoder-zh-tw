// var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'IDENTITY_POOL_ID'});
var myConfig = new AWS.Config({
  credentials: region: 'us-west-east-1'
});

var translate = new AWS.Translate();