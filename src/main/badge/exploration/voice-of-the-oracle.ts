import { BadgeData } from 'coh-content-db'
import { Cimerora } from '../../map/cimerora'

export const VoiceOfTheOracle: BadgeData = {
  type: 'EXPLORATION',
  key: 'voice-of-the-oracle',
  setTitle: { id: 2464 },
  name: [{ value: 'Voice of the Oracle' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `Positioned toward the eastern sun from which it draws its power, the Altar of Phoebas is one of the most important monuments within Cimerora. The Oracle of the Seers has relied on its continued guidance in order to steer Cimerora through many of its darkest hours.` }],
  mapKey: Cimerora.key,
  loc: [1011, 389.3, 4930],
  notes: `Located in [map:cimerora] on an altar in the temple area atop Phoebas Point, 103 yards east of the Phoebas Point neighborhood marker.`,
  links: [
    { title: 'Voice of the Oracle Badge', href: 'https://homecoming.wiki/wiki/Voice_of_the_Oracle_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '4',
}
