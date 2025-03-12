import { BadgeData } from 'coh-content-db'
import { StrigaIsle } from '../../map/striga-isle'

export const TheWolfsSnarl: BadgeData = {
  type: 'EXPLORATION',
  key: 'the-wolfs-snarl',
  setTitle: { id: 1786 },
  name: [{ value: 'The Wolf\'s Snarl' }],
  alignment: ['H'],
  mapKey: StrigaIsle.key,
  loc: [-3222, -128, -1824],
  badgeText: [{
    value: 'The Wolf\'s Throat is a vital causeway for the Council, linking the outside world to the innards of the Council Base.'
      + ' When the Council goes to war they say "Let the wolf howl," indicating a massive outpouring of force from here.'
      + ' Lately, however, that howl has been choked by an influx of Banished Pantheon into this critical supply and transit corridor.'
      + ' While the Banished Pantheon make such bold attacks, the Council\'s war plans are stalled.',
  }],
  notes: 'Located in [map:striga-isle] SSW from the Wolf\'s Throat marker, inside the tunnel.',
  links: [
    { title: 'The Wolf\'s Snarl Badge', href: 'https://homecoming.wiki/wiki/The_Wolf%27s_Snarl_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '4',
}
