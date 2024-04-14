//index.js
const UsuarioRoute = require('./UsuarioRoute');
const VendedorRoute = require('./VendedorRoute');
const ProdutoRoute = require('./ProdutoRoute');
const CompraRoute = require('./CompraRoute');
module.exports = (app) => {
   UsuarioRoute(app)
   VendedorRoute(app)
   ProdutoRoute(app)
   CompraRoute(app)
}
