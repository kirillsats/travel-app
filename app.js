const express = require('express');
const app = express();
const PORT = 3000;

app.get('/travel', (req, res) => {
  res.send("Minu lemmik reisisihtkoht on Jaapan.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
