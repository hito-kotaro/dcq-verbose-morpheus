export type userSubComponentKey = 'Detail' | 'Create' | 'Update' | 'Delete' | 'Empty'

export const emptyUser = {
  id: 0,
  name: '',
  point: 0,
  admin: false,
}

export type userType = {
  id: number
  name: string
  point: number
  admin: boolean
}

export type createUserType = {
  name: string
  password: string
  admin: boolean
}

export type updateUserType = {
  id: number
  name?: string
  password?: string
  add_point?: number
  admin?: boolean
}
