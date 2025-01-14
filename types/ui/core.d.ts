export type UserState = 'online' | 'idle' | 'offline'

export type User = {
  name: string
  address: string
  status: string
  state: UserState
}

export interface Friend extends User {
  item: any
  pending: Boolean
  activeChat: Boolean
}

export type Group = {
  name: string
  address: string
  motd: string
}

export type Server = {
  name: string
  address: string
  desc: string
}
