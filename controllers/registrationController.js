const database = require('../models')

const registrationController = {

cadastro: async (req, res) => {
    const { nome, senha, email, sexo, cpf, data_nascimento, telefone } = req.body;
    // const hash = await bcrypt.hash(senha, 10);
    const usuario = await CadastroService.createCadastro(
        nome,
        email,
        senha,
        sexo,
        cpf,
        data_nascimento,
        telefone
    );

    return res.json({nome: usuario.nome, senha: usuario.senha, email: usuario.email, sexo: usuario.sexo, cpf: usuario.cpf, data_nascimento: usuario.data_nascimento, telefone: usuario.telefone});
},

registrationPage: (req, res) => {
    return res.render('registration')
},

adressRegistrationPage: (req, res) => {
    return res.render('adressregistration')
}
}

module.exports = registrationController;