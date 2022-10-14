const mongoose = require('mongoose')

 exports.db_connect = mongoose.connect('mongodb+srv://bleudy:Bk28051996@cluster0.mzmodyv.mongodb.net/chatAppli?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))
