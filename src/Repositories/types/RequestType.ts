export type requestSubComponentKey = 'Detail' | 'Create' | 'Update' | 'Delete' | 'Empty'

export type requestType = {
  id: number
  title: string
  description: string
  applicant: string
  quest_title: string
  quest_description: string
  reward: number
  status: string
  authorizer: string
  auth_comment: string
  created_at: string
  updated_at: string
}

export type createRequestType = {
  title: string
  description: string
  quest_id: number
}

export type updateRequestType = {
  auth_comment: string
  status: string
}

export const emptyRequest = {
  id: 0,
  title: '',
  description: '',
  applicant: '',
  quest_title: '',
  quest_description: '',
  reward: 0,
  status: '',
  authorizer: '',
  auth_comment: '',
  created_at: '',
  updated_at: '',
}
