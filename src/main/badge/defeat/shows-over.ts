import { BadgeData } from 'coh-content-db'

export const ShowsOver: BadgeData = {
  type: 'DEFEAT',
  key: 'shows-over',
  setTitle: { id: 2059 },
  name: [
    { value: 'Show\'s Over' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'When you roll into town, the fractured Carnivals of Praetoria know to close up shop before you '
        + 'force the issue. You defeated several Carnival of Light, Vengeance, or War to earn this badge.',
    },
  ],
  acquisition: 'Defeat 100 points worth of Carnival of Light, Vengeance, or War',
  links: [
    { title: 'Show\'s Over Badge', href: 'https://homecoming.wiki/wiki/Show%27s_Over_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/shows-over.png' },
  ],
}
