import { BadgeData } from 'coh-content-db'
import { KallistiWharf } from '../../zone/kallisti-wharf'

export const OnTheShouldersOfGiants: BadgeData = {
  type: 'exploration',
  key: 'on-the-shoulders-of-giants',
  setTitleId: [2449],
  name: 'On the Shoulders of Giants',
  releaseDate: '2020-11-26',
  morality: 'all',
  badgeText: `This statue was erected to pay tribute to Marcus Cole, publicly known as Statesman.
Ms. Liberty and Longbow have refused to confirm or deny the persistent rumor that the statue was commissioned by Stefan Richter himself.`,
  notes: `Located on the left shoulder of the statue of Statesman in the center of the zone, within 100 ft of the One Statesman Plaza neighborhood marker.`,
  links: [
    { title: 'On the Shoulders of Giants', href: 'https://homecoming.wiki/wiki/On_the_Shoulders_of_Giants_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: KallistiWharf.key, coords: [4286, 148, 2720] } },
  ],
}
