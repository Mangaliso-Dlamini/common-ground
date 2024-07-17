import {Coach}  from '../models/Coach.js';

export const createCoach = async (req, res) => {
  try {
    const coach = new Coach(req.body);
    await coach.save();
    res.status(201).send(coach);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getCoach = async (req, res) => {
  try {
    const coach = await Coach.findById(req.params.id);
    if (!coach) {
      return res.status(404).send();
    }
    res.send(coach);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateCoach = async (req, res) => {
  try {
    const coach = await Coach.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!coach) {
      return res.status(404).send();
    }
    res.send(coach);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteCoach = async (req, res) => {
  try {
    const coach = await Coach.findByIdAndDelete(req.params.id);
    if (!coach) {
      return res.status(404).send();
    }
    res.send(coach);
  } catch (error) {
    res.status(500).send(error);
  }
};

