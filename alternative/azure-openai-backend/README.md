# Documate Alternative Backend

This is the alternative backend of Documate, you can get a copy and launch your own on [AirCode](https://aircode.io) by clicking the button below.

[![Deploy with AirCode](https://aircode.io/aircode-deploy-button.svg)](https://aircode.io/dashboard?owner=AirCodeLabs&repo=documate&path=alternative-backends%2Fazure-openai&appname=Documate%20backend%20Azure%20OpenAI)

## Usage

To use Azure OpenAI as the backend, you need to deploy two models: one GPT model and one Embedding model.

<img src="https://aircode-yvo.b-cdn.net/resource/1695293654504-29kykwztv1p.jpg" width="400">

Unlike the OpenAI Backend, the Azure OpenAI Backend requires the configuration of four parameters, as follows:

- `AZURE_OPENAI_KEY` : The OpenAI Access Key.
- `AZURE_OPENAI_ENDPOINT` : The OpenAI Endpoint.
- `AZURE_OPENAI_DEPLOYMENT` : The deployment ID fo the GPT module.
- `AZURE_OPENAI_EMBEDDING` : The deployment ID fo the Embedding module.

<img src="https://aircode-yvo.b-cdn.net/resource/1695293476139-n2f95c7cea.jpg" width="400">

For more information, please refer to [https://documate.site/getting-started/backend](https://documate.site/getting-started/backend).