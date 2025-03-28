import { BadgeData } from 'coh-content-db'
import { Loyalist } from '../accomplishment/loyalist'
import { Magistrate } from '../accomplishment/magistrate'
import { Tyrant } from '../accomplishment/tyrant'
import { ResistanceMember } from '../accomplishment/resistance-member'
import { Obliterator } from '../accomplishment/obliterator'
import { Survivor } from '../accomplishment/survivor'
import { Escapist } from '../accomplishment/escapist'

export const TemperedThroughFire: BadgeData = {
  type: 'ACCOLADE',
  key: 'tempered-through-fire',
  setTitle: { id: 2212 },
  name: [
    { value: 'Tempered Through Fire' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `Through fire and flame your resolve has been tempered like finely forged steel.` },
  ],
  links: [
    { title: 'Tempered Through Fire Badge', href: 'https://homecoming.wiki/wiki/Tempered_Through_Fire_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/tempered-through-fire.png' },
  ],
  effect: 'Rewards 20 Merits',
  requirements: [[
    { key: Loyalist.key, type: 'BADGE', badgeKey: Loyalist.key },
    { key: Magistrate.key, type: 'BADGE', badgeKey: Magistrate.key },
    { key: Tyrant.key, type: 'BADGE', badgeKey: Tyrant.key },
    { key: ResistanceMember.key, type: 'BADGE', badgeKey: ResistanceMember.key },
    { key: Obliterator.key, type: 'BADGE', badgeKey: Obliterator.key },
    { key: Survivor.key, type: 'BADGE', badgeKey: Survivor.key },
    { key: Escapist.key, type: 'BADGE', badgeKey: Escapist.key },
  ]],
}
