
const mainController = {

    homePage: (req, res) => {
    return res.render('index')
    },

    loginPage: (req, res) => {
        return res.render('login')
    },

    painelPage: (req, res) => {
        return res.render('paineldousuario')
    },

    carrinhoPage: (req, res) => {
        return res.render('carrinho')
    },

    productsPage: (req, res) => {
        return res.render('produtos')
    },

    registrationPage: (req, res) => {
        return res.render('registration')
    },

    adressRegistrationPage: (req, res) => {
        return res.render('adressregistration')
    },

    resetPasswordPage: (req, res) => {
        return res.render('resetpassword')
    },
    checkoutPage: (req, res) => {
        return res.render('checkout')
    },
    productdetailsPage: (req, res) => {
        return res.render('productdetails')
    }

};

module.exports = mainController;

