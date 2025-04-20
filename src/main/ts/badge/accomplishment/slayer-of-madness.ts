import { BadgeData } from 'coh-content-db'
import { FaathimTheKindTaskForce } from '../../mission/faathim-the-kind-task-force'

export const SlayerOfMadness: BadgeData = {
  type: 'accomplishment',
  key: 'slayer-of-madness',
  setTitleId: [426],
  name: 'Slayer of Madness',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You defeated the being known as Lanaru the Mad, sparing the people of the Shadow Shard from total destruction.',
  acquisition: 'Complete the Faathim the Kind Task Force: The Saga of Lanaru.',
  links: [
    { title: 'Slayer of Madness Badge', href: 'https://homecoming.wiki/wiki/Slayer_of_Madness_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/slayer-of-madness.png',
  requirements: [
    { key: FaathimTheKindTaskForce.key, type: 'mission', missionKey: FaathimTheKindTaskForce.key },
  ],
}
