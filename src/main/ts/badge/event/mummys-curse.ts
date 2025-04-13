import { BadgeData } from 'coh-content-db'

export const MummysCurse: BadgeData = {
  type: 'event',
  key: 'mummys-curse',
  setTitleId: [2505],
  name: `Mummy's Curse`,
  morality: 'all',
  badgeText: `You have defeated 5 arisen mummies, ancient embalmed zombies who had returned to life to seek their vengeance against tomb robbers.`,
  acquisition: `Defeat 5 Arisen Mummies during the Halloween event.`,
  links: [
    { title: `Mummy's Curse Badge`, href: 'https://homecoming.wiki/wiki/Mummy%27s_Curse_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/mummys-curse.png',
}
