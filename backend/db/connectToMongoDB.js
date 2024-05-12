import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://singhanubhav8122000:waMTobPzAk9CUuI8@cluster0.cvm1hop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
