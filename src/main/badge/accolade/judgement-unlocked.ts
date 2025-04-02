import { BadgeData } from 'coh-content-db'

export const JudgementUnlocked: BadgeData = {
  type: 'ACCOLADE',
  key: 'judgement-unlocked',
  setTitle: { id: 1481 },
  name: 'Judgement Unlocked',
  alignment: ['H', 'V', 'P'],
  badgeText: `You unlocked your Judgement Incarnate slot allowing you to create powerful new abilities that can be slotted there.`,
  acquisition: `Unlock the Judgement Incarnate slot.`,
  notes: `Unlock the Judgement Incarnate slot by earning Incarnate Experience through normal play.`,
  links: [
    { title: 'Judgement Unlocked Badge', href: 'https://homecoming.wiki/wiki/Judgement_Unlocked_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/judgement-unlocked.png',
}
