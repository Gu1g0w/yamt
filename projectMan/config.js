const { env } = process

module.exports = {
  NODE_ENV: env.NODE_ENV || 'development',
  PORT: Number(env.PORT) || 3001
}
