import { BadgeData } from 'coh-content-db'

export const Escapee: BadgeData = {
  type: 'DEFEAT',
  key: 'escapee',
  setTitle: { id: 1473 },
  name: [
    { value: 'Escapee' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Despite all of their genetic modifications and cybernetics, the Failed Experiments were no '
        + 'match for you. You defeated several waves of Failed Experiments to earn this badge.',
    },
  ],
  acquisition: 'Defeat 100 points worth of Failed Experiments',
  links: [
    { title: 'Escapee Badge', href: 'https://homecoming.wiki/wiki/Escapee_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/escapee.png' },
  ],
}
