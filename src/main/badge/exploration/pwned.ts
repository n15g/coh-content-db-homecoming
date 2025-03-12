import { BadgeData } from 'coh-content-db'
import { KingsRow } from '../../map/kings-row'

export const Pwned: BadgeData = {
  type: 'EXPLORATION',
  key: 'pwned',
  setTitle: { id: 1527 },
  name: [{ value: 'Pwned' }],
  alignment: ['H'],
  mapKey: KingsRow.key,
  loc: [474, -42, -2685],
  badgeText: [{
    value: 'Locals in High Park have complained to the Pawn Store owner about fixing his sign, saying that it tends to draw the Freakshow to the neighborhood for laughs.'
      + ' The owner adamantly refuses to change the sign, insisting that it is "hilarious."'
      + ' He can be seen speaking with the residents in High Park while wearing a shirt with the words, "LOLCOPTER" on it.',
  }],
  notes: 'The Pwned Badge is at the entrance of the pawn shop 52 yards north of the High Park neighborhood marker in Kings Row.',
  links: [
    { title: 'Pwned Badge', href: 'https://homecoming.wiki/wiki/Pwned_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '7',
}
