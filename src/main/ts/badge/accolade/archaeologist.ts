import { BadgeData } from 'coh-content-db'
import { Mortician } from '../day-job/mortician'
import { Midnighter } from '../day-job/midnighter'

export const Archaeologist: BadgeData = {
  type: 'accolade',
  key: 'archaeologist',
  setTitleId: [1073],
  name: 'Archaeologist',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero',
      value: `Your time spent working with the Midnighters and uncovering the secrets of buried artifacts has earned you the Archaeologist Accolade.
While logged out in either the Midnighter Club or a Graveyard you will earn additional charges for your Rune of Purification power.`,
    },
    {
      alignment: 'villain',
      value: `Your time spend working with the Midnighter and uncovering the secrets of buried artifacts has earned you the Archaeologist Accolade.
While logged out in either the Midnighter Club or a Graveyard you will earn additional charges for your Rune of Purification power.`,
    },
  ],
  links: [
    { title: 'Archaeologist Badge', href: 'https://homecoming.wiki/wiki/Archaeologist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/archaeologist.png',
  requirements: [
    { key: Mortician.key, type: 'badge', badgeKey: Mortician.key },
    { key: Midnighter.key, type: 'badge', badgeKey: Midnighter.key },
  ],
}
