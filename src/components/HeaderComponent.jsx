import React, { useEffect, useState } from 'react';

import {
  HiMagnifyingGlass,
  HiMicrophone,
  HiOutlineSun,
  HiOutlineMoon
} from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';

const HeaderComponent = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const [isLogin, setIsLogin] = useState(true);
  return (
    <div
      className={` ${
        isLoading
          ? ' -translate-y-full opacity-0 '
          : 'translate-y-6 opacity-100'
      } transform duration-300 fixed w-[90%] mx-20 z-30 `}
    >
      <div
        className={`w-full shadow-md rounded-full ${
          theme === 'light'
            ? 'bg-[#d3bced70] text-gray-800'
            : 'bg-[#00000050] text-white'
        }`}
      >
        <nav className="container flex items-center justify-between py-3 pl-8 pr-16">
          {/* Logo và Search */}
          <div className="flex items-center space-x-4">
            <button
              className="block md:hidden p-2 border rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
            <div className="text-xl font-bold ">Logo</div>
            <div className="flex items-center border rounded-full pl-4 dark:bg-gray-900 bg-white">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="px-3 py-2 outline-none dark:outline-none bg-transparent"
              />
              <div className=" dark:bg-slate-500 bg-[#A2A1E2] py-2 rounded-r-full px-3">
                <HiMagnifyingGlass size={26} color="#fff" />
              </div>
            </div>
            <HiMicrophone />
          </div>

          {/* Menu chính */}
          <ul
            className={`md:flex font-medium text-[18px] items-center space-x-4 absolute md:static top-16 left-0 w-full md:w-auto shadow-lg  md:shadow-none z-10 transition-all duration-300 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <li
              className={`${
                location.pathname === '/'
                  ? 'bg-slate-100 dark:bg-[#ffffff20] '
                  : ''
              } hover:bg-slate-100 dark:hover:bg-[#ffffff20] rounded-full px-3 py-1 cursor-pointer`}
            >
              <Link to="/">Trang chủ</Link>
            </li>
            <li
              className={`${
                location.pathname === '/danh-muc'
                  ? 'bg-slate-100 dark:bg-[#ffffff20] '
                  : ''
              } hover:bg-slate-100 dark:hover:bg-[#ffffff20] rounded-full px-3 py-1 cursor-pointer`}
            >
              <Link to="/danh-muc">Danh mục</Link>
            </li>
            <li
              className={`${
                location.pathname === '/tin-tuc'
                  ? 'bg-slate-100 dark:bg-[#ffffff20] '
                  : ''
              } hover:bg-slate-100 dark:hover:bg-[#ffffff20] rounded-full px-3 py-1 cursor-pointer`}
            >
              <Link to="/tin-tuc">Tin tức</Link>
            </li>
            <li
              className={`${
                location.pathname === '/doi-tac'
                  ? 'bg-slate-100 dark:bg-[#ffffff20] '
                  : ''
              } hover:bg-slate-100 dark:hover:bg-[#ffffff20] rounded-full px-3 py-1 cursor-pointer`}
            >
              <Link to="/doi-tac">Đối tác</Link>
            </li>
          </ul>

          {/* Tác vụ */}
          <div className="flex items-center space-x-4">
            {/* Toggle Dark Mode */}
            <div
              onClick={toggleTheme}
              className="w-[70px] justify-between flex h-8 bg-[#ffffff] dark:bg-slate-400 rounded-full shadow-[inset_0px_-5px_10px_rgba(255,255,255,0.2),inset_0px_5px_10px_rgba(0,0,0,0.2)] py-[1px] px-[1px]"
            >
              <div className="z-10 mt-1 ml-1">
                <HiOutlineSun
                  color={`${theme === 'light' ? '#fff' : '#ccc'}`}
                  size={20}
                />
              </div>
              <div className="z-10 mt-1 mr-1">
                <HiOutlineMoon
                  color={`${theme !== 'light' ? '#fff' : '#666'}`}
                  size={20}
                />
              </div>

              <div
                className={`w-7 h-7 rounded-full z-[1] absolute  text-center py-[6px] ${
                  theme === 'light'
                    ? 'bg-[#F3C889] translate-x-[0.5px]'
                    : 'bg-[#5a5a5a] translate-x-10'
                }  mt-[0.5px]  transform duration-500`}
              ></div>
            </div>

            {isLogin ? (
              <div className="relative group flex items-center gap-2">
                <img
                  className=" border w-10 h-10 rounded-full border-gray-300 bg-cover"
                  src="https://toigingiuvedep.vn/wp-content/uploads/2022/11/hinh-anh-avatar-nu-dep-cho-con-gai-ngau-cool.jpg"
                  alt=""
                />
                <h2>Dennis Tran</h2>

                <span className=" absolute hidden group-hover:block w-3 top-8 h-3 bg-slate-100 dark:bg-slate-500 left-5 rotate-45 mt-2"></span>
                <ul className="absolute hidden group-hover:block rounded-lg mt-3 -left-4 top-8 bg-slate-100 dark:bg-slate-500 dark:text-white shadow-lg space-y-2 w-48 transition-all duration-500 delay-1000 ease-in-out">
                  <li className="px-4 hover:bg-[#ffffff30] py-1">
                    <Link to="/sofa">Cài đặt</Link>
                  </li>
                  <li className="px-4 hover:bg-[#ffffff30] py-1">
                    <Link to="/ghe">Sản phẩm trước đó</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <Link
                  to={'/login'}
                  className=" dark:text-white hover:dark:text-dark hover:text-light text-black font-semibold mr-4 cursor-pointer"
                >
                  Đăng nhập
                </Link>
                <Link
                  to={'/login'}
                  className=" hover:text-white text-black dark:text-white font-semibold hover:bg-light hover:dark:bg-dark border-light border-[1px] dark:border-dark rounded-full px-4 py-1 cursor-pointer"
                >
                  Đăng ký
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;
