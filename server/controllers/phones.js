const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Phone = require('../models/Phone');
const mockPhones = require('../mock/phones.json');

exports.loadMockPhones = asyncHandler(async (req, res) => {
  mockPhones.forEach(async (phone) => {
    await Phone.create(phone);
  });
  res.send({ success: true });
});

exports.getPhones = asyncHandler(async (req, res) => {
  const phones = await Phone.find({});
  res.send(phones);
});

exports.getPhoneById = asyncHandler(async (req, res) => {
  const phoneId = req.params.phoneId;
  if (!phoneId) throw new ErrorResponse(400, 'Introduce a phone id');

  const phoneDB = await Phone.findById(phoneId);
  res.send(phoneDB);
});

exports.deletePhone = asyncHandler(async (req, res) => {
  const phoneId = req.params.phoneId;
  if (!phoneId) throw new ErrorResponse(400, 'Introduce a phone id');

  const phoneDeleted = await Phone.findByIdAndDelete(phoneId);
  if (!phoneDeleted)
    throw new ErrorResponse(404, `Phone with id '${phoneId}' was not found`);

  res.status(204).send();
});

exports.editPhone = asyncHandler(async (req, res) => {
  const phoneId = req.params.phoneId;
  if (!phoneId) throw new ErrorResponse(400, 'Introduce a phone id');

  const newPhone = req.body.phone;
  if (!newPhone) throw new ErrorResponse(400, 'Introduce new phone data');

  const newPhoneDB = await Phone.findByIdAndUpdate(phoneId, newPhone, {
    new: true,
  });
  res.status(200).send(newPhoneDB);
});

exports.addPhone = asyncHandler(async (req, res) => {
  console.log(req.body);
  const phoneData = req.body.phone;
  if (!phoneData) throw new ErrorResponse(400, 'Empty request body');

  const phoneDB = await Phone.create(phoneData);
  res.status(201).send(phoneDB);
});
