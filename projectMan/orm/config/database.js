const { env } = process

module.exports = {
  development: {
    username: env.DB_USERNAME_DEVELOPMENT || 'postgres',
    password: env.DB_PASSWORD_DEVELOPMENT || 'postgres',
    database: env.DB_NAME_DEVELOPMENT || 'ProjectManagement',
    host: env.DB_HOST_DEVELOPMENT || 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: env.DB_USERNAME_TEST,
    password: env.DB_PASSWORD_TEST,
    database: env.DB_NAME_TEST,
    host: env.DB_HOST_TEST,
    dialect: 'postgres'
  },
  production: {
    username: env.DB_USERNAME_PRODUCTION,
    password: env.DB_PASSWORD_PRODUCTION,
    database: env.DB_NAME_PRODUCTION,
    host: env.DB_HOST_PRODUCTION,
    dialect: 'postgres'
  }
}
