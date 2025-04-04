import { BadgeData } from 'coh-content-db'
import { SkywayCity } from '../../zone/skyway-city'

export const Purifier: BadgeData = {
  type: 'exploration',
  key: 'purifier',
  setTitleId: [110],
  name: [
    { alignment: 'hero', value: 'Purifier' },
    { alignment: 'villain', value: 'Defiler' },
  ],
  morality: 'heroic',
  zoneKey: SkywayCity.key,
  loc: [-1085, -16, -7612],
  badgeText: `Defiler, an evil spirit brought forth by the Devouring Earth, was defeated on this spot by Ms. Liberty... with a little help from MAGI.`,
  notes: 'Located in the extreme northeast corner, between the two basketball courts.',
  links: [
    { title: 'Purifier Badge', href: 'https://homecoming.wiki/wiki/Purifier_Badge' },
    { title: 'Defiler Badge', href: 'https://homecoming.wiki/wiki/Defiler_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '1',
}
