/*
 *    Copyright 2023, Sergio Lissner
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

export class MhUtils {
    constructor() { }

    static nop() {}

    static isNotNull(obj: any) {
        return !MhUtils.isNull(obj);
    }

    static isNull(obj: any) {
        return obj===null || obj===undefined;
    }

    static isTrue(obj: any) {
        return MhUtils.isNotNull(obj) && obj===true;
    }

    static anyStr(s:string, anyStrs: string[]): boolean {
        for (const ss of anyStrs) {
            if (s===ss) {
                return true;
            }
        }
        return false;
    }

    static len(obj: any) {
        return MhUtils.isNull(obj) || MhUtils.isNull(obj.length) ? 0 : obj.length;
    }

    static randomInt(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    static randomIntAsStr(min, max) { // min and max included
        return MhUtils.randomInt(min, max).toString()
    }



}