import {Role}  from '../models/Role.js';

export const createRole = async (req, res) => {
  try {
    const role = new Role(req.body);
    await role.save();
    res.status(201).send(role);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getRole = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) {
      return res.status(404).send();
    }
    res.send(role);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!role) {
      return res.status(404).send();
    }
    res.send(role);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);
    if (!role) {
      return res.status(404).send();
    }
    res.send(role);
  } catch (error) {
    res.status(500).send(error);
  }
};

