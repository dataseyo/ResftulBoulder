import Boulder from '../models/BoulderModels.js'

export const viewBoulderList = async (req, res) => {
    try {
        const boulders = Boulder.find()
        res.json(boulders)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

export const getBoulderList = (req, res, next) => {
    Boulder.find()
        .exec((err, list_boulders) => {
            if (err) { return next(err) }
            res.json(list_boulders)
        })
}

export const viewBoulder = (req, res) => {
 // 
}

export const createBoulder = async (req, res) => {
    const boulder = new Boulder({
        name: req.body.name,
        grade: req.body.grade,
        rpe: req.body.rpe,
        attempts: req.body.attempts,
        crag: req.body.crag
    })

    try {
        const addedBoulder = await boulder.save()
        res.send(addedBoulder)
    } catch(err) {
        res.status(400).send(err)
    }
}

export const editBoulder = (req, res) => {

}

export const deleteBoulder = (req, res) => {

}