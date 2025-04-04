import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { ArchmageTarixus } from '../../contact/archmage-tarixus'

export const SoulTaker: BadgeData = {
  type: 'accomplishment',
  key: 'soul-taker',
  setTitleId: [339],
  name: 'Soul Taker',
  morality: 'villainous',
  badgeText: 'The wizard Tarixus taught you dark secrets of the infernal realms in this mission.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Offer Soul of Akarist" entry with number 6.40 in the 25-29 level range.`,
  links: [
    { title: 'Soul Taker Badge', href: 'https://homecoming.wiki/wiki/Soul_Taker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-5.png',
  requirements: [
    { key: 'osoa', type: 'MISSION', missionName: 'Offer Soul of Akarist', contactKey: ArchmageTarixus.key },
  ],
}
