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
/**
 *
 * @export
 * @interface RequestLocation
 */
export interface RequestLocation {
  /**
   *
   * @type {string}
   * @memberof RequestLocation
   */
  latitude?: string;
  /**
   *
   * @type {string}
   * @memberof RequestLocation
   */
  longitude?: string;
}

export function RequestLocationFromJSON(json: any): RequestLocation {
  return RequestLocationFromJSONTyped(json, false);
}

export function RequestLocationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): RequestLocation {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    latitude: !exists(json, 'latitude') ? undefined : json['latitude'],
    longitude: !exists(json, 'longitude') ? undefined : json['longitude'],
  };
}

export function RequestLocationToJSON(value?: RequestLocation | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    latitude: value.latitude,
    longitude: value.longitude,
  };
}
