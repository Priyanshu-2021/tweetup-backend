module.exports = {
    sayHi: (req, res) => {
        res.send({
            success: true,
            data: {

            }
        })
    },

    sayHello: (req, res) => {
        res.send({
            success: false,
            msg: "Look at you face in the mirror!!"
        })
    }
}