import { BadgeData } from 'coh-content-db'

export const KillSkuls: BadgeData = {
  type: 'DEFEAT',
  key: 'kill-skuls',
  setTitle: { id: 217 },
  name: [
    { value: 'Kill Skuls' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'Go. Hunt. Kill Skuls.' },
  ],
  acquisition: 'Defeat 500 Skulls minions, lieutenants, or bosses (excluding some female Skulls)',
  links: [
    { title: 'Kill Skuls Badge', href: 'https://homecoming.wiki/wiki/Kill_Skuls_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/skulls.png' },
  ],
}
