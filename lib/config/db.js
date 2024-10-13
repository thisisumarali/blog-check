import mongoose from "mongoose";

export const ConnectDb = async () => {
    await mongoose.connect('mongodb+srv://umarkhaneducation:blog-next@blog-next.qc4oz.mongodb.net/blog-app')
    console.log("db connect successfully")
}