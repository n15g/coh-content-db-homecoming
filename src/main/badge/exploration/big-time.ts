import { BadgeData } from 'coh-content-db'
import { PocketD } from '../../zone/pocket-d'

export const BigTime: BadgeData = {
  type: 'exploration',
  key: 'big-time',
  setTitleId: [717],
  name: 'Big Time',
  morality: 'all',
  zoneKey: PocketD.key,
  loc: [-163, 20, -1362],
  badgeText: `The 'Fambly', as Joe Young would call them, had been dipping their fingers into the RMFC for some time.
As luck would have it, DJ Zero offered Joe and Cornelius a chance to expand their business venture. The Monkey Fight Club Arena and Pocket D are a one-two punch that will certainly be a knockout!`,
  notes: 'Located in the top left (northwestern) corner on the top floor of the Monkey Fight Club, in the hero alcove off the main dance floor.',
  links: [
    { title: 'Big Time Badge', href: 'https://homecoming.wiki/wiki/Big_Time_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
