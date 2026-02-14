
export interface SuccessLogin {
  message: string
  user: UserResponse
  token: string
}

export interface FailLogin {
  message: string
  statusMsg : string
}

export interface UserResponse {
  name: string
  email: string
  role: string
}
