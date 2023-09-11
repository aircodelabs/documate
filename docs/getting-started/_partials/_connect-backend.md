Now you are all set with the frontend. The last step is to connect it to the backend.

### Prerequisite
Before continue, please make sure you have built and deployed the backend. Follow [Build the Backend Guide](/getting-started/backend) if you haven't done so. It only takes 5 minutes.

### 1. Add the Backend URL to `documate.json`

Open your backend App in the [AirCode dashboard](https://aircode.io/dashboard), select the deployed `upload.js` file, and copy the backend URL. It's located under the function's name.

TODO: Get backend url screenshot

Then add it to the `documate.json` file:

```json{4}
{
  "root": ".",
  "include": [ "**/*.md" ],
  "backend": "https://test123.us.aircode.run/upload"
}
```

Remember to replace `https://test123.us.aircode.run/upload` with your own one.

### 2. Add the `ask` Endpoint to Component

Find the `ask` endpoint (Which is the URL for `ask.js`), and click to copy it.

Todo: Copy ask endpoint screenshot