import mongoose from 'mongoose'
const mongoURI = "mongodb://localhost:27017/iNoteBook";
const connectToMongo = () => {
    mongoose.connect(mongoURI);
    console.log("Connected to mongoDB successfully");
}

export default connectToMongo