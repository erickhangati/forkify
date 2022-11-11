import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchRequest = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const request = await Promise.race([fetchRequest, timeout(TIMEOUT_SEC)]);
    const response = await request.json();

    // Throw new error if there is an error on API request.
    if (!request.ok) throw new Error(`${response.message} ${request.status}`);

    return response;
  } catch (err) {
    throw err;
  }
};
