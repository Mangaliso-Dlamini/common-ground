import {Facility}  from '../models/Facility.js';

export const createFacility = async (req, res) => {
  try {
    const facility = new Facility(req.body);
    await facility.save();
    res.status(201).send(facility);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getFacility = async (req, res) => {
  try {
    const facility = await Facility.findById(req.params.id);
    if (!facility) {
      return res.status(404).send();
    }
    res.send(facility);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateFacility = async (req, res) => {
  try {
    const facility = await Facility.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!facility) {
      return res.status(404).send();
    }
    res.send(facility);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteFacility = async (req, res) => {
  try {
    const facility = await Facility.findByIdAndDelete(req.params.id);
    if (!facility) {
      return res.status(404).send();
    }
    res.send(facility);
  } catch (error) {
    res.status(500).send(error);
  }
};

