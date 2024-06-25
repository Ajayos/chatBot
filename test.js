import jwt from 'jsonwebtoken';

const payload = { user_id: 123456, username: 'ajayos' };
const secretKey = 'ajayos-secret-key';

const token = jwt.sign(payload, secretKey);

console.log(token);
