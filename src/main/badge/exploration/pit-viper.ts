import { BadgeData } from 'coh-content-db'
import { SharkheadIsle } from '../../zone/sharkhead-isle'

export const PitViper: BadgeData = {
  type: 'exploration',
  key: 'pit-viper',
  setTitleId: [298],
  name: 'Pit Viper',
  morality: 'villainous',
  zoneKey: SharkheadIsle.key,
  loc: [148, -377, 1500],
  badgeText: `This hole is used by the locals as a makeshift arena for fighting and wagering.`,
  notes: `Located at the bottom of the pit in The Pit neighborhood, 70 feet west of the zone marker.`,
  links: [
    { title: 'Pit Viper Badge', href: 'https://homecoming.wiki/wiki/Pit_Viper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  vidiotMapKey: '4',
}
