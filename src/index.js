const express = require('express');



const app = express();

// Random username API route
app.get('/api/index', (req, res) => {
  
  return res.send("hello");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
