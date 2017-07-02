const task = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      // TODO: Need to actually do a POST to /tasks to create a new task
      return {
        id: action.id,
        title: action.title,
        description: action.description,
        completed: false
      }
    case 'TOGGLE_TASK':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        task(undefined, action)
      ]
    case 'TOGGLE_TASK':
      return state.map(t => task(t, action))
    default:
      return state
  }
}

export default tasks
