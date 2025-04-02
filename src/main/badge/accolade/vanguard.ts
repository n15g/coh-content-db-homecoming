import { BadgeData } from 'coh-content-db'
import { Ace } from '../exploration/ace'
import { Finder } from '../defeat/finder'
import { PortalParter } from '../exploration/portal-parter'
import { Savant } from '../history/savant'
import { Zookeeper } from '../defeat/zookeeper'

export const Vanguard: BadgeData = {
  type: 'ACCOLADE',
  key: 'vanguard',
  setTitle: { id: 164 },
  name: [
    { value: 'Vanguard' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      alignment: 'H', value: `Your efforts against the extra-dimensional invaders have been recognized, and you have received the Rikti Resistance Medal.
You have found and kept a Rikti power amplifier.`,
    },
    {
      alignment: 'V', value: `Vanguard still values your efforts against the extra-dimensional invaders, but they no longer trust you as much as before.
Without you even knowing it, they have silently confiscated your Rikti power amplifier. Vanguard ops _are_ good.`,
    },
  ],
  notes: '__Note:__ You must be level 35 before this Accolade will unlock, however you can earn credit towards this badge before then.',
  effect: `Awards the Vanguard Medal power.`,
  links: [
    { title: 'Vanguard Badge', href: 'https://homecoming.wiki/wiki/Vanguard_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/vanguard.png' },
  ],
  requirements: [
    { key: Ace.key, type: 'BADGE', badgeKey: Ace.key },
    { key: Finder.key, type: 'BADGE', badgeKey: Finder.key },
    { key: PortalParter.key, type: 'BADGE', badgeKey: PortalParter.key },
    { key: Savant.key, type: 'BADGE', badgeKey: Savant.key },
    { key: Zookeeper.key, type: 'BADGE', badgeKey: Zookeeper.key },
  ],
}
