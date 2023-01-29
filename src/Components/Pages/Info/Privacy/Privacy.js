import React from 'react';
import './Privacy.css';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <section className='privacy'>
            <div className='bg-container'></div>
            <div className='breadcrumbs shadow-slate-400 shadow-md px-10 py-3'>
                <Link to='/' className="h-uline"><i class="fa-solid fa-house pr-1"></i> Free Classifieds India</Link> <b><i class="fa-solid fa-angle-right"></i> Terms of Use</b>
            </div>
            <div className="px-10">
                <h2 className="text-3xl pt-10 pb-5">Locanto Privacy Policy</h2>
                <ol className='list ml-4'>
                    <li><b>General</b>
                        <ol>
                            <p className='flex'><b className='pr-4'>1.</b>
                                <li>
                                    <b>Liability for content</b>
                                    <p>The content of our sites is delivered with utmost diligence and care possible. However, Locanto can not guarantee the accuracy, completeness, integrity and actuality of the content. In cases of declaration of violation of rights, Locanto will delete the concerned content at the soonest possible time.</p>
                                </li>
                            </p>
                            <p className='flex'><b className='pr-4'>1.</b>
                                <li>
                                    <b>Liability for links</b>
                                    <p>Our site contains links to external websites over which we have no control. Thus, Locanto cannot be held accountable for the content of of those third party websites and the consequences that may arise from the existence of such links on Locanto. The operator or provider of the mentioned content is the one responsible for their respective site content. The linked-to websites were reviewed concerning possible violation of rights at the point of publication. However, some illegal content may not be recognizable at the point of publication. A constant and permanent monitoring of the links included on Locanto without concrete indication and necessity is deemed unreasonable and infeasible. But in cases of declaration of violation of rights, Locanto will delete the concerned link(s) at the soonest possible time.</p>
                                </li>
                            </p>
                            <p className='flex'><b className='pr-4'>1.</b>
                                <li>
                                    <b>Copyright</b>
                                    <p>The content and text published by third party website operators on Locanto are subject to the German copyright law. The duplication, revision, dissemination and all forms of usage of content beyond the copyright limits require a written approval of the respective author and/or creator. Downloads and copies of the aforementioned content is only allowed for private and non-commercial use. If the content posted on Locanto did not come from the website operator himself, the third party copyright rules shall apply. All third party content is marked as such. Should there be any copyright infringement on Locanto, kindly contact us and provide us with corresponding evidence. In cases of declaration of violation of rights, Locanto will delete the concerned content at the soonest possible time.</p>
                                </li>
                            </p>
                        </ol>
                    </li>
                </ol>
                <br />
                <p>The following clauses shall explain when and to which extent personal data is handled, collected, promoted and used by Locanto.</p>
            </div>
            <div className="px-10">
                <ol className='list px-12'>
                    <li>
                        <b>Collection and processing of personal data</b>
                        <p>Ads on Locanto are obviously made available to the public. Our servers are located in the European Union. We comply with the EU user consent policy. If you choose to provide us with personal information, you are consenting to the transfer and storage of that information to and on our servers in the European Union.</p>
                        <p>We collect and store the following personal information:</p>
                        <ul>
                            <li>Email address, physical location/contact information and financial information (depending on the service used)</li>
                            <li>Computer sign-in data, statistics on page views, traffic to and from Locanto as well as ad data (Through cookies which you can disable on your browser. However, this is likely to affect your ability to use the site in terms of functionality).</li>
                            <li>Other information including your IP address and standard web log information.</li>
                        </ul>
                        <p>We point out that data transmission over the Internet (eg communication via e-mail) can lead to security issues. A complete protection of data against access of third parties is not possible.</p>
                    </li>
                    <li>
                        <b>Transfer of personal data</b>
                        <p>Transfer or provision of personal data to a third party occurs only if Locanto is lawfully obligated to provide information to authorities in relation to an ad that a user has posted, or if the user has given prior consent to the release of personal data. Otherwise, personal data will not be released, shared or sold to third parties for marketing or advertising purposes without prior permission from the user.</p>
                    </li>
                    <li>
                        <b>Cookies</b>
                        <p>Locanto uses “cookies” in connection with the web browser for optimum usage of the site. A “cookie” is a small piece of data coming from our web server that is stored in the user’s hard drive or other storage device. The user may choose to disable or adjust enabled cookies accordingly by configuring their web browser. However, disabling or deleting cookies may result in the unavailability of some functions and features of the website.
                            <br />
                            <br />
                            Locanto uses cookies to remember the last activity of the user on the website, for the user’s own convenience. This applies in terms of saving the user’s details (username and password) and settings on applications. Cookies are used to identify the used computer. No personal data except the users IP-address is saved.Locanto does not use technology that may combine information obtained by cookies with personal user data, so as to detect the identity or email address of users.</p>
                    </li>
                    <li>
                        <b>ACCOUNTABILITY FOR ADVERTISING CONTENT AND TRUTHFULLY-SWORN STATEMENTS/INFORMATION</b>
                        <p>Our website uses plugins provided by the social network facebook.com, operated by Facebook Inc., 1 Hacker Way, Menlo Park, CA 94025, USA, or, if you are an EU resident, by Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland (“Facebook”). The plugins are identifiable by a Facebook logo or the “Like” button. For a full list of Facebook plugins please see: <b className='h-uline'>https://developers.facebook.com/docs/plugins/]https://developers.facebook.com/docs/plugins/</b></p>

                        <p>When you visit a page of our website that contains a social plugin, your browser establishes a direct connection to Facebook servers, enabling Facebook to receive information about you having accessed the respective page of our website with your IP address. If you click the FB ”Like“ button while you are logged in on Facebook, the content of our page can be linked on your Facebook profile. Therefore if you are logged into Facebook, your visit can be assigned to your Facebook account. We point out that we do not have knowledge about the data gathered and its use by Facebook. For more information, please visit Facebook’s privacy policy: <b className='h-uline'>https://facebook.com/policy.php</b></p>

                        <p>If you are a Facebook member and do not want Facebook to connect the data concerning your visit to our website with your Facebook member data, please log off Facebook before entering our website.</p>
                    </li>
                    <li>
                        <b>Facebook Pixel</b>
                        <p>We use “Facebook pixel” operated by Facebook Inc., 1 Hacker Way, Menlo Park, CA 94025, USA, or, if you are an EU resident, by Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland (“Facebook”) for our website.</p>
                        <br />
                        <p>We use the Facebook pixel in order to only display the Facebook ads placed by us to those Facebook users who also showed an interest in our website, certain products or subjects. In addition, the Facebook pixel is supposed to help us ensure that our ads on Facebook reflect the potential interest of the users and are not perceived as annoying. The Facebook pixel allows us to determine the effectiveness of your Facebook ads and to create statistics on the number of users who visit our website by clicking on an ad.</p>
                        <br />
                        <p>When one of our web pages is requested, the Facebook pixel is automatically integrated into the page if you have given your consent and a cookie may be placed on the user’s device. If the user is logged into Facebook during this time or if he/she logs in later, the visit to our website is also stored in the user’s Facebook profile. The data collected is anonymised and does not allow us to determine a person’s identity. However, Facebook itself does store and process the data and therefore, through the connection with the respective Facebook profile, Facebook may use the data for advertising or market research purposes. If we need to reconcile the data with Facebook, it is first encrypted within the browser and then sent to Facebook via a secure connection in encrypted form.</p>
                        <br />
                        <p>The volume and processing of the data are set out in Facebook’s Data Use Policy. The following page also provides basic information on Facebook ads: <b className="h-uline">https://www.facebook.com/policy.php.</b> Further information on Facebook pixel and how it works is also available in Facebook’s Help section: <a href='https://www.facebook.com/business/help/651294705016616.' className="h-uline font-bold">https://www.facebook.com/business/help/651294705016616.</a></p>
                        <br />
                        <p>You can object to the collection of data by the Facebook pixel and the use of your data for the purpose of displaying Facebook ads. If you wish to do so, please visit the page provided by Facebook for this purpose and follow the instructions regarding the settings for usage-based advertising: <b className="h-uline">https://www.facebook.com/settings?tab=ads.</b> All settings are independent of the platform, i.e. they are applied on all end devices (e.g. mobile or desktop devices).</p>
                    </li>
                    <li>
                        <b>Google Analytics</b>
                        <p>This website uses Google Analytics, a web analytics service provided by Google, Inc. (”Google“). Google Analytics uses ”cookies“, which are text files placed on your computer, to help analyze the usage of the site. The information generated by the cookie about your use of the website will be transmitted to and stored by Google on servers in the United States in most cases.</p>
                        <br />
                        <p>In case IP-anonymisation is activated on this website, your IP address will be truncated within the area of Member States of the European Union or other parties to the Agreement on the European Economic Area. Only in exceptional cases will the full IP address be first transferred to a Google server in the USA and then truncated there. Google will use this information on behalf of the operator of this website for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing them other services relating to website activity and internet usage. The IP address, that your browser conveys within the scope of Google Analytics, will not be associated with any other data held by Google.</p>
                        <br />
                        <p>You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. You can also opt-out from being tracked by Google Analytics with effect for the future by downloading and installing Google Analytics Opt-out Browser Add-on for your current web browser: https://tools.google.com/dlpage/gaoptout?hl=en

                            More information about how Google uses data can be found here.</p>
                    </li>
                    <li>
                        <b>Google AdSense</b>
                        <p>This website uses Google AdSense, a service for including advertisements from Google Inc. (”Google“). Google AdSense uses ”cookies“, text files that are stored on your computer, to analyze the use of this website. Google AdSense uses also use web beacons (invisible graphics). Through these web beacons information such as traffic can be analyzed.</p>
                        <br />
                        <p>This usage information, generated by cookies and web beacons (including your IP address) and the display of advertisements are transmitted to a Google server in the USA and stored there. This information can be given to Google partners. But Google will not associate your IP-address with other saved data they have from you. You can prevent the use of cookies by selecting the appropriate settings on your browser.</p>
                        <br />
                        <p>However, we point out that in this case you may not be able to fully use all features of this website. By using this website you agree to the processing of data about you by Google in the manner described above and for the aforementioned purpose.</p>
                    </li>
                    <li>
                        <b>Twitter</b>
                        <p>Our website contains plugins from Twitter. These plugins are solely provided by Twitter Inc., 795 Folsom St., Suite 600, San Francisco, CA 94107, USA. Through the use of Twitter and the ”Re-tweet“ function, the web pages you visit will be linked to your Twitter account and be visible to other users. Data will also be transferred to Twitter. We point out that we as providers of the site have no knowledge of the content of the transmitted data and its use by Twitter. For more information, please see the privacy policy of Twitter at <b className="h-uline">twitter.com/privacy.</b> You can change your privacy preferences at <b className="h-uline">Twitter in the account settings.</b></p>
                    </li>
                    <li>
                        <b>Hotjar</b>
                        <p>We use Hotjar in order to better understand our users’ needs and to optimize this service and experience. Hotjar is a technology service that helps us better understand our users’ experience (e.g. how much time they spend on which pages, which links they choose to click, what users do and don’t like, etc.) and this enables us to build and maintain our service with user feedback. Hotjar uses cookies and other technologies to collect data on our users’ behavior and their devices. This includes a device’s IP address (processed during your session and stored in a de-identified form), device screen size, device type (unique device identifiers), browser information, geographic location (country only), and the preferred language used to display our website. Hotjar stores this information on our behalf in a pseudonymized user profile. Hotjar is contractually forbidden to sell any of the data collected on our behalf.</p>
                        <br />
                        <p>For further details, please see the ‘about Hotjar’ section of Hotjar’s support site: <b>https://help.hotjar.com/hc/en-us/categories/115001323967-About-Hotjar</b></p>
                        <br />
                        <p>You can opt-out to the creation of a user profile, Hotjar’s storing of data about your usage of our site and Hotjar’s use of tracking cookies on other websites by following this opt-out: <b>https://www.hotjar.com/legal/compliance/opt-out</b></p>
                    </li>
                    <li>
                        <b>Third party/External websites</b>
                        <p>Please be aware that other websites and other internet users may collect any personal information such as your e-mail address that is published on the websites of Locanto. This is due to the natural interconnectedness of the internet. Our data protection policies only apply to Locanto and do not cover external websites nor cover the external activities of the users and the consequences arising thereafter. Locanto offers users the possibility to interact with Locanto users and post ads under a cipher as an added security measure. This considerably hinders third parties from collecting users’ personal data. Locanto also uses Javascript to encode your email address (that was submitted as a contact email) to prevent the scanning of users’ email addresses through external software. However, email addresses that are published openly in the ad itself are not covered by this security feature.</p>
                    </li>
                    <li>
                        <b>Right of withdrawal and information</b>
                        <p>Personal information provided to Locanto may be requested for deletion at any time provided that the information is not needed for a running transaction or is not lawfully required for safekeeping. If you have given the permission for the transmission of personal information to a third party, you may at any time cancel or withdraw this permission. Information regarding all personal information saved on Locanto can be provided on request and free of cost. You have the possibility of requesting eventual corrections to erroneous and non-current data at any point.</p>
                    </li>
                    <li>
                        <b>Responsible authority</b>
                        <p>Questions regarding data privacy and protection should be addressed to <b className='h-uline'>privacy@locanto.to</b></p>
                    </li>
                </ol>
            </div>

            <p className='px-10 py-5'>Questions, remarks and complaints may be sent to us through our <b className='h-uline'> contact form.</b></p>
        </section>
    );
};

export default Privacy;