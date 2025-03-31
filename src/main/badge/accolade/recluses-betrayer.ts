import { BadgeData } from 'coh-content-db'
import { BlackScorpion } from '../../contact/black-scorpion'
import { CaptainMako } from '../../contact/captain-mako'
import { GhostWidow } from '../../contact/ghost-widow'
import { Scirocco } from '../../contact/scirocco'
import { LordRecluse } from '../../contact/lord-recluse'

export const ReclusesBetrayer: BadgeData = {
  type: 'ACCOLADE',
  key: 'recluses-betrayer',
  setTitle: { id: 398 },
  name: [
    { alignment: 'H', value: `Recluse's Betrayer` },
    { alignment: 'V', value: `Recluse's Right Hand` },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `Lord Recluse was wrong to place his trust in you.` },
    { alignment: 'V', value: `You are the most villainous of villains and I, Lord Recluse, am proud of you!` },
  ],
  notes: `Complete every story arc from Black Scorpion, Captain Mako, Ghost Widow, Scirocco, and Lord Recluse.`,
  effect: 'Awards 20 reward merits.',
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/recluses-betrayer.png' }],
  links: [
    { title: `Recluse's Right Hand Badge`, href: 'https://homecoming.wiki/wiki/Recluse%27s_Right_Hand_Badge' },
  ],
  requirements: [
    [
      { key: 'armor-wars', type: 'ARC', missionName: 'Armor Wars', contactKey: BlackScorpion.key },
      { key: 'chink-in-the-armor', type: 'ARC', missionName: 'Chink in the Armor', contactKey: BlackScorpion.key },
      { key: 'the-destiny-raids', type: 'ARC', missionName: 'The Destiny Raids', contactKey: BlackScorpion.key },
      { key: 'time-after-time-bs', type: 'ARC', missionName: 'Time after Time', contactKey: BlackScorpion.key },
      { key: 'killer-instinct', type: 'ARC', missionName: 'Killer Instinct', contactKey: CaptainMako.key },
      { key: 'the-perfect-killing-machine', type: 'ARC', missionName: 'The Perfect Killing Machine', contactKey: CaptainMako.key },
      { key: 'iron-fist', type: 'ARC', missionName: 'Iron Fist', contactKey: CaptainMako.key },
      { key: 'time-after-time-cm', type: 'ARC', missionName: 'Time After Time', contactKey: CaptainMako.key },
      { key: 'mystic-mayhem', type: 'ARC', missionName: 'Mystic Mayhem', contactKey: GhostWidow.key },
      { key: 'life-and-death', type: 'ARC', missionName: 'Life and Death', contactKey: GhostWidow.key },
      { key: 'brainpower', type: 'ARC', missionName: 'Brainpower', contactKey: GhostWidow.key },
      { key: 'time-after-time-gw', type: 'ARC', missionName: 'Time after Time', contactKey: GhostWidow.key },
      { key: 'a-wind-called-serafina', type: 'ARC', missionName: 'A Wind Called Serafina', contactKey: Scirocco.key },
      { key: 'the-hammer-of-the-world', type: 'ARC', missionName: 'The Hammer of the World', contactKey: Scirocco.key },
      { key: 'the-spirit-city-of-hequat', type: 'ARC', missionName: 'The Spirit City of Hequat', contactKey: Scirocco.key },
      { key: 'time-after-time-sc', type: 'ARC', missionName: 'Time after Time', contactKey: Scirocco.key },
      { key: 'lord-recluse-strike-force', type: 'TASK_FORCE', missionName: 'Lord Recluse Strike Force', contactKey: LordRecluse.key },
    ],
  ],
}
