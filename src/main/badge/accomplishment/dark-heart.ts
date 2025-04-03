import { BadgeData } from 'coh-content-db'
import { DrGraves } from '../../contact/dr-graves'

export const DarkHeart: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'dark-heart',
  setTitle: { id: 2017 },
  name: 'Dark Heart',
  alignment: ['V'],
  badgeText: `Your role in this contest was irrevocably changed when you became Scirocco's spy.`,
  links: [
    { title: 'Dark Heart Badge', href: 'https://homecoming.wiki/wiki/Dark_Heart_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/dark-heart.png',
  requirements: [
    { key: 'the-hearts-of-darkness-rogues-contest', type: 'ARC', missionName: `The Hearts of Darkness - Rogues' Contest`, contactKey: DrGraves.key },
  ],
}
