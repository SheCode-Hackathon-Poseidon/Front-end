import axios from 'axios'
import userStore from '../stores/user'

const RequestMethod = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE',
  Options: 'OPTIONS',
  Head: 'HEAD',
  Patch: 'PATCH',
}

export default class HttpUtility {
  static async get(endpoint, params, requestConfig) {
    const paramsConfig = params ? { params } : undefined
    
    return HttpUtility.request(
      {
        url: endpoint,
        method: RequestMethod.Get,
      },
      {
        ...paramsConfig,
        ...requestConfig,
      },
    )
  }

  static async sendRequestWithObject(apiUrl, bodyObject,  method = 'POST') {
    try {
      const response = await axios({
        method,
        url: apiUrl,
        data: bodyObject,
        // You can add headers if needed, e.g., content-type, authentication headers, etc.
      });
  
      // You can handle the response here, e.g., logging, error checking, etc.
      console.log('Response:', response.data);
  
      return response.data;
    } catch (error) {
      // Handle any errors that occurred during the request.
      console.error('Error:', error.message);
      throw error; // You can handle or rethrow the error as needed.
    }
  }

  static async post(endpoint, data, headers) {
    const config = data ? { data, headers } : undefined

    return HttpUtility.request(
      {
        url: endpoint,
        method: RequestMethod.Post,
      },
      config,
    )
  }

  static async put(endpoint, data, headers) {
    const config = data ? { data, headers } : undefined

    return HttpUtility.request(
      {
        url: endpoint,
        method: RequestMethod.Put,
      },
      config,
    )
  }

  static async delete(endpoint, data, headers) {
    const config = data ? { data, headers } : undefined

    return HttpUtility.request(
      {
        url: endpoint,
        method: RequestMethod.Delete,
      },
      config,
    )
  }

  static async request(restRequest, config) {
    try {
      const axiosRequestConfig = {
        ...config,
        method: restRequest.method,
        url: restRequest.url,
        headers: {
          'Content-Type': config?.headers?.['Content-Type'] ? config.headers['Content-Type'] : 'application/json',
          Authorization: userStore.getState().token ? `Bearer ${userStore.getState().token}` : '',
          ...config?.headers,
        },
      }

      const [axiosResponse] = await Promise.all([axios(axiosRequestConfig)])

      const { status, data, request } = axiosResponse

      return {
        status,
        data,
        request,
      }
    } catch (error) {
      if (error.response) {
        return error.response
      }
      return error.request
    }
  }
}
