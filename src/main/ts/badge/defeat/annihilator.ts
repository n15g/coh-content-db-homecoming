import { BadgeData } from 'coh-content-db'

export const Annihilator: BadgeData = {
  type: 'defeat',
  key: 'annihilator',
  setTitleId: [305],
  name: 'Annihilator',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `After the beating you handed them, the Freedom Phalanx is very glad that you're on their side now.` },
    { alignment: 'villain', value: 'Nice smackdown on the Freedom Phalanx. Lord Recluse is pleased with your performance.' },
  ],
  acquisition: `Defeat the future Freedom Phalanx during Lord Recluse's Strike Force.`,
  links: [
    { title: 'Annihilator Badge', href: 'https://homecoming.wiki/wiki/Annihilator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/annihilator.png',
}
