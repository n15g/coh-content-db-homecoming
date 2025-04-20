import { BadgeData } from 'coh-content-db'
import { Regenerator } from '../defeat/regenerator'
import { BinderOfBeasts } from '../accomplishment/binder-of-beasts'

export const Caliban: BadgeData = {
  type: 'gladiator',
  key: 'caliban',
  setTitleId: [481],
  name: 'Caliban',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'The Trolls respect your might.',
  links: [
    { title: 'Caliban Badge', href: 'https://homecoming.wiki/wiki/Caliban_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png',
  requirements: [
    { key: Regenerator.key, type: 'badge', badgeKey: BinderOfBeasts.key },
  ],
}
