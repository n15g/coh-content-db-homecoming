import { BadgeData } from 'coh-content-db'

export const Faithful: BadgeData = {
  type: 'veteran',
  key: 'faithful',
  setTitleId: [625],
  name: 'Faithful',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `Paragon City thanks you for your continued support in keeping the City safe. You have attained six Veteran levels.` },
    { alignment: 'villain', value: `You are ever faithful in your service, to cause pain and misery to all those in your way. You have attained six Veteran levels.` },
  ],
  acquisition: 'Reach Veteran level 6.',
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/veteran-6.png',
}
