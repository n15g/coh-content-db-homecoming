import { BadgeData } from 'coh-content-db'
import { ProfessionalLiar } from '../day-job/professional-liar'
import { CannonFodder } from '../day-job/cannon-fodder'

export const AntiArachnosActivist: BadgeData = {
  type: 'accolade',
  key: 'anti-arachnos-activist',
  setTitleId: [1078],
  name: [
    { alignment: 'hero', value: 'Anti-Arachnos Activist' },
    { alignment: 'villain', value: 'Web Weaver' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `You've turned your skills at propaganda and rabble-rousing against Arachnos, bringing a glimmer of hope to those you once helped enslave.` },
    {
      alignment: 'villain',
      value: `Your work subjugating the masses of the Rogue Isles and promoting pro-Arachnos propaganda has earned you the Web Weaver Accolade.
While logged out in an Arachnos controlled area or in the Arachnos building in Marconeville you will earn additional charges for your Web Grenade power.`,
    },
  ],
  links: [
    { title: 'Anti-Arachnos Activist Badge', href: 'https://homecoming.wiki/wiki/Anti-Arachnos_Activist_Badge' },
    { title: 'Web Weaver Badge', href: 'https://homecoming.wiki/wiki/Web_Weaver_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/anti-arachnos-activist.png',
  requirements: [
    { key: CannonFodder.key, type: 'badge', badgeKey: CannonFodder.key },
    { key: ProfessionalLiar.key, type: 'badge', badgeKey: ProfessionalLiar.key },
  ],
}
