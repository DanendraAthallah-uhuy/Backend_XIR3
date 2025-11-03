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
- Analysis Kehadiran
- Rekap Kehadiran Bulanan
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
<img width="245" height="476" alt="Cuplikan layar 2025-11-03 195035" src="https://github.com/user-attachments/assets/0e01b956-b2d9-49e1-a01a-13a78462af3d" />

### 2. Login (Postman)
<img width="1064" height="851" alt="Cuplikan layar 2025-11-03 183359" src="https://github.com/user-attachments/assets/6a133a53-20f6-456c-8319-1eab1ea9fc5c" />

### 3. Add User (POST)
<img width="1071" height="865" alt="Cuplikan layar 2025-11-03 183109" src="https://github.com/user-attachments/assets/43f3bf57-fadc-486c-940c-0a8065898d08" />

### 4. Add Presensi (POST)
<img width="1072" height="852" alt="Cuplikan layar 2025-11-03 183155" src="https://github.com/user-attachments/assets/0814a79b-be34-4dab-987b-85220a293a34" />

### 5. Analysis
<img width="1175" height="908" alt="Cuplikan layar 2025-11-03 183326" src="https://github.com/user-attachments/assets/10fe0ee7-cb6d-4050-bcfc-2bcf0952533b" />

### 6. Summary
<img width="1069" height="822" alt="Cuplikan layar 2025-11-03 183219" src="https://github.com/user-attachments/assets/8a863d4d-0487-47b5-9f71-c1d71aa83660" />
