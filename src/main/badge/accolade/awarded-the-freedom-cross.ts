import { BadgeData } from 'coh-content-db'
import { MajorRichardFlagg } from '../../contact/major-richard-flagg'

export const AwardedTheFreedomCross: BadgeData = {
  type: 'accolade',
  key: 'awarded-the-freedom-cross',
  setTitleId: [180],
  name: [
    { alignment: 'hero', value: 'Awarded the Freedom Cross' },
    { alignment: 'villain', value: 'Stripped of the Freedom Cross' },
  ],
  morality: 'heroic',
  badgeText: 'Again your Terra Volta experience has altered your powers in ways no one could imagine.',
  effect: 'Awards a character respecification.',
  links: [
    { title: 'Awarded the Freedom Cross Badge', href: 'https://homecoming.wiki/wiki/Awarded_the_Freedom_Cross_Badge' },
    { title: 'Stripped of the Freedom Cross Badge', href: 'https://homecoming.wiki/wiki/Stripped_of_the_Freedom_Cross_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/awarded-the-freedom-cross.png',
  requirements: [
    { key: 'third-terra-volta-respecification-trial', type: 'TASK_FORCE', missionName: 'Third Terra Volta Respecification Trial', contactKey: MajorRichardFlagg.key },
  ],
}
