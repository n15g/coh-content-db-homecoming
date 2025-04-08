import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { AshwinLannister } from '../../contact/ashwin-lannister'
import { LauriePennington } from '../../contact/laurie-pennington'

export const Redeemer: BadgeData = {
  type: 'accomplishment',
  key: 'redeemer',
  setTitleId: [76],
  name: [
    { alignment: 'hero', value: 'Redeemer' },
    { alignment: 'villain', value: 'Conqueror' },
  ],
  morality: 'heroic',
  badgeText: 'You negotiated the surrender of Alexander, a Warrior boss.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "The redemption of Alexander 'the Great'" entry with number 0.23 in the 25-29 level range.`,
  links: [
    { title: 'Redeemer Badge', href: 'https://homecoming.wiki/wiki/Redeemer_Badge' },
    { title: 'Conqueror Badge', href: 'https://homecoming.wiki/wiki/Conqueror_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/redeemer.png',
  requirements: [
    { key: 'gtta', type: 'MISSION', missionName: 'Go Talk With Alexander, and do Whatever You Can to Bring Him into Protective Custody', contactKey: [AshwinLannister.key, LauriePennington.key] },
  ],
}
