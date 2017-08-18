import Agent from '../models/Agent';
import ClientModel from '../models/ClientModel';
export declare const TEST_CLIENT: ClientModel;
export declare const TEST_INVALID_SCOPE_TOKEN = "invalid_scope_client";
export declare const TEST_INVALID_SCOPE_CLIENT: ClientModel;
export declare const TEST_VALID_SCOPE_TOKEN = "valid_scope_client";
export declare const TEST_VALID_SCOPE_CLIENT: ClientModel;
export declare const TEST_OUTSIDE_STORE_TOKEN = "outside_store_client";
export declare const TEST_CLIENT_OUTSIDE_STORE: ClientModel;
export declare const TEST_OUTSIDE_ORG_TOKEN = "outside_org_client";
export declare const TEST_CLIENT_OUTSIDE_ORG: ClientModel;
export declare const TEST_MISSING_TOKEN = "Basic missing_token";
export declare const TEST_MBOX_AGENT: Agent;
export declare const TEST_MBOXSHA1_AGENT: Agent;
export declare const TEST_OPENID_AGENT: Agent;
export declare const TEST_ACCOUNT_AGENT: Agent;
export declare const TEST_INVALID_AGENT: {
    mbox: string;
};
export declare const TEST_IMMUTABLE_AGENT: Agent;
export declare const TEST_PROFILE_ID = "dummy_profile_id";
export declare const TEST_INVALID_TIMESTAMP = "2";
export declare const TEST_CONTENT = "dummy_content";
export declare const TEST_IMMUTABLE_CONTENT = "immutable_content";
export declare const TEST_JSON_CONTENT = "[]";
export declare const TEST_OBJECT_CONTENT = "{\"foo\":1}";
export declare const TEST_OBJECT_PATCH_CONTENT = "{\"bar\":2}";
export declare const TEST_OBJECT_MERGED_CONTENT = "{\"foo\":1,\"bar\":2}";
export declare const TEXT_CONTENT_TYPE = "text/plain";
export declare const JSON_CONTENT_TYPE = "application/json";
export declare const ALTERNATE_CONTENT_TYPE = "application/x-www-form-urlencoded";
