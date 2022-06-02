const express = require('express');
const router = express.Router();

// ************ Controller Require ************

const mainController = require('../controllers/mainController');

/* Home pages */
router.get('/', mainController.homePage)
router.get('/paineldousuario', mainController.painelPage) /* GET login page. */
router.get('/produtos', mainController.productsPage)
router.get('/registration', mainController.registrationPage)
router.get('/adressregistration', mainController.adressRegistrationPage)
router.get('/login', mainController.loginPage)
router.get('/resetpassword', mainController.resetPasswordPage)



// router.get('/cadastro', mainController.cadastroPage) /* GET cadastro page. */
// router.post('/cadastro', mainController.doRegister) /* POST cadastro page. */


router.get('/carrinho', mainController.carrinhoPage) /* GET carrinho page. */
// router.get('/carrinho/add/:id', mainController.addToCart) /* GET carrinho add. */


// router.post('/login', mainController.doLogin) /* POST do login. */
// router.get('/logout', mainController.doLogout) /* POST do login. */

module.exports = router



