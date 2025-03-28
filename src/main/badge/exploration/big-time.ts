import { BadgeData } from 'coh-content-db'
import { PocketD } from '../../zone/pocket-d'

export const BigTime: BadgeData = {
  type: 'EXPLORATION',
  key: 'big-time',
  setTitle: { id: 717 },
  name: [{ value: 'Big Time' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: PocketD.key,
  loc: [-163, 20, -1362],
  badgeText: [{
    value: 'The \'Fambly\', as Joe Young would call them, had been dipping their fingers into the RMFC for some time.'
      + ' As luck would have it, DJ Zero offered Joe and Cornelius a chance to expand their business venture.'
      + ' The Monkey Fight Club Arena and Pocket D are a one-two punch that will certainly be a knockout!',
  }],
  notes: 'In Pocket D, the badge is in the top left (northwestern) corner on the top floor of the Monkey Fight Club, located in the hero alcove off the main dance floor.',
  links: [
    { title: 'Big Time Badge', href: 'https://homecoming.wiki/wiki/Big_Time_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
