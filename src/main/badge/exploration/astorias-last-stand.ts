import { BadgeData } from 'coh-content-db'
import { EchoDarkAstoria } from '../../zone/echo-dark-astoria'

export const AstoriasLastStand: BadgeData = {
  type: 'exploration',
  key: 'astorias-last-stand',
  setTitleId: [1784],
  name: `Astoria's Last Stand`,
  morality: 'heroic',
  zoneKey: EchoDarkAstoria.key,
  loc: [4787, 6, 727],
  badgeText: `As the darkness closed in and the dead rose from their graves, this warehouse became a scene of unimaginable horror as a group of survivors fled here in the hope of rescue that never came.
They fought valiantly, keeping the minions of the Banished Pantheon at bay for hours.
The forces arrayed at them were too numerous and too powerful to be denied forever and the survivors succumbed along with the rest of Astoria's doomed inhabitants.`,
  notes: `Located 325 yards NW of the Barca Plaza marker, atop a building with delivery trucks parked outside.`,
  links: [
    { title: `Astoria's Last Stand Badge`, href: 'https://homecoming.wiki/wiki/Astoria%27s_Last_Stand_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '7',
}
