import { USERS, INVALID_CREDENTIALS, ERROR_MESSAGES } from './testData.js'

export const NEGATIVE_SCENARIOS = [
  {
    testName: 'Correct Username Wrong Password',
    username: USERS.standard_user.username,
    password: INVALID_CREDENTIALS.password,
    expectedError: ERROR_MESSAGES.invalidCredentials,
  },
  {
    testName: 'Wrong Username Correct Password',
    username: INVALID_CREDENTIALS.username,
    password: USERS.standard_user.password,
    expectedError: ERROR_MESSAGES.invalidCredentials,
  },
  {
    testName: 'Wrong Username Wrong Password',
    username: INVALID_CREDENTIALS.username,
    password: INVALID_CREDENTIALS.password,
    expectedError: ERROR_MESSAGES.invalidCredentials,
  },
  {
    testName: 'Empty Username Correct Password',
    username: '',
    password: USERS.standard_user.password,
    expectedError: ERROR_MESSAGES.usernameRequired,
  },
  {
    testName: 'Correct Username Empty Password',
    username: USERS.standard_user.username,
    password: '',
    expectedError: ERROR_MESSAGES.passwordRequired,
  },
  {
    testName: 'Empty Username Empty Password',
    username: '',
    password: '',
    expectedError: ERROR_MESSAGES.usernameRequired,
  },
]