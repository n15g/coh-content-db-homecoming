import { BadgeData } from 'coh-content-db'
import { JustinAugustineTaskForce } from '../../mission/justin-augustine-task-force'

export const ProtectorOfKindness: BadgeData = {
  type: 'accomplishment',
  key: 'protector-of-kindness',
  setTitleId: [425],
  name: [
    { alignment: 'hero', value: 'Protector of Kindness' },
    { alignment: 'villain', value: 'Thorn Crusher' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You saved the being known as Faathim the Kind from capture by the Circle of Thorns.',
  acquisition: 'Complete the Justin Augustine Task Force: The Saga of Faathim.',
  links: [
    { title: 'Protector of Kindness Badge', href: 'https://homecoming.wiki/wiki/Protector_of_Kindness_Badge' },
    { title: 'Thorn Crusher Badge', href: 'https://homecoming.wiki/wiki/Thorn_Crusher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/protector-of-kindness.png',
  requirements: [
    { key: JustinAugustineTaskForce.key, type: 'mission', missionKey: JustinAugustineTaskForce.key },
  ],
}
