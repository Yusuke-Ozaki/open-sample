import * as MongoDB from 'mongodb';

const url='mongodb://localhost:27017';
export const dbName = 'nekoblog';


export default function (callback: (err: MongoDB.MongoError, client: MongoDB.MongoClient, db: MongoDB.Db) => void) {
    const client = MongoDB.MongoClient;
    client.connect(url,  (err, client) => {
        if (err) {
            callback(null, null, null);
            return;
        }
        const db = client.db('heroku_xxxxxxxx');
        callback(null, client, db);   
    });

}