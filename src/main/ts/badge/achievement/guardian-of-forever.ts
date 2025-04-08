import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { LauraLockhart } from '../../contact/laura-lockhart'
import { Ouroboros } from '../../zone/ouroboros'

export const GuardianOfForever: BadgeData = {
  type: 'achievement',
  key: 'guardian-of-forever',
  setTitleId: [2390],
  name: 'Guardian of Forever',
  morality: 'heroic',
  badgeText: 'You used the Pillar of Ice and Flame to cheat death and recruit a new member for Ouroboros.',
  acquisition: `Complete the "Collateral Damage" arc from ${contactLink(LauraLockhart)}, completing all optional objectives (see notes).`,
  notes: `Complete the 'Collateral Damage' story arc first from ${contactLink(LauraLockhart)} and the repeat via ${zoneLink(Ouroboros)} (level 20-24, mission 22.01 'Collateral Damage') for the other objectives`,
  links: [
    { title: 'Guardian of Forever Badge', href: 'https://homecoming.wiki/wiki/Guardian_of_Forever_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/guardian-of-forever.png',
  requirements: [
    { key: 'cd', type: 'ARC', missionName: 'Collateral Damage', contactKey: LauraLockhart.key },
    { key: 'crate', type: 'task', notes: 'In the mission "Infiltrate the 5th Column Base", use the crate containing the Handwritten Note clue.' },
    { key: 'get-tp', type: 'task', notes: `Before starting the mission "Stop the Fighting in Steel Canyon", speak to Mender Valen in ${zoneLink(Ouroboros)} and accept the Ouroboros Teleporter.` },
    { key: 'protect', type: 'task', notes: 'Within the "Stop the Fighting in Steel Canyon" mission, successfully protect the Dupont Towers building by completing the objective "Protect Dupont Towers! within the time limit".' },
    { key: 'use-tp', type: 'task', notes: 'In the mission "Defend the UNSF Base", when speaking to Laura Lockhart use the Ouroboros Teleporter.' },
    { key: 'visit', type: 'task', notes: `Before starting the mission "Track down Leon", visit Mender Valen in ${zoneLink(Ouroboros)}} again.` },
    { key: 'speak', type: 'task', notes: 'Within the mission "Track down Leon", speak to Mender Laura.' },
  ],
}
