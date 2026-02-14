import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ImageGalleryPage from './pages/ImageGalleryPage';
import VideoGalleryPage from './pages/VideoGalleryPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

/**
 * ルーティング設定
 * 全ページをLayoutコンポーネントで囲む
 */
function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery/images" element={<ImageGalleryPage />} />
          <Route path="/gallery/videos" element={<VideoGalleryPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
