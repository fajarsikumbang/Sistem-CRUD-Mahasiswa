import React from 'react';

function MahasiswaItem({ mhs, editRow, deleteMahasiswa }) {
  return (
    <tr>
      <td>{mhs.name}</td>
      <td>{mhs.nim}</td>
      <td>{mhs.prodi}</td>
      <td>{mhs.fakultas}</td>
      <td className="table-actions">
        <button className="edit-btn" onClick={() => editRow(mhs)}>Edit</button>
        <button className="delete-btn" onClick={() => deleteMahasiswa(mhs.id)}>Hapus</button>
      </td>
    </tr>
  );
}

export default MahasiswaItem;
