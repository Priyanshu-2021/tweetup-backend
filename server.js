const express = require('express')


const routes = require('./src/routes')
const CONSTANTS = require('./src/constants')
const database = require('./database')

const app = express()
const port = 8000



for (let route of routes) {


    switch (route.type) {
        case CONSTANTS.REQ_TYPE_E.GET:
            app.get(route.url, route.action)
            break

        case CONSTANTS.REQ_TYPE_E.POST:
            // app.get(route.url, route.action)
            break

        case CONSTANTS.REQ_TYPE_E.PUT:
            // app.get(route.url, route.action)
            break

        case CONSTANTS.REQ_TYPE_E.DELETE:
            // app.get(route.url, route.action)
            break

        default:
            console.error("unexpected request type encountered. Request type - ", route.type)
    }

}

database.connectDB()


app.listen(port, () => {
    console.log(`Server listening at - ${port}`)
})
