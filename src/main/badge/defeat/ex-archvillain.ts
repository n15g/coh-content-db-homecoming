import { BadgeData } from 'coh-content-db'

export const ExArchvillain: BadgeData = {
  type: 'DEFEAT',
  key: 'ex-archvillain',
  setTitle: { id: 572 },
  name: [
    { alignment: 'H', value: 'Ex-Archvillain' },
    { alignment: 'V', value: 'Archvillain' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      alignment: 'H', value: 'The Freedom Phalanx are known for seeing the good in everyone, but in your case it took a '
        + 'little longer than average.',
    },
    { alignment: 'V', value: 'You have claimed victory over the greatest heroes of Paragon City, the Freedom Phalanx!' },
  ],
  acquisition: 'Defeat the Freedom Phalanx during the Lord Recluse Strike Force',
  links: [
    { title: 'Ex-Archvillain Badge', href: 'https://homecoming.wiki/wiki/Ex-Archvillain_Badge' },
    { title: 'Archvillain Badge', href: 'https://homecoming.wiki/wiki/Archvillain_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/ex-archvillain.png' },
  ],
}
