module.exports = {
    getAllHouses: async (req, res) => {
        const db = req.app.get('db')
        const houses = await db.get_all_houses()
        res.status(200).send(houses)
    },

    addNewHouse: async (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zip} = req.body
        await db.add_new_house([name, address, city, state, zip])
        res.sendStatus(201)
    },

    deleteHouse: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        await db.delete_house([id])
        res.sendStatus(200)
    }
}