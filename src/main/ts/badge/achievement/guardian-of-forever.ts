import { BadgeData, contactLink, missionLink, missionUri, zoneLink } from 'coh-content-db'
import { LauraLockhart } from '../../contact/laura-lockhart'
import { Ouroboros } from '../../zone/ouroboros'
import { CollateralDamage } from '../../mission/collateral-damage'

export const GuardianOfForever: BadgeData = {
  type: 'achievement',
  key: 'guardian-of-forever',
  setTitleId: [2390],
  name: 'Guardian of Forever',
  morality: 'heroic',
  badgeText: 'You used the Pillar of Ice and Flame to cheat death and recruit a new member for Ouroboros.',
  acquisition: `Complete the "Collateral Damage" arc from ${contactLink(LauraLockhart)}, completing all optional objectives (see notes).`,
  notes: `Complete the ${missionLink(CollateralDamage)} story arc once and then repeat via Flashback to complete all other objectives.`,
  links: [
    { title: 'Guardian of Forever Badge', href: 'https://homecoming.wiki/wiki/Guardian_of_Forever_Badge' },
    { title: CollateralDamage.name, href: missionUri(CollateralDamage) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/guardian-of-forever.png',
  requirements: [
    { key: 'crate', type: 'task', notes: 'In the mission "Infiltrate the 5th Column Base", use the crate containing the Handwritten Note clue.' },
    { key: 'get-tp', type: 'task', notes: `Before starting the mission "Stop the Fighting in Steel Canyon", speak to Mender Valen in ${zoneLink(Ouroboros)} and accept the Ouroboros Teleporter.` },
    { key: 'protect', type: 'task', notes: 'Within the "Stop the Fighting in Steel Canyon" mission, successfully protect the Dupont Towers building by completing the objective "Protect Dupont Towers! within the time limit".' },
    { key: 'use-tp', type: 'task', notes: 'In the mission "Defend the UNSF Base", when speaking to Laura Lockhart use the Ouroboros Teleporter.' },
    { key: 'visit', type: 'task', notes: `Before starting the mission "Track down Leon", visit Mender Valen in ${zoneLink(Ouroboros)}} again.` },
    { key: 'speak', type: 'task', notes: 'Within the mission "Track down Leon", speak to Mender Laura.' },
  ],
}
