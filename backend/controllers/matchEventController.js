import {MatchEvent}  from '../models/MatchEvent.js';

export const createMatchEvent = async (req, res) => {
  try {
    const matchEvent = new MatchEvent(req.body);
    await matchEvent.save();
    res.status(201).send(matchEvent);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getMatchEvent = async (req, res) => {
  try {
    const matchEvent = await MatchEvent.findById(req.params.id);
    if (!matchEvent) {
      return res.status(404).send();
    }
    res.send(matchEvent);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateMatchEvent = async (req, res) => {
  try {
    const matchEvent = await MatchEvent.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!matchEvent) {
      return res.status(404).send();
    }
    res.send(matchEvent);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteMatchEvent = async (req, res) => {
  try {
    const matchEvent = await MatchEvent.findByIdAndDelete(req.params.id);
    if (!matchEvent) {
      return res.status(404).send();
    }
    res.send(matchEvent);
  } catch (error) {
    res.status(500).send(error);
  }
};

