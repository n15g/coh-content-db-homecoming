import { BadgeData } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'

export const Patriot: BadgeData = {
  type: 'EXPLORATION',
  key: 'patriot',
  setTitle: { id: 89 },
  name: [
    { alignment: 'H', value: 'Patriot' },
    { alignment: 'V', value: 'International Spy' },
  ],
  alignment: ['H'],
  zoneKey: AtlasPark.key,
  loc: [162, -768, -678],
  badgeText: [{
    value: 'You have seen the statue of Cassiopeia, a Heroine recognized as a citizen of every country on Earth after she single-handedly saved the world from a rogue comet.',
  }],
  notes: 'Located in the Atlas Plaza neighborhood of Atlas Park.\n'
    + '\n'
    + 'The badge marker is inside City Hall, just in front of the statue located just left (west) of the supergroup registration desk.',
  links: [
    { title: 'Patriot Badge', href: 'https://homecoming.wiki/wiki/Patriot_Badge' },
    { title: 'International Spy Badge', href: 'https://homecoming.wiki/wiki/International_Spy_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '4',
}
