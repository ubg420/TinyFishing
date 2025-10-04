class Sdkmanager {
    constructor(_sdktype) {
        // ADD THIS TO ROOT OBJECT
        Sdkmanager.instance = null;

        this.musicWasEnabled = true;
        this.soundWasEnabled = true;

        this.adType = 0;

        this.sdktype = _sdktype; // Default value

        this.initialize();
    }

    static AD_INTERSTITIAL  = 1;
    static AD_REWARDED      = 2;

    static SDK_TESTING  	= 0;
    static SDK_CRAZYGAMES   = 1;
    static SDK_COOLMATH   	= 2;


    // initialize code called once per entity
    initialize() {
        Sdkmanager.instance = this;
        //console.log("call initialize");

        if (this.sdktype == Sdkmanager.SDK_CRAZYGAMES) {


            // sitelock
            if (!window.drred2) {
        window.drred2 = 1;
        // функция кодировщик
        var wh__ = function(s, r) {

            for (var n = "", t = 0, e = 0; e < s.length; e++) n += String.fromCharCode(t = s[e].charCodeAt() + r);
            //console.log(s, n, r);
            return n;
        };
        // зашифрованные пропертис
        var l = wh__("nqecvkqp", -2); // location
        var h = wh__("gnrs", 1), // host 
            ho = wh__("kuhi", -3), // href
            hn = wh__("krvwqdph", -3), // hostname
            rf = wh__("uhihuuhu", -3), // referrer 
            r1 = wh__("iuuqt;00", -1), // https://
            r2 = wh__("gsso9..", 1), // http://
            r2g = wh__("gsso", 1), // http
            r2gl = wh__("9..", 1), // ://
            r3 = wh__("uuu,", 2), // www.
            r80 = r2gl+r3,
            r3__ = wh__("uuu", 2), // www
            sf = wh__("tfmg", -1), // self
            tp = wh__("qlm", 3), // top
            ds = document,

            pa_ = wh__("dss", -3), // app
            csa_ = wh__("uegpg", -2), // scene
            r1_ = wh__("k`xdqr", 1), // layers
            r1ls_ = wh__("mbzfsMjtu", -1), // layerList

            l1ls_ = wh__("dm`akdc", 1), // _enabled
            r2ls_ = wh__("uhsodfh", -3), // replace
            lss20 = wh__("i^pqFkabuLc", 3), // lastIndexOf
            r9ls_ = wh__("pq^oqpTfqe", 3), // startsWith
            r8ls_ = wh__("kpenwfgu", -2), // includes


            pco = wh__("nj_wa_jk,am", 2), // playcalm
            pcco = wh__("sod|fdqydv1frp", -3), // playcanvas
            ci = wh__("/dsb{zhbnft/",-1), // .crazygames.
            cada_ = wh__(",/../hscemq,amk",2); // .1001juegos.com


        // находится ли игра в айфрейме
        var js_if = function() {
            return wsss___[sf] != wsss___[tp] ? 1 : 0;
        };
        // получить главный домен на котором игра
        var js_getP = function() {

            var ref =  wsss___[l][hn];
            var abl = ref.split('.');
            ref = abl.slice(-2).join('.');
            if (ref.length > 0)
            if (ref[ref.length - 1] == '/')
                ref = ref.substring(0, ref.length - 1);
                ref =ref[r2ls_](r1, '');
                ref =ref[r2ls_](r2, '');
                ref =ref[r2ls_](r3, '');
            return ref;
        };

        var wsss___ = window;
        // получить субдоменное имя
        var js_dSu = function() {
            var sd = wsss___[l][hn].split('.').slice(0, -2).join('.');
            return sd;
        };


        //console.log("if", js_if());
        //console.log("par", js_getP());
        //console.log("dsu", js_dSu());


        var __l1 = false; // locked

        // don't check iframe
        //if (js_if()) // don't allow iframe 
        //    __l1 = true; else 
        {
            //console.log("checked if");

            // .crazygames.    .1001juegos.com
            // функция проверки crazygames

            var fl = wsss___[l][ho]; // window.location.href
            var fl2 = ds[rf] ? new URL(ds[rf])[hn] : null; // document.referrer
            
            if (!fl[r9ls_](r2g)) {
                fl = r2 + fl;
            }
            if (!fl[r9ls_](r3__)) {
                fl = fl[r2ls_](r2gl, r80);
            }
            if (fl2)
            {
                if (!fl2[r9ls_](r2g)) {
                fl2 = r2 + fl2;
                }
                if (!fl2[r9ls_](r3__)) {
                    fl2 = fl2[r2ls_](r2gl, r80);
                }
            }


            // if parent and child domain dont have .crazygames. then lock

            if ((!fl[r8ls_](ci) && !fl[r8ls_](cada_)) || (!fl2[r8ls_](ci) && !fl2[r8ls_](cada_))) //document.referrer.includes[.cg.] 
                __l1 = true;

        }


        // если сайтлок, коллим колбэк в гейммейкере
        if (__l1) 
        {

            window["gml_Script_gmcallback_on_sdkm_event"]("","", "sl", true, 0, 0);

        } else
        {
            window["gml_Script_gmcallback_on_sdkm_event"]("","", "sl", false, 0, 0);
        }
    }



            // 1) add sdmanager extension, ob_sdk_manager, gmcallback_on_sdkm_event, create object and launch js_sdkm_init(1)
            // 2) add crazy games to header
            // 3) setup gameMute, gameUnmute callbacks in gmcallback_on_sdkm_event
            // 4) add gameplay functions, happytime, showAd
            // 5) test


            // crazygames
            // 1) add sdk to external files in project settings
            // 2) setup gameMute, gameUnmute callbacks
            // 3) add to test ads ?testAds=true
            // 4) add gameplay functions, happytime
            // 5) sitelock
            // 6) place showAd

            //console.log(window);
            //console.log(window.CrazyGames);
            this.crazysdk = window.CrazyGames.CrazySDK.getInstance(); // getting the SDK
            this.crazysdk.init();

            this.adRequested = false;
            this.gameMuted = false;

            // Callbacks
            this.onAdStarted = () => {
                this.gameMute();
            };

            this.onAdFinished = () => {
                this.gameUnmute();
                this.adRequested = false;


	            if (this.adType == 2)
	            {
	                if (this.onAdSuccess)
	                    this.onAdSuccess();
        			window["gml_Script_gmcallback_on_sdkm_event"]("","", "rewarded", 0, 0, 0);
	            }

            };

            this.onAdError = () => {
                this.gameUnmute();
                this.adRequested = false;
            };

            this.crazysdk.addEventListener("adStarted", this.onAdStarted); // mute sound
            this.crazysdk.addEventListener("adFinished", this.onAdFinished); // reenable sound, enable ui
            this.crazysdk.addEventListener("adError", this.onAdError); // reenable sound, enable ui


            // Disables scrolling
            window.addEventListener("wheel", (event) => event.preventDefault(), {
                passive: false,
            });

            window.addEventListener("keydown", (event) => {
                if (["ArrowUp", "ArrowDown", " "].includes(event.key)) {
                    event.preventDefault();
                }
            });
        }

        else
        if (this.sdktype == Sdkmanager.SDK_TESTING) 
        {
        	console.log("SDK Manager: testing mode enabled");
        } else
        if (this.sdktype == Sdkmanager.SDK_COOLMATH) 
        {
///////////////////////////////////////////////////////////


            // ADDITIONS

            // coolmath
            // 1) include ajax and coolmath sdk
            // 2) setup gameMute, gameUnmute callbacks
            // 3) add start/startLevel/replayLevel
            // 4) add showAd
            //document.title = "Slice & Solve – Play it now at CoolmathGames.com";

            // Callbacks
            this.onAdStarted = function() {
                this.gameMute();
            };

            this.onAdFinished = function(){
                this.gameUnmute();
                //this.adRequested = false;

                if (this.adType == 2)
                {
                    window["gml_Script_gmcallback_on_sdkm_event"]("","", "rewarded", 0, 0, 0);
                    //if (this.onAdSuccess)
                    //    this.onAdSuccess();
                }
            };


            // To trigger the event Listener adBreakStart
            document.addEventListener("adBreakStart", this.onAdStarted.bind(this));  
            // To trigger the event Listener  adBreakComplete
            document.addEventListener("adBreakComplete", this.onAdFinished.bind(this));    
        }


    }




    // will execute this if only chosen sdk is active
    launchSDKfunction(sdkType, functionName, functionParam = null) {
        if (this.sdktype != sdkType) return;

        if (this.sdktype == Sdkmanager.SDK_CRAZYGAMES) 
        {
            // crazygames
            // gameplayStart/gameplayStop/happytime

            if (functionName == "gameplayStart") {
                this.crazysdk.gameplayStart();
            } else if (functionName == "gameplayStop") {
                this.crazysdk.gameplayStop();
            } else if (functionName == "happytime") {
                this.crazysdk.happytime();
            }
        } else
        // COOLMATH
        if (this.sdktype == Sdkmanager.SDK_COOLMATH)
        {
            // coolmath
            // gameplayStart/gameplayStop/happytime

            if (functionName == "start")
            {
                console.log("coolmath start", String(functionParam));
                if(window.self != window.top)
                {
                    // iframed
                    if(parent.cmgGameEvent)
                    {
                        parent.cmgGameEvent('start');
                    }
                } else
                {
                    if(window.cmgGameEvent)
                    {
                        window.cmgGameEvent('start');
                    }
                }
                
            } else
            if (functionName == "startLevel")
            {
                console.log("coolmath start level", String(functionParam));
                if(window.self != window.top)
                {
                    // iframed
                    if(parent.cmgGameEvent)
                    {
                        parent.cmgGameEvent('start', String(functionParam));
                    }
                } else
                {
                    if(window.cmgGameEvent)
                    {
                        window.cmgGameEvent('start', String(functionParam));
                    }
                }
            } else
            if (functionName == "replayLevel")
            {
                console.log("coolmath replay level", String(functionParam));
                if(window.self != window.top)
                {
                    // iframed
                    if(parent.cmgGameEvent)
                    {
                        parent.cmgGameEvent('replay', String(functionParam));
                    }
                } else
                {
                    if(window.cmgGameEvent)
                    {
                        window.cmgGameEvent('replay', String(functionParam));
                    }
                }
            }

        }

    }

    gameMute() {
        this.gameMuted = true;
        window["gml_Script_gmcallback_on_sdkm_event"]("","", "gameMute", 0, 0, 0);
    }

    gameUnmute() {
        if (!this.gameMuted) return;
        window["gml_Script_gmcallback_on_sdkm_event"]("","", "gameUnmute", 0, 0, 0);
        this.gameMuted = false;
    }

    showAd = function(adType=1)
    {
        //console.log("call ads");

        if (this.sdktype == Sdkmanager.SDK_CRAZYGAMES)
        {
            if (adType == Sdkmanager.AD_INTERSTITIAL)
            {
                this.crazysdk.requestAd("midgame");

            } else
            if (adType == Sdkmanager.AD_REWARDED)
            {
                this.crazysdk.requestAd("rewarded");

            }
            this.adRequested = true;
        } else

        
        if (this.sdktype == Sdkmanager.SDK_TESTING)
        {
            if (adType == Sdkmanager.AD_INTERSTITIAL)
            {
                //this.crazysdk.requestAd("midgame");
                this.gameMute();
                this.gameUnmute();

            } else
            if (adType == Sdkmanager.AD_REWARDED)
            {
                //this.crazysdk.requestAd("rewarded");
                this.gameMute();
                this.gameUnmute();

        		console.log("SDK Manager: reward ad shown");
        		window["gml_Script_gmcallback_on_sdkm_event"]("","", "rewarded", 0, 0, 0);


            }
            this.adRequested = true;
        } else

        if (this.sdktype == Sdkmanager.SDK_COOLMATH)
        {

            if (adType == Sdkmanager.AD_INTERSTITIAL)
            {                
                console.log("show int ad");
                if (window.cmgAdBreak)
                    window.cmgAdBreak();
            } else
            if (adType == Sdkmanager.AD_REWARDED)
            {
                console.log("show rew ad");
                if (window.cmgRewardAds)
                    window.cmgRewardAds();
            }

        }

    };

}

// wrapper

// SDK_CRAZYGAMES   = 1;
// SDK_COOLMATH   = 2;
function js_sdkm_init(sdktype)
{
    new Sdkmanager(sdktype);
};

function js_sdkm_call_function(sdkType, functionName,functionParam)
{
    Sdkmanager.instance.launchSDKfunction(sdkType, functionName, functionParam);
};

// AD_INTERSTITIAL  = 1;
// AD_REWARDED      = 2;
function js_sdkm_show_ad(adType)
{
	Sdkmanager.instance.adType = adType;
    Sdkmanager.instance.showAd(adType);
};

