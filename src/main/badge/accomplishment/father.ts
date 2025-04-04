import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { MrGPrimal } from '../../contact/mr-g-primal'

export const Father: BadgeData = {
  type: 'accomplishment',
  key: 'father',
  setTitleId: [2272],
  name: 'Father',
  morality: 'villainous',
  badgeText: `You played Wu Yin's personal story and saw the plan that has been set in motion to try and save Penelope Mayhem.`,
  acquisition: 'Complete the personal story from Wu Yin',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Wu Yin's Personal Story" entry with number 24.14 at level 50.`,
  links: [
    { title: 'Father Badge', href: 'https://homecoming.wiki/wiki/Father_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-parc.png',
  requirements: [
    { key: 'unavoidable-fate', type: 'MISSION', missionName: 'Unavoidable Fate', contactKey: MrGPrimal.key },
  ],
}
