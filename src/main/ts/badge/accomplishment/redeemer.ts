import { BadgeData } from 'coh-content-db'
import { GoTalkWithAlexanderAndDoWhateverYouCanToBringHimIntoProtectiveCustody } from '../../mission/go-talk-with-alexander-and-do-whatever-you-can-to-bring-him-into-protective-custody'

export const Redeemer: BadgeData = {
  type: 'accomplishment',
  key: 'redeemer',
  setTitleId: [76],
  name: [
    { alignment: 'hero', value: 'Redeemer' },
    { alignment: 'villain', value: 'Conqueror' },
  ],
  morality: 'heroic',
  badgeText: 'You negotiated the surrender of Alexander, a Warrior boss.',
  links: [
    { title: 'Redeemer Badge', href: 'https://homecoming.wiki/wiki/Redeemer_Badge' },
    { title: 'Conqueror Badge', href: 'https://homecoming.wiki/wiki/Conqueror_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/redeemer.png',
  requirements: [
    { key: GoTalkWithAlexanderAndDoWhateverYouCanToBringHimIntoProtectiveCustody.key, type: 'mission', missionKey: GoTalkWithAlexanderAndDoWhateverYouCanToBringHimIntoProtectiveCustody.key },
  ],
}
