import mongoose from 'mongoose'

(async () => {
    try{
    const db = await mongoose.connect(process.env.MONGODB_URI)
    console.log('Database is connected to:', db.connection.name);
    }catch (error){
        console.log(error);
    }
})();