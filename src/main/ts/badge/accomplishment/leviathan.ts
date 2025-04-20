import { BadgeData } from 'coh-content-db'
import { OperativeRenaultStrikeForce } from '../../mission/operative-renault-strike-force'

export const Leviathan: BadgeData = {
  type: 'accomplishment',
  key: 'leviathan',
  setTitleId: [514],
  name: 'Leviathan',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'You have fought and defeated the awakened Eye of the Leviathan in the Temple of the Waters deep beneath Sharkhead Isle.',
  links: [
    { title: 'Leviathan Badge', href: 'https://homecoming.wiki/wiki/Leviathan_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/leviathan.png',
  requirements: [
    { key: OperativeRenaultStrikeForce.key, type: 'mission', missionKey: OperativeRenaultStrikeForce.key },
  ],
}
