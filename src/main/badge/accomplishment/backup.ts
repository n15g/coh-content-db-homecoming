import { BadgeData } from 'coh-content-db'

export const Backup: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'backup',
  setTitle: { id: 1967 },
  name: [
    { alignment: 'H', value: 'Backup' },
    { alignment: 'V', value: 'Confederate' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You helped 10 teams complete a Weekly Strike Target even though you already received the bonus '
        + 'for the week.',
    },
  ],
  acquisition: 'Complete 10 Weekly Strike Targets after you\'ve already completed one for the week',
  links: [
    { title: 'Backup Badge', href: 'https://homecoming.wiki/wiki/Backup_Badge' },
    { title: 'Confederate Badge', href: 'https://homecoming.wiki/wiki/Confederate_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/backup.png' },
  ],
}
