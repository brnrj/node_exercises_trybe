module.exports = function checkToken(req){
  const { authorization } = req.headers
  if(!authorization || authorization.length !== 16) throw new Error('Token inválido!')
}