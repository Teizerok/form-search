import { createApp } from './main.js'
import express from 'express'
import { renderToString } from 'vue/server-renderer'

const server = express()

server.get('/', (req, res) => {
	const app = createApp()
	renderToString(app).then(html => {
		res.send(`
    	<!DOCTYPE html>
   		<html>
    		<head>
       			<title>Vue SSR Example</title>
     		</head>
      	    <body>
        		<div id="app">${html}</div>
      		</body>
   		</html>
    `)
	})
})
