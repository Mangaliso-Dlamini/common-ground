import {League}  from '../models/League.js';

export const createLeague = async (req, res) => {
  try {
    const league = new League(req.body);
    await league.save();
    res.status(201).send(league);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getLeague = async (req, res) => {
  try {
    const league = await League.findById(req.params.id);
    if (!league) {
      return res.status(404).send();
    }
    res.send(league);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateLeague = async (req, res) => {
  try {
    const league = await League.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!league) {
      return res.status(404).send();
    }
    res.send(league);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteLeague = async (req, res) => {
  try {
    const league = await League.findByIdAndDelete(req.params.id);
    if (!league) {
      return res.status(404).send();
    }
    res.send(league);
  } catch (error) {
    res.status(500).send(error);
  }
};

