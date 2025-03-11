import { BadgeData } from 'coh-content-db'

export const Emancipator: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'emancipator',
  setTitle: { id: 82 },
  name: [
    { value: 'Emancipator' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You have defeated the Clockwork King in an alternate dimension where he realized his true '
        + 'potential.',
    },
  ],
  acquisition: 'Complete the Investigate the psychic signal mission from Tina Macintyre',
  links: [
    { title: 'Emancipator Badge', href: 'https://homecoming.wiki/wiki/Emancipator_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/emancipator.png' },
  ],
}
