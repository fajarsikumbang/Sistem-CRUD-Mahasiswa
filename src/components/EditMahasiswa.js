import React, { useState, useEffect } from 'react';

function EditMahasiswa({ editing, setEditing, currentMahasiswa, updateMahasiswa }) {
  const [mahasiswa, setMahasiswa] = useState(currentMahasiswa);

  useEffect(() => {
    setMahasiswa(currentMahasiswa);
  }, [currentMahasiswa]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMahasiswa({ ...mahasiswa, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMahasiswa(mahasiswa);
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
      <button>Update Mahasiswa</button>
      <button onClick={() => setEditing(false)}>Batal</button>
    </form>
  );
}

export default EditMahasiswa;
