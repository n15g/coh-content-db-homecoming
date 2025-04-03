import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { DrTrevorSeaborn } from '../../contact/dr-trevor-seaborn'
import { HugoRedding } from '../../contact/hugo-redding'
import { HaleyPhilips } from '../../contact/haley-philips'

export const Spelunker: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'spelunker',
  setTitle: { id: 72 },
  name: 'Spelunker',
  alignment: ['H'],
  badgeText: 'You have freed a local fortune teller from the clutches of the Circle of Thorns.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Rescue the Mystic from the Circle of Thorns" entry with number 0.02 in the 10-14 level range.`,
  links: [
    { title: 'Spelunker Badge', href: 'https://homecoming.wiki/wiki/Spelunker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/spelunker.png',
  requirements: [
    { key: 'rft', type: 'MISSION', missionName: 'Rescue Fortune Teller from the Circle of Thorns', contactKey: [DrTrevorSeaborn.key, HugoRedding.key, HaleyPhilips.key] },
  ],
}
