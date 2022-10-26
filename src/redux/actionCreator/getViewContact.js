import { createSelector } from 'reselect';
import apiUser from '../../api/apiUser';

export const GET_VIEW_CONTACT_FETCHING = 'GET_VIEW_CONTACT/FETCHING';
export const GET_VIEW_CONTACT_SUCCESS = 'GET_VIEW_CONTACT/SUCCESS';
export const GET_VIEW_CONTACT_ERROR = 'GET_VIEW_CONTACT/ERROR';

const contactFetching = () => ({
  type: GET_VIEW_CONTACT_FETCHING,
});

const contactSuccess = (contact) => ({
  type: GET_VIEW_CONTACT_SUCCESS,
  payload: contact,
});

const contactError = (error) => ({
  type: GET_VIEW_CONTACT_ERROR,
  payload: error,
});

export const getContact =
  (id, page, countContacts) => async (dispatch, getState) => {
    dispatch(contactFetching());

    try {
      const authKey = createSelector(getState, (store) => store.authKey);
      const {
        data: { results },
      } = await apiUser.get('/', {
        params: {
          seed: authKey,
          page,
          results: countContacts,
        },
      });

      dispatch(
        contactSuccess(
          results.filter((contact) => contact.login.uuid === id)[0],
        ),
      );
    } catch (error) {
      dispatch(contactError(error));
    }
  };
