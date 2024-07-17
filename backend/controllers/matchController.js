import {Match}  from '../models/Match.js';

export const createMatch = async (req, res) => {
  try {
    const match = new Match(req.body);
    await match.save();
    res.status(201).send(match);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getMatch = async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    if (!match) {
      return res.status(404).send();
    }
    res.send(match);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateMatch = async (req, res) => {
  try {
    const match = await Match.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!match) {
      return res.status(404).send();
    }
    res.send(match);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteMatch = async (req, res) => {
  try {
    const match = await Match.findByIdAndDelete(req.params.id);
    if (!match) {
      return res.status(404).send();
    }
    res.send(match);
  } catch (error) {
    res.status(500).send(error);
  }
};

