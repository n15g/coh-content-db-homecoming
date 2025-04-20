import { BadgeData, missionUri } from 'coh-content-db'
import { FluxTheOutcast } from '../../mission/flux-the-outcast'

export const Complicated: BadgeData = {
  type: 'accomplishment',
  key: 'complicated',
  setTitleId: [2459],
  name: 'Complicated',
  releaseDate: '2020-11-26',
  morality: 'heroic',
  badgeText: `Sometimes, the line between good and evil isn't as simple as it seems.`,
  acquisition: `Complete the "Take out Frostfire" mission of the ${FluxTheOutcast} story arc.`,
  links: [
    { title: 'Negotiator Badge', href: 'https://homecoming.wiki/wiki/Complicated_Badge' },
    { title: FluxTheOutcast.name, href: missionUri(FluxTheOutcast) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/complicated.png',
}
