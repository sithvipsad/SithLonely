(function() {
    // ===== OBFUSCATION UTILITIES =====
    const _ = function(i) {
        const _0x4a2b = [
            "createElement", "appendChild", "head", "body", "style",
            "textContent", "innerHTML", "getElementById", "addEventListener",
            "click", "value", "display", "none", "flex", "block", "src",
            "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js",
            "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js",
            "https://tikwm.com/api/", "hd=1", "application/x-www-form-urlencoded",
            "Mozilla/5.0", "Video data not found.", "#[\\w]+", "g",
            "No Video Found From This Link", "hashtags copied successfully!",
            ".mp4", ".mp3", "load", "keypress", "Enter", "particles-js",
            "https://cdn.rawgit.com/VincentGarreau/particles.js/master/demo/js/config.json",
            "loading-overlay", "message", "video-section", "profile-info", "video",
            "hashtags", "nickname", "username", "title", "copy-hashtags",
            "download-video", "download-audio", "url", "search-btn", "inline-block",
            "blur-layer", "container", "shape input-section", "shape profile-info",
            "shape video-container", "opposites", "tl", "tr", "br", "bl",
            "Team Tool-X Tik Tok Downloader", "Paste Your Link", "Search",
            "Copy Hashtags", "Download Video", "Download Audio", "@", "keypress",
            "Enter", "click", "load", "https://files.catbox.moe/aoqxn6.jpg"
        ];
        return _0x4a2b[i];
    };

    // ===== CSS INJECTION (ពី HTML ដើម) =====
    (function() {
        const s = document[_(0)](_(4));
        s[_(5)] = `*{margin:0;padding:0;box-sizing:border-box;font-family:Arial,sans-serif}body{color:#fff;background:url('${_(69)}') no-repeat center center fixed;background-size:cover;display:flex;flex-direction:column;align-items:center;overflow:auto;min-height:100vh}#blur-layer{position:absolute;top:0;left:0;width:100%;height:100%;background:inherit;filter:blur(10px);z-index:0}#particles-js{position:absolute;width:100%;height:100%;z-index:1}.container{position:relative;z-index:2;padding:20px;border-radius:12px;max-width:400px;text-align:center}.shape{background:rgba(50,50,50,0.8);border-radius:12px;padding:20px;margin:10px;box-shadow:0 4px 20px rgba(0,0,0,0.5)}.input-section{margin-bottom:15px}h1{font-size:2em;color:#ff6f61}input[type="text"]{width:100%;padding:12px;border-radius:8px;border:1px solid #ddd;font-size:1em;margin-bottom:10px;text-align:center}button{padding:12px 20px;font-size:1em;background-color:#ff6f61;color:#fff;border-radius:8px;cursor:pointer;margin-top:5px;border:none}.profile-info{font-size:1.2em;color:#ddd;font-family:'Poppins',sans-serif;font-weight:bold}.video-container{display:flex;flex-direction:column;align-items:center;margin-top:10px}video{width:100%;border-radius:8px}.hashtags{color:#ff6f61;font-size:1.2em;margin:10px 0}.button-group{display:flex;gap:10px;margin-top:10px}.loading-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);backdrop-filter:blur(5px);z-index:3;align-items:center;justify-content:center}.opposites{position:relative;width:60px;height:60px;animation:opposites 2.5s ease-out 0s infinite}.tl,.tr,.br,.bl{width:30px;height:30px;position:absolute}.tl,.tr{top:0}.tr,.br{left:30px}.tl,.br{animation:tlbr 2.5s ease-out 0s infinite}.br,.bl{top:30px}.tl,.bl{left:0}.tr,.bl{animation:trbl 2.5s ease-out 0s infinite}.tl{background:red;transform-origin:bottom right}.tr{background:green;transform-origin:bottom left}.br{background:dodgerblue;transform-origin:top left}.bl{background:gold;transform-origin:top right}@keyframes tlbr{0%,60%,100%{transform:rotate(0)}20%,40%{transform:rotate(90deg)}}@keyframes trbl{0%,20%,80%,100%{transform:rotate(0)}40%,60%{transform:rotate(90deg)}}@keyframes opposites{80%{transform:rotate(0)}100%{transform:rotate(360deg)}}`;
        document[_(2)][_(1)](s);
    })();

    // ===== BUILD HTML STRUCTURE (ដូចក្នុង HTML ដើម) =====
    (function() {
        const body = document[_(3)];
        
        // Blur Layer
        const blur = document[_(0)]("div");
        blur.id = "blur-layer";
        body[_(1)](blur);
        
        // Particles Container
        const particles = document[_(0)]("div");
        particles.id = "particles-js";
        body[_(1)](particles);
        
        // Main Container
        const container = document[_(0)]("div");
        container.className = "container";
        
        // ដាក់ HTML ដើមទាំងអស់ក្នុង innerHTML
        container[_(6)] = `
            <div class="shape input-section">
                <h1>Team Tool-X Tik Tok Downloader</h1>
                <input type="text" id="url" placeholder="Paste Your Link">
                <button id="search-btn">Search</button>
            </div>
            <div class="shape profile-info" id="profile-info" style="display: none;">
                <p id="nickname"></p>
                <p id="username"></p>
            </div>
            <div class="shape video-container" id="video-section" style="display: none;">
                <video id="video" controls=""></video>
                <p id="title" style="margin-top: 10px;"></p>
                <p class="hashtags" id="hashtags"></p>
                <div class="button-group">
                    <button id="copy-hashtags" style="display: none;">Copy Hashtags</button>
                    <button id="download-video" style="display: none;">Download Video</button>
                    <button id="download-audio" style="display: none;">Download Audio</button>
                </div>
            </div>
            <p id="message"></p>
        `;
        body[_(1)](container);
        
        // Loading Overlay
        const overlay = document[_(0)]("div");
        overlay.className = "loading-overlay";
        overlay.id = "loading-overlay";
        overlay[_(6)] = `
            <div class="opposites">
                <div class="tl"></div>
                <div class="tr"></div>
                <div class="br"></div>
                <div class="bl"></div>
            </div>
        `;
        body[_(1)](overlay);
    })();

    // ===== LOAD EXTERNAL SCRIPTS =====
    const loadScript = (url) => new Promise((resolve, reject) => {
        const script = document[_(0)]("script");
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document[_(2)][_(1)](script);
    });

    // ===== INITIALIZE APPLICATION =====
    Promise.all([
        loadScript(_(16)),
        loadScript(_(17))
    ]).then(() => {
        
        // Particles.js
        if (typeof particlesJS !== 'undefined') {
            particlesJS.load('particles-js', _(33));
        }

        // ===== API FUNCTION =====
        const fetchTikTok = async (query) => {
            const params = new URLSearchParams();
            params.set('url', query);
            params.set('hd', '1');
            
            const response = await axios.post(_(18), params, {
                headers: {
                    'Content-Type': _(20),
                    'User-Agent': _(21)
                }
            });
            
            const data = response.data.data;
            if (!data) throw new Error(_(22));
            
            return {
                title: data.title,
                hashtags: data.title.match(new RegExp(_(23), _(24))) || [],
                no_watermark: data.play,
                music: data.music,
                nickname: data.author.nickname,
                username: data.author.unique_id
            };
        };

        // ===== UTILITY FUNCTIONS =====
        const copyText = (text) => {
            navigator.clipboard.writeText(text).then(() => alert(_(26)));
        };

        const download = (url, filename) => {
            const a = document[_(0)]('a');
            a.href = url;
            a.download = filename;
            document[_(3)][_(1)](a);
            a.click();
            document[_(3)].removeChild(a);
        };

        // ===== MAIN HANDLER =====
        const handleSearch = async () => {
            const urlInput = document[_(7)]('url');
            const overlay = document[_(7)]('loading-overlay');
            const msgEl = document[_(7)]('message');
            const videoSection = document[_(7)]('video-section');
            const videoEl = document[_(7)]('video');
            const hashtagsEl = document[_(7)]('hashtags');
            const nicknameEl = document[_(7)]('nickname');
            const usernameEl = document[_(7)]('username');
            const profileInfo = document[_(7)]('profile-info');
            const titleEl = document[_(7)]('title');
            const copyBtn = document[_(7)]('copy-hashtags');
            const downloadVideoBtn = document[_(7)]('download-video');
            const downloadAudioBtn = document[_(7)]('download-audio');
            
            msgEl[_(5)] = "";
            videoSection.style[_(11)] = _(12);
            profileInfo.style[_(11)] = _(12);
            overlay.style[_(11)] = _(13);
            
            try {
                const v = await fetchTikTok(urlInput[_(10)]);
                
                nicknameEl[_(5)] = v.nickname;
                usernameEl[_(5)] = _(64) + v.username;
                titleEl[_(5)] = v.title;
                videoEl[_(15)] = v.no_watermark;
                hashtagsEl[_(5)] = v.hashtags.join(' ');
                
                profileInfo.style[_(11)] = _(14);
                videoSection.style[_(11)] = _(14);
                copyBtn.style[_(11)] = _(49);
                downloadVideoBtn.style[_(11)] = _(49);
                downloadAudioBtn.style[_(11)] = _(49);
                
                copyBtn.onclick = () => copyText(v.hashtags.join(' '));
                downloadVideoBtn.onclick = () => download(v.no_watermark, "tiktok_video" + _(27));
                downloadAudioBtn.onclick = () => download(v.music, "tiktok_audio" + _(28));
                
            } catch (e) {
                msgEl[_(5)] = _(25);
                console.error(e);
            } finally {
                overlay.style[_(11)] = _(12);
            }
        };

        // ===== EVENT LISTENERS =====
        const searchBtn = document[_(7)]('search-btn');
        const urlInput = document[_(7)]('url');
        
        searchBtn[_(8)](_(9), handleSearch);
        urlInput[_(8)](_(66), (e) => {
            if (e.key === _(67)) handleSearch();
        });
        
        urlInput.focus();

    }).catch(e => console.error('Load failed:', e));

})();