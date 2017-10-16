// @flow

import type { Message, State } from 'main/constants/types';

type Store = {
  messages: State,
};

export default ({ messages: alerts }: Store): Array<Message> => (
  alerts.ids.map(id => alerts.entities[id]));
