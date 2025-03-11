import { BadgeData } from 'coh-content-db'
import { TheHive } from '../../map/the-hive'

export const TimeBandit: BadgeData = {
  type: 'EXPLORATION',
  key: 'time-bandit',
  setTitle: { id: 142 },
  name: [{ value: 'Time Bandit' }],
  alignment: ['H'],
  mapKey: TheHive.key,
  loc: [1742, 2, -3820],
  badgeText: [{
    value: `Portal Corporation had their main facility here until the Devouring Earth destroyed the area.
This forced them to move their headquarters to Peregrine Island.`,
  }],
  notes: `Located in [map:${TheHive.key}] in the middle of the road leading north into the abandoned structures, just before it breaks up into the grassy area.`,
  links: [
    { title: 'Time Bandit Badge', href: 'https://homecoming.wiki/wiki/Time_Bandit_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
