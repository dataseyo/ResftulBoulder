import express from 'express'

import {viewBoulderList, 
        viewBoulder, 
        createBoulder,
        editBoulder,
        deleteBoulder,
        getBoulderList
    } from '../controllers/BoulderControllers.js'

var router = express.Router()

// view all boulders
router.get('/list', getBoulderList);

// view one boulder
router.get('/list/:id', viewBoulder)

// post new boulder
router.post('/:id', createBoulder)

// edit boulder
router.patch('/edit', editBoulder)

// delete boulder
router.delete('/delete', deleteBoulder)

export default router