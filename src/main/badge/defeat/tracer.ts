import { BadgeData } from 'coh-content-db'

export const Tracer: BadgeData = {
  type: 'DEFEAT',
  key: 'tracer',
  setTitle: { id: 54 },
  name: [
    { value: 'Tracer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have proven yourself a person who can track down anyone, even those with the ability to '
        + 'teleport.',
    },
  ],
  acquisition: 'Defeat 200 Tsoo sorcerers',
  links: [
    { title: 'Tracer Badge', href: 'https://homecoming.wiki/wiki/Tracer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/tracer.png' },
  ],
}
