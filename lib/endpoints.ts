interface EndPointObject {
  baseUrl: string
  child: {
    [x: string]: string
  }
}

export const userEndpoints: EndPointObject = {
  baseUrl: '/api/user',
  child: {
    authLogin: '/login',
    getList: '/get-list',
    add: '/add-new',
    update: '/update-user',
  },
}

export const contentEndpoints: EndPointObject = {
  baseUrl: '/api/content',
  child: {
    getList: '/get-list',
    add: '/add-new',
    update: '/update-content',
    delete: '/delete-content',
  },
}

export const blogEndpoints: EndPointObject = {
  baseUrl: '/api/blog',
  child: {
    getList: '/get-list',
    add: '/add-new',
    update: '/update-blog',
    delete: '/delete-blog',
  },
}

export const jobEndpoints: EndPointObject = {
  baseUrl: '/api/job',
  child: {
    getList: '/get-list',
    add: '/add-new',
    update: '/update-job',
    delete: '/delete-job',
  },
}

export const getEndpoint = (
  endpointObject: EndPointObject,
  target: keyof typeof endpointObject.child
) => {
  return `${endpointObject.baseUrl}${endpointObject.child[target]}`.replaceAll('//', '/')
}
