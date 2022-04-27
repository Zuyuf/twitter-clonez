import { IUserPublic, ITweet } from '@types';

type ITweetComment = {
  id?: number
  userId: number | IUserPublic
  tweetId: number | ITweet
  commentBody: string
}

export { ITweetComment };
