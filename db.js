const mongoose =require('mongoose');
const mongoURI ='mongodb+srv://prishu1312:Myself13@cluster0.hryvxrg.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0';
const mongoDB=async()=>{
    try {
        await mongoose.connect(mongoURI);
        console.log("connected to database")

        const db = mongoose.connection.db;
        const foodItemsCollection = db.collection("food_items");
        const data = await foodItemsCollection.find({}).toArray();

        // Fetch data from the 'food_category' collection (though not used in the code)
        const foodCategoryCollection = db.collection("food_category");
        const foodCategoryData = await foodCategoryCollection.find({}).toArray();

        if (data.length === 0) {
            console.log("No data found in 'food_items' collection.");
        } else {
            global.food_items = data;
            // console.log(global.food_items); // You can uncomment this line to log the fetched data
        }
        if (foodCategoryData.length === 0) {
            console.log("No data found in 'food_category' collection.");
        } else {
            global.food_category = foodCategoryData;
            // console.log(global.food_category);
        }
    }
    catch (error) {
        console.log(error);
        }
}
module.exports=mongoDB;