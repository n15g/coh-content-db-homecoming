import { BadgeData, zoneLink } from 'coh-content-db'
import { PerezPark } from '../../zone/perez-park'
import { SkywayCity } from '../../zone/skyway-city'

export const JusticeAvenger: BadgeData = {
  type: 'EXPLORATION',
  key: 'justice-avenger',
  setTitle: { id: 105 },
  name: [
    { alignment: 'H', value: 'Justice Avenger' },
    { alignment: 'V', value: 'Social Climber' },
  ],
  alignment: ['H'],
  zoneKey: PerezPark.key,
  loc: [-1034, 1, 3976],
  badgeText: [{
    value: 'This fountain was a gift to the city, donated by billionaire playboy Justin Sinclair.',
  }],
  notes: `Located in ${zoneLink(PerezPark)}.

          Enter from ${zoneLink(SkywayCity)} and turn left, then follow the road to where it ends in a loop around a fountain.
          The badge is in the fountain. Its coordinates are (-1034, 1, 3976). It is 246 yards from the ${zoneLink(SkywayCity)} entrance.`,
  links: [
    { title: 'Justice Avenger Badge', href: 'https://homecoming.wiki/wiki/Justice_Avenger_Badge' },
    { title: 'Social Climber Badge', href: 'https://homecoming.wiki/wiki/Social_Climber_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '5',
}
