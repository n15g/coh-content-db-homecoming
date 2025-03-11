import { BadgeData } from 'coh-content-db'
import { NightWard } from '../../map/night-ward'

export const NocturnalPilgrim: BadgeData = {
  type: 'EXPLORATION',
  key: 'nocturnal-pilgrim',
  setTitle: { id: 2226 },
  name: [{ value: 'Nocturnal Pilgrim' }],
  alignment: ['H', 'V', 'P'],
  mapKey: NightWard.key,
  loc: [-2334, 84, -37],
  badgeText: [{
    value: `An arduous trek across Night Ward's misty plain has brought you at last to Lichgate's Chapel of Enduring Light.
Your faith grows fleeting as you observe the disheartened souls around you, lying in wait to be ferried to the other side.
You begin to feel as though perhaps your journey to this land has been in vain.
Perhaps you have been led this far only to have your spirits broken like so many of those around you.
Night Ward can be a cruel mistress.`,
  }],
  notes: `Located in [map:${NightWard.key}], in the The Digs neighborhood, 263 yards NNE of the map marker; near the merit vendor.`,
  links: [
    { title: 'Nocturnal Pilgrim Badge', href: 'https://homecoming.wiki/wiki/Nocturnal_Pilgrim_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '1',
}
