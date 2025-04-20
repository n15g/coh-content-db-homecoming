import { BadgeData, zoneLink } from 'coh-content-db'
import { PerezPark } from '../../zone/perez-park'
import { SkywayCity } from '../../zone/skyway-city'

export const JusticeAvenger: BadgeData = {
  type: 'exploration',
  key: 'justice-avenger',
  setTitleId: [105],
  name: [
    { alignment: 'hero', value: 'Justice Avenger' },
    { alignment: 'villain', value: 'Social Climber' },
  ],
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `This fountain was a gift to the city, donated by billionaire playboy Justin Sinclair.`,
  notes: `Located in a fountain 246 yards from the ${zoneLink(SkywayCity)} entrance.`,
  links: [
    { title: 'Justice Avenger Badge', href: 'https://homecoming.wiki/wiki/Justice_Avenger_Badge' },
    { title: 'Social Climber Badge', href: 'https://homecoming.wiki/wiki/Social_Climber_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: PerezPark.key, coords: [-1034, 1, 3976], icon: 'badge', iconText: '5' } },
  ],
}
