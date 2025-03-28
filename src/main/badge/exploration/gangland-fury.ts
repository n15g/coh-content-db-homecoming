import { BadgeData } from 'coh-content-db'
import { TheHollows } from '../../zone/the-hollows'

export const GanglandFury: BadgeData = {
  type: 'EXPLORATION',
  key: 'gangland-fury',
  setTitle: { id: 199 },
  name: [{ value: 'Gangland Fury' }],
  alignment: ['H'],
  zoneKey: TheHollows.key,
  loc: [-728, -11, -3518],
  badgeText: [{
    value: 'Since the Hollowing, these streets have turned into a war zone between the Trolls and the Outcasts.'
      + ' Only the constant vigilance of heroes keeps this conflict from turning into a bloodbath.',
  }],
  notes: '187 yards South of Four Seasons marker.',
  links: [
    { title: 'Gangland Fury Badge', href: 'https://homecoming.wiki/wiki/Gangland Fury_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '5',
}
