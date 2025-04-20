import { BadgeData, zoneLink } from 'coh-content-db'
import { SewerNetwork } from '../../zone/sewer-network'
import { SkywayCity } from '../../zone/skyway-city'
import { AtlasPark } from '../../zone/atlas-park'
import { KingsRow } from '../../zone/kings-row'

export const TerrorOfTheVahzilok: BadgeData = {
  type: 'exploration',
  key: 'terror-of-the-vahzilok',
  setTitleId: [1835],
  name: 'Terror of the Vahzilok',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `They hunt the innocent and violate the dead.
They are the name used by mothers to terrify misbehaving children.
They are deserving of every ounce of punishment visited upon them.
In the sewers they congregate in large numbers, believing they are safe from judgment.
But you are here to prove them wrong.
You will hunt them down and extract your vengeance upon every Reaper and Mortificator you find.
You will make them know fear.`,
  notes: `Located 362 yards northwest of the ${zoneLink(SkywayCity)} marker, in the middle of the junction that connects the ${zoneLink(AtlasPark)} Sector,
${zoneLink(KingsRow)} Sector, ${zoneLink(SkywayCity)} Sector and Underworld.`,
  links: [
    { title: 'Terror of the Vahzilok Badge', href: 'https://homecoming.wiki/wiki/Terror_of_the_Vahzilok_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SewerNetwork.key, coords: [320, -576, 1536], icon: 'badge', iconText: '7' } },
  ],
}
