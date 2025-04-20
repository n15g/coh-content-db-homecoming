import { BadgeData } from 'coh-content-db'

export const ExArchvillain: BadgeData = {
  type: 'defeat',
  key: 'ex-archvillain',
  setTitleId: [572],
  name: [
    { alignment: 'hero', value: 'Ex-Archvillain' },
    { alignment: 'villain', value: 'Archvillain' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `The Freedom Phalanx are known for seeing the good in everyone, but in your case it took a little longer than average.` },
    { alignment: 'villain', value: 'You have claimed victory over the greatest heroes of Paragon City, the Freedom Phalanx!' },
  ],
  acquisition: 'Defeat the Freedom Phalanx during the Lord Recluse Strike Force.',
  links: [
    { title: 'Ex-Archvillain Badge', href: 'https://homecoming.wiki/wiki/Ex-Archvillain_Badge' },
    { title: 'Archvillain Badge', href: 'https://homecoming.wiki/wiki/Archvillain_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/ex-archvillain.png',
}
