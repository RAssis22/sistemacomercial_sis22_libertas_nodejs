//index.js
const UsuarioRoute = require('./UsuarioRoute');
const VendedorRoute = require('./VendedorRoute');
const ProdutoRoute = require('./ProdutoRoute');
const CompraRoute = require('./CompraRoute');
const MarcaRoute = require('./MarcaRoute')
module.exports = (app) => {
   UsuarioRoute(app)
   VendedorRoute(app)
   ProdutoRoute(app)
   CompraRoute(app)
   MarcaRoute(app)
}
