// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Path ke file JSON
const dataPath = path.join(__dirname, 'mahasiswa.json');

// Endpoint untuk mendapatkan data mahasiswa
app.get('/mahasiswa', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data');
    }
    res.send(JSON.parse(data));
  });
});

// Endpoint untuk menambah mahasiswa
app.post('/mahasiswa', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data');
    }
    const mahasiswa = JSON.parse(data);
    const newMahasiswa = { id: mahasiswa.length + 1, ...req.body };
    mahasiswa.push(newMahasiswa);

    fs.writeFile(dataPath, JSON.stringify(mahasiswa, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error saving data');
      }
      res.status(201).send(newMahasiswa);
    });
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
