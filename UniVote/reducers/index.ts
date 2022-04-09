import { combineReducers } from "redux"
import { reducer as searchReducer } from "./reducers.search"
import { reducer as trendingItemsReducer } from "./reducers.trendingItems"
import { reducer as loginReducer} from './reducers.login'
import { reducer as proposalDetailsReducer} from './reducers.proposalDetails'
import { reducer as newProposalReducer} from './reducers.createProposal'
import {reducer as myProposalsReducer} from './reducers.myProposals'
import {reducer as newReferendumReducer} from './reducers.createReferendum'
import {reducer as myPerksReducer} from './reducers.myPerks'

const rootReducer = combineReducers({
    search: searchReducer,
    trendingItems: trendingItemsReducer,
    login: loginReducer,
    proposalDetails: proposalDetailsReducer,
    newProposal: newProposalReducer,
    myProposals: myProposalsReducer,
    newReferendum: newReferendumReducer,
    myPerks: myPerksReducer
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
