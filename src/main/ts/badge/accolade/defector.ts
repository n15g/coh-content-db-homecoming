import { BadgeData } from 'coh-content-db'
import { CannonFodder } from '../day-job/cannon-fodder'
import { Banker } from '../day-job/banker'

export const Defector: BadgeData = {
  type: 'accolade',
  key: 'defector',
  setTitleId: [1069],
  name: [
    { alignment: 'hero', value: 'Defector' },
    { alignment: 'villain', value: 'Black Ops' },
  ],
  morality: 'villainous',
  badgeText: [
    {
      alignment: 'hero',
      value: `You've taken your skills at wetwork and espionage and defected to the other side, which has a lot more qualms about using those skills to their fullest potential.`,
    },
    {
      alignment: 'villain',
      value: `Your mastery of stealth and your training with Arachnos has earned you the Black Ops Accolade. While logged out in an Arachnos controlled area or inside a Vault you will earn charges for your Smoke Bomb power.`,
    },
  ],
  links: [
    { title: 'Defector Badge', href: 'https://homecoming.wiki/wiki/Defector_Badge' },
    { title: 'Black Ops Badge', href: 'https://homecoming.wiki/wiki/Black_Ops_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/defector.png',
  requirements: [
    { key: CannonFodder.key, type: 'badge', badgeKey: CannonFodder.key },
    { key: Banker.key, type: 'badge', badgeKey: Banker.key },
  ],
}
