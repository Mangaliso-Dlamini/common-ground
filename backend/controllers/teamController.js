import {Team}  from '../models/Team.js';

export const createTeam = async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(201).send(team);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      return res.status(404).send();
    }
    res.send(team);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!team) {
      return res.status(404).send();
    }
    res.send(team);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);
    if (!team) {
      return res.status(404).send();
    }
    res.send(team);
  } catch (error) {
    res.status(500).send(error);
  }
};

