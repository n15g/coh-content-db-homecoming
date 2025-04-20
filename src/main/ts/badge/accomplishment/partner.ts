import { BadgeData } from 'coh-content-db'

export const Partner: BadgeData = {
  type: 'accomplishment',
  key: 'partner',
  setTitleId: [1968],
  name: [
    { alignment: 'hero', value: 'Partner' },
    { alignment: 'villain', value: 'Conspirator' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You helped 50 teams complete a Weekly Strike Target even though you already received the bonus for the week.',
  acquisition: `Complete 50 [Weekly Strike Targets](https://homecoming.wiki/wiki/Weekly_Strike_Target) after you've already completed one for the week.`,
  links: [
    { title: 'Partner Badge', href: 'https://homecoming.wiki/wiki/Partner_Badge' },
    { title: 'Conspirator Badge', href: 'https://homecoming.wiki/wiki/Conspirator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/partner.png',
}
