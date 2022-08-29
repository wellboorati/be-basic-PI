function auth(req, res, next){
    console.log(req.query)

    if(typeof(req.session.usuario) != 'undefined'){
        return next()
    }
    else {
        res.render('logado', {carrinho: true})
    // return res.render("login")
    }
}

module.exports = auth