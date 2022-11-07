const mongoose = require('mongoose')

exports.db_connect = mongoose.connect(`mongodb+srv://${process.env.USER}:Bk28051996@cluster0.mzmodyv.mongodb.net/chatAppli?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connected in database !'))
  .catch(() => console.log('Not connected in database!'))
