// utils/validators.js
class UserValidator {
  static userValidationRules(body) {
    return [
      body('name').notEmpty().withMessage('Name is required'),
    ];
  }
}

export default UserValidator;