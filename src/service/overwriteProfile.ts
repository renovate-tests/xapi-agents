import * as streamToString from 'stream-to-string';
import Conflict from '../errors/Conflict';
import MissingEtags from '../errors/MissingEtags';
import OverwriteProfileOptions from '../serviceFactory/options/OverwriteProfileOptions';
import parseJson from '../utils/parseJson';
import Config from './Config';
import checkProfileWriteScopes from './utils/checkProfileWriteScopes';
import createEtag from './utils/createEtag';
import validateAgent from './utils/validateAgent';

export default (config: Config) => {
  return async (opts: OverwriteProfileOptions) => {
    checkProfileWriteScopes(opts.client.scopes);
    validateAgent(opts.agent);
    const etag = createEtag();

    if (opts.ifMatch === undefined && opts.ifNoneMatch === undefined) {
      const { hasProfile } = await config.repo.hasProfile({
        agent: opts.agent,
        client: opts.client,
        profileId: opts.profileId,
      });
      if (hasProfile) {
        throw new Conflict();
      } else {
        throw new MissingEtags();
      }
    }

    // Update or create Profile.
    const jsonContent = (
      opts.contentType === 'application/json'
      ? parseJson(await streamToString(opts.content), ['content'])
      : undefined
    );
    const overwriteProfileResult = await config.repo.overwriteProfile({
      agent: opts.agent,
      client: opts.client,
      content: jsonContent,
      contentType: opts.contentType,
      etag,
      ifMatch: opts.ifMatch,
      ifNoneMatch: opts.ifNoneMatch,
      profileId: opts.profileId,
    });

    if (opts.contentType !== 'application/json') {
      await config.repo.storeProfileContent({
        content: opts.content,
        key: overwriteProfileResult.id,
      });
    }

    return;
  };
};
