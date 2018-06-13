const TeamControler = require('../controllers/team_controller'),
    express = require('express'),
    router = express.Router(),
    tc = new TeamControler(); //Instancia en la clase

router
    .get('/', tc.getAll)
    .get('/agregar', tc.addForm)
    .get('/editar/:id', tc.getOne)
    .post('/', tc.save)
    .put('/actualizar/:id', tc.save)
    .delete('/eliminar/:id', tc.delete)
    //Estaticos
    .get('/inicio', tc.inicio)
    .get('/acerca', tc.acerca)
    .get('/modelos', tc.modelo)
    .get('/login', tc.login)
    .get('/ubicacion', tc.ubicacion)
    .get('/rogelio', tc.rogelio)

    .use(tc.error404);

module.exports = router;
