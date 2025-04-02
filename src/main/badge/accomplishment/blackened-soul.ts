import { BadgeData } from 'coh-content-db'
import { DrGraves } from '../../contact/dr-graves'

export const BlackenedSoul: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'blackened-soul',
  setTitle: { id: 2018 },
  name: 'Blackened Soul',
  alignment: ['V'],
  badgeText: `Having won the contest by besting your rivals, you've been given the task of now dealing with them... permanently.`,
  links: [
    { title: 'Blackened Soul Badge', href: 'https://homecoming.wiki/wiki/Blackened_Soul_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/blackened-soul.png',
  requirements: [
    { key: 'the-heart-of-darkness-heroic-measures', type: 'ARC', missionName: 'The Heart of Darkness - Heroic Measures', contactKey: DrGraves.key },
  ],
}
