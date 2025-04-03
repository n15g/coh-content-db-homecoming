import { BadgeData } from 'coh-content-db'

export const Partner: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'partner',
  setTitle: { id: 1968 },
  name: [
    { alignment: 'H', value: 'Partner' },
    { alignment: 'V', value: 'Conspirator' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: 'You helped 50 teams complete a Weekly Strike Target even though you already received the bonus for the week.',
  acquisition: `Complete 50 [Weekly Strike Targets](https://homecoming.wiki/wiki/Weekly_Strike_Target) after you've already completed one for the week.`,
  links: [
    { title: 'Partner Badge', href: 'https://homecoming.wiki/wiki/Partner_Badge' },
    { title: 'Conspirator Badge', href: 'https://homecoming.wiki/wiki/Conspirator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/partner.png',
}
