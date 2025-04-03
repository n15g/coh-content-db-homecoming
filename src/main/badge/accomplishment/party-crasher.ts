import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { DrForrester } from '../../contact/dr-forrester'

export const PartyCrasher: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'party-crasher',
  setTitle: { id: 344 },
  name: 'Party Crasher',
  alignment: ['V'],
  badgeText: `You crashed a rave and stole a piece of the alloy which makes up Silver Mantis' armor.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Party Crasher" entry with number 7.11 in the 40-49 level range.`,
  links: [
    { title: 'Party Crasher Badge', href: 'https://homecoming.wiki/wiki/Party_Crasher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-8.png',
  requirements: [
    { key: 'safsm', type: 'MISSION', missionName: 'Steal Alloy from Silver Mantis', contactKey: DrForrester.key },
  ],
}
