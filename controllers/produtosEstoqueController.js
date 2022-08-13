const database = require("../models");

const produtosEstoqueController = {
  cadastro_produtos_estoque: async (req, res) => {
    const {
      fornecedor_id,
      nome,
      preco,
      quantidade,
      ativo,
    } = req.body;


    const produtosEstoque = await database.Produto_estoque.create({

      // fornecedor_id: fornecedor.id,
      fornecedor_id,
      nome,
      preco,
      quantidade_disponivel: quantidade,
      ativo,
    });

    // console.log(produtosEstoque);

    // this.listarProdutos;

    return res.json({
      id: produtosEstoque.id,
      // fornecedor_id: produtosEstoque.id,
      nome: produtosEstoque.nome,
      preco: produtosEstoque.preco,
      quantidade: produtosEstoque.quantidade_disponivel,
      ativo: produtosEstoque.ativo,
    });
  },

  productInventoryPage: (req, res) => {
    return res.render("produtosestoque");//ou res.json
  },

  listarProdutos: async (req,res)=>{
    //const produtos = await database.Produto_estoque.findAll()
    //return res.json(produtos);
    return res.render("listarProdutos");
  }

};

module.exports = produtosEstoqueController;

// listarProdutos: async (req,res) => {
//   const produtos = await database.Produto_estoque.findAll()
//   return res.render("listarprodutos",{produtos});

// }