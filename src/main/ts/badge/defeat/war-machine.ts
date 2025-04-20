import { BadgeData, zoneLink } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'

export const WarMachine: BadgeData = {
  type: 'defeat',
  key: 'war-machine',
  setTitleId: [2333],
  name: 'War Machine',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'The Council Goliath War Walker was no match for you.',
  acquisition: `Defeat the Council War Walker in ${zoneLink(Boomtown)}.`,
  links: [
    { title: 'War Machine Badge', href: 'https://homecoming.wiki/wiki/War_Machine_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/council-war-walker.png',
}
