import {ALIGNMENT_ANY, BadgeType, IBadgeData} from 'coh-content-db'

export const SkullKiller: IBadgeData = {
    type: BadgeType.EVENT,
    key: 'skull-killer',
    setTitleId: 2553,
    names: [{value: 'Skull Killer'}],
    alignment: ALIGNMENT_ANY,
    badgeText: [{value: `You've relived the past by defeating 25 of the old school Skulls found during the City of Heroes Anniversary Event.`}],
    acquisition: `Defeat 25 old school Skulls spawned from time capsules during the anniversary event.`,
    links: [
        {title: 'Skull Killer', href: 'https://homecoming.wiki/wiki/Skull_Killer_Badge'},
    ],
    icons: [{value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/skull-killer.png'}],
}
