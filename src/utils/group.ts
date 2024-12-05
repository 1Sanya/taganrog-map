import { Group, Museum } from '../constants/albums'

export const isMuseum = (group: Group): group is Museum => {
  return 'museumOnlineLink' in group
}