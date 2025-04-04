import { BadgeData, zoneLink } from 'coh-content-db'
import { BelladonnaVetrano } from '../../contact/belladonna-vetrano'
import { Ouroboros } from '../../zone/ouroboros'

export const ImperialCitysSavior: BadgeData = {
  type: 'accomplishment',
  key: 'imperial-citys-savior',
  setTitleId: [2217],
  name: `Imperial City's Savior`,
  morality: 'all',
  badgeText: 'You helped the forces of Primal Earth take Imperial City from Praetor Sinclair.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero or villain can select the "The Emperor's Sword" entry with number 23.06 at level 50.`,
  links: [
    { title: `Imperial City's Savior Badge`, href: 'https://homecoming.wiki/wiki/Imperial_City%27s_Savior_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/imperial-citys-savior.png',
  requirements: [
    { key: 'the-emperors-sword', type: 'ARC', missionName: `The Emperor's Sword`, contactKey: BelladonnaVetrano.key },
  ],
}
