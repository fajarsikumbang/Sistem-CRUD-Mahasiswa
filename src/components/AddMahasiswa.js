import React, { useState } from 'react';

function AddMahasiswa({ addMahasiswa }) {
  const initialFormState = { id: null, name: '', nim: '', prodi: '', fakultas: '' };
  const [mahasiswa, setMahasiswa] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMahasiswa({ ...mahasiswa, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mahasiswa.name || !mahasiswa.nim || !mahasiswa.prodi || !mahasiswa.fakultas) return;
    addMahasiswa(mahasiswa);
    setMahasiswa(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nama</label>
      <input type="text" name="name" value={mahasiswa.name} onChange={handleInputChange} />
      <label>NIM</label>
      <input type="text" name="nim" value={mahasiswa.nim} onChange={handleInputChange} />
      <label>Program Studi</label>
      <input type="text" name="prodi" value={mahasiswa.prodi} onChange={handleInputChange} />
      <label>Fakultas</label>
      <input type="text" name="fakultas" value={mahasiswa.fakultas} onChange={handleInputChange} />
      <button>Tambah Mahasiswa</button>
    </form>
  );
}

export default AddMahasiswa;
