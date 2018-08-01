// @flow
export const hellowEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`
