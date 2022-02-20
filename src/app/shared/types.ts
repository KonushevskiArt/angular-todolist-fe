export interface ITodo {
  text: string,
  isDone: boolean 
}
export interface IResponseTodo {
  createdAt: string,
  text: string,
  updatedAt: string
  isDone: boolean
  __v: number
  _id: string
}