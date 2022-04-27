import { IUserPublic } from "../auth/user"

type ITweet = {
  id?: number
  userId: number | IUserPublic
  body: string
}

export { ITweet }
