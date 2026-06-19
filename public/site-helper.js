(function() {
  'use strict';

  const CONFIG = Object.freeze({
    siteUrl: 'https://ssl-circle28.com',
    keyword: '28圈',
    hintClass: 'site-hint-card',
    badgeClass: 'keyword-badge',
    guideClass: 'access-guide'
  });

  function createHintCard(text) {
    const card = document.createElement('div');
    card.className = CONFIG.hintClass;
    const msg = document.createTextNode(text);
    card.appendChild(msg);
    return card;
  }

  function createBadge(text, color) {
    const badge = document.createElement('span');
    badge.className = CONFIG.badgeClass;
    badge.textContent = text;
    if (color) {
      badge.style.backgroundColor = color;
    }
    return badge;
  }

  function createGuide(content) {
    const guide = document.createElement('p');
    guide.className = CONFIG.guideClass;
    guide.textContent = content;
    return guide;
  }

  function renderCards(target) {
    const cards = [
      '🌟 欢迎访问 28圈 专属页面',
      '🔗 官网：' + CONFIG.siteUrl,
      '💡 提示：使用关键词 “' + CONFIG.keyword + '” 了解更多'
    ];
    cards.forEach(function(txt) {
      target.appendChild(createHintCard(txt));
    });
  }

  function renderBadges(target) {
    var tags = [
      { label: CONFIG.keyword, bg: '#ff9900' },
      { label: 'SSL安全', bg: '#2ecc71' },
      { label: '新手指南', bg: '#3498db' },
      { label: '常见问题', bg: '#e74c3c' }
    ];
    for (var i = 0; i < tags.length; i++) {
      target.appendChild(createBadge(tags[i].label, tags[i].bg));
    }
  }

  function renderGuides(target) {
    const guides = [
      '访问 ' + CONFIG.siteUrl + ' 即可进入 28圈 主站。',
      '在搜索栏输入 “' + CONFIG.keyword + '” 可直达专题页面。',
      '如遇访问问题，请检查网络连接或联系客服。'
    ];
    guides.forEach(function(desc) {
      target.appendChild(createGuide(desc));
    });
  }

  function init() {
    const container = document.getElementById('site-helper-root');
    if (!container) {
      console.warn('未找到容器元素 #site-helper-root，跳过渲染');
      return;
    }

    var wrapper = document.createElement('div');
    wrapper.style.cssText = 'padding: 12px; background: #f5f7fa; border-radius: 8px; max-width: 600px; margin: 20px auto;';

    var cardSection = document.createElement('div');
    cardSection.style.marginBottom = '16px';
    renderCards(cardSection);
    wrapper.appendChild(cardSection);

    var badgeSection = document.createElement('div');
    badgeSection.style.marginBottom = '16px';
    badgeSection.style.display = 'flex';
    badgeSection.style.gap = '8px';
    badgeSection.style.flexWrap = 'wrap';
    renderBadges(badgeSection);
    wrapper.appendChild(badgeSection);

    var guideSection = document.createElement('div');
    guideSection.style.borderTop = '1px solid #ddd';
    guideSection.style.paddingTop = '12px';
    renderGuides(guideSection);
    wrapper.appendChild(guideSection);

    container.appendChild(wrapper);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();