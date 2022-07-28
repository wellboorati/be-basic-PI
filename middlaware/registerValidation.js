const { check } = require('express-validator');
const { validationResult } = require('express-validator');

const validateRegister = [

  check('name')
    .notEmpty().withMessage('Você deve preencher com seu nome').bail()
    .isLength({ min: 8 }).withMessage('O nome precisa ter mais do que 8 caracteres'),
  check('email')
    .notEmpty().withMessage('Você deve preencher com seu email').bail()
    .isEmail().withMessage('Deve inserir um email válido'),
  check('gender')
    .notEmpty().withMessage('Você deve escolher um gênero').bail(),
    check('cpf')
    .notEmpty().withMessage('Deve preencher com números apenas').bail()
    .isLength({ min: 11 }).withMessage('CPF tem 11 números'),
  check('telefone')
    .notEmpty().withMessage('Deve inserir um número de telefone com DDD').bail()
    .isLength({ min: 9 }).withMessage('Digite sem - ou .'),
    check('password')
    .notEmpty().withMessage('Deve preencher a senha').bail()
    .isLength({ min: 8 }).withMessage('A senha deve conter pelo menos 8 dígitos'),
    check('address')
    .notEmpty().withMessage('Deve preencher com endereço').bail()
    .isLength({ min: 8 }).withMessage('Endereço precisa ter pelo menos 8 caracteres'),
    check('number')
    .notEmpty().withMessage('Deve preencher com número').bail()
    .isLength({ min: 2 }).withMessage('Número precisa ter pelo menos 2 caracteres'),
    check('complemento')
    .notEmpty().withMessage('Deve preencher com complemento').bail()
    .isLength({ min: 4 }).withMessage('Caso não tenha complemento, preencher com são se aplica'),
    check('bairro')
    .notEmpty().withMessage('Deve preencher com bairro').bail()
    .isLength({ min: 4 }).withMessage('Preencha com bairro'),
    check('city')
    .notEmpty().withMessage('Deve preencher com cidade').bail()
    .isLength({ min: 4 }).withMessage('Preencha com cidade'),
    check('state')
    .notEmpty().withMessage('Deve preencher com estado').bail()
    .isLength({ min: 4 }).withMessage('Preencha com estado'),
    check('cep')
    .notEmpty().withMessage('Deve preencher com CEP').bail()
    .isLength({ min: 4 }).withMessage('Preencha com CEP'),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors.mapped());
            return res.render('registration', { errors: errors.mapped() });
        }
    }
];

module.exports = {
  validateRegister
}