import { BadgeData } from 'coh-content-db'
import { Croatoa } from '../../zone/croatoa'

export const MidnightersPerseverance: BadgeData = {
  type: 'exploration',
  key: 'midnighters-perseverance',
  setTitleId: [1544],
  name: `Midnighter's Perseverance`,
  morality: 'heroic',
  zoneKey: Croatoa.key,
  loc: [-2070, 0, 470],
  badgeText: `This bridge is the site where Mayor Bower and Buck Salinger last met; Bower informed Salinger that his trek into Red Cap territory was a suicide mission.
Salinger ignored the warning and continued forward, insisting that his skills as a Midnighter would prevail. So far, Salinger's luck - and survival skills - haven't failed him.`,
  notes: `Located in the middle of the bridge 60 yards south of Buck Salinger.`,
  links: [
    { title: `Midnighter's Perseverance Badge`, href: 'https://homecoming.wiki/wiki/Midnighter%27s_Perseverance_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '8',
}
