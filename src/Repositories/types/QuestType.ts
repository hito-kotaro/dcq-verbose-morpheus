export type questSubComponentKey = 'Detail' | 'Create' | 'Update' | 'Empty'

export type questType = {
  id: number
  title: string
  description: string
  reward: number
  date: string
  owner_id: number
  owner: string
  example: string
}

export const emptyQuest: questType = {
  id: 0,
  title: 'クエストを選択してください',
  description: '',
  reward: 0,
  date: '',
  owner_id: 0,
  owner: '',
  example: '',
}
