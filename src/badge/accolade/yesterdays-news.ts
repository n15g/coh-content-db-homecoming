import {ALIGNMENT_VILLAIN, Alternate, BadgePartialType, BadgeType, IBadgeData} from "coh-content-db";
import {CouchPotato} from "../accomplishment/couch-potato";
import {Electrician} from "../defeat/electrician";
import {StrikeBuster} from "../defeat/strike-buster";
import {Surging} from "../defeat/surging";
import {Paroled} from "../exploration/paroled";
import {Lobbyist} from "../exploration/lobbyist";
import {MasterOfTheAirwaves} from "../exploration/master-of-the-airwaves";

export const YesterdaysNews: IBadgeData = {
    type: BadgeType.ACCOLADE,
    key: "yesterdays-news",
    setTitleId: 533,
    names: [
        {type: Alternate.H, value: "Yesterday's News"},
        {type: Alternate.V, value: "Headline Stealer"}
    ],
    alignment: ALIGNMENT_VILLAIN,
    badgeText: [
        {type: Alternate.H, value: `While rampaging in the Rogue Isles, you acquired an Immobilizer Ray. Unfortunately, it seems to require something only present there to recharge.`},
        {type: Alternate.V, value: `In your crime spree you have acquired an Immobilizer Ray. You're not sure where it came from, but it sure is useful stopping foes in their tracks.`}
    ],
    notes: `Awards the Stolen Immobilizer Ray power`,
    links: [
        {title: "Yesterday's News Badge", href: "https://paragonwiki.com/wiki/Yesterday%27s_News_Badge"},
        {title: "Headline Stealer Badge", href: "https://paragonwiki.com/wiki/Headline_Stealer_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/yesterdays-news.png"}
    ],
    effect: `Stolen Immobilizer Ray`,
    partials: [
            {key: CouchPotato.key, type: BadgePartialType.BADGE, badgeKey: CouchPotato.key},
            {key: Paroled.key, type: BadgePartialType.BADGE, badgeKey: Paroled.key},
            {key: Lobbyist.key, type: BadgePartialType.BADGE, badgeKey: Lobbyist.key},
            {key: Electrician.key, type: BadgePartialType.BADGE, badgeKey: Electrician.key},
            {key: MasterOfTheAirwaves.key, type: BadgePartialType.BADGE, badgeKey: MasterOfTheAirwaves.key},
            {key: StrikeBuster.key, type: BadgePartialType.BADGE, badgeKey: StrikeBuster.key},
            {key: Surging.key, type: BadgePartialType.BADGE, badgeKey: Surging.key}
    ]
};
