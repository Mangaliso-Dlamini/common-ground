import {TrainingSession}  from '../models/TrainingSession.js';

export const createTrainingSession = async (req, res) => {
  try {
    const trainingSession = new TrainingSession(req.body);
    await trainingSession.save();
    res.status(201).send(trainingSession);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getTrainingSession = async (req, res) => {
  try {
    const trainingSession = await TrainingSession.findById(req.params.id);
    if (!trainingSession) {
      return res.status(404).send();
    }
    res.send(trainingSession);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateTrainingSession = async (req, res) => {
  try {
    const trainingSession = await TrainingSession.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!trainingSession) {
      return res.status(404).send();
    }
    res.send(trainingSession);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteTrainingSession = async (req, res) => {
  try {
    const trainingSession = await TrainingSession.findByIdAndDelete(req.params.id);
    if (!trainingSession) {
      return res.status(404).send();
    }
    res.send(trainingSession);
  } catch (error) {
    res.status(500).send(error);
  }
};

