let users = [];
let id = 0;

module.exports = {
  create: ( req, res ) => {
    const { username, password } = req.body;
    messages.push({ id, username, password });
    id++;
    res.status(200).send( "thank you for registering" );
  },
  read: (req, res)=>{
    if(req.user){
        res.status(200).send(req.user);
    }else{
        res.status(401).send('user does not exist')
    }
  },
  getPost: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { params } = req;
    console.log(params);
    dbInstance.posts_by_username([ params ])
      .then( posts => res.status(200).send( posts ) )
      .catch( () => res.status(500).send() );
  },
}