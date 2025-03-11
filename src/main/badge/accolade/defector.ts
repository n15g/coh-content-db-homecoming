import { BadgeData, createBadgeReference } from 'coh-content-db'
import { CannonFodder } from '../day-job/cannon-fodder'
import { Banker } from '../day-job/banker'

export const Defector: BadgeData = {
  type: 'ACCOLADE',
  key: 'defector',
  setTitle: { id: 1069 },
  name: [
    { alignment: 'H', value: 'Defector' },
    { alignment: 'V', value: 'Black Ops' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      alignment: 'H',
      value: `You've taken your skills at wetwork and espionage and defected to the other side, which has a lot more qualms about using those skills to their fullest potential.`,
    },
    {
      alignment: 'V',
      value: `Your mastery of stealth and your training with Arachnos has earned you the Black Ops Accolade.  While logged out in an Arachnos controlled area or inside a Vault you will earn charges for your Smoke Bomb power.`,
    },
  ],
  notes: `Earn the ${createBadgeReference(CannonFodder)} and ${createBadgeReference(Banker)} Day Jobs`,
  links: [
    { title: 'Defector Badge', href: 'https://homecoming.wiki/wiki/Defector_Badge' },
    { title: 'Black Ops Badge', href: 'https://homecoming.wiki/wiki/Black_Ops_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/defector.png' },
  ],
  partials: [
    { key: CannonFodder.key, type: 'BADGE', badgeKey: CannonFodder.key },
    { key: Banker.key, type: 'BADGE', badgeKey: Banker.key },
  ],
}
