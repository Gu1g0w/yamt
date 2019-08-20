module.exports = {
  id: {
    in: ['params'],
    isUUID: {
      errorMessage: 'Invalid id.'
    }
  },
  taskId: {
    in: ['params'],
    isUUID: {
      errorMessage: 'Invalid task id.'
    }
  }
}
