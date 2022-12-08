export type rewradSubComponentKey = 'Detail' | 'Create' | 'Update' | 'Delete' | 'Empty'

export type rewardType = {
  id: number
  title: string
  description: string
  point: number
  created_by: string
  created_at: string
  updated_at: string
}

export type updateRewardType = {
  title: string
  description: string
  point: number
}

export type createRewardType = {
  title: string
  description: string
  point: number
}

export const emptyReward: rewardType = {
  id: 0,
  title: '',
  description: '',
  point: 0,
  created_by: '',
  created_at: '',
  updated_at: '',
}
