import { BadgeData, zoneLink } from 'coh-content-db'
import { AbandonedSewerNetwork } from '../../zone/abandoned-sewer-network'
import { SkywayCity } from '../../zone/skyway-city'
import { AtlasPark } from '../../zone/atlas-park'
import { KingsRow } from '../../zone/kings-row'

export const PersephoneSupplicant: BadgeData = {
  type: 'exploration',
  key: 'persephone-supplicant',
  setTitleId: [1828],
  name: 'Persephone Supplicant',
  morality: 'paragon-city-access',
  badgeText: `There are some who can court darkness without making it a part of themselves.
They walk with ease in the shadowy spaces, yet carry a portion of the light with them wherever they go.
It is rare to be able to straddle these two worlds so easily, too easy is it to devote yourself completely to one side or the other.
It is in a sense a reflection of one's mastery over themselves and you would not be the first to tread these sodden halls to test their resolve or to seek mastery of their own instincts.
Most heroes flee the Abandoned Sewer Network before they can be tested, while people such as the Vahzilok and the Hellions give themselves over completely to the darkness.`,
  notes: `Located 362 yards northwest of the ${zoneLink(SkywayCity)} marker, in the middle of the junction that connects ${zoneLink(AtlasPark)} Sector, ${zoneLink(KingsRow)} Sector, ${zoneLink(SkywayCity)} Sector and Underworld.`,
  links: [
    { title: 'Persephone Supplicant Badge', href: 'https://homecoming.wiki/wiki/Persephone_Supplicant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: AbandonedSewerNetwork.key, coords: [320, -576, 1536], icon: 'badge', iconText: '8' } },
  ],
}
