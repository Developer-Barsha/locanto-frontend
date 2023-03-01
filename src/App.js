import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Nav from './Components/Shared/NavHeader/Nav';
import Terms from './Components/Pages/Info/Terms/Terms';
import Privacy from './Components/Pages/Info/Privacy/Privacy';
import Premium from './Components/Pages/Info/Premium/Premium';
import SafetyTips from './Components/Pages/Info/SafetyTips/SafetyTips';
import PremiumAccounts from './Components/Pages/Info/PremiumAccounts/PremiumAccounts';
import Promote from './Components/Pages/Info/Promote/Promote';
import Word from './Components/Pages/Run/Word/Word';
import MPremiumAccounts from './Components/Pages/Info/MPremiumAccounts/MPremiumAccounts';
import Faq from './Components/Pages/Run/Faq/Faq';
import Businesses from './Components/Pages/Info/Businesses/Businesses';
import RequireAuth from './Components/Shared/RequireAuth';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import Dashboard from './Components/AdminPanel/Dashboard/Dashboard';
import SubCategory from './Components/AdminPanel/Category/SubCategory/SubCategory';
import MainCategories from './Components/AdminPanel/Category/MainCategories/MainCategories';
import AllUsers from './Components/AdminPanel/Users/AllUsers/AllUsers';
import AddNewUser from './Components/AdminPanel/Users/AddNewUser/AddNewUser';
import SubCategoryAds from './Components/SubCategoryAds/SubCategoryAds';
import Login from './Components/Shared/Account/Login';
import Register from './Components/Shared/Account/Register';
import MyAccount from './Components/Pages/My/MyAccount/MyAccount';
import MyWallet from './Components/Pages/My/MyWallet/MyWallet';
import My from './Components/Pages/My/My';
import SubCategories from './Components/SubCategories/SubCategories';
import Category from './Components/AdminPanel/Category/Category/Category';
import Ads from './Components/AdminPanel/Ads/Ads';
import MyAds from './Components/Pages/My/MyAds/MyAds';
import AccountUpgrade from './Components/Pages/Info/AccountUpgrade/AccountUpgrade';
import SingleAd from './Components/Shared/SingleAd/SingleAd';
import Post from './Components/Pages/My/MyAccount/Post/Post';

function App() {
  const [user, setUser] = useState({});
  const u_id = localStorage.getItem('u_id');
  const location = useLocation();
  const pathname = location?.pathname;
  const clickedMainCat = JSON.parse(localStorage.getItem('clickedMainCat'));
  const clickedSubCat = JSON.parse(localStorage.getItem('clickedSubCat'));

  useEffect(() => {
    fetch(`http://localhost:5000/users/${u_id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  const [formData, setFormData] = useState({
    adTitle: "",
    adDescription: "",
    adImages: [],
    mainCategory: "",
    subCategory: "",
    category: "",
    adType: "",
    adNumber: "",
    adPrice: "",
    adLocation: "",
    admin: user.user,
  });

  return (
    <div className="App">
      {!pathname.includes('/admin-panel') && <Nav />}

      {/* <MemoryRouter> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/info/terms' element={<Terms />}></Route>
        <Route path='/info/privacy' element={<Privacy />}></Route>
        <Route path='/info/premium' element={<Premium />}></Route>
        <Route path='/info/promote' element={<Promote />}></Route>
        <Route path='/info/premium-accounts' element={<PremiumAccounts />}></Route>
        <Route path='/info/m/premium-accounts' element={<MPremiumAccounts />}></Route>
        <Route path='/info/safer-trading' element={<SafetyTips />}></Route>
        <Route path='/run/word' element={<Word />}></Route>
        <Route path='/run/faq' element={<Faq />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path={`/${clickedMainCat?.title}`} element={<SubCategories clickedMainCat={clickedMainCat} />}></Route>
        <Route path={`${clickedSubCat?.title}`} element={<SubCategoryAds />}></Route>
        <Route path='/info/businesses' element={<RequireAuth><Businesses /></RequireAuth>}></Route>
        <Route path='/info/account-upgrade' element={<RequireAuth><AccountUpgrade /></RequireAuth>}></Route>
        <Route path='/my-account' element={<RequireAuth><MyAccount /></RequireAuth>}></Route>
        {/* <Route path='/my' element={<RequireAuth><My /></RequireAuth>}></Route> */}
        <Route path='/my-ads' element={<RequireAuth><MyAds /></RequireAuth>}></Route>
        <Route path='/ad/:id' element={<SingleAd />}></Route>
        <Route path='/post' element={<Post formData={formData} setFormData={setFormData} />}></Route>

        <Route path='/admin-panel' element={<AdminPanel />}>
          <Route path='dashboard' index element={<Dashboard />}></Route>
          <Route path='main-categories' element={<MainCategories />}></Route>
          <Route path='sub-categories' element={<SubCategory />}></Route>
          <Route path='categories' element={<Category />}></Route>
          <Route path='ads' element={<Ads />}></Route>
          <Route path='all-users' element={<AllUsers />}></Route>
          <Route path='add-new-user' element={<AddNewUser />}></Route>
        </Route>

        <Route path="/my" element={<My />}>
          <Route index element={<Navigate to="my-account" />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="my-ads" element={<MyAds />} />
          <Route path="my-wallet" element={<MyWallet />} />
        </Route>
      </Routes>
      {/* </MemoryRouter> */}

      {!pathname.includes('/admin-panel') && <Footer />}
    </div>
  );
}

export default App;
