import { BadgeData } from 'coh-content-db'

export const ColdWarrior: BadgeData = {
  type: 'event',
  key: 'cold-warrior',
  setTitleId: [209],
  name: 'Cold Warrior',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have defeated 100 of the living snow creatures who plague Paragon City.' },
    { alignment: 'villain', value: 'You have defeated 100 of the living snow creatures who plagued the Rogue Isles.' },
  ],
  acquisition: 'Defeat 100 enemies in the Winter Horde during the Winter Event.',
  links: [
    { title: 'Cold Warrior Badge', href: 'https://homecoming.wiki/wiki/Cold_Warrior_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/cold-warrior.png',
}
