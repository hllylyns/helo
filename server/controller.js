let users = [];
let id = 0;

module.exports = {
  create: ( req, res ) => {
    const { username, password } = req.body;
    messages.push({ id, username, password });
    id++;
    res.status(200).send( "thank you for registering" );
  }
}