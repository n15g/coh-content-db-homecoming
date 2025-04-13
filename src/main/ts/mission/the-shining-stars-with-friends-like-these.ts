import { MissionData } from 'coh-content-db'
import { Twinshot } from '../contact/twinshot'

export const TheShiningStarsWithFriendsLikeThese: MissionData = {
  key: 'the-shining-stars-with-friends-like-these',
  name: 'The Shining Stars - With Friends Like These',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: Twinshot.key,
  levelRange: [15, 19],
  links: [
    { title: 'The Shining Stars - With Friends Like These', href: 'https://homecoming.wiki/wiki/Twinshot#The_Shining_Stars_-_With_Friends_Like_These_(Level_15-19)' },
  ],
  flashback: {
    id: '21.11',
    notes: 'The Shining Stars: With Friends like These',
    levelRange: [15, 19],
  },
}
