import createJsonProfile from '../../../utils/createJsonProfile';
import createTextProfile from '../../../utils/createTextProfile';
import {
  TEST_ACCOUNT_AGENT,
  TEST_CONTENT,
  TEST_JSON_CONTENT,
  TEST_MBOX_AGENT,
  TEST_MBOXSHA1_AGENT,
  TEST_OPENID_AGENT,
} from '../../../utils/testValues';
import { OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import getProfile from './utils/getProfile';

describe('expressPresenter.getProfile with existing state', () => {
  setup();

  it('should get when getting text', async () => {
    await createTextProfile();
    await getProfile().expect(OK_200_HTTP_CODE, TEST_CONTENT);
  });

  it('should get when getting json', async () => {
    await createJsonProfile();
    await getProfile().expect(OK_200_HTTP_CODE, JSON.parse(TEST_JSON_CONTENT));
  });

  it('should get when not using mbox', async () => {
    await createTextProfile({ agent: TEST_MBOX_AGENT });
    await getProfile({ agent: JSON.stringify(TEST_MBOX_AGENT) })
      .expect(OK_200_HTTP_CODE, TEST_CONTENT);
  });

  it('should get when not using mbox_sha1sum', async () => {
    await createTextProfile({ agent: TEST_MBOXSHA1_AGENT });
    await getProfile({ agent: JSON.stringify(TEST_MBOXSHA1_AGENT) })
      .expect(OK_200_HTTP_CODE, TEST_CONTENT);
  });

  it('should get when not using openid', async () => {
    await createTextProfile({ agent: TEST_OPENID_AGENT });
    await getProfile({ agent: JSON.stringify(TEST_OPENID_AGENT) })
      .expect(OK_200_HTTP_CODE, TEST_CONTENT);
  });

  it('should get when not using account', async () => {
    await createTextProfile({ agent: TEST_ACCOUNT_AGENT });
    await getProfile({ agent: JSON.stringify(TEST_ACCOUNT_AGENT) })
      .expect(OK_200_HTTP_CODE, TEST_CONTENT);
  });
});
