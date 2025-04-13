import { MissionData } from 'coh-content-db'
import { Twinshot } from '../contact/twinshot'

export const TheShiningStarsANewDayDawning: MissionData = {
  key: 'the-shining-stars-a-new-day-dawning',
  name: 'The Shining Stars - A New Day Dawning',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: Twinshot.key,
  levelRange: [5, 9],
  links: [
    { title: 'The Shining Stars - A New Day Dawning', href: 'https://homecoming.wiki/wiki/Twinshot#The_Shining_Stars_-_A_New_Day_Dawning_(Level_5-9)' },
  ],
  flashback: {
    id: '21.09',
    name: 'A New Day Dawning',
    levelRange: [1, 9],
  },
}
