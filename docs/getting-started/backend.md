# Build the Backend

The backend for Documate is a set of serverless functions that handle the content upload and process question requests. These functions can be deployed to [AirCode](https://aircode.io) by a single click.

## Get a Copy

By clicking the button below, you can get a copy of the backend and launch your own App.

<a href="https://aircode.io/dashboard?owner=AirCodeLabs&repo=documate&branch=main&path=backend&appname=Documate" style="display: inline-block" target="_blank">
  <img src="https://aircode.io/aircode-deploy-button.svg" alt="Deploy with AirCode" width="166">
</a>

The functions code is located in the [backend directory on GitHub](https://github.com/AirCodeLabs/documate/tree/main/backend).

## Deploy

Once you've created the App, you should set the `OPENAI_API_KEY` environment variable in the __Environments__ tabs. You can find the API key in your [OpenAI dashboard](https://platform.openai.com/account/api-keys).

![](./_images/backend__set-environments.png)

This key is used to access the OpenAI API, which is required for the content processing.

Then click the __Deploy__ button located on the top bar. This action will ship the functions and provide you with individual accessible URLs for each function.

## Main Endpoints

There are two primary endpoints you need to know: `upload` and `ask`.

### `upload.js`

This function handles the content upload. Once all the files have been uploaded, the content is processed to generate a knowledge base specific to your project, which is then stored in the database.

### `ask.js`

This function deals with question requests. When a user poses a question, the frontend sends a request to this endpoint. The function then searches the knowledge base for related content and forwards it to the OpenAI API as context. The response from OpenAI API will be returned to the frontend as stream.

## Build the Frontend

After you've deployed the backend and got the request URLs, you can start building the frontend.

Choose a framework below to get started:

- [VitePress](/integration/vitepress)
- [Docusaurus](/integration/docusaurus)
- [Docsify](/integration/docsify)
- [General Vue Project](/getting-started/general-vue)

The following frameworks are coming soon:

- Vuepress
- Docus
- Nextra
- General React Project
