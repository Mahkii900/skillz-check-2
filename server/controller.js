module.exports = {
    getAllHouses: async (req, res) => {
        const db = req.app.get('db')
        const houses = await db.get_all_houses()
        res.status(200).send(houses)
    }
}