import { BadgeData } from 'coh-content-db'

export const Assistant: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'assistant',
  setTitle: { id: 1966 },
  name: [
    { alignment: 'H', value: 'Assistant' },
    { alignment: 'V', value: 'Accomplice' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: 'You helped a team complete a Weekly Strike Target even though you already received the bonus for the week.',
  acquisition: `Complete a Weekly Strike Target after you've already completed one for the week.`,
  links: [
    { title: 'Assistant Badge', href: 'https://homecoming.wiki/wiki/Assistant_Badge' },
    { title: 'Accomplice Badge', href: 'https://homecoming.wiki/wiki/Accomplice_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/assistant.png',
}
