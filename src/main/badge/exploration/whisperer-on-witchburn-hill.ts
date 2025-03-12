import { BadgeData } from 'coh-content-db'
import { EchoDarkAstoria } from '../../map/echo-dark-astoria'

export const WhispererOnWitchburnHill: BadgeData = {
  type: 'EXPLORATION',
  key: 'whisperer-on-witchburn-hill',
  setTitle: { id: 1781 },
  name: [{ value: 'Whisperer on Witchburn Hill' }],
  alignment: ['H'],
  mapKey: EchoDarkAstoria.key,
  loc: [1151, 116, 1921],
  badgeText: [{
    value: 'It was rumored that in the dim past of the nation\'s founding, this hill was the site of witch burnings.'
      + ' Even before Astoria fell to darkness, this hill in Moth Cemetery was well known for feelings of unease it elicited in anyone brave enough to scale its heights.'
      + ' Since the fall of Astoria, priests of the Banished Pantheon have flocked to this locale, using it as a site for dark rituals.'
      + ' It was from this vantage point that, for the first time in millennia, the voices of the faithful supplicants was heard by the dreaming God in His violent slumber.',
  }],
  notes: 'Located in [map:echo-dark-astoria] 222 yards SSE of the Moth Cemetery marker, at the top of a steep hill.',
  links: [
    { title: 'Whisperer on Witchburn Hill Badge', href: 'https://homecoming.wiki/wiki/Whisperer_on_Witchburn_Hill_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '4',
}
