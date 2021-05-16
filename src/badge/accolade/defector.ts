import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, badgeReference, BadgeType, IBadgeData} from "coh-content-db";
import {CannonFodder} from "../day-job/cannon-fodder";
import {Banker} from "../day-job/banker";

export const Defector: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "defector",
    setTitleId: 1069,
    names: [
        {type: Alternate.H, value: "Defector"},
        {type: Alternate.V, value: "Black Ops"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {
            type: Alternate.H,
            value: `You've taken your skills at wetwork and espionage and defected to the other side, which has a lot more qualms about using those skills to their fullest potential.`
        },
        {
            type: Alternate.V,
            value: `Your mastery of stealth and your training with Arachnos has earned you the Black Ops Accolade.  While logged out in an Arachnos controlled area or inside a Vault you will earn charges for your Smoke Bomb power.`
        }
    ],
    notes: `Earn the ${badgeReference(CannonFodder)} and ${badgeReference(Banker)} Day Jobs`,
    links: [
        {title: "Defector Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Defector_Badge"},
        {title: "Black Ops Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Black_Ops_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/defector.png"}
    ],
    partials: [
        {key: CannonFodder.key, type: BadgePartialType.BADGE, badgeKey: CannonFodder.key},
        {key: Banker.key, type: BadgePartialType.BADGE, badgeKey: Banker.key}
    ]
};
