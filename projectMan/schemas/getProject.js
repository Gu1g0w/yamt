module.exports = {
  id: {
    in: ['params'],
    isUUID: {
      errorMessage: 'Invalid id.'
    }
  }
}
