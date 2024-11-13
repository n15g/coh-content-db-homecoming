import {ALIGNMENT_HERO, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {ForceOfJustice} from "../accolade/force-of-justice";
import {Gallant} from "../achievement/gallant";
import {GuardianOfForever} from "../achievement/guardian-of-forever";
import {BeyondReasonableDoubt} from "../achievement/beyond-reasonable-doubt";
import {TheGreaterGood} from "../accomplishment/the-greater-good";
import {Bicentennial} from "../history/bicentennial";

export const ProtectorOfParagonCity: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "protector-of-paragon-city",
    setTitleId: 2543,
    names: [
        {type: Alternate.H, value: "Protector of Paragon City"},
        {type: Alternate.V, value: "Traitor to Paragon City"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [
      {type: Alternate.H, value: `You have shown true dedication to the protection of Paragon City, without sacrificing the morals that the city is founded and established on.`},
      {type: Alternate.V, value: `You were once an icon of the ethics upon which Paragon City was established. That's long gone, now.`}
  ],
    notes: `Awards the Sheer Willpower power.`,
    links: [
        {title: "Protector of Paragon City Badge", href: "https://homecoming.wiki/wiki/Protector_of_Paragon_City_Badge"},
        {title: "Traitor to Paragon City Badge", href: "https://homecoming.wiki/wiki/Traitor_to_Paragon_City_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/protector-of-paragon-city.png"}
    ],
    effect: `Sheer Willpower`,
    partials: [
        {key: ForceOfJustice.key, type: BadgePartialType.BADGE, badgeKey: ForceOfJustice.key},
        {key: Gallant.key, type: BadgePartialType.BADGE, badgeKey: Gallant.key},
        {key: GuardianOfForever.key, type: BadgePartialType.BADGE, badgeKey: GuardianOfForever.key},
        {key: BeyondReasonableDoubt.key, type: BadgePartialType.BADGE, badgeKey: BeyondReasonableDoubt.key},
        {key: TheGreaterGood.key, type: BadgePartialType.BADGE, badgeKey: TheGreaterGood.key},
        {key: Bicentennial.key, type: BadgePartialType.BADGE, badgeKey: Bicentennial.key}
    ]
};
