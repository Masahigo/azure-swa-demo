# Azure Static Web Apps demo

Demo for showcasing a simple React based SPA and backend API deployed to SWA.

Combines a couple of examples from the MS docs

- https://learn.microsoft.com/en-us/azure/static-web-apps/add-api?tabs=react
- https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-cli?tabs=react

## Prerequisites

- [Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local)
- [SWA CLI](https://azure.github.io/static-web-apps-cli/docs/use/install)

```
npm install -g azure-functions-core-tools
npm install -g @azure/static-web-apps-cli
```

## Getting started

### Running locally from Azure Static Web Apps emulator

```
npm run build
swa start client/build --api-location api
```

#### Test API

```
curl http://localhost:7071/api/message
{
  "text": "Hello from the API"
}
```

### Deploying to Azure

```
az login

az group create \
  --name my-swa-group \
  --location "westeurope"

az staticwebapp create -n swa-demo-app -g my-swa-group

swa deploy client/build --api-location ./api --app-name swa-demo-app
```
