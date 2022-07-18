
const mainController = {

    homePage: (req, res) => {
    return res.render('index')
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

    resetPasswordPage: (req, res) => {
        return res.render('resetpassword')
    },
    checkoutPage: (req, res) => {
        return res.render('checkout')
    },
    productdetailsPage: (req, res) => {
        return res.render('productdetails')
    }

    // loginPage: (req, res) => {
    //     return res.render('login')
    // },
    // registrationPage: (req, res) => {
    //     return res.render('registration')
    // },
    // adressRegistrationPage: (req, res) => {
    //     return res.render('adressregistration')
    // },

};

module.exports = mainController;

