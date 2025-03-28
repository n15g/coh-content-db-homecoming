import { BadgeData, zoneLink } from 'coh-content-db'
import { KallistiWharf } from '../../zone/kallisti-wharf'

export const OnTheShouldersOfGiants: BadgeData = {
  type: 'EXPLORATION',
  key: 'on-the-shoulders-of-giants',
  setTitle: { id: 2449 },
  name: [{ value: 'On the Shoulders of Giants' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: KallistiWharf.key,
  loc: [4286, 148, 2720],
  badgeText: [{
    value: `This statue was erected to pay tribute to Marcus Cole, publicly known as Statesman. Ms. Liberty and Longbow have refused to confirm or deny the persistent rumor that the statue was commissioned by Stefan Richter himself.`,
  }],
  notes: `Located on the left shoulder of the statue of Statesman in the center of ${zoneLink(KallistiWharf)}, within 100 ft of the One Statesman Plaza neighborhood marker.`,
  links: [
    { title: 'On the Shoulders of Giants', href: 'https://homecoming.wiki/wiki/On_the_Shoulders_of_Giants_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
}
