const express = require('express')
const router = express.Router()

const tinyurlService = require('../services/tinyurl.service')

router.get('/:id', tinyurlService.getUrl)
router.post('/', tinyurlService.postUrl)

module.exports = router
