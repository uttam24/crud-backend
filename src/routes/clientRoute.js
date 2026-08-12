import express from 'express';

import * as clientControllers from  '../controllers/clientControllers.js'

const router  = express.Router();

router.get('/clients', clientControllers.getClients)

router.post('/clients', clientControllers.createClient)
router.put('/clients/:id', clientControllers.updateClient)
router.delete('/clients/:id', clientControllers.deleteClient)
router.get('/clients/search', clientControllers.searchClients)

export default router