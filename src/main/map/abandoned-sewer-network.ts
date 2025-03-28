import { GameMapData } from 'coh-content-db'

export const AbandonedSewerNetwork: GameMapData = {
  key: 'abandoned-sewer-network',
  name: 'Abandoned Sewer Network',
  links: [{ title: 'Abandoned Sewer Network', href: 'https://homecoming.wiki/wiki/Abandoned_Sewer_Network' }],
  vidiotMaps: [
    {
      name: 'Abandoned Sewer Network Vidiot Map',
      imageUrl: 'https://n15g.github.io/coh-content-db-homecoming/images/vidiotmaps/abandoned-sewer-network.png',
      pointsOfInterest: [
        { pos: [295, 365], mapKey: 'sewer-network' },
        { pos: [1113, 718], mapKey: 'sewer-network' },
        { pos: [68, 1589], mapKey: 'sewer-network' },
        { pos: [673, 1802], mapKey: 'sewer-network' },
        { pos: [1430, 1407], mapKey: 'sewer-network' },

        { pos: [736, 1096], notes: 'Trial Door' },

        { pos: [295, 450], badgeKey: 'boomtown-refugee' },
        { pos: [687, 1097], badgeKey: 'hades-aspirant' },
        { pos: [1054, 717], badgeKey: 'secret-of-the-city' },
        { pos: [673, 1776], badgeKey: 'sprawl-survivor' },
        { pos: [98, 1589], badgeKey: 'the-underlord' },
        { pos: [1407, 1407], badgeKey: 'from-beneath-you' },
        { pos: [563, 760], badgeKey: 'living-dark' },
        { pos: [618, 1433], badgeKey: 'persephone-supplicant' },

        { pos: [583, 744], badgeKey: 'academic', badgeRequirementKey: 'acad-2' },
      ],
    },
  ],
}
