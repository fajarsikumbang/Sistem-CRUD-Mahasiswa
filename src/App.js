import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MahasiswaList from './components/MahasiswaList';
import AddMahasiswa from './components/AddMahasiswa';
import EditMahasiswa from './components/EditMahasiswa';

const API_URL = 'http://localhost:5000/mahasiswa'; // URL server

function App() {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentMahasiswa, setCurrentMahasiswa] = useState({
    id: null,
    name: '',
    nim: '',
    prodi: '',
    fakultas: ''
  });

  // Load data from server when the component mounts
  useEffect(() => {
    const fetchMahasiswa = async () => {
      const response = await axios.get(API_URL);
      setMahasiswa(response.data);
    };
    fetchMahasiswa();
  }, []);

  // Fungsi Create
  const addMahasiswa = async (mhs) => {
    const response = await axios.post(API_URL, mhs);
    setMahasiswa([...mahasiswa, response.data]);
  };

  // Fungsi Update
  const updateMahasiswa = async (updatedMahasiswa) => {
    setEditing(false);
    setMahasiswa(mahasiswa.map((mhs) => (mhs.id === updatedMahasiswa.id ? updatedMahasiswa : mhs)));
  };

  // Fungsi Delete
  const deleteMahasiswa = async (id) => {
    setMahasiswa(mahasiswa.filter((mhs) => mhs.id !== id));
  };

  const editRow = (mhs) => {
    setEditing(true);
    setCurrentMahasiswa({
      id: mhs.id,
      name: mhs.name,
      nim: mhs.nim,
      prodi: mhs.prodi,
      fakultas: mhs.fakultas
    });
  };

  return (
    <div className="container">
      <header>
        <h1>Sistem CRUD Mahasiswa</h1>
        <p>Kelola data mahasiswa dengan mudah</p>
      </header>
      <h2>Daftar Mahasiswa</h2>
      {editing ? (
        <EditMahasiswa
          editing={editing}
          setEditing={setEditing}
          currentMahasiswa={currentMahasiswa}
          updateMahasiswa={updateMahasiswa}
        />
      ) : (
        <AddMahasiswa addMahasiswa={addMahasiswa} />
      )}
      <MahasiswaList mahasiswa={mahasiswa} editRow={editRow} deleteMahasiswa={deleteMahasiswa} />
    </div>
  );
}

export default App;
