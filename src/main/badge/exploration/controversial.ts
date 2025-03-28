import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'

export const Controversial: BadgeData = {
  type: 'EXPLORATION',
  key: 'controversial',
  setTitle: { id: 1531 },
  name: [{ value: 'Controversial' }],
  alignment: ['H'],
  zoneKey: SteelCanyon.key,
  loc: [-4605, 3, -2600],
  badgeText: [{
    value: 'The statue of the heroine, "The Night Hammer" has been the focus of two controversies.'
      + ' The first was Night Hammer\'s disgust at how the statue turned out. The second was the "mysterious" disappearance of the architect who designed the statue.',
  }],
  notes: 'The Controversial Badge is at feet of the statue 129 yards east of the Royal Overlook neighborhood in Steel Canyon, or just in front of the base telepad location.',
  links: [
    { title: 'Controversial Badge', href: 'https://homecoming.wiki/wiki/Controversial_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '6',
}
