const database = require("../models");

const adressRegistrationController = {
  cadastro_endereco: async (req, res) => {
    const { address, number, complemento, bairro, city, state, CEP } = req.body;

    const endereco = await database.Cliente_endereco.create({
      endereco: address,
      numero: number,
      complemento,
      bairro,
      cidade: city,
      estado: state,
      CEP,
    });

    console.log(endereco);

    return res.json({
      id: endereco.id,
      endereco: endereco.endereco,
      numero: endereco.numero,
      complemento: endereco.complemento,
      bairro: endereco.bairro,
      cidade: endereco.cidade,
      estado: endereco.estado,
      CEP: endereco.cep,
    });
  },

  adressRegistrationPage: (req, res) => {
    return res.render("adressregistration");
  },
};

module.exports = adressRegistrationController;
