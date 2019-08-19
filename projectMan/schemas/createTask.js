module.exports = {
  id: {
    in: ['params'],
    isUUID: {
      errorMessage: 'Invalid id.'
    }
  },
  description: {
    in: ['body'],
    errorMessage: 'Mandatory field.',
    isString: true
  },
  owner: {
    in: ['body'],
    errorMessage: 'Mandatory field.',
    isString: true
  },
  dueDate: {
    in: ['body'],
    isISO8601: {
      errorMessage: 'Invalid date.'
    }
  }
}
