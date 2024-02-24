import prisma from "../DB/db.config.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (findUser) {
    return res.json({ status: 400, message: "user alreday registerd" });
  }
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return res.status(201).json({ newUser });
};

//update user
export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;
  const updatedUser = await prisma.user.update({
    where: { id: Number(userId) },
    data: { name, email, password },
  });
  return res.status(201).json({ message: "updated sucesfully", updateUser });
};

//get all users

export const fetchUsers = async (req, res) => {
  const users = await prisma.user.findMany({});
  return res.status(200).json({ message: "all users ..", users });
};

//fetch particular user
export const particularUser = async (req, res) => {
  console.log("req.params : ", req.params);
  const userId = req.params.id;
  try {
    const targetUser = await prisma.user.findFirst({
      where: {
        id: Number(userId),
      },
    });
  } catch (error) {
    console.log("error in cathc block : ", error);
  }
  return res.status(200).json({ message: "targeted user", targetUser });
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const userToDelete = await prisma.user.delete({
    where: { id: Number(userId) },
  });
  return res.status(200).json({ message: "user deleted.. ", userToDelete });
};
