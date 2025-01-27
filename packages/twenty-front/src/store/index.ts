import { configureStore } from '@reduxjs/toolkit';
// Import reducers from Jqvist project
import { authReducer } from './Auth';
import { socialSellingReducer } from './SocialSelling';
import { aiSdrReducer } from './AiSdr';
import { aiSdrSetupReducer } from './AiSdrSetup';
import { leadsReducer } from './Leads';
import { personalizationReducer } from './Personalization';
import { automationReducer } from './Automation';
import { visitorReducer } from './Vistor';
// Import any existing reducers from the twenty-front project
// For example, import existingReducer from './existingReducer';

const store = configureStore({
  reducer: {
    // Add existing reducers here if available
    // existing: existingReducer,

    // Add Jqvist reducers
    auth: authReducer,
    socialSelling: socialSellingReducer,
    aiSdr: aiSdrReducer,
    aiSdrSetup: aiSdrSetupReducer,
    leads: leadsReducer,
    personalization: personalizationReducer,
    automation: automationReducer,
    visitor: visitorReducer,
  },
  // Add middleware if necessary
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Add custom middleware if needed
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
