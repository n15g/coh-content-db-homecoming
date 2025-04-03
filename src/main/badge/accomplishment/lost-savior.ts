import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { MontagueCastanella } from '../../contact/montague-castanella'

export const LostSavior: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'lost-savior',
  setTitle: { id: 988 },
  name: 'Lost Savior',
  alignment: ['H'],
  badgeText: `With the help of the Midnight Squad, Dawn Patrol and even a Rikti scientist, you've done the impossible. You've found a cure for the Lost.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Lost and Found" entry with number 12.01 at level 50.`,
  links: [
    { title: 'Lost Savior Badge', href: 'https://homecoming.wiki/wiki/Lost_Savior_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/lost-savior.png',
  requirements: [
    { key: 'cure-lost', type: 'MISSION', missionName: 'Cure Lost', contactKey: MontagueCastanella.key },
  ],
}
