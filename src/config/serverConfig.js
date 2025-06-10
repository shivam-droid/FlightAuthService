const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

dotenv.config();

const salt = bcrypt.genSaltSync(10);

module.exports = {
    PORT: process.env.PORT || 3001,
    Salt: bcrypt.genSaltSync(10)
}