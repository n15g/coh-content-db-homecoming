import { BadgeData } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'

export const Regal: BadgeData = {
  type: 'exploration',
  key: 'regal',
  setTitleId: [115],
  name: 'Regal',
  morality: 'heroic',
  zoneKey: Boomtown.key,
  loc: [-448, 42, 2170],
  badgeText: 'King Mihenra, a self-proclaimed warlord from the Netherworld, attempted to seize control of Paragon City, only to be defeated by Positron on this very spot.',
  notes: 'The Regal Badge is located in the Powderkeg neighborhood of Boomtown. It is one of the trickiest exploration badges to find in the game.'
    + ' 600 yards due west of the Powderkeg marker, there is a road. Directly north of that location, one level down, is a tunnel entrance.'
    + '\n\nThe badge marker is located in the middle of that tunnel along the center divider, 682 yards west of the Powderkeg marker.',
  links: [
    { title: 'Regal Badge', href: 'https://homecoming.wiki/wiki/Regal_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '2',
}
