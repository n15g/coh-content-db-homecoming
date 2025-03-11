import { BadgeData } from 'coh-content-db'

export const SavedTheWorld: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'saved-the-world',
  setTitle: { id: 733 },
  name: [
    { alignment: 'H', value: 'Saved the World' },
    { alignment: 'V', value: 'Saved the World... for Later' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      alignment: 'H', value: 'After defeating Lord Recluse\'s plan to steal the powers of all the heroes on the planet, you '
        + 'have been recognized as a true world-savior.',
    },
    {
      alignment: 'V', value: 'Defeating Lord Recluse\'s plan to steal the powers of all the heroes on the planet was '
        + 'necessary at the time. After all, it wasn\'t YOU at the helm.',
    },
  ],
  acquisition: 'Complete the Ms. Liberty Task Force',
  links: [
    { title: 'Saved the World Badge', href: 'https://homecoming.wiki/wiki/Saved_the_World_Badge' },
    { title: 'Saved the World... For Later Badge', href: 'https://homecoming.wiki/wiki/Saved_the_World..._For_Later_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/defeatrecluse.png' },
  ],
}
