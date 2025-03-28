import { BadgeData } from 'coh-content-db'
import { Mortician } from '../day-job/mortician'
import { Midnighter } from '../day-job/midnighter'

export const Archaeologist: BadgeData = {
  type: 'ACCOLADE',
  key: 'archaeologist',
  setTitle: { id: 1073 },
  name: [
    { value: 'Archaeologist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H',
      value: `Your time spent working with the Midnighters and uncovering the secrets of buried artifacts has earned you the Archaeologist Accolade.  While logged out in either the Midnighter Club or a Graveyard you will earn additional charges for your Rune of Purification power.`,
    },
    {
      alignment: 'V',
      value: `Your time spend working with the Midnighter and uncovering the secrets of buried artifacts has earned you the Archaeologist Accolade.  While logged out in either the Midnighter Club or a Graveyard you will earn additional charges for your Rune of Purification power.`,
    },
  ],
  links: [
    { title: 'Archaeologist Badge', href: 'https://homecoming.wiki/wiki/Archaeologist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/archaeologist.png' },
  ],
  requirements: [[
    { key: Mortician.key, type: 'BADGE', badgeKey: Mortician.key },
    { key: Midnighter.key, type: 'BADGE', badgeKey: Midnighter.key },
  ]],
}
