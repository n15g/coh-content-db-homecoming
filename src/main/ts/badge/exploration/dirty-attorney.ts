import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'

export const DirtyAttorney: BadgeData = {
  type: 'exploration',
  key: 'dirty-attorney',
  setTitleId: [1533],
  name: 'Dirty Attorney',
  morality: 'paragon-city-access',
  badgeText: `Platinum Lake is a popular spot for people in Paragon to sit back and relax.
There has been a long legal battle for Chris Jenkins to take down the billboard that he put up there, many saying it spoils the view.
Jenkins has won every single case and states that he only has it up to serve the people when the heroes of Paragon 'aren't doing their jobs.'`,
  notes: 'Located in the Platinum Lake neighborhood, 52 feet south of the neighborhood marker.',
  links: [
    { title: 'Dirty Attorney Badge', href: 'https://homecoming.wiki/wiki/Dirty_Attorney_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SteelCanyon.key, coords: [-2170, -84, -1228] }, vidiotMapKey: '8' },
  ],
}
