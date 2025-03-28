import { BadgeData, zoneLink } from 'coh-content-db'
import { TheStormPalace } from '../../zone/the-storm-palace'

export const LordOfStorms: BadgeData = {
  type: 'EXPLORATION',
  key: 'lord-of-storms',
  setTitle: { id: 1861 },
  name: [
    { sex: 'M', value: 'Lord of Storms' },
    { sex: 'F', value: 'Lady of Storms' },
  ],
  alignment: ['H'],
  zoneKey: TheStormPalace.key,
  loc: [1, 3637, -3],
  badgeText: [{
    value: `Now you stand upon the apex of the Storm Palace, at the center of a vortex of destiny and mystical energy.
So few have come as far, so many have fallen in the attempt that you deserve to be recognized as a master, of a sort, of this distant and inhospitable place.
By now, words of your deeds have spread to even Rularuu itself and the threat you and your fellows represent should be apparent.
Go now and strike the final blow that will confirm, once and for all, that the defenders of Primal Earth are not to be trifled with.`,
  }],
  notes: `Located in ${zoneLink(TheStormPalace)} at the Storm Palace marker, at the highest point atop the Palace itself.`,
  links: [
    { title: 'Lord of Storms Badge', href: 'https://homecoming.wiki/wiki/Lord_of_Storms_Badge' },
    { title: 'Lady of Storms Badge', href: 'https://homecoming.wiki/wiki/Lady_of_Storms_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '8',
}
