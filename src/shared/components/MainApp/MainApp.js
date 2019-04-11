import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

//import css
import './MainApp.css'

//import compoenents..
import Auth from '../Auth'
import GetStarted from '../GetStarted'
import Login from '../Login'
import Signup from '../Signup'
import Home from '../Home'
import StartGame from '../StartGame'
import NotFound from '../NotFound'
import Quiz from '../Quiz';
import QuizResult from '../QuizResult';
import Leaderboard from '../Leaderboard'
import MyWallet from '../MyWallet';
import EarnToken from '../EarnToken'
import InviteFriends from '../InviteFriends/InviteFriends';
import InviteContacts from '../InviteContacts'
import AdvertisingOPT from '../AdvertisingOPT'
import NoAdvertisingOPT from '../NoAdvertisingOPT'
import Settings from '../Settings'
import DonateTokens from '../DonateTokens';
import SelectContinent from '../SelectContinent'
import SelectInitative from '../SelectInitiative'
import BonusReward from '../BonusReward'
import PurchaseTokens from '../PurchaseTokens'
import MiniBytes from '../MiniBytes'
import AdvertisingComment from '../AdvertisingComment'
import ForgotPassword from '../ForgotPassword'
import ResetPassword from '../ResetPassword'


//import Routes
import {
    loginRoute,
    signUpRoute,
    homeRoute,
    startGameRoute,
    questionRoute,
    quizResultRoute,
    leaderBoardRoute,
    walletRoute,
    earnTokenRoute,
    inviteFriendsRoute,
    inviteContactsRoute,
    advertisingOptRoute,
    noAdvertisingRoute,
    settingsRoute,
    donateTokensRoute,
    selectContinentRoute,
    selectInitiativeRoute,
    bonusRewardRoute,
    purchaseTokensRoute,
    miniBytesRoutes,
    advertisingOptRoutes,
    forgotPasswordRoutes,
    resetPassswordRoutes
} from '../CustomRoutes/CustomRoutes'


function MainApp(props) {
    return (
        <div className="app-container">
            <Switch>
                <Route exact path="/" render={routerProps => (
                    <Auth accept={'$unauthenticated'} reject={'$authenticated'} redirectTo={homeRoute}>
                        <GetStarted {...routerProps} />
                    </Auth>
                )} />
                <Route path={loginRoute} render={routerProps => (
                    <Auth accept={'$unauthenticated'} reject={'$authenticated'} redirectTo={homeRoute}>
                        <Login {...routerProps} />
                    </Auth>
                )} />

                <Route path={signUpRoute} render={routerProps => (
                    <Auth accept={'$unauthenticated'} reject={'$authenticated'} redirectTo={homeRoute}>
                        <Signup {...routerProps} />
                    </Auth>
                )} />
                <Route path={homeRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <Home {...routerProps} />
                    </Auth>
                )} />
                <Route path={startGameRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <StartGame {...routerProps} />
                    </Auth>
                )} />
                <Route path={questionRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <Quiz {...routerProps} />
                    </Auth>
                )} />
                <Route path={quizResultRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <QuizResult {...routerProps} />
                    </Auth>
                )} />
                <Route path={leaderBoardRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <Leaderboard {...routerProps} />
                    </Auth>
                )} />
                <Route path={walletRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <MyWallet {...routerProps} />
                    </Auth>
                )} />
                <Route path={earnTokenRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <EarnToken {...routerProps} />
                    </Auth>
                )} />
                <Route path={inviteFriendsRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <InviteFriends {...routerProps} />
                    </Auth>
                )} />

                <Route path={inviteFriendsRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <InviteFriends {...routerProps} />
                    </Auth>
                )} />
                <Route path={inviteContactsRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <InviteContacts {...routerProps} />
                    </Auth>
                )} />
                <Route path={advertisingOptRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <AdvertisingOPT {...routerProps} />
                    </Auth>
                )} />
                <Route path={noAdvertisingRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <NoAdvertisingOPT {...routerProps} />
                    </Auth>
                )} />
                <Route path={settingsRoute} render={routerProps => (
                    <Auth accept={'$unauthenticated'} reject={'$authenticated'} redirectTo={loginRoute}>
                        <Settings {...routerProps} />
                    </Auth>
                )} />
                <Route path={donateTokensRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <DonateTokens {...routerProps} />
                    </Auth>
                )} />
                <Route path={selectContinentRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <SelectContinent {...routerProps} />
                    </Auth>
                )} />
                <Route path={selectInitiativeRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <SelectInitative {...routerProps} />
                    </Auth>
                )} />
                <Route path={bonusRewardRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <BonusReward {...routerProps} />
                    </Auth>
                )} />
                <Route path={purchaseTokensRoute} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <PurchaseTokens {...routerProps} />
                    </Auth>
                )} />
                <Route path={miniBytesRoutes} render={routerProps => (
                    <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <MiniBytes {...routerProps} />
                    </Auth>
                )} />
                <Route path={advertisingOptRoutes} render={routerProps => (
                     <Auth accept={'$authenticated'} reject={'$unauthenticated'} redirectTo={loginRoute}>
                        <AdvertisingComment {...routerProps} />
                    </Auth>
                )}/>
                <Route path={forgotPasswordRoutes} render={routerProps => (
                    <Auth accept={'$unauthenticated'} reject={'$authenticated'} redirectTo={homeRoute}>
                        <ForgotPassword {...routerProps} />
                    </Auth>
                )}/>
                <Route path={resetPassswordRoutes} render={routerProps => (
                    <Auth accept={'$unauthenticated'} reject={'$authenticated'} redirectTo={homeRoute}>
                      <ResetPassword {...routerProps} />
                    </Auth>
                )}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}


export default MainApp