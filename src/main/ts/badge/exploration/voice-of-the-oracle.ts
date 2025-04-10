import { BadgeData } from 'coh-content-db'
import { Cimerora } from '../../zone/cimerora'

export const VoiceOfTheOracle: BadgeData = {
  type: 'exploration',
  key: 'voice-of-the-oracle',
  setTitleId: [2464],
  name: 'Voice of the Oracle',
  morality: 'all',
  badgeText: `Positioned toward the eastern sun from which it draws its power, the Altar of Phoebas is one of the most important monuments within Cimerora.
The Oracle of the Seers has relied on its continued guidance in order to steer Cimerora through many of its darkest hours.`,
  notes: `Located 103 yards east of the Phoebas Point neighborhood marker, on an altar in the temple area.`,
  links: [
    { title: 'Voice of the Oracle Badge', href: 'https://homecoming.wiki/wiki/Voice_of_the_Oracle_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Cimerora.key, coords: [1011, 389.3, 4930], icon: 'badge', iconText: '4' } },
  ],
}
