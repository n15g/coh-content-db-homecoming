import { BadgeData } from 'coh-content-db'
import { MajorRichardFlagg } from '../../contact/major-richard-flagg'

export const AwardedTheFreedomCross: BadgeData = {
  type: 'ACCOLADE',
  key: 'awarded-the-freedom-cross',
  setTitle: { id: 180 },
  name: [
    { alignment: 'H', value: 'Awarded the Freedom Cross' },
    { alignment: 'V', value: 'Stripped of the Freedom Cross' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `Again your Terra Volta experience has altered your powers in ways no one could imagine.` },
  ],
  effect: 'Awards a character respecification.',
  links: [
    { title: 'Awarded the Freedom Cross Badge', href: 'https://homecoming.wiki/wiki/Awarded_the_Freedom_Cross_Badge' },
    { title: 'Stripped of the Freedom Cross Badge', href: 'https://homecoming.wiki/wiki/Stripped_of_the_Freedom_Cross_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/awarded-the-freedom-cross.png' },
  ],
  requirements: [
    { key: 'third-terra-volta-respecification-trial', type: 'TASK_FORCE', missionName: 'Third Terra Volta Respecification Trial', contactKey: MajorRichardFlagg.key },
  ],
}
