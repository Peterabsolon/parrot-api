it('loads .env file', () => {
  const loadEnv = jest.fn()
  jest.mock('dotenv', () => ({ config: loadEnv }))

  // eslint-disable-next-line global-require
  require('./index')

  expect(loadEnv).toBeCalled()
})
