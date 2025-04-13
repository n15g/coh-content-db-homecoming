import { BadgeData } from 'coh-content-db'

export const Backup: BadgeData = {
  type: 'accomplishment',
  key: 'backup',
  setTitleId: [1967],
  name: [
    { alignment: 'hero', value: 'Backup' },
    { alignment: 'villain', value: 'Confederate' },
  ],
  morality: 'all',
  badgeText: 'You helped 10 teams complete a Weekly Strike Target even though you already received the bonus for the week.',
  acquisition: `Complete 10 [Weekly Strike Targets](https://homecoming.wiki/wiki/Weekly_Strike_Target) after you've already completed one for the week.`,
  links: [
    { title: 'Backup Badge', href: 'https://homecoming.wiki/wiki/Backup_Badge' },
    { title: 'Confederate Badge', href: 'https://homecoming.wiki/wiki/Confederate_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/backup.png',
}
