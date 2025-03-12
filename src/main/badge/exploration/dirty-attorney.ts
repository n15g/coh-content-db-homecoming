import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../map/steel-canyon'

export const DirtyAttorney: BadgeData = {
  type: 'EXPLORATION',
  key: 'dirty-attorney',
  setTitle: { id: 1533 },
  name: [{ value: 'Dirty Attorney' }],
  alignment: ['H'],
  mapKey: SteelCanyon.key,
  loc: [-2170, -84, -1228],
  badgeText: [{
    value: 'Platinum Lake is a popular spot for people in Paragon to sit back and relax.'
      + ' There has been a long legal battle for Chris Jenkins to take down the billboard that he put up there, many saying it spoils the view.'
      + ' Jenkins has won every single case and states that he only has it up to serve the people when the heroes of Paragon \'aren\'t doing their jobs.\'',
  }],
  notes: 'The Dirty Attorney Badge is in the Platinum Lake neighborhood of Steel Canyon 52 feet south of the neighborhood marker.',
  links: [
    { title: 'Dirty Attorney Badge', href: 'https://homecoming.wiki/wiki/Dirty_Attorney_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '8',
}
