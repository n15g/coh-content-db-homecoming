import { BadgeData } from 'coh-content-db'
import { Loyalist } from '../accomplishment/loyalist'
import { Magistrate } from '../accomplishment/magistrate'
import { Tyrant } from '../accomplishment/tyrant'
import { ResistanceMember } from '../accomplishment/resistance-member'
import { Obliterator } from '../accomplishment/obliterator'
import { Survivor } from '../accomplishment/survivor'
import { Escapist } from '../accomplishment/escapist'

export const TemperedThroughFire: BadgeData = {
  type: 'accolade',
  key: 'tempered-through-fire',
  setTitleId: [2212],
  name: 'Tempered Through Fire',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'Through fire and flame your resolve has been tempered like finely forged steel.',
  links: [
    { title: 'Tempered Through Fire Badge', href: 'https://homecoming.wiki/wiki/Tempered_Through_Fire_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/tempered-through-fire.png',
  requirements: [
    { key: Loyalist.key, type: 'badge', badgeKey: Loyalist.key },
    { key: Magistrate.key, type: 'badge', badgeKey: Magistrate.key },
    { key: Tyrant.key, type: 'badge', badgeKey: Tyrant.key },
    { key: ResistanceMember.key, type: 'badge', badgeKey: ResistanceMember.key },
    { key: Obliterator.key, type: 'badge', badgeKey: Obliterator.key },
    { key: Survivor.key, type: 'badge', badgeKey: Survivor.key },
    { key: Escapist.key, type: 'badge', badgeKey: Escapist.key },
  ],
}
