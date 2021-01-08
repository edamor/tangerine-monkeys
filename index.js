const express = require('express');
const path = require('path');

// Unique Names Generator
const { uniqueNamesGenerator, 
  adjectives, 
  NumberDictionary, 
  animals } = require('unique-names-generator');

const app = express();

// Random username API route
app.get('/api/username', (req, res) => {
  const numberDictionary = NumberDictionary.generate({length: 4})
  const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, animals, numberDictionary], separator: "-" });
  return res.send(randomName);
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
