import { BadgeData, zoneLink } from 'coh-content-db'
import { Croatoa } from '../../zone/croatoa'

export const WaylonsObserver: BadgeData = {
  type: 'exploration',
  key: 'waylons-observer',
  setTitleId: [1543],
  name: [{ value: 'Waylon\'s Observer' }],
  morality: 'heroic',
  zoneKey: Croatoa.key,
  loc: [2639, 10, 1500],
  badgeText: [{
    value: 'Waylon McCrane, an infamous adventurer in Croatoa, lives in this home.'
      + ' Mayor Bower has asked Waylon to stay within the town limits due to the Fir Bolg, but Waylon insists that, \'no pumpkin-headed monster will tell ME where to live!\'',
  }],
  notes: `
Located in the New Connaught neighborhood of ${zoneLink(Croatoa)}.

It is on the porch of the house 562 yards WNW of the Paragon City Monorail station.`,
  links: [
    { title: 'Waylon\'s Observer Badge', href: 'https://homecoming.wiki/wiki/Waylon%27s_Observer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '7',
}
