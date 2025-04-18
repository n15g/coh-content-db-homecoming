import {ALIGNMENT_ANY, BadgeType, IBadgeData} from 'coh-content-db'

export const Mafioso: IBadgeData = {
    type: BadgeType.EVENT,
    key: 'mafioso',
    setTitleId: 2553,
    names: [{value: 'Mafioso'}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You've relived the past by defeating 25 of the old school Family found during the City of Heroes Anniversary Event.`}],
    acquisition: `Defeat 25 old school Family spawned from time capsules during the anniversary event.`,
    links: [
        {title: 'Mafioso', href: 'https://homecoming.wiki/wiki/Mafioso_Badge'},
    ],
    icons: [{value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/mafioso.png'}],
}
