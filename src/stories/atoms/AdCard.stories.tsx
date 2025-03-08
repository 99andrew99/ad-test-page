import AdCard from "../../components/atoms/AdCard";
import { Meta, StoryObj } from "@storybook/react";
import { AdResult } from "../../types/Ad";

const meta: Meta<typeof AdCard> = {
    title: "Atoms/AdCard",
    component: AdCard,
    tags: ["autodocs"],
    decorators: (Story) => (
        <div style={{ height: "500px" }}>
            <Story />
        </div>
    ),
};

export default meta;

type Story = StoryObj<typeof AdCard>;

const nativeAdResult: AdResult = {
    unit: "PUBLIC_TEST_UNIT_ID_NATIVE",
    format: "nativeAd",
    w: 360,
    h: 360,
    creativeId: "test_creative",
    advertiser: "Adrop",
    icon: "https://storage.adrop.io/public/ccvoca_512.png",
    cover: "https://storage.adrop.io/public/1200x630.png",
    advertiserURL: "https://openrhapsody.com",
    headline: "headline text",
    body: "body text",
    extra: {
        sampleExtraId: "sampleExtraValue",
    },
    profile: {
        displayLogo:
            "https://storage.adrop.io/public/test_templates/Native_360x360.png",
        displayName: "dev",
        link: "https://adrop.io",
    },
    callToAction: "Apply Now",
    accountTag: "",
    creativeTag: "",
    destinationURL:
        "https://api-v2.adrop.io/invoke?action=AD_CLICK&txid=01HDZFM5ZWN84Z3Q6ZZWT2V2BD:01HD5G6FV2MV6ERF3P1DMARTIN:01JNV4H6HW9E2K6V30CPYWS1ZD&auid=01HD5Q3Z8GXNNWF464CNWCMBS4:01HFBMMGFFWQNN2NZVJB5NFPVZ:23369e1fd5c2a0a377b8f551392065b6a373c70e1a22c568353d3a1eb1c56e62&unit=PUBLIC_TEST_UNIT_ID_NATIVE&redirect=https%3A%2F%2Fadrop.io",
    ad: `<div style='height:100%;'><html lang='ko'>
<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'/>
<meta charset='UTF-8'/>
<style>
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-display: block;
    src: url('https://storage.adrop.io/public/fonts/Pretendard-SemiBold.woff2');
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-display: block;
    src: url('https://storage.adrop.io/public/fonts/Pretendard-Medium.woff2');
  }
</style>
<style>
  @keyframes colorTransition {
    0% { color: #B0B8C6; background-color: #F5F7FA; }
    100% { color: #FFFFFF; background-color: #1A80FF; }
  }
</style>
<body style='padding:0;margin:0'>
  <div id='class-native-3dd3236aba68551bcef9' class='class-native-3dd3236aba68551bcef9' 
       style='flex:auto;flex-direction:column;max-width:720px;position:relative;overflow:hidden'>
    <div class='class-3dd3236aba68551bcef9' style='width:100%;aspect-ratio:1;line-height:0'>
      <div>
        <img id="3dd3236aba68551bcef9" 
             onclick='fetch("https://api-v2.adrop.io/invoke?action=AD_CLICK&txid=01HDZFM5ZWN84Z3Q6ZZWT2V2BD:01HD5G6FV2MV6ERF3P1DMARTIN:01JNV4H6HW9E2K6V30CPYWS1ZD&auid=01HD5Q3Z8GXNNWF464CNWCMBS4:01HFBMMGFFWQNN2NZVJB5NFPVZ:23369e1fd5c2a0a377b8f551392065b6a373c70e1a22c568353d3a1eb1c56e62&unit=PUBLIC_TEST_UNIT_ID_NATIVE")'
             src='https://storage.adrop.io/public/test_templates/Native_360x360.png' 
             alt='네이티브 360x360' 
             style='width: 100%; object-fit: cover; border: 0; aspect-ratio: 1'
             onload='(function() {
               let invoked = !1;
               const observer = new IntersectionObserver(e => {
                 e.forEach(e => {
                   e.isIntersecting && !invoked && (invoked = !0, fetch("https://api-v2.adrop.io/invoke?action=AD_IMPR&txid=01HDZFM5ZWN84Z3Q6ZZWT2V2BD:01HD5G6FV2MV6ERF3P1DMARTIN:01JNV4H6HW9E2K6V30CPYWS1ZD&auid=01HD5Q3Z8GXNNWF464CNWCMBS4:01HFBMMGFFWQNN2NZVJB5NFPVZ:23369e1fd5c2a0a377b8f551392065b6a373c70e1a22c568353d3a1eb1c56e62&unit=PUBLIC_TEST_UNIT_ID_NATIVE"))
                 })
               }, { root: null, rootMargin: "0px", threshold: .5 });
               let element = document.getElementById("3dd3236aba68551bcef9");
               element && observer.observe(element);
               function adjustFontSize() {
                 const element = document.getElementById("class-native-3dd3236aba68551bcef9");
                 const width = element.offsetWidth;
                 const scale = width / 360;
                 const cta = document.getElementById("native-cta");
                 const svg = document.getElementById("native-svg");
                 const watermark = document.getElementById("native-watermark");
                 cta.style.fontSize = 14 * scale + "px";
                 cta.style.padding = 10 * scale + "px " + 20 * scale + "px";
                 svg.style.width = 24 * scale + "px";
                 svg.style.height = 24 * scale + "px";
                 watermark.style.top = 16 * scale + "px";
                 watermark.style.right = 16 * scale + "px";
                 watermark.style.width = 28 * scale + "px";
                 watermark.style.height = 16 * scale + "px";
                 watermark.style.fontSize = 10 * scale + "px";
               }
               adjustFontSize();
               window.onresize = adjustFontSize;
             }).call(this)'/>
      </div>
    </div>
    <a id='native-cta' target='_blank' rel='noopener noreferrer' href='https://adrop.io' 
       style='background-color:#F5F7FA;color:#B0B8C6;display:flex;align-items:center;justify-content:space-between;animation:colorTransition 500ms forwards 600ms;text-decoration:none'>
      <div style='font-family:Pretendard;font-weight:600'>더 알아보기</div>
      <svg id='native-svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' style='width:24px;height:24px'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5'></path>
      </svg>
    </a>
    <div id='native-watermark' style='position:absolute;border-radius:100px;background-color:#1A1B1E4D;font-weight:500;color:white;display:flex;align-items:center;justify-content:center;font-family:Pretendard'>AD</div>
  </div>
</body>
</html></div>`,
};

const bannerAdResult: AdResult = {
    unit: "PUBLIC_TEST_UNIT_ID_375_80",
    format: "banner",
    w: 375,
    h: 80,
    creativeId: "test_creative",
    ad: `<div style='height:100%;'>
    <a class="class-341f77964480a5c18221" rel="noopener noreferrer" target="_blank" 
       href="https://adrop.io" 
       style="width:100%;height:100%;display:flex;justify-content:center;align-items:center">
      <img id="341f77964480a5c18221" 
           onclick='fetch("https://api-v2.adrop.io/invoke?action=AD_CLICK&txid=01HDZFM5ZWN84Z3Q6ZZWT2V2BD:01HD5G6FV2MV6ERF3P1DMARTIN:01JNV5W2J8BSYB5AW1VNC0Z7NT&auid=01HD5Q3Z8GXNNWF464CNWCMBS4:01HFBMMGFFWQNN2NZVJB5NFPVZ:64d9017889d073887e2b2362ab41ef856f29381448feb143aeb514665a5821f9&unit=PUBLIC_TEST_UNIT_ID_375_80")' 
           onload='(function(){ 
             let invoked=!1;
             const observer=new IntersectionObserver(e=>{
               e.forEach(e=>{
                 e.isIntersecting&&!invoked&&(invoked=!0,fetch("https://api-v2.adrop.io/invoke?action=AD_IMPR&txid=01HDZFM5ZWN84Z3Q6ZZWT2V2BD:01HD5G6FV2MV6ERF3P1DMARTIN:01JNV5W2J8BSYB5AW1VNC0Z7NT&auid=01HD5Q3Z8GXNNWF464CNWCMBS4:01HFBMMGFFWQNN2NZVJB5NFPVZ:64d9017889d073887e2b2362ab41ef856f29381448feb143aeb514665a5821f9&unit=PUBLIC_TEST_UNIT_ID_375_80"))
               })
             },{root:null,rootMargin:"0px",threshold:.5});
             let element=document.getElementById("341f77964480a5c18221");
             element && observer.observe(element);
           }).call(this)' 
           src="https://storage.adrop.io/public/test_templates/Banner_375x80.png" 
           alt="Test Banner 375x80" 
           style="width:100%;height:100%;object-fit:contain"/>
    </a>
  </div>`,
};

export const NativeAd: Story = {
    args: {
        adResult: nativeAdResult,
    },
};

export const BannerAd: Story = {
    args: {
        adResult: {
            ...bannerAdResult,
        },
    },
};
