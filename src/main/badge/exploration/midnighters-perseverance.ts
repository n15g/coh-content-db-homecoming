import { BadgeData } from 'coh-content-db'
import { Croatoa } from '../../map/croatoa'

export const MidnightersPerseverance: BadgeData = {
  type: 'EXPLORATION',
  key: 'midnighters-perseverance',
  setTitle: { id: 1544 },
  name: [{ value: 'Midnighter\'s Perseverance' }],
  alignment: ['H'],
  mapKey: Croatoa.key,
  loc: [-2070, 0, 470],
  badgeText: [{
    value: 'This bridge is the site where Mayor Bower and Buck Salinger last met; Bower informed Salinger that his trek into Red Cap territory was a suicide mission.'
      + ' Salinger ignored the warning and continued forward, insisting that his skills as a Midnighter would prevail. So far, Salinger\'s luck - and survival skills - haven\'t failed him.',
  }],
  notes: 'The Midnighter\'s Perseverence Badge is in the middle of the bridge 60 yards south of Buck Salinger in Croatoa.',
  links: [
    { title: 'Midnighter\'s Perseverance Badge', href: 'https://homecoming.wiki/wiki/Midnighter%27s_Perseverance_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '8',
}
