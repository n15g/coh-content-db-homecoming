import { BadgeData } from 'coh-content-db'

export const SinisterSummoner: BadgeData = {
  type: 'EVENT',
  key: 'sinister-summoner',
  setTitle: { id: 2473 },
  name: [
    { value: 'Sinister Summoner' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You summoned and defeated the Halloween demon, Black Whip! Needless to say, the beast was stunned. Whip-crack went his whippy tail, and the beast was done.` },
  ],
  acquisition: `Summon and defeat The Black Whip, a demon in the "Dr. Kane's House of Horror" co-op trial.`,
  links: [
    { title: 'Sinister Summoner Badge', href: 'https://homecoming.wiki/wiki/Sinister_Summoner_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/sinister-summoner.png' }],
}
