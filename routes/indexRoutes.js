const express = require('express');
const router = express.Router();
const MainController = require('../controllers/mainController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// ************ Controller Require ************

/* Home pages */
router.get('/', MainController.homePage)
router.get('/login', MainController.loginPage) /* GET login page. */
router.get('/products', MainController.productsPage)

router.get('/cadastro', MainController.cadastroPage) /* GET cadastro page. */
// router.post('/cadastro', MainController.doRegister) /* POST cadastro page. */


router.get('/carrinho', MainController.carrinhoPage) /* GET carrinho page. */
// router.get('/carrinho/add/:id', MainController.addToCart) /* GET carrinho add. */


// router.post('/login', MainController.doLogin) /* POST do login. */
// router.get('/logout', MainController.doLogout) /* POST do login. */

module.exports = router



