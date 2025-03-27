import { BadgeData, mapLink } from 'coh-content-db'
import { AtlasPark } from '../../map/atlas-park'

export const Observant: BadgeData = {
  type: 'EXPLORATION',
  key: 'observant',
  setTitle: { id: 1516 },
  name: [{ value: 'Observant' }],
  alignment: ['H'],
  mapKey: AtlasPark.key,
  loc: [-135, -94, 470],
  badgeText: [{
    value: `Vanguard only allows super-powered heroes and Vanguard officials into their compounds.
            Although Vanguard scientists become annoyed when people look in on their various Rikti experiments, it is really their own fault for not having curtains to cover up the window.`,
  }],
  notes: `The Observant Badge is located in the Vanguard building in ${mapLink(AtlasPark)}.

          It is outside a room where scientists can be seen performing experiments.`,
  links: [
    { title: 'Observant Badge', href: 'https://homecoming.wiki/wiki/Observant_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '8',
}
