import { BadgeData, mapLink } from 'coh-content-db'
import { FoundersFalls } from '../../map/founders-falls'

export const FoundersHero: BadgeData = {
  type: 'EXPLORATION',
  key: 'founders-hero',
  setTitle: { id: 1562 },
  name: [
    { alignment: 'H', value: 'Founders\' Hero' },
    { alignment: 'V', value: 'Founders\' Loss' },
  ],
  alignment: ['H'],
  mapKey: FoundersFalls.key,
  loc: [1689, 9, 640],
  badgeText: [{
    value: 'This area is where Michelle Harvey, a local magician, made her last stand against the Circle of Thorns, who were trying to attack the nearby hospital.'
      + ' Michelle used all of her life force to erect a protective barrier around the hospital.'
      + ' A group of heroes arrived to drive back the Circle, but it was too late for them to save Michelle.'
      + ' Because of this brave sacrifice, the hospital was renamed in her honor.',
  }],
  notes: `Located 114 yards NNE of the hospital in ${mapLink(FoundersFalls)}, directly in front of Janet Kellum and Maxwell Christopher.`,
  links: [
    { title: 'Founders\' Hero Badge', href: 'https://homecoming.wiki/wiki/Founders%27_Hero_Badge' },
    { title: 'Founders\' Loss Badge', href: 'https://homecoming.wiki/wiki/Founders%27_Loss_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '7',
}
