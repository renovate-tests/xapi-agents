import { TEST_MBOX_AGENT } from '../../../utils/testValues';
import { FORBIDDEN_403_HTTP_CODE, OK_200_HTTP_CODE } from '../../utils/httpCodes';
import setup from '../utils/setup';
import supertest from '../utils/supertest';

describe('expressPresenter.getProfiles with scopes', () => {
  setup();

  it('should throw forbidden error when using invalid scope', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .set('Authorization', 'invalid_scope_client')
      .query({
        agent: TEST_MBOX_AGENT,
      })
      .expect(FORBIDDEN_403_HTTP_CODE);
  });

  it('should return no models when using valid scopes', async () => {
    await supertest
      .get('/xAPI/activities/profile')
      .set('Authorization', 'valid_scope_client')
      .query({
        agent: TEST_MBOX_AGENT,
      })
      .expect(OK_200_HTTP_CODE, []);
  });
});
