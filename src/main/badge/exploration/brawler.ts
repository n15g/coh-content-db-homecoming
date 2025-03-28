import { BadgeData } from 'coh-content-db'
import { EchoGalaxyCity } from '../../zone/echo-galaxy-city'

export const Brawler: BadgeData = {
  type: 'EXPLORATION',
  key: 'brawler',
  setTitle: { id: 93 },
  name: [{ value: 'Brawler' }],
  alignment: ['H'],
  zoneKey: EchoGalaxyCity.key,
  loc: [-1184, 63, -936],
  badgeText: [{ value: 'Back Alley Brawler fought against two Underbosses from The Family, Slow Eye Lou and Hyper Mike, on this spot.' }],
  notes: 'The Brawler Badge is located 156 yards ESE from the Arena in Echo: Galaxy City on top of the Mighty Mart.'
    + '\n\nNon-airborne heroes can get to the badge by climbing up a fire escape on the City of Gyros building, two buildings behind (east of) the Mighty Mart building, and jumping across rooftops.'
    + ' The buildings in question are immediately east of the Arena.',
  links: [
    { title: 'Brawler Badge', href: 'https://homecoming.wiki/wiki/Brawler_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '3',
}
