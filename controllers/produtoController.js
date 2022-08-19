const database = require('../models');


class produtoController {
    static async listarTodosOsProdutos(req,res) {
        try{
        const produtos = await database.Produto_estoque.findAll()
        return res.render("produtos",{produtos})
        // return res.status(200).json(todosOsProdutos)
        } catch(error) {
            return res.status(500).json(error.message)

        }
    }

    static async categorias(req,res) {
        try{
        const produtos = await database.Produto_estoque.findAll()
        return res.render("produtos",{produtos})
        // return res.status(200).json(todosOsProdutos)
        } catch(error) {
            return res.status(500).json(error.message)

        }
    }
}

// const produtoController = {
//     listarTodosOsProdutos: async (req, res) => {

//         const produtos = await database.Produto_estoque.findAll()
//         return res.render("produtos",{nome: nome, preco: preco, tamanho: tamanho, cor: cor, image_url: image_url},);

        // try {
        //     const todosOsProdutos = await database.Produto_estoque.findAll()
        //     return res.status(200).render('produtos', { todosOsProdutos }, )
        // } catch(error) {
        //     res.status(500).render('error', { error: error })
        // }
    // }
// }

// const produtoController = {
//     listarTodosOsProdutos: async (req, res) => {
//         try {
//             const todosOsProdutos = await database.produto_estoque.findAll()
//             return res.status(200).json(todosOsProdutos)
//         } catch(error) {
//             return res.status(500).json(error.message)
            // return res.status(200).render('produtos', {nome: nome, preco: preco, tamanho: tamanho, cor: cor, image_url: image_url } )
        // } catch(error) {
        //     res.status(500).render('error', { error: error })
        // }
    // }
// };

module.exports = produtoController;