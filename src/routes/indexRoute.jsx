import Category from '../pages/Categories';
import CustomHouse from '../pages/CustomSomeChair/CustomHouse';
import HomePage from '../pages/HomePage/index';
export const routes = [
  {
    path: '/',
    element: HomePage,
    isShowHeader: true
  },
  {
    path: '/custom-house',
    element: CustomHouse,
    isShowHeader: false
  },
  {
    path: '/danh-muc',
    element: Category,
    isShowHeader: true
  }
];
