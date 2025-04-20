import { BadgeData } from 'coh-content-db'

export const Officiator: BadgeData = {
  type: 'event',
  key: 'officiator',
  setTitleId: [2549],
  name: 'Officiator',
  releaseDate: '2025-02-10',
  morality: 'all',
  badgeText: `Despite the Freedom Phalanx and Arachnos elite being dressed in their finest for a special occasion, you pulled no punches and demonstrated your prowess in combat by defeating each and every one.`,
  acquisition: `Defeat all 14 signature Heroes and Villains during the Spring event.`,
  notes: `During the Spring Event, defeat the wedding versions of all 9 signature heroes and all 5 signature villains that may be fought in Sigil and Kadabra Kill's missions.

You don't have to defeat them all in the same mission instance. If you do this over multiple missions, the Wedding Ushers remind you who's left to defeat.`,
  links: [
    { title: 'Officiator', href: 'https://homecoming.wiki/wiki/Officiator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/officiator.png',
  requirements: [
    { key: 'ba', type: 'task', notes: 'Back Alley Brawler' },
    { key: 'bs', type: 'task', notes: 'Black Scorpion' },
    { key: 'cm', type: 'task', notes: 'Captain Mako' },
    { key: 'ci', type: 'task', notes: 'Citadel' },
    { key: 'gw', type: 'task', notes: 'Ghost Widow' },
    { key: 'lr', type: 'task', notes: 'Lord Recluse' },
    { key: 'mt', type: 'task', notes: 'Manticore' },
    { key: 'ml', type: 'task', notes: 'Ms. Liberty' },
    { key: 'nu', type: 'task', notes: 'Numina' },
    { key: 'po', type: 'task', notes: 'Positron' },
    { key: 'sc', type: 'task', notes: 'Scirocco' },
    { key: 'sp', type: 'task', notes: 'Sister Psyche' },
    { key: 'st', type: 'task', notes: 'Statesman' },
    { key: 'sy', type: 'task', notes: 'Synapse' },
  ],
}
