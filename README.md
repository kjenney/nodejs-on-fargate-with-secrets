# nodejs-on-fargate-with-secrets

An example Fargate service.

Runs nodejs with Express.

Pulls secrets from SecretsManager into the Node process as environment variables.

This example uses a public VPC and Load-Balancer

## Docker Image

The Docker image is very basic. It's just a super-simple NodeJS application with an additional module that pulls in secrets by path.

## Secret Paths

Secrets need to be named to match the environment and service that they are being used by. For example:

```
prod/coolservice/neatapikey
qa/anotherservice/coolcreds
```

## Deploy

1. Create secrets
2. CF public-vpc.yml
3. CF public-service.yml (Reference stack name created by step 1)
