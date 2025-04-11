import { BadgeData } from 'coh-content-db'
import { OperativeRenault } from '../../contact/operative-renault'

export const Leviathan: BadgeData = {
  type: 'accomplishment',
  key: 'leviathan',
  setTitleId: [514],
  name: 'Leviathan',
  morality: 'villainous',
  badgeText: 'You have fought and defeated the awakened Eye of the Leviathan in the Temple of the Waters deep beneath Sharkhead Isle.',
  acquisition: 'Complete the Operative Renault Strike Force: The Temple of the Waters.',
  links: [
    { title: 'Leviathan Badge', href: 'https://homecoming.wiki/wiki/Leviathan_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/leviathan.png',
  requirements: [
    { key: 'operative-renault-strike-force', type: 'TASK_FORCE', missionName: 'Operative Renault Strike Force', contactKey: OperativeRenault.key },
  ],
}
