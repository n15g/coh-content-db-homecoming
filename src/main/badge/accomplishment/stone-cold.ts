import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { AngeloVendetti } from '../../contact/angelo-vendetti'

export const StoneCold: BadgeData = {
  type: 'accomplishment',
  key: 'stone-cold',
  setTitleId: [330],
  name: 'Stone Cold',
  morality: 'villainous',
  badgeText: 'You took out a filthy traitor to the Port Oakes Vendetti Family.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Hurt the Traitorous Vendetti" entry with number 6.11 in the 10-14 level range.`,
  links: [
    { title: 'Stone Cold Badge', href: 'https://homecoming.wiki/wiki/Stone_Cold_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-1.png',
  requirements: [
    { key: 'httvr', type: 'MISSION', missionName: 'Hurt the Traitorous Vendetti Retainer', contactKey: AngeloVendetti.key },
  ],
}
