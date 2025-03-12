import { BadgeData } from 'coh-content-db'
import { AbandonedSewerNetwork } from '../../map/abandoned-sewer-network'

export const PersephoneSupplicant: BadgeData = {
  type: 'EXPLORATION',
  key: 'persephone-supplicant',
  setTitle: { id: 1828 },
  name: [{ value: 'Persephone Supplicant' }],
  alignment: ['H'],
  mapKey: AbandonedSewerNetwork.key,
  loc: [320, -576, 1536],
  badgeText: [{
    value: `There are some who can court darkness without making it a part of themselves.
They walk with ease in the shadowy spaces, yet carry a portion of the light with them wherever they go.
It is rare to be able to straddle these two worlds so easily, too easy is it to devote yourself completely to one side or the other.
It is in a sense a reflection of one's mastery over themselves and you would not be the first to tread these sodden halls to test their resolve or to seek mastery of their own instincts.
Most heroes flee the Abandoned Sewer Network before they can be tested, while people such as the Vahzilok and the Hellions give themselves over completely to the darkness.`,
  }],
  notes: `Located in [map:abandoned-sewer-network] 362 yards northwest of the Skyway City marker, in the middle of the junction that connects
Atlas Park Sector, Kings Row Sector, Skyway City Sector and Underworld.`,
  links: [
    { title: 'Persephone Supplicant Badge', href: 'https://homecoming.wiki/wiki/Persephone_Supplicant_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '8',
}
