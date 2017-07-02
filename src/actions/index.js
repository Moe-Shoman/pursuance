let nextTaskId = 0
export const addTask = (title, description, assignee) => ({
  type: 'ADD_TASK',
  id: nextTaskId++,
  title,
  description,
  assignee
})

export const toggleTask = (id) => ({
  type: 'TOGGLE_TASK',
  id
})
