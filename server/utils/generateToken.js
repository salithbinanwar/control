import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })

  res.cookie('accessToken', `Bearer ${token}`, {
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
    sameSite: true,
    expires: new Date(Date.now() + 5 * 60 * 1000),
    secure: process.env.NODE_ENV === 'production' ? true : false,
  })
}

export default generateToken
