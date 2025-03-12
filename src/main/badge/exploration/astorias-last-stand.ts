import { BadgeData } from 'coh-content-db'
import { EchoDarkAstoria } from '../../map/echo-dark-astoria'

export const AstoriasLastStand: BadgeData = {
  type: 'EXPLORATION',
  key: 'astorias-last-stand',
  setTitle: { id: 1784 },
  name: [{ value: 'Astoria\'s Last Stand' }],
  alignment: ['H'],
  mapKey: EchoDarkAstoria.key,
  loc: [4787, 6, 727],
  badgeText: [{
    value: 'As the darkness closed in and the dead rose from their graves, this warehouse became a scene of unimaginable horror as a group of survivors fled here in the hope of rescue that'
      + ' never came. They fought valiantly, keeping the minions of the Banished Pantheon at bay for hours.'
      + ' The forces arrayed at them were too numerous and too powerful to be denied forever and the survivors succumbed along with the rest of Astoria\'s doomed inhabitants.',
  }],
  notes: 'Located in [map:echo-dark-astoria] 325 yards NW of the Barca Plaza marker, atop a building with delivery trucks parked outside.',
  links: [
    { title: 'Astoria\'s Last Stand Badge', href: 'https://homecoming.wiki/wiki/Astoria%27s_Last_Stand_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '7',
}
