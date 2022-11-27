const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb+srv://tusurdb:tusurdb@cluster0.2qgmz.mongodb.net/?retryWrites=true&w=majority')

const start = async () => {
    try {
        await client.connect()
        console.log('Соединение установлено')
        const users = client.db().collection('teachers')
        await users.insertOne({fullname: 'Исаков Александр Михайлович'})
    } catch (e){
        console.log(e)
    }
}

start()