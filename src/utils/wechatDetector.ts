/**
 * 微信环境检测工具
 */
export class WeChatDetector {
  /**
   * 检测是否在微信内置浏览器中
   * @returns 是否在微信中
   */
  static isWeChat(): boolean {
    const ua = navigator.userAgent.toLowerCase();
    return ua.includes('micromessenger');
  }

  /**
   * 检测是否在微信小程序中
   * @returns 是否在微信小程序中
   */
  static isWeChatMiniProgram(): boolean {
    const ua = navigator.userAgent.toLowerCase();
    return ua.includes('miniprogram');
  }

  /**
   * 获取当前环境信息
   * @returns 环境信息
   */
  static getEnvironment(): {
    isWeChat: boolean;
    isMiniProgram: boolean;
    isMobile: boolean;
    userAgent: string;
  } {
    const ua = navigator.userAgent.toLowerCase();
    return {
      isWeChat: ua.includes('micromessenger'),
      isMiniProgram: ua.includes('miniprogram'),
      isMobile: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua),
      userAgent: navigator.userAgent
    };
  }

  /**
   * 引导用户使用外部浏览器打开
   */
  static guideToExternalBrowser(): void {
    // 显示引导提示
    const guideElement = document.createElement('div');
    guideElement.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      ">
        <div style="
          background: white;
          border-radius: 12px;
          padding: 24px;
          margin: 20px;
          max-width: 320px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        ">
          <div style="font-size: 48px; margin-bottom: 16px;">🌐</div>
          <h3 style="margin: 0 0 12px 0; color: #333; font-size: 18px;">请在浏览器中打开</h3>
          <p style="margin: 0 0 20px 0; color: #666; font-size: 14px; line-height: 1.5;">
            为了更好的体验，请点击右上角菜单<br/>
            选择"在浏览器中打开"
          </p>
          <button onclick="this.parentElement.parentElement.remove()" style="
            background: #07c160;
            color: white;
            border: none;
            border-radius: 6px;
            padding: 12px 24px;
            font-size: 16px;
            cursor: pointer;
            width: 100%;
          ">我知道了</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(guideElement);
  }
}

export default WeChatDetector;
