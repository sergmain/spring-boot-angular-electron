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

export enum Role {
    ROLE_MANAGER = 'ROLE_MANAGER',
    ROLE_OPERATOR = 'ROLE_OPERATOR',
    ROLE_DATA = 'ROLE_DATA',

    ROLE_SERVER_REST_ACCESS = 'ROLE_SERVER_REST_ACCESS',
    ROLE_ASSET_REST_ACCESS = 'ROLE_ASSET_REST_ACCESS',
    ROLE_BILLING = 'ROLE_BILLING',

    ROLE_MAIN_ADMIN = 'ROLE_MAIN_ADMIN',
    ROLE_MAIN_OPERATOR = 'ROLE_MAIN_OPERATOR',
    ROLE_MAIN_SUPPORT = 'ROLE_MAIN_SUPPORT',
    ROLE_MAIN_ASSET_MANAGER = 'ROLE_MAIN_ASSET_MANAGER',

    ROLE_ADMIN = 'ROLE_ADMIN',

    // --

    Manager = 'ROLE_MANAGER',
    Operator = 'ROLE_OPERATOR',
    Data = 'ROLE_DATA',

    ServerrestAccess = 'ROLE_SERVER_REST_ACCESS',
    AssetRestAccess = 'ROLE_ASSET_REST_ACCESS',
    Billing = 'ROLE_BILLING',

    MainAdmin = 'ROLE_MAIN_ADMIN',
    MainOperator = 'ROLE_MAIN_OPERATOR',
    MainSupport = 'ROLE_MAIN_SUPPORT',
    MainAssetManager = 'ROLE_MAIN_ASSET_MANAGER',

    Admin = 'ROLE_ADMIN'

}