var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([{
        id: '1',
        site: 'headoffice',
        workstation: 'desktop01',
        description: 'mydevice',
        type: 'laptop',
        username: 'eliasonw',
        last_online: '2020-09-20 10:10:10'
    },
    {
        id: '2',
        site: 'headoffice',
        workstation: 'desktop02',
        description: 'mydevice',
        type: 'laptop',
        username: 'eliasonj',
        last_online: '2020-09-20 10:10:10'

    },
    {
        id: '3',
        site: 'otheroffice',
        workstation: 'desktop01',
        description: 'my1device',
        type: 'desktop',
        username: 'eliasonw',
        last_online: '2020-09-20 10:10:10'
    }])
});

module.exports = router;
