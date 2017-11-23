import { Response } from 'express';
import { get } from 'lodash';
import { xapiHeaderVersion } from '../../utils/constants';
import Config from '../Config';
import getAgent from './getAgent';
import getClient from './getClient';
import getEtag from './getEtag';
import getProfileId from './getProfileId';
import { NO_CONTENT_204_HTTP_CODE } from './httpCodes';
import validateVersionHeader from './validateVersionHeader';

export interface Options {
  readonly query: any;
  readonly config: Config;
  readonly headers: any;
  readonly res: Response;
}

export default async ({ query, config, headers, res }: Options) => {
  const client = await getClient(config, get(headers, 'authorization', ''));
  validateVersionHeader(get(headers, 'x-experience-api-version'));

  const ifMatch = getEtag(get(headers, 'if-match'));
  const agent = getAgent(get(query, 'agent'));
  const profileId = getProfileId(get(query, 'profileId'));

  await config.service.deleteProfile({ agent, client, profileId, ifMatch });
  res.status(NO_CONTENT_204_HTTP_CODE);
  res.setHeader('X-Experience-API-Version', xapiHeaderVersion);
  res.send();
};
