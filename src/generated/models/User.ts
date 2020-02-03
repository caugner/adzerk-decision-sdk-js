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
 * Object containing the UserKey used for [UserDB targeting](https://dev.adzerk.com/docs/userdb-1)
 * @export
 * @interface User
 */
export interface User {
  /**
   * The UserKey used for UserDB Targeting
   * @type {string}
   * @memberof User
   */
  key?: string;
}

export function UserFromJSON(json: any): User {
  return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    key: !exists(json, 'key') ? undefined : json['key'],
  };
}

export function UserToJSON(value?: User | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    key: value.key,
  };
}
