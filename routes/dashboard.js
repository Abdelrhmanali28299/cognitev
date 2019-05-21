const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    let lastIndex = __dirname.lastIndexOf("/");
    let str = __dirname.substring(0, lastIndex);
    res.sendFile('views/dashboard.html', {root: str })
})

module.exports = router