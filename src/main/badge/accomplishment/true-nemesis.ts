import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { MaxwellChristopher } from '../../contact/maxwell-christopher'

export const TrueNemesis: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'true-nemesis',
  setTitle: { id: 2387 },
  name: 'True Nemesis',
  alignment: ['H'],
  badgeText: `You have stopped Nemesis Rex's incursion into Primal Earth.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Nemesis Rex" entry with number 1.07 in the 40-49 level range.`,
  links: [
    { title: 'True Nemesis Badge', href: 'https://homecoming.wiki/wiki/True_Nemesis_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/true_nemesis.png',
  requirements: [
    { key: 'nr', type: 'ARC', missionName: 'Nemesis Rex', contactKey: MaxwellChristopher.key },
  ],
}
