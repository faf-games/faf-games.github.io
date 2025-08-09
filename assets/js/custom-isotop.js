// === Global Chatango Loader (runs on every page) ===
(() => {
  if (window.__fafChatInit) return;          // guard against double-run
  window.__fafChatInit = true;

  const CHATANGO_HANDLE = "faf-games";       // <-- your chat handle
  const CHATANGO_SCRIPT_ID = "cid0020000415739779520";

  // Wait for DOM
  function ready(fn){
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(() => {
    // 1) Inject CSS
    const style = document.createElement("style");
    style.textContent = `
      #chat-toggle{
        position: fixed; right: 20px; bottom: 20px;
        z-index: 999999; padding: 10px 14px; border: 0; border-radius: 999px;
        background:#ff7a21; color:#000; font-weight:600; cursor:pointer;
        box-shadow: 0 8px 24px rgba(0,0,0,.25);
      }
      #chat-wrap{
        position: fixed; right: 20px; bottom: 76px;
        z-index: 999998;
      }
      #chat-wrap[hidden]{ display:none !important; }
      .chat-box{
        width: clamp(300px, 32vw, 420px);
        height: clamp(380px, 50vh, 560px);
        background:#000; border-radius:16px; overflow:hidden;
        box-shadow: 0 12px 32px rgba(0,0,0,.35);
      }
      @media (max-width: 600px){
        .chat-box{ width: min(92vw, 420px); height: min(70vh, 560px); }
      }
    `;
    document.head.appendChild(style);

    // 2) Inject HTML (button + wrapper)
    if (!document.getElementById("chat-toggle")) {
      const btn = document.createElement("button");
      btn.id = "chat-toggle";
      btn.textContent = "Open Chat";
      btn.setAttribute("aria-expanded", "false");
      document.body.appendChild(btn);
    }
    if (!document.getElementById("chat-wrap")) {
      const wrap = document.createElement("div");
      wrap.id = "chat-wrap";
      wrap.setAttribute("hidden", "");
      wrap.innerHTML = `<div class="chat-box"></div>`;
      document.body.appendChild(wrap);
    }

    const wrap = document.getElementById("chat-wrap");
    const btn  = document.getElementById("chat-toggle");
    const box  = wrap.querySelector(".chat-box");

    // 3) Inject Chatango script dynamically (only once)
    if (!document.getElementById(CHATANGO_SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = CHATANGO_SCRIPT_ID;
      s.setAttribute("data-cfasync", "false");
      s.async = true;
      s.src = "https://st.chatango.com/js/gz/emb.js";
      s.setAttribute("style", "width:100%; height:100%;");

      // Chatango expects JSON inside the script tag
      const config = {
        handle: CHATANGO_HANDLE,
        arch: "js",
        styles: {
          a:"ff7a21", b:100, c:"000000", d:"000000",
          k:"ff7a21", l:"ff7a21", m:"ff7a21",
          p:"10", q:"ff7a21", r:100, fwtickm:1
        }
      };
      s.text = JSON.stringify(config);
      box.appendChild(s);
    }

    // 4) Toggle logic
    function toggleChat(open){
      if (open){
        wrap.removeAttribute("hidden");
        btn.textContent = "Close Chat";
        btn.setAttribute("aria-expanded","true");
      } else {
        wrap.setAttribute("hidden", "");
        btn.textContent = "Open Chat";
        btn.setAttribute("aria-expanded","false");
      }
    }

    btn.addEventListener("click", () => {
      toggleChat(wrap.hasAttribute("hidden"));
    });

    // 5) Auto-open on load
    toggleChat(true);

    // Optional: remember user's choice
    // Uncomment to remember last state:
    /*
    const KEY = "fafChatOpen";
    const saved = localStorage.getItem(KEY);
    if (saved === null) toggleChat(true); else toggleChat(saved === "1");
    btn.addEventListener("click", () => {
      localStorage.setItem(KEY, wrap.hasAttribute("hidden") ? "0" : "1");
    });
    */
  });
})();








document.addEventListener("DOMContentLoaded", function () {
    // Create Fullscreen Button
    const button = document.createElement("button");
    button.id = "fullscreenButton";
    button.className = "fullscreen-btn";
    button.style.display = "none"; // Initially hidden
    button.innerHTML = `<i class="fas fa-expand"></i> Fullscreen`;
    button.onclick = function () {
        const game = document.getElementById("game-area");
        if (game) {
            if (game.requestFullscreen) {
                game.requestFullscreen();
            } else if (game.mozRequestFullScreen) {
                game.mozRequestFullScreen();
            } else if (game.webkitRequestFullscreen) {
                game.webkitRequestFullscreen();
            } else if (game.msRequestFullscreen) {
                game.msRequestFullscreen();
            }
        }
    };

    // Append button below game container
    const container = document.getElementById("loadgame");
    if (container) {
        container.parentNode.insertBefore(button, container.nextSibling);
    }

    // Observer or delay to show button after iframe loads
    const observer = new MutationObserver(function () {
        const iframe = document.getElementById("game-area");
        if (iframe) {
            document.getElementById("fullscreenButton").style.display = "inline-flex";
            observer.disconnect(); // Stop observing
        }
    });

    observer.observe(document.getElementById("loadgame"), { childList: true, subtree: true });
});



// Create and insert the async Funding Choices script
const fundingScript = document.createElement('script');
fundingScript.async = true;
fundingScript.src = "https://fundingchoicesmessages.google.com/i/pub-9427048641572074?ers=1";
fundingScript.setAttribute("nonce", "7M3TLdpr6ws84KtZqprB7Q");
document.head.appendChild(fundingScript);

// Create and insert the inline script
const inlineScript = document.createElement('script');
inlineScript.setAttribute("nonce", "7M3TLdpr6ws84KtZqprB7Q");
inlineScript.textContent = `
(function() {
  function signalGooglefcPresent() {
    if (!window.frames['googlefcPresent']) {
      if (document.body) {
        const iframe = document.createElement('iframe');
        iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
        iframe.style.display = 'none';
        iframe.name = 'googlefcPresent';
        document.body.appendChild(iframe);
      } else {
        setTimeout(signalGooglefcPresent, 0);
      }
    }
  }
  signalGooglefcPresent();
})();
`;
document.head.appendChild(inlineScript);



(function() {
  // Create <link> element
  var link = document.createElement("link");
  link.rel = "dns-prefetch";
  link.href = "https://universal.wgplayer.com";

  // Create <script> element
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.fetchPriority = "high";
  script.src = "https://universal.wgplayer.com/tag/?lh=" + window.location.hostname +
               "&wp=" + window.location.pathname +
               "&ws=" + window.location.search;

  // Append to <head>
  var head = document.getElementsByTagName("head")[0];
  if (head) {
    head.appendChild(link);
    head.appendChild(script);
  }
})();




(function() {
  var script = document.createElement('script');
  script.src = "https://analytics.ahrefs.com/analytics.js";
  script.setAttribute("data-key", "YL5wznEh3STXlmF8Jc5rFA");
  script.async = true;
  document.head.appendChild(script);
})();

$(window).on('load', function () {
    // Initialize features
    initializePwaFeatures();
    initializeGoogleAnalytics();
    initializeProjectFilter();
});

// Initialize PWA Features
function initializePwaFeatures() {
    addManifestLink();
    registerServiceWorker();
    setupPwaInstallation();
}


// Set up Google Analytics
function initializeGoogleAnalytics() {
    const googleAnalyticsScript = document.createElement('script');
    googleAnalyticsScript.async = true;
    googleAnalyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=G-6BPGNZNTLZ";
    document.head.appendChild(googleAnalyticsScript);

    googleAnalyticsScript.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-6BPGNZNTLZ');
        console.log('Google Analytics initialized.');
    };
}


// Track events in Google Analytics
function trackEvent(action, category, label, value) {
    if (typeof gtag === 'function') {
        gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
        console.log(`Event tracked: ${action}, ${category}, ${label}, ${value}`);
    } else {
        console.warn('gtag not initialized. Event not tracked:', action);
    }
}

// Initialize project filter
function initializeProjectFilter() {
    const $container = $('.projectContainer');
    $('.projectFilter a').on('click', function () {
        $('.projectFilter .current').removeClass('current');
        $(this).addClass('current');
        const selector = $(this).attr('data-filter');
        requestAnimationFrame(() => {
            if ($container.length) {
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
            }
        });
        console.log('Project filter applied:', selector);
        return false;
    });
}
