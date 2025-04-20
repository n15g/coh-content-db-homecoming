import { BadgeData, contactLink, missionLink, missionUri } from 'coh-content-db'
import { DeanMacArthur } from '../../contact/dean-macarthur'
import { MeMyselfAndMyOtherSelves } from '../../mission/me-myself-and-my-other-selves'
import { SweepsWeekHeroNameVsTheRogueIsles } from '../../mission/sweeps-week-heroname-vs-the-rogue-isles'

export const HonoraryBro: BadgeData = {
  type: 'accomplishment',
  key: 'honorary-bro',
  setTitleId: [2267],
  name: [
    { sex: 'M', value: 'Honorary Bro' },
    { sex: 'F', value: 'Honorary Sis' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: 'Dean MacArthur stood up for you when Wu Yin tried to bring you down. He was captured by the Carnival of Shadows for this, but you rescued him. Dean MacArthur declared you an Honorary Bro.',
  acquisition: `Rescue ${contactLink(DeanMacArthur)} in the "Ratings" mission of the ${missionLink(SweepsWeekHeroNameVsTheRogueIsles)} story arc.`,
  notes: `${contactLink(DeanMacArthur)} will only be present if you have previously completed his ${missionLink(MeMyselfAndMyOtherSelves)} story arc.`,
  links: [
    { title: 'Honorary Bro Badge', href: 'https://homecoming.wiki/wiki/Honorary_Bro_Badge' },
    { title: 'Honorary Sis Badge', href: 'https://homecoming.wiki/wiki/Honorary_Sis_Badge' },
    { title: SweepsWeekHeroNameVsTheRogueIsles.name, href: missionUri(SweepsWeekHeroNameVsTheRogueIsles) },
    { title: MeMyselfAndMyOtherSelves.name, href: missionUri(MeMyselfAndMyOtherSelves) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-challenge.png',
}
