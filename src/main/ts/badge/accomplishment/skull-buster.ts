import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { EagleEye } from '../../contact/eagle-eye'

export const SkullBuster: BadgeData = {
  type: 'accomplishment',
  key: 'skull-buster',
  setTitleId: [2316],
  name: 'Skull Buster',
  morality: 'heroic',
  badgeText: `You formed the New Regulators and put a stop to the Skulls' Superadine Ring in Kings Row. You destroyed their lab and put one of The Petrovic Brothers behind bars, leaving the Skulls scattered and weakened.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the entry with number 24.02 in the 15-19 level range.`,
  links: [
    { title: 'Skull Buster Badge', href: 'https://homecoming.wiki/wiki/Skull_Buster_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/skull-buster.png',
  requirements: [
    { key: 'tlod', type: 'ARC', missionName: 'The Lords of Death', contactKey: EagleEye.key },
  ],
}
