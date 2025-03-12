import { BadgeData } from 'coh-content-db'

export const MummysCurse: BadgeData = {
  type: 'EVENT',
  key: 'mummys-curse',
  setTitle: { id: 2505 },
  name: [
    { value: 'Mummy\'s Curse' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You have defeated 5 arisen mummies, ancient embalmed zombies who had returned to life to seek their vengeance against tomb robbers.` },
  ],
  acquisition: `Defeat 5 Arisen Mummies during the Halloween event.`,
  notes: `This badge rewards 2 prismatic aether particles.`,
  links: [
    { title: 'Mummy\'s Curse Badge', href: 'https://homecoming.wiki/wiki/Mummy%27s_Curse_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/mummys-curse.png' }],
}
