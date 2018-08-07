// @flow

import compression from 'compression'
import express from 'express'

import { WEB_PORT, STATIC_PATH } from '../shared/config'
import { isProd } from '../shared/util'
import { hellowEndpointRoute } from '../shared/routes'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.get(hellowEndpointRoute(), (req, res) => {
  res.json({ serverMessage: `Hello from the server!(received ${req.params.num})` })
})

app.listen(WEB_PORT, () => {
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' : '(development)'}.`)
})
