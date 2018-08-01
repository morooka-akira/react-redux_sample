import { hellowEndpointRoute } from './routes'

test('hellowEndpointRoute', () => {
  expect(hellowEndpointRoute()).toBe('/ajax/hello/:num')
  expect(hellowEndpointRoute(123)).toBe('/ajax/hello/123')
})
