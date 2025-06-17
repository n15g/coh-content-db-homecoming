import { BadgeData } from 'coh-content-db'

export const Peacekeeper: BadgeData = {
  type: 'defeat',
  key: 'peacekeeper',
  setTitleId: [2568],
  name: [
    { alignment: 'hero', value: 'Peacekeeper' },
    { alignment: 'villain', value: `Peacemaker` },
  ],
  releaseDate: '2025-06-17',
  morality: 'all',
  badgeText: `The most expensive weapon in P.E.A.C.E.'s arsenal was a gargantuan piloted mech... That you sent to the scrap heap. It's not quite apparent what One Statesman Plaza and its tower hides, but Blackwing Industries have been paid an unthinkable sum to ensure that Emil Christie's investment was secure.`,
  acquisition: 'Defeat the P.E.A.C.E. Keeper in Kallisti Wharf to earn this badge.',
  links: [
    { title: 'Peacekeeper Badge', href: 'https://homecoming.wiki/wiki/Peacekeeper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/peacekeeper.png',
}
