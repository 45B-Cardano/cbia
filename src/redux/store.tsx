import axios from "axios";
import { multiClientMiddleware } from "redux-axios-middleware";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";

import options from "./axiosConfig";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const clients = {
  default: {
    client: axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      responseType: "json",
    }),
  },
};

const makeStore: any = ({ isServer }: any) => {
  const sagaMiddleware = createSagaMiddleware();

  if (isServer) {
    return createStore(rootReducer, applyMiddleware(multiClientMiddleware(clients, options), sagaMiddleware));
  }

  const { persistStore, persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;

  const persistConfig = {
    key: "nextjs",
    whitelist: [""],
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store: any = createStore<any, any, any, any>(
    persistedReducer,
    {},
    applyMiddleware(multiClientMiddleware(clients, options), sagaMiddleware, logger)
  );

  store.__persistor = persistStore(store);
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
