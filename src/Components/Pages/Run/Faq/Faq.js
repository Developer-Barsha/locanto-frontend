import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Faq.css'

const Faq = () => {
    // const faqs = [
    //     {
    //         id: 0,
    //         title: "Registration and User Accounts",
    //         items: [
    //             {
    //                 id: 235,
    //                 title: 'Benefits of registering',
    //                 des: 'A registration has many advantages and is necessary to be able use Locanto to the full extent and gain access to your “My Locanto” account section. When you register, you can post your own ads and save ads to your favourites list. You can also rate other users, access the messaging centre to send and answer questions, and much more. <br/> We also need your email address to keep you updated about your ads and inform you of messages from other users.'
    //             },
    //             {
    //                 id: 347,
    //                 title: 'Creating an account',
    //                 des: 'Registering on Locanto is free. Simply tap on Login/Register at the top-right corner of the page. From here, you can continue with your Google account or you can enter your email address. <br/> <br/> If you register with your email address, make sure to go to your inbox and find the confirmation email we sent you (it could also be in your spam or junk folder). In the email, you’ll see the “Activate your account” button that will redirect you to Locanto, so you can finish setting up your account by choosing a username and a password.'
    //             },
    //             {
    //                 id: 392,
    //                 title: 'Premium Accounts vs free accounts',
    //                 des: 'In addition to the basic account, we also offer Premium Accounts. As a Premium member, you will receive many additional advantages, such as having your ads highlighted with a Premium label. More information can be found here.'
    //             },
    //             {
    //                 id: 350,
    //                 title: 'Issues with registration and login',
    //                 des: 'To log in, you must first confirm your email address. An email will be sent to you after registration. Click on the button in the email to confirm your registration. You will then have to choose your username and password, and agree to our terms of use. After your registration is complete, you can log in with your chosen password. <br/> <br/> If you have not received a confirmation email, please check your spam folder. If you have received an email, but the confirmation button does not work, please copy the full link from the URL bar (at the top of your browser) and paste it into a new window. <br/> <br/> If the email is also not in your spam folder, or copying the link also does not work, please contact our Customer Support.'
    //             },
    //             {
    //                 id: 360,
    //                 title: 'Resetting my forgotten password',
    //                 des: 'To reset your password, click on “Log in” below “My Locanto”. Then click on “Can’t access my account” below the password field and enter your email address or username. An email will be sent you with a link that allows you to enter a new password. In the future, you can use your new password to log in.'
    //             },
    //             {
    //                 id: 360,
    //                 title: 'Changing my password',
    //                 des: 'Please log into your account by clicking on “My Locanto” at the top right corner of the page. Then hover over “Settings” at the top bar and select “Change Password”. Please type in your old password, followed by your new one.'
    //             },
    //         ]
    //     }
    // ]

    return (
        <section>
            <div className="faq-bg flex flex-col p-10 gap-5">
                <h1 className="text-white text-3xl t-shadow">Hi, how can we help you?</h1>
                <div className="flex">
                    <input className='w-1/2 h-12 shadow-sm outline-none focus:shadow-sky-400 border hover:border-sky-400 p-3' placeholder='Have a loook through our help centre...' type="text" />
                    <button className='btn hover:border-none bg-orange-500 rounded-none rounded-r-md'>Search</button>
                </div>
            </div>
            <div className='breadcrumbs shadow-slate-400 shadow-md px-10 py-3'>
                <Link to='/' className="h-uline"><i class="fa-solid fa-house pr-1"></i> Free Classifieds India</Link> <b><i class="fa-solid fa-angle-right"></i> Help/FAQ</b>
            </div>

            < Tabs >
                <TabList>
                    <Tab><p>Registration and User Accounts</p></Tab>
                    <Tab><p>Ads</p></Tab>
                    <Tab><p>Communication between Locanto users</p> </Tab>
                    <Tab><p>Reviews</p></Tab>
                    <Tab><p>Paid features</p></Tab>
                    <Tab><p>Apps and mobile site</p></Tab>
                    <Tab><p>Data protection and security</p></Tab>
                    <Tab><p>About Locanto</p></Tab>
                </TabList>

                <TabPanel>
                    <div className="panel-content">
                        <h2 className="text-3xl mb-5">Registration and User Accounts</h2>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Benefits of registering
                            </div>
                            <div className="collapse-content">
                                <p>A registration has many advantages and is necessary to be able use Locanto to the full extent and gain access to your “My Locanto” account section. When you register, you can post your own ads and save ads to your favourites list. You can also rate other users, access the messaging centre to send and answer questions, and much more. <br /> We also need your email address to keep you updated about your ads and inform you of messages from other users.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Creating an account
                            </div>
                            <div className="collapse-content">
                                <p>Registering on Locanto is free. Simply tap on Login/Register at the top-right corner of the page. From here, you can continue with your Google account or you can enter your email address. <br /> <br /> If you register with your email address, make sure to go to your inbox and find the confirmation email we sent you (it could also be in your spam or junk folder). In the email, you’ll see the “Activate your account” button that will redirect you to Locanto, so you can finish setting up your account by choosing a username and a password.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Premium Accounts vs free accounts
                            </div>
                            <div className="collapse-content">
                                <p>In addition to the basic account, we also offer Premium Accounts. As a Premium member, you will receive many additional advantages, such as having your ads highlighted with a Premium label. More information can be found here.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Issues with registration and login
                            </div>
                            <div className="collapse-content">
                                <p>To log in, you must first confirm your email address. An email will be sent to you after registration. Click on the button in the email to confirm your registration. You will then have to choose your username and password, and agree to our terms of use. After your registration is complete, you can log in with your chosen password. <br /> <br /> If you have not received a confirmation email, please check your spam folder. If you have received an email, but the confirmation button does not work, please copy the full link from the URL bar (at the top of your browser) and paste it into a new window. <br /> <br /> If the email is also not in your spam folder, or copying the link also does not work, please contact our Customer Support.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Resetting my forgotten password
                            </div>
                            <div className="collapse-content">
                                <p>To reset your password, click on “Log in” below “My Locanto”. Then click on “Can’t access my account” below the password field and enter your email address or username. An email will be sent you with a link that allows you to enter a new password. In the future, you can use your new password to log in.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Changing my password
                            </div>
                            <div className="collapse-content">
                                <p>Please log into your account by clicking on “My Locanto” at the top right corner of the page. Then hover over “Settings” at the top bar and select “Change Password”. Please type in your old password, followed by your new one.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Changing my email address or username
                            </div>
                            <div className="collapse-content">
                                <p>Unfortunately, it is not possible to change your username after registration.</p>
                                <br />

                                However, you can easily update the email address linked to your account:*
                                <ul>
                                    <li>Please log in and go to “My Locanto”. Then click on “Settings” on the top bar and select “Change email address” under “Profile details”. Now enter your password and the new email address.</li>
                                    <li>We will send you an email to the new email address. Click on the link it contains to confirm the change.</li>
                                    <li>After that, please use the new email to log in to Locanto.</li>
                                </ul>

                                <p>You can only change the email address linked to your account once every 90 days. Please note that even after confirming the change, you won’t be able to use the old email to register on Locanto again.
                                    <br /><br />
                                    *If you registered and log in to Locanto with Google, your Locanto account is linked to that Google address and, therefore, email changes are disabled.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Deleting my account
                            </div>
                            <div className="collapse-content">
                                <p>Click on “My Locanto”. Then enter your email address or username and your password in the “Log in” fields. Hover over “Settings”, select “Delete account”, and follow the on-screen instructions.
                                    <br /><br />
                                    Please note that after your account has been deleted you won’t be able to use the same email address to re-register with us again. The account cannot be restored, not even by our customer support team.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Setting up Alerts for new ads
                            </div>
                            <div className="collapse-content">
                                <p>On Locanto, you can save your searches by indicating your search specifications, typing in your email address, and selecting the email frequency at the bottom of the same page.
                                    <br /><br />
                                    You will then receive updates about new ads related to this search via email.
                                    <br /><br />
                                    To manage your saved searches, go to “My Locanto”, then select “Alerts” from the menu which allows you to view, edit, or delete your saved searches.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                About Favourite Ads
                            </div>
                            <div className="collapse-content">
                                <p>Favourite Ads is a free service that allows you to save ads that you find interesting and review them later on. To add any ads to your favourites list, click on the grey star icon. If you click twice on the star/button, it removes the ad from the list. You will see the same star icon with a number next to it at the top right corner of the website, this indicates the number of postings that you have added to your favourites lists. To see the complete list of your favourite ads, click on the star.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Issues with phone verification
                            </div>
                            <div className="collapse-content">
                                <p>These are the most common issues and what to do in each case:
                                    <br /><br />
                                    <b>You get the error message “This number has been blocked”.</b>
                                    We use an external party to carry out this phone verification process to make sure your info stays secure. They use their own set of criteria to decide which phone numbers are approved. If you cannot verify your number, we are not able to change or fix this since this decision is out of our hands. Please consider registering with a different phone number.
                                    <br /><br />
                                    <b> You used the number in an old account but you can’t access it.</b>
                                    If you created this account a long time ago and would like to use it but don’t remember the password, you may follow these steps to have a password reset link sent to your email.
                                    <br /><br />
                                    <b>You get the error message “This phone number is already linked to another account with Locanto”.</b>
                                    Numbers cannot be verified to multiple accounts at a time. If your number is verified to an existing account, we recommend to continue using that account.<br />
                                    If you cannot access the account that is linked to your number, then please contact us via our contact form.
                                    When contacting us, be sure to include your phone number, proof of ownership (copy of bill or screenshot of caller ID) and include any other relevant information.
                                    <br /><br />
                                    <b>You haven’t received the SMS with the code.</b>
                                    Make sure you have a phone plan that allows you to receive SMS and to have sufficient phone signal. After checking that, try the process again.</p>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="panel-content">Later</div>
                </TabPanel>

                {/* Communication between Locanto users */}
                <TabPanel>
                    <div className="panel-content">
                        <h2 className="text-3xl mb-5">Communication between Locanto users</h2>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Contacting an advertiser
                            </div>
                            <div className="collapse-content">
                                <p>Contacting the advertiser of an ad is free and simple; to ensure your safety against possible scams, please use the contact form on the right side of the ad.
                                    <br /><br />
                                    Locanto warns not to contact an ad poster directly via personal email indicated on the ad.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                New message notifications
                            </div>
                            <div className="collapse-content">
                                <p>
                                    You’ll get an email once you’ve received a new message. You can also find a message icon beside your welcome note on the upper right corner of the page, after login.<br />
                                    On your “My Locanto” page you can find an overview of new messages.
                                    In case you are still logged in but are using another tab, you can also set extra sound and desktop notifications.
                                    To activate desktop notifications, you have to ensure that your browser settings allow pop-ups.
                                    <br /><br />
                                    *You will not receive notifications for conversations you have already moved to the Trash folder. For this reason we recommend that you check your Trash folder often in case of follow-up messages.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Finding old messages
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Scroll to the bottom of the page to see “load previous messages” and click on it to display all conversations. Repeat the procedure until you find the conversation you are looking for. If you don’t see the option to “load previous messages”, it means that you have reached the end of all your messages.
                                    <br /><br />
                                    Alternatively, you can use the “search full text” field (top left side of the message overview) to search for exact words or phrases which you remember from your conversations.
                                    <br /><br />
                                    Only Premium Account holders have unlimited chat storage and are able to access all their inactive conversations. Otherwise, inactive chats become inaccessible and are permanently deleted after a certain period of time. More information can be found here.
                                    <br /><br />
                                    Please note: Purchasing a Locanto Premium Account won’t restore any chats that have already been permanently deleted.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                About the Archive
                            </div>
                            <div className="collapse-content">
                                <p>The Archive is a place to store your old conversations which you do not need to see in your list of active “Messages”. The Archive gives you the option to either restore the message and send it to the regular messages overview again or to delete the conversation. Choosing “Delete” will send the conversation to “Trash”.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Check marks on messages
                            </div>
                            <div className="collapse-content">
                                <p>One check mark means the message was sent.<br />
                                    Two check marks mean the message has reached the recipient.<br />
                                    Two blue check marks mean that the recipient has read message.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Safety warnings and tips in my chats
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Safety warnings automatically appear whenever a suspicious combination of words are recognized by our system. Warnings are shown for your own protection against scam. For more information, please check out ourSafety Tips .</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Sending messages anonymously
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Messages are always sent displaying your username. Your email address is never shown to the other user. Your username/nickname is also displayed above in the top-right corner of the chat in the “Messages” section. If your profile is visible, the username can be clicked on to get to your profile.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Sending images or files
                            </div>
                            <div className="collapse-content">
                                <p>
                                    You can send images or files by going to Messages, opening the chat and clicking on the “plus” icon button next to the text field. You can select the file here, take a picture with your mobile device or you can also use SneakPic™ to send temporary pictures. Accepted formats for photos include gif, png and jpg.
                                    <br /><br />
                                    Make sure to select the file carefully; once it’s been sent, you won’t be able to undo it or delete it. However, you can delete images that you received by clicking on them and selecting “Delete image”.
                                    <br /><br />
                                    Please note that it’s not possible to send images through an ad’s contact form or to send PDFs using an Apple device.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Sharing my location
                            </div>
                            <div className="collapse-content">
                                <p>Click on “Add attachment”, here you have the option to share your location. Adjust your browser settings to allow Google to determine your location. If your location cannot be determined, you can choose nearby locations.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Reporting or blocking a user
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Under the chat windows of the active conversation you find the “Block” option. Click it to avoid further messages from this user. The button will change to “Unblock”, which allows you to unblock the user and receiving messages from the user again.
                                    <br /><br />
                                    If a message sounds strange or fraudulent, you can click “Report abuse” to alert the Locanto Team.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                About SneakPic
                            </div>
                            <div className="collapse-content">
                                <p>SneakPic™ is a feature that allows you to send temporary pictures via the “Messages“ section. With SneakPic™ you can select how long your picture will be visible to the other user. Temporary images will be automatically deleted once they have been seen by the recipient.
                                    <br /><br />
                                    Only Premium Account holders can send unlimited SneakPic™ photos. More information can be found here.
                                    <br /><br />
                                    Please note: We cannot exclude the possibility that other users might capture or save a SneakPic™ you send.</p>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Reviews */}
                <TabPanel>
                    <div className="panel-content">
                        <h2 className="text-3xl mb-5">Reviews</h2>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                About Locanto reviews
                            </div>
                            <div className="collapse-content">
                                <p>Locanto reviews are a way to provide advertisers with feedback and to support other users with their Locanto Classifieds experience.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Reviewing a user
                            </div>
                            <div className="collapse-content">
                                <p>A few days after contacting an advertiser you will receive an email asking you to submit a review of the advertiser. Click on the link within the email to go to the user review page. When you are finished, click on the “Submit Review” button.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Where to find reviews
                            </div>
                            <div className="collapse-content">
                                <p>The comments from your review will appear on the advertiser’s profile. Your review will be collated with other user reviews to generate a star rating, which is displayed on the advertiser’s ads and profile.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Deleting a Review
                            </div>
                            <div className="collapse-content">
                                <p>Premium Account holders can delete one review per month. Learn more.
                                    <br /><br />
                                    Please note, that purchasing Premium Features for ads doesn’t allow you to delete reviews.
                                    <br /><br />
                                    If you already have a Premium Account and want to delete a review, please go to “My Locanto” (top-right corner of the page) and select “View my profile”. Finally, you can eliminate a review by clicking on the grey “Delete” button, under the review you’d like to delete. Remember that it’s only possible to delete one review per month.
                                    <br /><br />
                                    Should you find content in the review that violates human rights, the law or our Advertiser Review Policy, please use our contact form to report this immediately.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                General rules for reviews
                            </div>
                            <div className="collapse-content">
                                <p>
                                    You can only review an advertiser once. Keep in mind, if you are contacting the same advertiser multiple times via different ads, you will still only be able to review them once.
                                    <br /><br />
                                    Read more about the rules associated with posting reviews here.</p>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="panel-content">Later</div>
                </TabPanel>

                {/* apps and mobile site */}
                <TabPanel>
                    <div className="panel-content">
                        <h2 className="text-3xl mb-5">Reviews</h2>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Downloading the Locanto app
                            </div>
                            <div className="collapse-content">
                                <p>
                                    iOS/iPhone app
                                    <br /><br />
                                    Now you can install Locanto on your home screen for faster browsing, improved user experience, and quick access when you’re on the go:
                                    <br /><br />
                                    1. Go to Locanto using Safari as your browser.<br />
                                    2. Now tap the “Share” button (the little square with an arrow) and scroll down.<br />
                                    3. Then press on “Add to Home Screen” and tap the “Add” button.<br />
                                    <br /><br />
                                    Android app
                                    <br /><br />
                                    The Locanto App for Android is now available for direct download. Install it for improved user experience: instant app updates, quick access to our latest features, and faster browsing.
                                    <br /><br />
                                    To install our new application on your home screen:
                                    <br /><br />
                                    1. Go to Locanto using Chrome as your browser.<br />
                                    2. Now tap the menu button (three vertical dots) in the upper right corner of the screen.<br />
                                    3. Then tap “Add to Home screen” and select “Add”.
                                    <br /><br />
                                    That’s it, now that Locanto is installed on your device you can start enjoying all the additional benefits!</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Posting an ad
                            </div>
                            <div className="collapse-content">
                                <p> Posting ads to Locanto is quick, easy and free. Just click the “Post free ad” button at the top-right corner of the page and then follow the subsequent instructions.
                                    <br /><br />
                                    An ad should include a convincing title and a detailed description. You can upload up to 20 images to your ad. Before being able to post an ad, please be sure to make and confirm your Locanto account.
                                    Read more about the rules associated with posting reviews here.</p>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Data protection and security */}
                <TabPanel>
                    <div className="panel-content">
                        <h2 className="text-3xl mb-5">Data protection and security</h2>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Reporting an ad that is using my phone number
                            </div>
                            <div className="collapse-content">
                                <p>
                                    If your phone number is on Locanto without your consent, please contact us directly through the contact form. The <b>fraudulent ad will be removed immediately</b> if you provide us with the following information:
                                    <br /><br />
                                    1. <b>The ad ID</b> shown under the title of the ad. Enter the ID or the link to the ad into the relevant field below.<br />
                                    2. <b>Proof of ownership</b> of the phone number. For example, a scanned copy of a phone bill or phone contract.<br />
                                    <br />
                                    If you feel you are being harassed, please contact your local police and ask them to get in touch with us. We will be able to provide the police with further information about the ad. Please make sure that the police knows the ad ID and links to the ad or mentions it in their correspondence with us so that we can locate the ad.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Reporting an ad or an advertiser
                            </div>
                            <div className="collapse-content">
                                <p> Posting ads to Locanto is quick, easy and free. Just click the “Post free ad” button at the top-right corner of the page and then follow the subsequent instructions.
                                    <br /><br />
                                    An ad should include a convincing title and a detailed description. You can upload up to 20 images to your ad. Before being able to post an ad, please be sure to make and confirm your Locanto account. Read more about the rules associated with posting reviews here.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Locanto’s role in transactions between buyers & sellers
                            </div>
                            <div className="collapse-content">
                                <p>Locanto is a local platform for classifieds. All transactions and details are completed between the two parties. At no time does Locanto get involved in these details or the transaction itself. We do not offer verification of the advertiser. If you have any questions about an offer or any problems with a transaction, please contact the other party directly.
                                    <br /><br />
                                    If you think you have been defrauded, contact your local police.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Law enforcement requests
                            </div>
                            <div className="collapse-content">
                                <p>If you are an official law enforcement officer, department or government official seeking assistance with a data request, please submit your request to us using the contact form.
                                    <br /><br />
                                    Please ensure that you are contacting us from an official police or government-issued email domain. This is a dedicated service for law enforcement. Enquiries from personal emails such as Gmail will not be processed.</p>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                {/* Data protection and security */}
                <TabPanel>
                    <div className="panel-content">
                        <h2 className="text-3xl mb-5">Data protection and security</h2>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                What is Locanto?
                            </div>
                            <div className="collapse-content">
                                <p>Locanto is a free, user-to-user local community classifieds site. You can use the site to post and search ads, to find a new place to live, buy a new car, find a job and much more. Give it a try!</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Is Locanto free?
                            </div>
                            <div className="collapse-content">
                                <p> Yes, Locanto is free of charge. This applies both to posting ads and contacting other users. However, for a small fee you have the option to add Premium Features to your ad.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Contact Locanto
                            </div>
                            <div className="collapse-content">
                                <p>If you have any questions regarding an ad, your account, or if you encounter problems using Locanto, use our contact form to get in touch with our customer support.
                                    <br /><br />
                                    If you are referring to a specific ad, please make sure you provide us with the ad ID. You can find to the left under the title of the ad, or send us the link to the ad.</p>
                            </div>
                            <div className="divider p-0 m-0"></div>
                        </div>
                        <div className="collapse collapse-arrow">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-xl text-blue-900">
                                Changing the country or language
                            </div>
                            <div className="collapse-content">
                                <p>Hover over the flag icon in the top right. Select “show all” at the bottom of the list. Then you will see a map and underneath you can select the country and the desired language.
                                </p>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs >
        </section >
    );
};

export default Faq;