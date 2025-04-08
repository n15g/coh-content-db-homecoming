import { BadgeData } from 'coh-content-db'
import { BelladonnaVetrano } from '../../contact/belladonna-vetrano'

export const EmbodimentOfLaw: BadgeData = {
  type: 'accomplishment',
  key: 'embodiment-of-law',
  setTitleId: [2218],
  name: 'Embodiment of Law',
  morality: 'all',
  badgeText: `You played through Emperor Cole's personal story and saw him fight against the entire army of Arachnos.`,
  acquisition: 'Complete the personal story mission from Emperor Cole',
  links: [
    { title: 'Embodiment of Law Badge', href: 'https://homecoming.wiki/wiki/Embodiment_of_Law_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/embodiment-of-law.png',
  requirements: [
    { key: 'the-last-line-of-the-law', type: 'MISSION', missionName: 'The Last Line of the Law', contactKey: BelladonnaVetrano.key },
  ],
}
