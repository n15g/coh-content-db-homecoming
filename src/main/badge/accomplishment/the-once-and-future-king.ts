import { BadgeData } from 'coh-content-db'

export const TheOnceAndFutureKing: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'the-once-and-future-king',
  setTitle: { id: 2219 },
  name: [
    { sex: 'M', value: 'The Once and Future King' },
    { sex: 'F', value: 'The Once and Future Queen' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You helped set Pendragon down the path of righteousness.  While he may walk the mists of '
        + 'Praetoria for years, his soul has been redeemed and his freedom from Night Ward ensured.',
    },
  ],
  acquisition: 'Complete the story arc from Sir Bedwyr',
  links: [
    { title: 'The Once and Future King Badge', href: 'https://homecoming.wiki/wiki/The_Once_and_Future_King_Badge' },
    { title: 'The Once and Future Queen Badge', href: 'https://homecoming.wiki/wiki/The_Once_and_Future_Queen_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-once-and-future-king.png' },
  ],
}
