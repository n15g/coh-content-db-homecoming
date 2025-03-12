import { BadgeData } from 'coh-content-db'
import { TalosIsland } from '../../map/talos-island'

export const TheOldMe: BadgeData = {
  type: 'EXPLORATION',
  key: 'the-old-me',
  setTitle: { id: 1547 },
  name: [{ value: 'The Old Me' }],
  alignment: ['H'],
  mapKey: TalosIsland.key,
  loc: [-1184, 7, 2132],
  badgeText: [{
    value: 'This area is where the real Ajax was buried, after being killed by the thug Ralph Valetti, who stole his identity as well as his powers.'
      + ' After the revelation was made, officials rushed to recover Ajax\'s body, which is now preserved in an unknown area within the city.',
  }],
  notes: 'Located on the southwestern shore of the beach inside Circe Island in [map:talos-island], 73 yards west of the neighborhood marker.',
  links: [
    { title: 'The Old Me Badge', href: 'https://homecoming.wiki/wiki/The_Old_Me_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '5',
}
