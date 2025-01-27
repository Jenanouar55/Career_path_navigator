import * as UserCrud from '../services/userCrud.js'; // Import CRUD operations

// Create a new user (signup)
export const createUser = async (req, res) => {
  try {
    const { email, password, name, role } = req.body;

    // Check if the email already exists
    const existingUser = await UserCrud.getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const newUser = await UserCrud.createUser(email, password, name, role);
    return res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};

// Read a user's details (get profile)
export const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await UserCrud.getUser(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};

// Update user details
export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, role } = req.body;

    const updatedUser = await UserCrud.updateUser(userId, name, role);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const deletedUser = await UserCrud.deleteUser(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
};