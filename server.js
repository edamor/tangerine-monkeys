const express = require('express');
const app = express();
const database = require('./data.json')



app.get('/api/suggest', (req, res) => {

  const response = [];
  
  try {
    const { q } = req.query;

    // Only check the state field if query string length is less than or equal to 2
    if (q.length <= 2) {
      database.forEach(item => {
        if (response.length >= 5) {
          return;
        }
        if (item.state === q.toUpperCase()) {
          response.push(item)
        }
      })

      // If initial search found nothing, search query string in name field
      if (response.length === 0) {
        database.forEach(item => {
          if (response.length >= 5) {
            return;
          }
          if (item.name.toUpperCase().startsWith(q.toUpperCase())) {
            response.push(item)
          }
        })
      }

    // If query string length is greater than 2, then no need to search state field
    // Will search name field instead
    } else {
      database.forEach(item => {
        if (response.length >= 5) {
          return;
        }
        if (item.name.toUpperCase().startsWith(q.toUpperCase())) {
          response.push(item)
        }
      })
    }
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
  return res.send(response)
});


const PORT = 3000;
module.exports = app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


