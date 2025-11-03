import { PrismaClient } from "@prisma/client";
import md5 from "md5";
const prisma = new PrismaClient();

export const getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const getUsersById = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { userID: Number(req.params.id) },
  });
  res.json(user);
};

export const addUsers = async (req, res) => {
  try {
    const { name, username, password, role } = req.body;
    const result = await prisma.user.create({
      data: {
        name,
        username,
        password: md5(password),
        role
      },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const editUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, username, password, role } = req.body;
    const result = await prisma.user.update({
      where: { userID: Number(id) },
      data: {
       name,
       username,
       password: md5(password),
       role
      },
    });
    res.status(200).json({
      message: "Data berikut berhasil dirubah",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await prisma.user.delete({
      where: { userID: Number(id) },
    });
    res.status(200).json({
      message: "Data berikut berhasil dihapus",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
