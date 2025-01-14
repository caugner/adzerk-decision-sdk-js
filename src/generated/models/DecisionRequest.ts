/* tslint:disable */
/* eslint-disable */
/**
 * Adzerk Decision API
 * Adzerk Decision API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Placement,
    PlacementFromJSON,
    PlacementFromJSONTyped,
    PlacementToJSON,
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './';

/**
 * 
 * @export
 * @interface DecisionRequest
 */
export interface DecisionRequest {
    /**
     * One or more Placement objects
     * @type {Array<Placement>}
     * @memberof DecisionRequest
     */
    placements: Array<Placement>;
    /**
     * 
     * @type {User}
     * @memberof DecisionRequest
     */
    user?: User;
    /**
     * Keywords for keyword Targeting. Such as `"keywords": ["foo", "bar", "baz"]`.
     * @type {Array<string>}
     * @memberof DecisionRequest
     */
    keywords?: Array<string> | null;
    /**
     * The current page URL
     * @type {string}
     * @memberof DecisionRequest
     */
    url?: string | null;
    /**
     * The referrer URL
     * @type {string}
     * @memberof DecisionRequest
     */
    referrer?: string | null;
    /**
     * The IP address. Required for [Geo-Targeting](https://dev.adzerk.com/docs/geo-location)
     * @type {string}
     * @memberof DecisionRequest
     */
    ip?: string | null;
    /**
     * Numeric creative ids to disregard for ad selection
     * @type {Array<number>}
     * @memberof DecisionRequest
     */
    blockedCreatives?: Array<number> | null;
    /**
     * If true, only ads containing a single image will be returned
     * @type {boolean}
     * @memberof DecisionRequest
     */
    isMobile?: boolean | null;
    /**
     * If true, return pricing data for the decision in the response
     * @type {boolean}
     * @memberof DecisionRequest
     */
    includePricingData?: boolean | null;
    /**
     * If true, only return ads that are set to honor Do Not Track
     * @type {boolean}
     * @memberof DecisionRequest
     */
    notrack?: boolean | null;
    /**
     * If making a client-side request, set to true. Defaults to false to ensure a server isn't seen as a bot. See [here](https://dev.adzerk.com/docs/tracking-overview#section-bot-filtering) for more info
     * @type {boolean}
     * @memberof DecisionRequest
     */
    enableBotFiltering?: boolean | null;
    /**
     * If true, override the IP address of the request with the IP address supplied on the UserKey. If no IP address is found on the UserKey, this will fall back to the IP address on the request. Requires UserDB
     * @type {boolean}
     * @memberof DecisionRequest
     */
    enableUserDBIP?: boolean | null;
    /**
     * Object that sets the data consent preferences. Other consent settings are available in the GDPR settings documentation.
     * @type {object}
     * @memberof DecisionRequest
     */
    consent?: object | null;
    /**
     * RTB requests only - sets an Identifier for Advertisers (IFA or IDFA)
     * @type {string}
     * @memberof DecisionRequest
     */
    deviceID?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DecisionRequest
     */
    parallel?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof DecisionRequest
     */
    intendedLatitude?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DecisionRequest
     */
    intendedLongitude?: number | null;
    /**
     * 
     * @type {number}
     * @memberof DecisionRequest
     */
    radius?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof DecisionRequest
     */
    includeMatchedPoints?: boolean | null;
}

export function DecisionRequestFromJSON(json: any): DecisionRequest {
    return DecisionRequestFromJSONTyped(json, false);
}

export function DecisionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DecisionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'placements': ((json['placements'] as Array<any>).map(PlacementFromJSON)),
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
        'keywords': !exists(json, 'keywords') ? undefined : json['keywords'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'referrer': !exists(json, 'referrer') ? undefined : json['referrer'],
        'ip': !exists(json, 'ip') ? undefined : json['ip'],
        'blockedCreatives': !exists(json, 'blockedCreatives') ? undefined : json['blockedCreatives'],
        'isMobile': !exists(json, 'isMobile') ? undefined : json['isMobile'],
        'includePricingData': !exists(json, 'includePricingData') ? undefined : json['includePricingData'],
        'notrack': !exists(json, 'notrack') ? undefined : json['notrack'],
        'enableBotFiltering': !exists(json, 'enableBotFiltering') ? undefined : json['enableBotFiltering'],
        'enableUserDBIP': !exists(json, 'enableUserDBIP') ? undefined : json['enableUserDBIP'],
        'consent': !exists(json, 'consent') ? undefined : json['consent'],
        'deviceID': !exists(json, 'deviceID') ? undefined : json['deviceID'],
        'parallel': !exists(json, 'parallel') ? undefined : json['parallel'],
        'intendedLatitude': !exists(json, 'intendedLatitude') ? undefined : json['intendedLatitude'],
        'intendedLongitude': !exists(json, 'intendedLongitude') ? undefined : json['intendedLongitude'],
        'radius': !exists(json, 'radius') ? undefined : json['radius'],
        'includeMatchedPoints': !exists(json, 'includeMatchedPoints') ? undefined : json['includeMatchedPoints'],
    };
}

export function DecisionRequestToJSON(value?: DecisionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'placements': ((value.placements as Array<any>).map(PlacementToJSON)),
        'user': UserToJSON(value.user),
        'keywords': value.keywords,
        'url': value.url,
        'referrer': value.referrer,
        'ip': value.ip,
        'blockedCreatives': value.blockedCreatives,
        'isMobile': value.isMobile,
        'includePricingData': value.includePricingData,
        'notrack': value.notrack,
        'enableBotFiltering': value.enableBotFiltering,
        'enableUserDBIP': value.enableUserDBIP,
        'consent': value.consent,
        'deviceID': value.deviceID,
        'parallel': value.parallel,
        'intendedLatitude': value.intendedLatitude,
        'intendedLongitude': value.intendedLongitude,
        'radius': value.radius,
        'includeMatchedPoints': value.includeMatchedPoints,
    };
}


