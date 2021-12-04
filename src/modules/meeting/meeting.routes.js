const CONSTANTS = require('../../constants')
const controller = require('./meeting.controller')

module.exports = [
    {
        type: CONSTANTS.REQ_TYPE_E.GET,
        url: "/hi1",
        action: controller.sayHi
    },

    {
        type: CONSTANTS.REQ_TYPE_E.GET,
        url: "/hello1",
        action: controller.sayHello
    }
]