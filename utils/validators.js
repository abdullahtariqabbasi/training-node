const { body } = require('express-validator');

const userValidationRules = () => {
  return [
    body('name').notEmpty().withMessage('Name is required'),
  ];
};

module.exports = {
  userValidationRules
};
