import crypto from "../assets/img/crypto.png";
import free from "../assets/img/free.png";
import blockchain from "../assets/img/blockchain.png";
import trade from "../assets/img/trade.png";
import mobile from "../assets/img/app.png";
import gift from "../assets/img/gift.png";
import stoploss from "../assets/img/stoploss.png";
import support from "../assets/img/support.png";
import platform from "../assets/img/platform.webp";
import orders from "../assets/img/orders.webp";
import deposit from "../assets/img/deposit.webp";
import app from "../assets/img/app-01.webp";
import download_app_1 from "../assets/img/Icons-01.svg";
import download_app_2 from "../assets/img/Icons-02.svg";
import download_app_3 from "../assets/img/Icons-03.svg";
import download_app_4 from "../assets/img/Icons-04.svg";
import download_app_5 from "../assets/img/Icons-05.svg";
import download_app_6 from "../assets/img/Icons-06.svg";

const ver_class =
  "absolute p-2 rounded-lg border dark:border-[#072349] border-gray-300 dark:shadow-[0_15px_40px_0px_rgba(6,37,70,0.7)] shadow-[0_15px_40px_0px_rgba(0,0,0,0.2)] dark:hover:bg-[#07244b] dark:backdrop-blur backdrop-blur hover:backdrop-blur dark:hover:backdrop-blur dark:bg-[#051a36] bg-gray-200 bg-opacity-25 dark:bg-opacity-25 hover:bg-opacity-30 transition-all";

export const header_images = [
  {
    id: 1,
    src: platform,
    alt: "Platform",
    class: `${ver_class} animate-ver_7s left-10`,
  },
  {
    id: 2,
    src: deposit,
    alt: "Deposit",
    class: `${ver_class} animate-ver_5s left-80 top-60 w-1/4`,
  },
  {
    id: 3,
    src: orders,
    alt: "Orders",
    class: `${ver_class} animate-hor_5s left-36 top-[470px] w-3/4`,
  },
  {
    id: 4,
    src: app,
    alt: "Application",
    class: `${ver_class} animate-hor_7s top-36 w-3/12 !border-[7px]`,
  },
];

export const header_boxes = [
  {
    id: 1,
    image: mobile,
    title: "اپلیکیشن موبایل",
    description:
      "اپلیکیشن یوبیتکس در دو نسخه اندروید و آیفون با رابط کاربری ساده و حرفه ای",
  },
  {
    id: 2,
    image: gift,
    title: "کارت هدیه ارزدیجیتال",
    description:
      "ساخت رایگان کارت هدیه رمزارزی با طرح دلخواه در مناسبت های مختلف",
  },
  {
    id: 3,
    image: support,
    title: "پشتیبانی 24 ساعته",
    description:
      "پشتیبانی آنلاین حرفه ای 24 ساعته در 7 روز هفته از طریق تیکت و چت آنلاین",
  },
  {
    id: 4,
    image: stoploss,
    title: "تعیین حد سود / ضرر",
    description:
      "امکان تعیین حد سود / ضرر به دو صورت عادی و استاپ با بهترین قیمت",
  },
];

export const center_boxes = [
  {
    id: 1,
    image: crypto,
    title: "پشتیبانی بیش از 100 رمزارز",
    description:
      "امکان سفارش گذاری بیش از 100 رمزارز در تالار معاملات یوبیتکس با قیمت و حجم دلخواه",
  },
  {
    id: 2,
    image: blockchain,
    title: "پشتیبانی از شبکه های بلاکچین پر کاربرد",
    description: "تنوع بسیار بالا در شبکه های بلاکچین مختلف و پرکاربرد",
  },
  {
    id: 3,
    image: free,
    title: "کارمزد رایگان واریز و برداشت",
    description:
      "امکان واریز و برداشت و نگهداری رمزارز به صورت رایگان و بدون کسر کارمزد",
  },
  {
    id: 4,
    image: trade,
    title: "پلتفرم معاملاتی ساده و حرفه ای",
    description:
      "رابط کاربری آسان و حرفه ای با بهره گیری از پیشرفته ترین امکانات معاماتی",
  },
];

export const footer_data = {
  ubitex: [
    {
      id: 1,
      title: "درباره ما",
      href: "/about-us",
    },
    {
      id: 2,
      title: "امکانات",
      href: "/features",
    },
    {
      id: 3,
      title: "بلاگ",
      href: "/redirect-to-blog",
    },
    {
      id: 4,
      title: "قوانین و مقررات",
      href: "/terms",
    },
  ],
  services: [
    {
      id: 1,
      title: "تالار معاملات",
      href: "/redirect-to-platform",
    },
    {
      id: 2,
      title: "کارت هدیه",
      href: "/redirect-to-platform",
    },
    {
      id: 3,
      title: "اپلیکیشن",
      href: "/download",
    },
  ],
  support: [
    {
      id: 1,
      title: "سوالات متداول",
      href: "/faq",
    },
    {
      id: 2,
      title: "تماس با ما",
      href: "/conact-us",
    },
    {
      id: 3,
      title: "راهنمای استفاده",
      href: "/support-center",
    },
    {
      id: 4,
      title: "کارمزدها",
      href: "/fees",
    },
  ],
  download_app: [
    {
      id: 1,
      img: download_app_1,
      href: "https://cafebazaar.ir/app/io.ubitex.ubitex",
    },
    {
      id: 2,
      img: download_app_2,
      href: "https://myket.ir/app/io.ubitex.ubitex",
    },
    {
      id: 3,
      img: download_app_3,
      href: "https://ubitex.io/Ubitex.apk",
    },
    {
      id: 4,
      img: download_app_4,
      href: "https://anardoni.com/ios/app/fNcCgkDHU",
    },
    {
      id: 5,
      img: download_app_5,
      href: "https://anardoni.com/ios/app/fNcCgkDHU",
    },
    {
      id: 6,
      img: download_app_6,
      href: "https://pwa.ubitex.io/",
    },
  ],
};

export const terms_data = [
  {
    id: 1,
    title: "معرفی",
    texts: [
      {
        id: 1,
        text: "به راحتی و با امنیت کامل می‌توانید وارد پلتفرم ما بشوید و نسبت به خرید و فروش رمزارز اقدام نمایید. فرایند ثبت نام، احراز هویت و اردرگذاری فروش و یا خرید و همچنین برداشت بر بستر پلتفرم یوبیتکس بسیار آسان است و ما شما را به صورت آنلاین و ۲۴ ساعته پشتیبانی خواهیم کرد.",
      },
      {
        id: 2,
        text: "شما برای خرید و فروش رمزارزها در این پلتفرم نیازی به احراز هویت ندارید. اما برای واریز ريال به حساب کاربری خود بر اساس قوانین و مقررات پولشویی و دستور پلیس فتا نیازمند به طی فرایند احراز هویت هستید که در بخش راهنمای استفاده توضیح داده شده است.",
      },
      {
        id: 3,
        text: "شماره تلفن همراه، شماره حساب و ایمیل کاربران یوبیتکس می‌بایستی مربوط به شخص کاربر باشد. هرگونه برداشت و واریز به شماره حساب اعلام شده انجام می‌پذیرد و در صورت استفاده از حساب دیگران هرگونه عوارض حقوقی و قضایی متوجه فرد متخلف خواهد بود. یوبیتکس حق خواهد داشت که نسبت به مسدود کردن حساب کاربری شخص متخلف اقدام کرده و حق پیگیری‌های حقوقی دیگر را برای خود محفوظ می‌داند.",
      },
      {
        id: 4,
        text: "بازار رمزارزها دارای مخاطرات و ریسک‌های پیش‌بینی نشده می‌باشد. اگرچه یوبیتکس در راستای مسئولیت اجتماعی خود راهنمایی و آموزش‌های لازم را در زمان مقرر به کاربران خود خواهد داد. اما کاربران باید مسئولیت ریسک‌های سرمایه‌گذاری و معاملات خود را شخصا بپذیرند و هیچ ادعا و دعوی در این خصوص پذیرفته نمی‌شود.",
      },
      {
        id: 5,
        text: "یوبیتکس با رعایت تمام پروتکل‌های امن چند لایه در برابر تهدیدهای سخت‌افزاری و نرم‌افزاری خارج از پلتفرم نگهداری دارایی رمزارزی کاربران خود را بصورت آفلاین (Cold Storage) و همچنین با استفاده از سیستم مدیریت اعتبار سنجی مرحله‌بندی شده امنیت خدمات سرویس‌های خود را تضمین می‌نماید. اما هرگونه غفلت و سهل‌انگاری کاربران در حفظ اطلاعات امنیتی کیف پول و حساب کاربری آنان مسئولیتی را ندارد.",
      },
      {
        id: 6,
        text: "یوبیتکس بصورت آنلاین و شبانه‌روزی سعی می‌نماید که حداکثر پشتیبانی و راهنمایی لازم را برای واریز، برداشت ريالی، خرید و فروش شما را بر عهده بگیرد اما بر اساس قوانین و مقررات بانکی کشور در ساعات واریز و یا کندی شبکه مسئولیت و یا شکایتی را نمی‌پذیرد، اگرچه همکاران ما با حوصله و صبوری در تمامی این لحظات در کنار کاربران بوده و سعی جدی دارند که کیفیت خدمات خود را تضمین نمایند.",
      },
      {
        id: 7,
        text: "بر اساس قوانین حقوقی و همچنین مقررات پولی و بانکی کشور هر پرداخت و یا دریافتی با استفاده غیراصولی از رایانه و عملیات اجرایی من غیر حق، یا اشتباهی به کیف پول کاربران واریز یا برداشت شود، در هر زمان یوبیتکس مختار و مجاز است بدون رعایت هیچگونه تشریفات حقوقی، اجازه، اطلاع کتبی و یا شفاهی نسبت به رفع اشتباه و جابجایی مبالغ از حساب اقدام نماید.",
      },
      {
        id: 8,
        text: "باتوجه به قیمت لحظه ای رمزارزها، در صورتیکه سفارش فروش و یا خرید به علت اشکالات فنی و یا اجرایی توسط یوبیتکس با اخلال مواجه گردد، یوبیتکس حق خواهد داشت معامله را باطل و برای جبران خسارت اصل مورد معامله را به طرفین برگشت نماید.",
      },
      {
        id: 9,
        text: "یوبیتکس برای ارائه خدمات خرید و فروش کاربران کارمزد دریافت خواهد کرد که با توجه به شرایط شبکه انتقال و در زمان و مکان خاص ممکن است تغییر کند. این تغییرات به اطلاع کاربران خواهد رسید. در حال حاضر برای واریز و برداشت ریالی کاربران خود هیچ کارمزی دریافت نمی کند. فقط همان کارمزد انتقال تراکنش بین بانکی اعمال می گردد. میزان کارمزد یوبیتکس در حال حاضر حداکثر ۰.۲۵% درصد می باشد. همچنین میزان کارمزدها در کیف پول هریک از کاربران قبل از معامله دقیقا مشخص و اعلام می‌شود.",
      },
      {
        id: 10,
        text: "یوبیتکس به کسانی که اهلیت قانونی بر اساس قوانین کشور برای تجارت نداشته باشند خدماتی ارائه نمی‌نماید. در صورت ایجاد حساب از طریق اطلاعات شخصی دیگران و یا هرگونه اقدام خارج از روال قانونی مثل استفاده از مدارک هویتی اشخاص دیگر نسبت به قطع و مسدود کردن خدمات و حساب کاربر خاطی اقدام خواهد کرد.",
      },
      {
        id: 11,
        text: "شما برای استفاده از خدمات کامل ما مجبورید که اطلاعات هویتی خود را از جمله شماره تلفن، شماره حساب بانکی، ایمیل را بارگزاری نمایید. می‌دانیم نسبت به بارگذاری و چگونگی افشاری آن نگران هستید. یوبیتکس این دغدغه شما را به رسمیت می‌شناسد و متعهد می‌گردد، جزء در موارد لازم برای ارائه خدمات به شما از آن استفاده ننماید. اگرچه بر اساس قوانین کشور در صورت درخواست مراجع ذیصلاح کشور می‌بایستی این اطلاعات را در اختیار مراجعه قانونی بگذارد، اما یوبیتکس متعهد است با مشاوره از وکلای خود در ارائه این اطلاعات با رعایت حقوق شما اقدام نماید و بر حفظ حریم شخصی کاربران خود قویا پایبند باشد.",
      },
      {
        id: 12,
        text: "یوبیتکس یک پلتفرم هوشمند و امن است که کاربران اردرهای فروش یا خرید خود را بر بستر این پلتفرم انجام می‌دهند. ما هیچ‌گونه مداخله‌ای در این خرید و فروش نداریم و مسئولیت و یا منافع اقتصادی ناشی از این معامله با خود کاربران است و جزء کارمزد که قبلا از آن مطلع خواهید بود، هیچ‌گونه هزینه بر کاربران خود تحمیل نمی‌کنیم.",
      },
      {
        id: 13,
        text: "در حال حاضر در خصوص رمزارزها، قوانین روشن و مدونی در کشور اعمال نشده است، در صورت بروز هرگونه اختلاف بین یوبیتکس و کاربران، موارد از طریق مذاکره حل و فصل گردد. در غیر اینصورت با استفاده از قوانین موضوعه کشوری و یا از طریق ارجاع به مراجع داوری نسبت به حل مسأله تلاش خواهیم کرد.موضوعات دیگری که در این قوانین و مقررات نیامده، تابع قوانین و مقررات جمهوری اسلامی ایران و یا سیاست‌ها و قوانین اعلامی یوبیتکس خواهد بود که به اطلاع کاربران از طریق سایت خواهد رسید.",
      },
    ],
  },
  {
    id: 2,
    title: "سیاست حفظ حریم خصوصی در یوبیتکس",
    texts: [
      {
        id: 1,
        text: "یوبیتکس معتقد است اصول حفظ حریم شخصی و اطلاعات کاربران بسیار مهم و حساس است. در این سند اصول محرمانگی اطلاعات و راهکارهایی برای حفظ حریم شخصی و اطلاعات کاربران یوبیتکس توضیح داده شده است. ما هرگز دست به افشای اطلاعات خصوصی و فردی شما نخواهیم زد، مگر اینکه به موجب قانون و بنا بر دستور مقامات قضایی توجیهی برای این کار وجود داشته باشد.",
      },
    ],
  },
  {
    id: 3,
    title: "اطلاعات جمع آوری شده و نحوه استفاده از آن ها",
    texts: [
      {
        id: 1,
        text: "شما با ثبت نام و پذیرفتن قوانین در یوبیتکس، اطلاعات خصوصی خود از قبیل نام، نشانی، نشانی الکترونیک، شماره حساب بانکی را در اختیار یوبیتکس قرار می‌دهید. یوبیتکس کلیه تراکنش‌های شما از جمله تراکنش‌های مالی را جمع آوری و نگهداری می‌کند.",
      },
      {
        id: 2,
        text: "یوبیتکس به‌صورت خودکار پس از ورود شما به اپلیکیشن و سایت اطلاعاتی از قبیل آی‌پی را مشاهده و ذخیره می‌کند.",
      },
      {
        id: 3,
        text: "یوبیتکس از این اطلاعات در راستای بعضی از مقاصد از قبیل ارتقای خدمات و تهیه محتوای مناسب و مانند آن استفاده می کند.",
      },
      {
        id: 4,
        text: "یوبیتکس تمامی اطلاعات شما را در فضای امن نگهداری می کند و متعهد می‌گردد، جزء در موارد لازم برای ارائه خدمات به شما از آن استفاده ننماید. اگرچه بر اساس قوانین کشور در صورت درخواست مراجع ذیصلاح کشور می‌بایستی این اطلاعات را در اختیار مراجعه قانونی بگذارد، اما یوبیتکس متعهد است با مشاوره از وکلای خود در ارائه این اطلاعات با رعایت حقوق شما اقدام نماید و بر حفظ حریم شخصی کاربران خود قویا پایبند باشد.",
      },
    ],
  },
  {
    id: 4,
    title: "تغییرات در این سیاست‌ها",
    texts: [
      {
        id: 1,
        text: "ممکن است یوبیتکس، هر از گاهی این توافقنامه را تغییر یا بهبود بخشد؛ اگرچه سعی می‌شود از طریق ایمیل کلیه کاربران از تغییرات مطلع شوند با این حال پیشنهاد می‌گردد هر چند وقت یک‌بار این صفحه را مطالعه نمایید تا از تغییرات احتمالی آگاه شوید.",
      },
    ],
  },
];