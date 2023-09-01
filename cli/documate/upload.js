const axios = require('axios');

const upload = async (uploadUrl, files, token = '') => {  
  try {
    // Only accepts 30 requests per second
    const chunkSize = 30;
    for (let startIndex = 0; startIndex < files.length; startIndex += chunkSize) {
      const startTime = Date.now();
  
      console.log('Documate:uploading files');
      const subArray = files.slice(startIndex, startIndex + chunkSize);
  
      const promises = subArray.map((file) => {
        return axios.post(uploadUrl, {
          state: 'uploading',
          content: file.content,
          fileName: file.fileName,
        }, {
          headers: {
            token,
          }
        });
      });
  
      await Promise.all(promises);
      const processIndex = startIndex + chunkSize > files.length ? files.length : startIndex + chunkSize;
      console.log(`Documate:upload files:: ${processIndex}/${files.length}, duration: ${Date.now() - startTime} ms`);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    await axios.post(uploadUrl, {
      state: 'finish',
      mode: 'all',
    }, {
      headers: {
        token,
      }
    });
  } catch (error) {
    console.error(error);
    await axios.post(uploadUrl, {
      state: 'finish',
      mode: 'clear',
    }, {
      headers: {
        token,
      }
    });
  }
};

module.exports = upload;
