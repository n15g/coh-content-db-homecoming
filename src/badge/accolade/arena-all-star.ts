import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {ArenaVictor} from "../pvp/arena-victor";
import {ArenaDuelist} from "../pvp/arena-duelist";
import {TournamentVictor} from "../pvp/tournament-victor";
import {ArenaSurvivalist} from "../pvp/arena-survivalist";
import {PentadVictor} from "../pvp/pentad-victor";

export const ArenaAllStar: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "arena-all-star",
    setTitleId: 1361,
    names: [
        {value: "Arena All-Star"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `You've earned the Arena All-Star badge by winning a variety of different Arena matches.`}
    ],
    notes: `Earn the five arena match badges`,
    links: [
        {title: "Arena All-Star Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Arena_All-Star_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/arena-all-star.png"}
    ],
    partials: [
        {key: ArenaVictor.key, type: BadgePartialType.BADGE, badgeKey: ArenaVictor.key},
        {key: ArenaDuelist.key, type: BadgePartialType.BADGE, badgeKey: ArenaDuelist.key},
        {key: TournamentVictor.key, type: BadgePartialType.BADGE, badgeKey: TournamentVictor.key},
        {key: ArenaSurvivalist.key, type: BadgePartialType.BADGE, badgeKey: ArenaSurvivalist.key},
        {key: PentadVictor.key, type: BadgePartialType.BADGE, badgeKey: PentadVictor.key}
    ]
};
