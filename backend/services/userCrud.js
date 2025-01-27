import User from '../models/user.js';
import bcrypt from 'bcrypt';

// Create a new user (signup)
export const createUser = async (email, password, name, role) => {
  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email,
    password: hashedPassword,
    name,
    role,
  });

  await newUser.save();
  return newUser;
};

// Read a user's details (get profile)
export const getUser = async (userId) => {
  return await User.findById(userId);
};

// Update user details
export const updateUser = async (userId, name, role) => {
  return await User.findByIdAndUpdate(
    userId,
    { name, role },
    { new: true }
  );
};

// Delete a user
export const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};