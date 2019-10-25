import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";
import {ArenaCageMatch} from "../../map/arena-cage-match";

export const CageFighter: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "cage-fighter",
    setTitleId: 716,
    names: [{value: "Cage Fighter"}],
    alignment: ALIGNMENT_ANY,
    mapKey: ArenaCageMatch.key,
    location: [-190.0, -24.0, -1329.0],
    badgeText: [{value: "Fighting in a nice big arena is one thing, but fighting in a cage is completely... different. Only the strong survive a cage match."}],
    notes: "When staging a PvP duel via the terminals in Pocket D or in the Arena, there is a duel map that matches the Monkey Fight Club in Pocket D, placing you in the cage for the match.\n" +
        "\n" +
        "In the center of the cage is the exploration badge." +
        " The badge may be earned by either Heroes or Villains, and can even be earned by using spectator mode on someone else's match in the proper map.\n" +
        "\n" +
        "Note that it is possible to brute-force a character into the cage in the actual Pocket D zone, but the badge is not available there. It is only present on the Arena map.",
    links: [
        {title: "Cage Fighter Badge", href: "https://paragonwiki.com/wiki/Cage_Fighter_Badge"}
    ],
    icons: [
        {type: Alternate.H, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"},
        {type: Alternate.V, value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}
    ]
};
