import { BadgeData } from 'coh-content-db'
import { Neutropolis } from '../../map/neutropolis'

export const DontDrinkIt: BadgeData = {
  type: 'EXPLORATION',
  key: 'dont-drink-it',
  setTitle: { id: 1725 },
  name: [{ value: 'Don\'t Drink It' }],
  alignment: ['H', 'V', 'P'],
  mapKey: Neutropolis.key,
  loc: [6905, -23, 2461],
  badgeText: [{
    value: 'Praetoria\'s water is heavily filtered and sanitized here at the Water Treatment Plant, removing the contaminants of the outside world.'
      + ' Resistance propaganda says Cole adds something back at the same time.'
      + ' Most people just shrug and purchase copious amounts of Enriche to be on the safe side, not believing the Resistance claim that it is the same exact thing as the tap water.',
  }],
  notes: 'Located in [map:neutropolis] 442 yards W of the Keyes Island marker.',
  links: [
    { title: 'Don\'t Drink It Badge', href: 'https://homecoming.wiki/wiki/Don%27t_Drink_It_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '2',
}
