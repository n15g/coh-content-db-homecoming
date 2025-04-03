import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { MageKillerZuhkara } from '../../contact/mage-killer-zuhkara'

export const MageHunter: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'mage-hunter',
  setTitle: { id: 345 },
  name: 'Mage Hunter',
  alignment: ['V'],
  badgeText: `That's one less creepy mystic to get in your way.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Selestar" entry with number 7.15 in the 40-49 level range.`,
  links: [
    { title: 'Mage Hunter Badge', href: 'https://homecoming.wiki/wiki/Mage_Hunter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-8.png',
  requirements: [
    { key: 'defeat-selestar', type: 'MISSION', missionName: 'Defeat Selestar', contactKey: MageKillerZuhkara.key },
  ],
}
