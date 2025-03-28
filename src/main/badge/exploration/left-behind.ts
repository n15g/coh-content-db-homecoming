import { BadgeData } from 'coh-content-db'
import { SkywayCity } from '../../zone/skyway-city'

export const LeftBehind: BadgeData = {
  type: 'EXPLORATION',
  key: 'left-behind',
  setTitle: { id: 1537 },
  name: [{ value: 'Left Behind' }],
  alignment: ['H'],
  zoneKey: SkywayCity.key,
  loc: [-1216, 4, -2368],
  badgeText: [{
    value: 'Before the Rikti War, the Red Tiger, Jake Montoya, used this area to train fellow heroes.'
      + ' The people of Paragon would gather on the weekends to watch the exciting \'Hide Park Sparring Sessions\'.'
      + ' After his mandatory retirement, the sparring sessions stopped all together.',
  }],
  notes: 'The Left Behind Badge is in the Hide Park neighborhood of Skyway City. It is in the middle of a small courtyard 238 yards west of the Talos Island zone connection.',
  links: [
    { title: 'Left Behind Badge', href: 'https://homecoming.wiki/wiki/Left_Behind_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '7',
}
