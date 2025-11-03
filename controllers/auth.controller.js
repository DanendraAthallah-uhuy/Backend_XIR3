import md5 from "md5";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const secretKey = process.env.JWT_SECRET || "latihan_ukl";


export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username dan password wajib diisi",
      });
    }

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user || user.password !== md5(password)) {
      return res.status(401).json({
        success: false,
        logged: false,
        message: "Username atau password salah",
      });
    }

    const payload = { id: user.userID, username: user.username, role: user.role };
    const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

    return res.status(200).json({
      success: true,
      logged: true,
      message: "Login berhasil",
      token,
      data: {
        id: user.userID,
        username: user.username,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      logged: false,
      message: "Terjadi kesalahan saat login",
    });
  }
};