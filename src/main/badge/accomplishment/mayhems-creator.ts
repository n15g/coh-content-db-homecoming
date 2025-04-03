import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { MrGPrimal } from '../../contact/mr-g-primal'

export const MayhemsCreator: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'mayhems-creator',
  setTitle: { id: 2260 },
  name: `Mayhem's Creator`,
  alignment: ['V'],
  badgeText: `You were personally responsible for the creation of a new villainess, Penelope Mayhem. What she will do now is anyone's guess.`,
  acquisition: 'Complete the third story arc from Mr. G (Primal Earth)',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "The End of a Yin" entry with number 24.13 at level 50.`,
  links: [
    { title: `Mayhem's Creator Badge`, href: 'https://homecoming.wiki/wiki/Mayhem%27s_Creator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-arc.png',
  requirements: [
    { key: 'the-end-of-a-yin', type: 'ARC', missionName: 'The End of a Yin', contactKey: MrGPrimal.key },
  ],
}
