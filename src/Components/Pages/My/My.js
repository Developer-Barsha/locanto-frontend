import React from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './My.css'
import MyAccount from './MyAccount/MyAccount';
import MyAds from './MyAds/MyAds';

import {
    MemoryRouter,
    Navigate,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";
import {
    TabLink,
    TabLinkList,
    TabLinkPanel,
    useTabLinkState,
} from "./TabLink.tsx";

const My = () => {
    const tab = useTabLinkState();

    return (
        <section className='overflow-hidden'>
            <div className="my-bg"></div>

            <div className="wrapper">
                <div className="flex justify-between px-5">
                    <TabLinkList state={tab} className="tab-list" aria-label="Options">
                        <TabLink className="tab" id="/my-account" to="my-account">
                            My Locanto
                        </TabLink>
                        <TabLink className="tab" id="/my-ads" to="my-ads">
                            My Ads
                        </TabLink>
                        <TabLink className="tab" id="/purchases" to="purchases">
                            Purchases
                        </TabLink>
                        <TabLink className="tab" id="/my-wallet" to="my-wallet">
                            My Wallet <span className="text-sm text-red-400">new!</span>
                        </TabLink>
                        <TabLink className="tab" id="/inbox" to="inbox">
                            Messages
                        </TabLink>
                        <TabLink className="tab" id="/alerts" to="alerts">
                            Alerts
                        </TabLink>
                        <TabLink className="tab" id="/my-followers" to="my-followers">
                            Followers
                        </TabLink>
                        <TabLink className="tab" id="/settings" to="settings">
                            Settings
                        </TabLink>
                    </TabLinkList>
                    <h3 className="flex items-center text-orange-500 gap-3">Upgrade to a Premium Account now! <span className="h-uline text-black">Learn more.</span></h3>
                </div>
                <div className="panels">
                    <TabLinkPanel state={tab} tabId={tab.selectedId || undefined}>
                        <Outlet />
                    </TabLinkPanel>
                </div>
            </div>
        </section>
    );
};

export default My;