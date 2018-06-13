const TeamModel = require('../models/team_model'),
    tm = new TeamModel(); 

class TeamControler {
    getAll(req, res, next) {  
        tm.getAll((err, data) => {
            if (!err) {
                res.render('index', {
                    title: 'Indentation War',
                    data: data
                }); 
            }
        })
    }

    getOne(req, res, next) {
        let id = req.params.id; 
        console.log(id);

        tm.getOne(id, (err, data) => {
            if (!err) {
                res.render('edit', { 
                    title: 'Editar Contacto',
                    data: data 
                });
            }
        })
    }

    save(req, res, next) {
        let contacto = {
            id: (req.body.id || 0),
            name: req.body.name, 
            twitter: req.body.twitter,
            country: req.body.country,
            side: req.body.side
        };

        console.log(contacto);
        tm.save(contacto, (err) => {
            if (!err) {
                res.redirect('/');
            } else {
                return next(new Error('Registro no salvado'));
            }
        });
    }

    delete(req, res, next) {

        let id = req.params.id; 
        console.log(id)
        tm.delete(id, (err, data) => {
            if (!err) {
                res.redirect('/')
            } else {
                return next(new Error('Registro no encontrado'))
            }
        });
    }

    addForm(req, res, next) {
        res.render('add', { title: 'Agregar Contacto' });
    }

    /**ESTATICAS */

    inicio(req, res, next) {
        res.render('static/inicio', {title: 'Inicio'})
    }
    modelo(req, res, next) {
        res.render('static/modelos', {title: 'Modelos'})
    }
    login(req, res, next) {
        res.render('static/login', {title: 'Login'})
    }
    acerca(req, res, next) {
        res.render('static/acerca', {title: 'Acerca'})
    }
    ubicacion(req, res, next) {
        res.render('static/ubicacion', {title: 'Ubicacion'})
    }
    rogelio(req, res, next){
        res.render('static/rogelio', {title: "rogelio"})
    }

    error404(req, res, next) {
        let err = new Error();
        err.status = 404;
        err.statusText = 'NOT FOUND';

        res.render('error', { error: err });
    }
}

module.exports = TeamControler;