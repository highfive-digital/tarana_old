/* eslint-disable @typescript-eslint/restrict-template-expressions */
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface HttpOptions {
  method?: HttpMethod;
  params?: Record<string, any>;
  headers?: Record<string, string>;
  body?: any;
  expectedStatus?: number | number[];
  responseType?: 'json' | 'text';
}

async function http<T>(url: string, options: HttpOptions = {}): Promise<T | null> {
  const {
    method = 'GET',
    params,
    headers = {},
    body,
    expectedStatus = 200,
    responseType = 'json'
  } = options;

  const requestOptions: RequestInit = {
    method,
    headers: headers as HeadersInit_
  };

  if (body && (method === 'POST' || method === 'PUT')) {
    if (body instanceof FormData) {
      requestOptions.body = body;
    } else {
      (requestOptions.headers as Record<string, string>)['Content-Type'] = 'application/json';
      requestOptions.body = JSON.stringify(body);
    }
  } else if (body && method !== 'POST' && method !== 'PUT') {
    throw new Error('Request body is only supported for POST and PUT methods');
  }

  let requestUrl = url;
  if (params) {
    const queryParams = new URLSearchParams(params);
    requestUrl = `${requestUrl}?${queryParams.toString()}`;
  }

  try {
    console.log({ requestUrl });
    const response = await fetch(requestUrl, requestOptions);

    if (
      !expectedStatus ||
      (Array.isArray(expectedStatus) && !expectedStatus.includes(response.status)) ||
      (typeof expectedStatus === 'number' && response.status !== expectedStatus)
    ) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    if (responseType === 'json') {
      const responseData = (await response.json()) as T;
      return responseData;
    } else if (responseType === 'text') {
      const responseData = (await response.text()) as T;
      return responseData;
    } else {
      throw new Error(`Invalid responseType: ${responseType}`);
    }
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    return null;
  }
}

export default http;
