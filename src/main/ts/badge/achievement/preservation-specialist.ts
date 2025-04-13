import { BadgeData, missionLink } from 'coh-content-db'
import { TheUndergroundTrial } from '../../mission/the-underground-trial'

export const PreservationSpecialist: BadgeData = {
  type: 'achievement',
  key: 'preservation-specialist',
  setTitleId: [1998],
  name: 'Preservation Specialist',
  morality: 'all',
  badgeText: `The Demolition Charges sent by the IDF to take out the Underground didn't pose a threat to your league, and you were able to take all of them out without a single detonation.`,
  acquisition: `Don't let any of the IDF bombs detonate in ${missionLink(TheUndergroundTrial)}.`,
  links: [
    { title: 'Preservation Specialist Badge', href: 'https://homecoming.wiki/wiki/Preservation_Specialist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-ug.png',
}
