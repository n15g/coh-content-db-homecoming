import { BadgeData } from 'coh-content-db'
import { FaathimTheKind } from '../../contact/faathim-the-kind'

export const SlayerOfMadness: BadgeData = {
  type: 'accomplishment',
  key: 'slayer-of-madness',
  setTitleId: [426],
  name: 'Slayer of Madness',
  morality: 'heroic',
  badgeText: 'You defeated the being known as Lanaru the Mad, sparing the people of the Shadow Shard from total destruction.',
  acquisition: 'Complete the Faathim the Kind Task Force: The Saga of Lanaru.',
  links: [
    { title: 'Slayer of Madness Badge', href: 'https://homecoming.wiki/wiki/Slayer_of_Madness_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/slayer-of-madness.png',
  requirements: [
    { key: 'ftktf', type: 'TASK_FORCE', missionName: 'Faathim the Kind Task Force', contactKey: FaathimTheKind.key },
  ],
}
