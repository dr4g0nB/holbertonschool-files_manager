import { MongoClient } from 'mongodb';

const HOST = process.env.DB_HOST || 'localhost';
const PORT = process.env.DB_PORT || 27017;
const DATABASE = process.env.DB_DATABASE || 'files_manager';
const url = `mongodb://${HOST}:${PORT}`;

class DBClient {
  constructor() {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
      if (!err) {
        this.db = client.db(DATABASE);
        this.userCol = this.db.collection('users');
        this.filesCol = this.db.collection('files');
      } else {
        console.log(err.message);
        this.db = false;
      }
    });
  }

  // Function that checks if connection to MongoDB is a success
  isAlive() {
    if (this.db) {
      return true;
    }
    return false;
  }

  // Function that returns the number of documents in the
  // collection users
  async nbUsers() {
    const numUsers = this.userCol.countDocuments();
    return numUsers;
  }

  // Function that returns the number of documents in the
  // collection files
  async nbFiles() {
    const numFile = this.filesCol.countDocuments();
    return numFile;
  }
}
const dbClient = new DBClient();
export default dbClient;
