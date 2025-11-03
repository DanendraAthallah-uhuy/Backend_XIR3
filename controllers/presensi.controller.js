import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPresensi = async (req, res) => {
  try {
    const attendance = await prisma.attendance.findMany({
      include: {
        user: {
          select: { name: true, username: true, role: true },
        },
      },
      orderBy: {
        date: "desc",
      },
    });
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


export const getPresensiById = async (req, res) => {
  try {
    const { id } = req.params;

    const attendance = await prisma.attendance.findUnique({
      where: { attendance_id: Number(id) },
      include: {
        user: {
          select: { name: true, username: true },
        },
      },
    });

    if (!attendance) {
      return res.status(404).json({ msg: "Data presensi tidak ditemukan" });
    }

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


export const addPresensi = async (req, res) => {
  try {
    const { userId, date, time, status } = req.body;

    if (!userId || !date || !time || !status) {
      return res.status(400).json({
        msg: "Semua field (user_id, date, time, status) wajib diisi",
      });
    }
    const existing = await prisma.attendance.findFirst({
      where: {
        userId: Number(userId),
        date: new Date(date),
      },
    });

    if (existing) {
      return res.status(400).json({
        msg: "Presensi untuk tanggal ini sudah dicatat.",
      });
    }
    const result = await prisma.attendance.create({
      data: {
        userId: Number(userId),
        date: new Date(date),
        time: time,
        status,
      },
    });

    res.status(201).json({
      message: "Presensi berhasil dicatat",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};