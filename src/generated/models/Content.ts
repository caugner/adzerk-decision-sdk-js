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
 * @interface Content
 */
export interface Content {
    /**
     * 
     * @type {string}
     * @memberof Content
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof Content
     */
    template?: string;
    /**
     * 
     * @type {string}
     * @memberof Content
     */
    customTemplate?: string;
    /**
     * 
     * @type {object}
     * @memberof Content
     */
    data?: object;
    /**
     * 
     * @type {string}
     * @memberof Content
     */
    body?: string;
}

export function ContentFromJSON(json: any): Content {
    return ContentFromJSONTyped(json, false);
}

export function ContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Content {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'template': !exists(json, 'template') ? undefined : json['template'],
        'customTemplate': !exists(json, 'customTemplate') ? undefined : json['customTemplate'],
        'data': !exists(json, 'data') ? undefined : json['data'],
        'body': !exists(json, 'body') ? undefined : json['body'],
    };
}

export function ContentToJSON(value?: Content | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'template': value.template,
        'customTemplate': value.customTemplate,
        'data': value.data,
        'body': value.body,
    };
}


