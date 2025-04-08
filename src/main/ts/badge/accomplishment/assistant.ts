import { BadgeData } from 'coh-content-db'

export const Assistant: BadgeData = {
  type: 'accomplishment',
  key: 'assistant',
  setTitleId: [1966],
  name: [
    { alignment: 'hero', value: 'Assistant' },
    { alignment: 'villain', value: 'Accomplice' },
  ],
  morality: 'all',
  badgeText: 'You helped a team complete a Weekly Strike Target even though you already received the bonus for the week.',
  acquisition: `Complete a [Weekly Strike Target](https://homecoming.wiki/wiki/Weekly_Strike_Target) after you've already completed one for the week.`,
  links: [
    { title: 'Assistant Badge', href: 'https://homecoming.wiki/wiki/Assistant_Badge' },
    { title: 'Accomplice Badge', href: 'https://homecoming.wiki/wiki/Accomplice_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/assistant.png',
}
