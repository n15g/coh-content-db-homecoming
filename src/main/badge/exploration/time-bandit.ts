import { BadgeData, zoneLink } from 'coh-content-db'
import { TheHive } from '../../zone/the-hive'

export const TimeBandit: BadgeData = {
  type: 'exploration',
  key: 'time-bandit',
  setTitleId: [142],
  name: 'Time Bandit',
  morality: 'heroic',
  zoneKey: TheHive.key,
  loc: [1742, 2, -3820],
  badgeText: `Portal Corporation had their main facility here until the Devouring Earth destroyed the area. This forced them to move their headquarters to Peregrine Island.`,
  notes: `Located in ${zoneLink(TheHive)} in the middle of the road leading north into the abandoned structures, just before it breaks up into the grassy area.`,
  links: [
    { title: 'Time Bandit Badge', href: 'https://homecoming.wiki/wiki/Time_Bandit_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '1',
}
