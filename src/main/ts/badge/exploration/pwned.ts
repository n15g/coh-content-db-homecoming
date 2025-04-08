import { BadgeData } from 'coh-content-db'
import { KingsRow } from '../../zone/kings-row'

export const Pwned: BadgeData = {
  type: 'exploration',
  key: 'pwned',
  setTitleId: [1527],
  name: 'Pwned',
  morality: 'paragon-city-access',
  badgeText: `Locals in High Park have complained to the Pawn Store owner about fixing his sign, saying that it tends to draw the Freakshow to the neighborhood for laughs.
The owner adamantly refuses to change the sign, insisting that it is "hilarious." He can be seen speaking with the residents in High Park while wearing a shirt with the words, "LOLCOPTER" on it.`,
  notes: 'Located at the entrance of the pawn shop 52 yards north of the High Park neighborhood marker.',
  links: [
    { title: 'Pwned Badge', href: 'https://homecoming.wiki/wiki/Pwned_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KingsRow.key, coords: [474, -42, -2685] }, vidiotMapKey: '7' },
  ],
}
