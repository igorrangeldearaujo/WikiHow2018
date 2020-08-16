const express = require('express')
const router = express.Router()
const controller = require('../controllers/publicacoes')

router.post('/nova',controller.novaForm)
router.get('/nova',controller.nova)
router.get('/categoria/:categoria',controller.list)
router.get('/excluir/:categoria/:id',controller.excluir)
router.get('/editar/:categoria/:id',controller.editar)
router.post('/editar/:categoria/:id',controller.editarP)

module.exports = router