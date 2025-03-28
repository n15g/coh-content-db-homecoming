import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'

export const PetProject: BadgeData = {
  type: 'EXPLORATION',
  key: 'pet-project',
  setTitle: { id: 1532 },
  name: [{ value: 'Pet Project' }],
  alignment: ['H'],
  zoneKey: SteelCanyon.key,
  loc: [-4073, 0, -3297],
  badgeText: [{
    value: 'Officials in Steel Canyon have kept secret what exactly they\'ve been working on here.'
      + ' There have been many speculations as to what it could be.'
      + ' One of the crazier theories is that there is no true "purpose" to the construction - that all of this somehow just appeared one day and exists solely to'
      + ' distract the heroes of Paragon City.',
  }],
  notes: 'The Pet Project Badge is at the entrance to the construction zone 158 yards northeast of the north Paragon City Monorail station in Steel Canyon.',
  links: [
    { title: 'Pet Project Badge', href: 'https://homecoming.wiki/wiki/Pet_Project_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '7',
}
