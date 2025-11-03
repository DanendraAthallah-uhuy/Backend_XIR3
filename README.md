# Aplikasi Presensi Online

## Deskripsi
Aplikasi Presensi Online adalah REST API berbasis Node.js yang digunakan untuk mencatat dan mengelola kehadiran pengguna secara digital. API ini menyediakan fitur login, tambah pengguna, input presensi (Hadir, Izin, Sakit, Alpa), serta menampilkan rekap dan analisis kehadiran.

## Identitas
Nama: Danendra Athallah Indiarto  
Kelas: XI RPL 3  
Mapel: Produktif

## Teknologi yang Digunakan
- Node.js
- Express.js
- Prisma
- MySQL
- JWT
- bcrypt
- dotenv
- body-parser
- nodemon

## Fitur Program
- Register User
- Login User (JWT Authentication)
- Add Presensi
- Akses API menggunakan token

## Cara Menjalankan Program
1. Clone repository dari GitHub
2. Jalankan perintah berikut untuk menginstall package:
   ```bash
   npm install
   ```
3. Buat file `.env` dan isi konfigurasi database beserta JWT Secret
4. Jalankan server menggunakan perintah:
   ```bash
   npm run dev
   ```

## Dokumentasi Program

### 1. Struktur Folder
![Struktur Folder](assets/images/folder.png)

### 2. Login (Postman)
![Login](assets/images/login.png)

### 3. Add User (POST)
![Add User](assets/images/add-user.png)

### 4. Add Presensi (POST)
![Add Presensi](assets/images/add-presensi.png)

### 5. Analysis
![Analysis](assets/images/analysis.png)

### 6. Summary
![Summary](assets/images/summary.png)
