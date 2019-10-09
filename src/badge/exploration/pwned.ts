import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {KingsRow} from "../../map/kings-row";

export const Pwned: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "pwned",
    names: [{value: "Pwned"}],
    alignment: ALIGNMENT_HERO,
    mapKey: KingsRow.key,
    location: [474.0, -42.0, -2685.0],
    badgeText: [{
        value: "Locals in High Park have complained to the Pawn Store owner about fixing his sign, saying that it tends to draw the Freakshow to the neighborhood for laughs." +
            " The owner adamantly refuses to change the sign, insisting that it is \"hilarious.\"" +
            " He can be seen speaking with the residents in High Park while wearing a shirt with the words, \"LOLCOPTER\" on it."
    }],
    notes: "The Pwned Badge is at the entrance of the pawn shop 52 yards north of the High Park neighborhood marker in Kings Row.",
    links: [
        {title: "Pwned Badge", href: "https://paragonwiki.com/wiki/Pwned_Badge"}
    ],
    icons: [{value: "core.exploration.hero"}],
    vidiotMapKey: "7"
};
