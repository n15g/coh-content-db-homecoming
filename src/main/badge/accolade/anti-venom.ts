import { BadgeData } from 'coh-content-db'
import { GhostWidow } from '../../contact/ghost-widow'

export const AntiVenom: BadgeData = {
  type: 'ACCOLADE',
  key: 'anti-venom',
  setTitle: { id: 616 },
  name: [
    { alignment: 'H', value: 'Anti-Venom' },
    { alignment: 'V', value: `Spider's Kiss` },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `You've broken your ties with Ghost Widow, but you can never tell for sure. Be careful, or your former Patron may claim your spirit from afar.` },
    { alignment: 'V', value: `In a world of treachery who can you trust but Ghost Widow?` },
  ],
  effect: 'Awards the Soul Mastery patron power.',
  links: [
    { title: 'Anti-Venom Badge', href: 'https://homecoming.wiki/wiki/Anti-Venom_Badge' },
    { title: `Spider's Kiss Badge`, href: 'https://homecoming.wiki/wiki/Spider%27s_Kiss_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/anti-venom.png' },
  ],
  requirements: [
    [
      { key: 'mystic-mayhem', type: 'ARC', missionName: 'Mystic Mayhem', contactKey: GhostWidow.key },
    ],
  ],
}
