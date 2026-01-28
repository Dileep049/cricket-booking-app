const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://chintaladivya67_db_user:Dileep@%9381@cluster0.6g1nfo.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed", err);
  }
}

connectDB();