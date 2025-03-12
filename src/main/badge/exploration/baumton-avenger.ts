import { BadgeData } from 'coh-content-db'
import { SewerNetwork } from '../../map/sewer-network'
import { Boomtown } from '../../map/boomtown'

export const BaumtonAvenger: BadgeData = {
  type: 'EXPLORATION',
  key: 'baumton-avenger',
  setTitle: { id: 1831 },
  name: [{ value: 'Baumton Avenger' }],
  alignment: ['H'],
  mapKey: SewerNetwork.key,
  loc: [1792, -59, -2944],
  badgeText: [{
    value: `No one who lived through the Rikti Invasion of Baumton will ever forget it.
For many this was a personal violation. They saw their homes, their lives, and those that they cared about laid to waste in mere minutes.
The thirst for revenge against the Rikti is one that burns still, especially amongst the survivors of Baumton.
Some take the trek down into these tunnels to exact some retribution against the Rikti, who now skulk and breed down here to perpetrate their alien designs.`,
  }],
  notes: `Located in [map:${SewerNetwork.key}] 107 yards south of the [map:${Boomtown.key}] transfer point, in the middle of the metal walkway.`,
  links: [
    { title: 'Baumton Avenger Badge', href: 'https://homecoming.wiki/wiki/Baumton_Avenger_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '3',
}
