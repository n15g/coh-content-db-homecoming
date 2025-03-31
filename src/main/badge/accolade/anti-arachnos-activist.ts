import { BadgeData } from 'coh-content-db'
import { ProfessionalLiar } from '../day-job/professional-liar'
import { CannonFodder } from '../day-job/cannon-fodder'

export const AntiArachnosActivist: BadgeData = {
  type: 'ACCOLADE',
  key: 'anti-arachnos-activist',
  setTitle: { id: 1078 },
  name: [
    { alignment: 'H', value: 'Anti-Arachnos Activist' },
    { alignment: 'V', value: 'Web Weaver' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `You've turned your skills at propaganda and rabble-rousing against Arachnos, bringing a glimmer of hope to those you once helped enslave.` },
    {
      alignment: 'V',
      value: `
Your work subjugating the masses of the Rogue Isles and promoting pro-Arachnos propaganda has earned you the Web Weaver Accolade.
While logged out in an Arachnos controlled area or in the Arachnos building in Marconeville you will earn additional charges for your Web Grenade power.`,
    },
  ],
  links: [
    { title: 'Anti-Arachnos Activist Badge', href: 'https://homecoming.wiki/wiki/Anti-Arachnos_Activist_Badge' },
    { title: 'Web Weaver Badge', href: 'https://homecoming.wiki/wiki/Web_Weaver_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/anti-arachnos-activist.png' },
  ],
  requirements: [[
    { key: CannonFodder.key, type: 'BADGE', badgeKey: CannonFodder.key },
    { key: ProfessionalLiar.key, type: 'BADGE', badgeKey: ProfessionalLiar.key },
  ]],
}
