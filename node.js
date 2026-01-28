mongoose.connect('mongodb+srv://Dileep049:Dileep@%9381@cluster0.xxxxx.mongodb.net/dbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('Connection Error:', err));