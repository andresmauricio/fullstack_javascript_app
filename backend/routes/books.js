const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => { 
    res.json({text: 'hello baby'})
    
})

module.exports = router;