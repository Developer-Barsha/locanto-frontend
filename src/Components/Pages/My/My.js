import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './My.css'
import MyAccount from './MyAccount/MyAccount';
import MyAds from './MyAds/MyAds';

const My = () => {
    return (
        <section className='overflow-hidden'>
            <div className="my-bg"></div>
            <Tabs className='flex flex-col overflow-hidden'>
                <TabList className='flex w-full'>
                    <Tab>My Locanto</Tab>
                    <Tab>My Ads</Tab>
                    <Tab>Purchases</Tab>
                    <Tab>My Wallet new!</Tab>
                    <Tab>Messages</Tab>
                    <Tab>Alerts</Tab>
                    <Tab>Followers</Tab>
                    <Tab>Settings</Tab>
                    <Tab><h3  className="flex items-center text-orange-500 gap-3">Upgrade to a Premium Account now! <span className="h-uline text-black">Learn more.</span></h3></Tab>
                </TabList>

                <TabPanel>
                    <MyAccount />
                </TabPanel>
                <TabPanel>
                    <MyAds />
                </TabPanel>
                <TabPanel>
                    later
                </TabPanel>
                <TabPanel>
                    later
                </TabPanel>
                <TabPanel>
                    later
                </TabPanel>
                <TabPanel>
                    later
                </TabPanel>
                <TabPanel>
                    later
                </TabPanel>
                <TabPanel>
                    later
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default My;