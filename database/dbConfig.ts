import mongoose from 'mongoose';

const mongoURI = "mongodb+srv://chinuvakare:7BNxqnaLLqwJzWWa@cluster0.muojsz7.mongodb.net/CRUD-TS?retryWrites=true&w=majority";

export function connection(){
    mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
}
