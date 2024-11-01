Sistem CRUD Mahasiswa adalah aplikasi web yang memungkinkan pengguna untuk mengelola data mahasiswa dengan mudah. Pengguna dapat menambahkan, mengedit, dan menghapus data mahasiswa. Data mahasiswa disimpan dalam file JSON dan dapat diakses melalui server Node.js.

## Fitur

- **Menambah Mahasiswa**: Pengguna dapat menambahkan data mahasiswa baru.
- **Mengedit Mahasiswa**: Pengguna dapat mengedit data mahasiswa yang sudah ada.
- **Menghapus Mahasiswa**: Pengguna dapat menghapus data mahasiswa.
- **Menampilkan Daftar Mahasiswa**: Menampilkan semua data mahasiswa dalam tabel.
- **Simpan Data ke JSON**: Data mahasiswa disimpan dalam file JSON di server.

## Teknologi yang Digunakan

- **Frontend**: 
  - React
  - Axios
  - CSS untuk styling
- **Backend**: 
  - Node.js
  - Express
  - Body-parser
  - CORS

## Prerequisites

Sebelum memulai, pastikan Anda telah menginstal [Node.js](https://nodejs.org/) dan [npm](https://www.npmjs.com/get-npm) di komputer Anda.

## Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan aplikasi ini:

### 1. Kloning Repositori

```bash
git clone <URL_REPOSITORY>
cd <NAMA_FOLDER>
```

### 2. Instal Dependensi Frontend

Masuk ke folder frontend (biasanya bernama `client` atau serupa) dan jalankan perintah berikut:

```bash
cd mahasiswalist
npm install
```

### 3. Menjalankan Aplikasi Frontend

Setelah semua dependensi terinstal, jalankan aplikasi frontend dengan perintah:

```bash
npm start
```

Aplikasi akan berjalan di `http://localhost:3000`.

### 4. Instal Dependensi Backend

Masuk ke folder backend (biasanya bernama `backend` atau serupa) dan jalankan perintah berikut:

```bash
cd mahasiswa-backend
npm install
```

### 5. Menjalankan Server Backend

Setelah semua dependensi terinstal, jalankan server backend dengan perintah:

```bash
node server.js
```

Server akan berjalan di `http://localhost:5000`.

## Menggunakan Aplikasi

1. Buka aplikasi di browser dengan mengunjungi `http://localhost:3000`.
2. Gunakan formulir untuk menambah mahasiswa baru.
3. Klik tombol edit untuk mengubah data mahasiswa yang sudah ada.
4. Klik tombol hapus untuk menghapus mahasiswa dari daftar.

## Struktur Proyek

```plaintext
.
├── frontend               # Folder untuk aplikasi React
│   ├── public
│   ├── src
│   └── package.json
└── backend                # Folder untuk server Node.js
    ├── mahasiswa.json     # File JSON untuk menyimpan data mahasiswa
    └── server.js
```

## Contributing

Jika Anda ingin berkontribusi pada proyek ini, silakan buat pull request atau laporkan masalah.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## Penulis

- Fajar Maulana - [Profil Saya](https://www.linkedin.com/in/fajar-maulana-a843ab261/)
```

### Menambahkan Informasi

- Gantilah `<URL_REPOSITORY>` dengan URL repositori Git yang sesuai.
- Gantilah `<NAMA_FOLDER>` dengan nama folder tempat Anda mengkloning repositori.
- Gantilah `frontend` dan `backend` dengan nama folder yang sesuai jika menggunakan nama yang berbeda.
- Sesuaikan nama penulis dan profil Anda di bagian penulis jika perlu.
