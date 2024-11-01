import React from 'react';
import MahasiswaItem from './MahasiswaItem';

function MahasiswaList({ mahasiswa, editRow, deleteMahasiswa }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nama</th>
          <th>NIM</th>
          <th>Program Studi</th>
          <th>Fakultas</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {mahasiswa.length > 0 ? (
          mahasiswa.map((mhs) => (
            <MahasiswaItem key={mhs.id} mhs={mhs} editRow={editRow} deleteMahasiswa={deleteMahasiswa} />
          ))
        ) : (
          <tr>
            <td colSpan={5}>Tidak ada data mahasiswa</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default MahasiswaList;
