import { BadgeData } from 'coh-content-db'

export const Trusting: BadgeData = {
  type: 'event',
  key: 'trusting',
  setTitleId: [1772],
  name: 'Trusting',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You've handed the Malleus Mundi over to MAGI for safekeeping. You Hope.` },
    { alignment: 'villain', value: `Unfortunately MAGI didn't hold onto the Malleus Mundi for long, or you'd know just where to make a quick score.` },
  ],
  acquisition: `Complete the Whispered Rumor tip mission during the Halloween event and choose the option to "Send the Malleus Mundi to MAGI" (Heroes).`,
  links: [
    { title: 'Trusting Badge', href: 'https://homecoming.wiki/wiki/Trusting_Badge' },
    { title: 'Whispered Rumour', href: 'https://homecoming.wiki/wiki/Mission:Tip_-_Whispered_Rumor' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/trusting.png',
}
