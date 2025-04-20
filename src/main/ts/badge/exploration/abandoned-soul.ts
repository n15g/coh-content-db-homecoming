import { BadgeData } from 'coh-content-db'
import { NightWard } from '../../zone/night-ward'

export const AbandonedSoul: BadgeData = {
  type: 'exploration',
  key: 'abandoned-soul',
  setTitleId: [2229],
  name: 'Abandoned Soul',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've managed to push your way through the teeming crowd of displaced souls in an effort to get a ticket out of Night Ward - only to find that there ain't no train a-comin'.
Unlike the dead, however this does little to faze you. After all, if creatures keep finding ways in there must be other ways out.`,
  notes: `Located in the Lamplight Junction neighborhood, 161 yards W of the map marker; near the entrance to the CTA terminal.`,
  links: [
    { title: 'Abandoned Soul Badge', href: 'https://homecoming.wiki/wiki/Abandoned_Soul_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NightWard.key, coords: [-411, 48, -2623], icon: 'badge', iconText: '4' } },
  ],
}
