// tslint:disable
// eslint-disable
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

import { exists, mapValues } from "../runtime";
import { User, UserFromJSON, UserFromJSONTyped, UserToJSON } from "./";

/**
 *
 * @export
 * @interface Response
 */
export interface Response {
  /**
   *
   * @type {User}
   * @memberof Response
   */
  user?: User;
  /**
   *
   * @type {object}
   * @memberof Response
   */
  decisions?: object;
}

export function ResponseFromJSON(json: any): Response {
  return ResponseFromJSONTyped(json, false);
}

export function ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Response {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    user: !exists(json, "user") ? undefined : UserFromJSON(json["user"]),
    decisions: !exists(json, "decisions") ? undefined : json["decisions"]
  };
}

export function ResponseToJSON(value?: Response | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    user: UserToJSON(value.user),
    decisions: value.decisions
  };
}
