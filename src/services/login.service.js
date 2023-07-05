const { User } = require('../models');
const { createToken } = require('../helpers/jasonWebToken');

const loginValidationServer = async ({ email, password }) => {
  const user = await User.findOne({ 
    attibutes: ['id', 'displayName', 'email', 'image'],
    where: { email, password },
  });

  if (!user) {
 return { 
    type: 400, 
    data: { message: 'Invalid fields' },
  }; 
}

const payload = { id: user.id, displayName: user.displayName, email: user.email };
const token = createToken(payload);

return {
  type: 200,
  data: { token },
};
};

module.exports = {
  loginValidationServer,
};
