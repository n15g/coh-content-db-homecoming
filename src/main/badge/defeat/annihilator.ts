import { BadgeData } from 'coh-content-db'

export const Annihilator: BadgeData = {
  type: 'DEFEAT',
  key: 'annihilator',
  setTitle: { id: 305 },
  name: [
    { value: 'Annihilator' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      alignment: 'H', value: 'After the beating you handed them, the Freedom Phalanx is very glad that you\'re on their side '
        + 'now.',
    },
    { alignment: 'V', value: 'Nice smackdown on the Freedom Phalanx. Lord Recluse is pleased with your performance.' },
  ],
  acquisition: 'Defeat the future Freedom Phalanx during Lord Recluse\'s Strike Force',
  links: [
    { title: 'Annihilator Badge', href: 'https://homecoming.wiki/wiki/Annihilator_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/annihilator.png' },
  ],
}
