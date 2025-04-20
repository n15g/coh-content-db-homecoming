import { BadgeData } from 'coh-content-db'
import { MidnightDrawsNear } from '../../mission/midnight-draws-near'

export const TheThiefOfMidnight: BadgeData = {
  type: 'accomplishment',
  key: 'the-thief-of-midnight',
  setTitleId: [986],
  name: 'The Thief of Midnight',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'Only you and Darrin Wade will ever know what you took from the Midnight Squad. Even now they believe the artifacts they look upon with such reverence to be authentic.',
  links: [
    { title: 'The Thief of Midnight Badge', href: 'https://homecoming.wiki/wiki/The_Thief_of_Midnight_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-thief-of-midnight.png',
  requirements: [
    { key: MidnightDrawsNear.key, type: 'mission', missionKey: MidnightDrawsNear.key },
  ],
}
