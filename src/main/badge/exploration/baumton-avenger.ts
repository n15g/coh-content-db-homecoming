import { BadgeData, zoneLink } from 'coh-content-db'
import { SewerNetwork } from '../../zone/sewer-network'
import { Boomtown } from '../../zone/boomtown'

export const BaumtonAvenger: BadgeData = {
  type: 'EXPLORATION',
  key: 'baumton-avenger',
  setTitle: { id: 1831 },
  name: [{ value: 'Baumton Avenger' }],
  alignment: ['H'],
  zoneKey: SewerNetwork.key,
  loc: [1792, -59, -2944],
  badgeText: [{
    value: `No one who lived through the Rikti Invasion of Baumton will ever forget it.
For many this was a personal violation. They saw their homes, their lives, and those that they cared about laid to waste in mere minutes.
The thirst for revenge against the Rikti is one that burns still, especially amongst the survivors of Baumton.
Some take the trek down into these tunnels to exact some retribution against the Rikti, who now skulk and breed down here to perpetrate their alien designs.`,
  }],
  notes: `Located in ${zoneLink(SewerNetwork)} 107 yards south of the ${zoneLink(Boomtown)} transfer point, in the middle of the metal walkway.`,
  links: [
    { title: 'Baumton Avenger Badge', href: 'https://homecoming.wiki/wiki/Baumton_Avenger_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '3',
}
