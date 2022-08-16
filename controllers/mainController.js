
const mainController = {

    homePage: (req, res) => {
    return res.render('index')
    },

    nossaHistoriaPage: (req, res) => {
        return res.render('nossa-historia')
    },

    adminPage: (req, res) => {
        return res.render('adminpage')
    },

    painelPage: (req, res) => {
        return res.render('paineldousuario')
    },

    carrinhoPage: (req, res) => {
        return res.render('carrinho')
    },

    pagamentoPage: (req, res) => {
        return res.render('forma-pagamento')
    },

    productsPage: (req, res) => {
        return res.render('produtos')
    },

    categoriesPage: (req, res) => {
        return res.render('categorias')
    },

    resetPasswordPage: (req, res) => {
        return res.render('resetpassword')
    },

    checkoutPage: (req, res) => {
        return res.render('checkout')
    },

    
    productdetailsPage: (req, res) => {
        return res.render('productdetails')
    },

    page404: (req, res) => {
        return res.render('404')
    },
    // productInventoryPage: (req, res) => {
    //     return res.render('produtosEstoque')
    //     },
        listarProdutos: (req, res) => {
            return res.render('listarProdutos')
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

