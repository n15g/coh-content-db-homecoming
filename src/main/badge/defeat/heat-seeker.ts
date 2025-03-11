import { BadgeData } from 'coh-content-db'

export const HeatSeeker: BadgeData = {
  type: 'DEFEAT',
  key: 'heat-seeker',
  setTitle: { id: 570 },
  name: [
    { value: 'Heat Seeker' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have successfully brought down one of Lord Recluses\' fliers. Lord Recluse is amused.' },
  ],
  acquisition: 'Defeat the Arachnos Flier during the Statesman Task Force or in Grandville',
  links: [
    { title: 'Heat Seeker Badge', href: 'https://homecoming.wiki/wiki/Heat_Seeker_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/heat-seeker.png' },
  ],
}
