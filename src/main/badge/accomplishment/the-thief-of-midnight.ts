import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { DarrenWade } from '../../contact/darren-wade'

export const TheThiefOfMidnight: BadgeData = {
  type: 'accomplishment',
  key: 'the-thief-of-midnight',
  setTitleId: [986],
  name: 'The Thief of Midnight',
  morality: 'villainous',
  badgeText: 'Only you and Darrin Wade will ever know what you took from the Midnight Squad. Even now they believe the artifacts they look upon with such reverence to be authentic.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Midnight Draws Near" entry with number 12.05 in the 25-29 level range.`,
  links: [
    { title: 'The Thief of Midnight Badge', href: 'https://homecoming.wiki/wiki/The_Thief_of_Midnight_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-thief-of-midnight.png',
  requirements: [
    { key: 'mdn', type: 'ARC', missionName: 'Midnight Draws Near', contactKey: DarrenWade.key },
  ],
}
