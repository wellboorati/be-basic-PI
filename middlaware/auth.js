function auth(req, res, next){
    console.log(req.query)

    if(typeof(req.session.usuario) != 'undefined'){
        return next()
    }
    else {
        res.render('logado',  {query : { id: req.query.id, carrinho: true }})
    // return res.render("login")
    }
}

module.exports = auth