import React, { useState, useEffect } from 'react';
import './styles/App.css';
import WeChatDetector from './utils/wechatDetector';

const App: React.FC = () => {
  const [isWeChat, setIsWeChat] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    // 检测是否在微信环境中
    const wechatEnv = WeChatDetector.isWeChat();
    setIsWeChat(wechatEnv);
    
    if (wechatEnv) {
      // 在微信中，显示引导提示
      setShowGuide(true);
    }
  }, []);

  const handleCloseGuide = () => {
    setShowGuide(false);
  };

  const handleOpenInBrowser = () => {
    // 尝试使用微信的JS-SDK打开外部浏览器
    if ((window as any).wx && (window as any).wx.miniProgram) {
      // 如果在微信小程序中
      (window as any).wx.miniProgram.navigateTo({
        url: `/pages/webview/webview?url=${encodeURIComponent(window.location.href)}`
      });
    } else {
      // 在微信内置浏览器中，显示引导
      WeChatDetector.guideToExternalBrowser();
    }
  };

  return (
    <div className="app">
      <div className="container">
        {/* 微信环境引导提示 */}
        {showGuide && (
          <div className="wechat-guide-overlay">
            <div className="wechat-guide-modal">
              <div className="guide-icon">🌐</div>
              <h3 className="guide-title">请在浏览器中打开</h3>
              <p className="guide-description">
                为了更好的体验，请点击右上角菜单<br/>
                选择"在浏览器中打开"
              </p>
              <div className="guide-buttons">
                <button 
                  className="guide-button primary" 
                  onClick={handleOpenInBrowser}
                >
                  立即打开
                </button>
                <button 
                  className="guide-button secondary" 
                  onClick={handleCloseGuide}
                >
                  我知道了
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="main-content">
          <div className="poster-section">
            <div className="poster-icon">
              📱
            </div>
            <h2 className="register-title">请通过分享海报进行注册</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;