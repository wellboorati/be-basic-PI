const express = require('express');
const router = express.Router();

// ************ Controller Require ************

const mainController = require('../controllers/mainController');
const loginController = require('../controllers/loginController');
const registrationController = require('../controllers/registrationController');
const adressRegistrationController = require('../controllers/adressRegistrationController');
const produtosEstoqueController = require('../controllers/produtosEstoqueController');
const fornecedorController = require('../controllers/fornecedorController');
const { validateRegister } = require('../middlaware/registerValidation');
const auth = require('../middlaware/auth')

/* Home pages */
router.get('/', mainController.homePage)
router.get('/paineldousuario', auth, mainController.painelPage) /* GET login page. */
router.get('/produtos', mainController.productsPage)

router.get('/resetpassword', mainController.resetPasswordPage)
//checkout
router.get('/checkout', mainController.checkoutPage)
router.get('/productdetails', mainController.productdetailsPage)

router.get('/login', loginController.loginPage)
router.post('/login', loginController.login)


router.get('/registration', registrationController.registrationPage)
router.post('/registration', registrationController.cadastro);
// router.post('/registration', validateRegister, registrationController.cadastro);

router.get('/fornecedor', fornecedorController.fornecedorRegistration)
router.post('/fornecedor', fornecedorController.cadastro_fornecedor);



router.get('/adressregistration', adressRegistrationController.adressRegistrationPage)
router.post('/adressregistration', adressRegistrationController.cadastro_endereco);


router.get('/produtosestoque', produtosEstoqueController.productInventoryPage)
router.post ('/produtosestoque',produtosEstoqueController.cadastro_produtos_estoque)
router.get('/listarprodutos',produtosEstoqueController.listarProdutos )


// router.get('/cadastro', mainController.cadastroPage) /* GET cadastro page. */
// router.post('/cadastro', mainController.doRegister) /* POST cadastro page. */


router.get('/carrinho', auth, mainController.carrinhoPage) /* GET carrinho page. */
// router.get('/carrinho/add/:id', mainController.addToCart) /* GET carrinho add. */

router.get('/adminpage', auth, mainController.adminPage) /* GET carrinho page. */
// router.get('/carrinho/add/:id', mainController.addToCart) /* GET carrinho add. */


// router.post('/login', mainController.doLogin) /* POST do login. */
// router.get('/logout', mainController.doLogout) /* POST do login. */




module.exports = router