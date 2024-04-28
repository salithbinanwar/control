import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
  // res.cookie('jwt', token, {
  //   httpOnly: true,
  //   sameSite: 'strict',
  //   path: '/',
  //   expires: new Date(Date.now() + 5 * 60 * 1000),
  // })
  return token
}

export default generateToken
