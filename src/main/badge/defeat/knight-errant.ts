import { BadgeData } from 'coh-content-db'

export const KnightErrant: BadgeData = {
  type: 'DEFEAT',
  key: 'knight-errant',
  setTitle: { id: 200 },
  name: [
    { alignment: 'H', value: 'Knight Errant' },
    { alignment: 'V', value: 'Black Knight' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have helped defeat the Clockwork Paladin, a diabolical invention of the Clockwork King.' },
  ],
  acquisition: 'Stop a Paladin Construction',
  links: [
    { title: 'Knight Errant Badge', href: 'https://homecoming.wiki/wiki/Knight_Errant_Badge' },
    { title: 'Black Knight Badge', href: 'https://homecoming.wiki/wiki/Black_Knight_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/knight-errant.png' },
  ],
}
