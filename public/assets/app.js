const languages = {
    en: {workspace:"WORKSPACE",checker:"Link checker",history:"Scan history",privateByDesign:"Private by design",privateTip:"Your links stay on this server. No Telegram login needed for public checks.",personalSpace:"Personal space",publicCheck:"PUBLIC LINK CHECKER",welcomeTitle:"Know where your links lead.",welcomeCopy:"A clearer view of your Telegram links. Paste, review, and check public pages in one calm workspace.",noLogin:"No Telegram login required",totalLinks:"Total links",publicValid:"Public pages",manualCheck:"Manual check",needsReview:"Needs review",readyToReview:"Ready to review",confirmedMetadata:"With page metadata",privateLinks:"Private links",notEnoughEvidence:"Not enough evidence",yourLinks:"YOUR LINKS",addTelegramLinks:"Add Telegram links",pasteOrUpload:"Paste text or upload a small text file to get started.",clear:"Clear",pasteText:"Paste your text",extractLinks:"Extract links",dropFile:"Drop a file here",uploadDescription:"or choose from your device",browseFiles:"Browse files",fileLimits:"TXT, CSV, LOG, MD · up to 2 MB",reviewLinks:"REVIEW LINKS",foundLinks:"Your extracted links",startOver:"Start over",selectAll:"Select all",removeSelected:"Remove selected",privateRouted:"Private links are routed to manual review.",chooseMode:"Choose check mode",checkMode:"CHECK MODE",chooseHow:"Choose how to check",modeIntro:"Pick the verification method that fits your needs.",available:"AVAILABLE",notConfigured:"NOT CONFIGURED",normalMode:"Normal mode",normalDescription:"Check public Telegram page previews. No account or API credentials needed.",privacyFirst:"Privacy-first",premiumMode:"Premium mode",premiumDescription:"Telegram API verification with deeper metadata.",premiumUnavailable:"Requires a separate Telethon service",normalLimitation:"Normal checks use Telegram's public web previews. Private links cannot be reliably verified without Telegram authentication.",resultDetails:"RESULT DETAILS",chooseMetadata:"Choose result details",metadataDescription:"Select the fields to keep in your result list and exports.",saveDefault:"Save as my default",back:"Back",startChecking:"Start checking",liveCheck:"LIVE CHECK",checkingLinks:"Checking your links",checkingCarefully:"Checking public pages carefully and sequentially.",running:"Running",currentLink:"Current link",elapsed:"Elapsed",estimated:"Est. remaining",pauseHint:"You can pause at any time. Completed results are saved automatically.",pause:"Pause",stopSave:"Stop & save",resume:"Resume",results:"RESULTS",scanResults:"Your scan results",newScan:"New scan",searchLinks:"Search links or names",exportResults:"Export results",exportDescription:"Select categories to download as separate text files.",downloadSelected:"Download selected",yourWorkspace:"YOUR WORKSPACE",historyTitle:"Scan history",historyCopy:"Pick up where you left off. Your recent checking sessions live here.",footerPrivacy:"Your data stays in your local workspace",version:"VERSION 1.0",characters:"characters",linksFound:"links found",duplicatesRemoved:"duplicates removed",ignored:"unrelated text ignored",selected:"selected",link:"Link",name:"Name",visibility:"Visibility",status:"Status",checkedAt:"Checked at",allResults:"All results",valid:"Valid",expired:"Expired",revoked:"Revoked",private:"Private",restricted:"Restricted",usernameNotFound:"Username not found",invalidFormat:"Invalid format",unknownError:"Unknown error",nothingToExport:"No results in this category.",exportReady:"Export ready",saved:"Saved",noLinks:"No links yet",noResults:"No results match your filters.",noHistory:"No checking sessions yet. Your finished scans will appear here.",runningState:"RUNNING",pausedState:"PAUSED",completedState:"COMPLETED",stoppedState:"STOPPED",startNew:"Start a new check",removedLinks:"Selected links removed.",emptySelection:"Select at least one link to continue.",extractFirst:"Add some text containing Telegram links first.",checkingStarted:"Checking started.",checkingPaused:"Checking paused.",checkingResumed:"Checking resumed.",checkingStopped:"Checking stopped. Completed results have been saved.",noCompletedLinks:"There are no completed links to show yet.",uploadError:"The file could not be read. Please try a supported text file.",selectCategory:"Choose at least one category to download.",settingsSaved:"Your preferences have been saved.",checkFailed:"This link could not be checked. The scan is paused so you can retry or stop.",downloadFailed:"An export could not be created.",fileLoaded:"File loaded",linksExtracted:"Links extracted",privateExplanation:"Private Telegram links cannot be verified in Normal Mode and are placed in Manual Check.",elapsedLabel:"elapsed"},
    hi: {workspace:"कार्यक्षेत्र",checker:"लिंक जाँच",history:"स्कैन इतिहास",privateByDesign:"गोपनीयता को प्राथमिकता",privateTip:"आपके लिंक इसी सर्वर पर रहते हैं। सार्वजनिक जाँच के लिए Telegram लॉगिन नहीं चाहिए।",personalSpace:"व्यक्तिगत स्थान",publicCheck:"सार्वजनिक लिंक जाँच",welcomeTitle:"जानें आपके लिंक कहाँ ले जाते हैं।",welcomeCopy:"अपने Telegram लिंक को स्पष्ट रूप से देखें। एक ही जगह पेस्ट करें, समीक्षा करें और सार्वजनिक पेज जाँचें।",noLogin:"Telegram लॉगिन आवश्यक नहीं",totalLinks:"कुल लिंक",publicValid:"सार्वजनिक पेज",manualCheck:"मैन्युअल जाँच",needsReview:"समीक्षा आवश्यक",readyToReview:"समीक्षा के लिए तैयार",confirmedMetadata:"पेज मेटाडेटा उपलब्ध",privateLinks:"निजी लिंक",notEnoughEvidence:"पर्याप्त जानकारी नहीं",yourLinks:"आपके लिंक",addTelegramLinks:"Telegram लिंक जोड़ें",pasteOrUpload:"शुरू करने के लिए टेक्स्ट पेस्ट करें या छोटी टेक्स्ट फ़ाइल अपलोड करें।",clear:"साफ़ करें",pasteText:"अपना टेक्स्ट पेस्ट करें",extractLinks:"लिंक निकालें",dropFile:"फ़ाइल यहाँ छोड़ें",uploadDescription:"या डिवाइस से चुनें",browseFiles:"फ़ाइलें ब्राउज़ करें",fileLimits:"TXT, CSV, LOG, MD · अधिकतम 2 MB",reviewLinks:"लिंक की समीक्षा",foundLinks:"निकाले गए लिंक",startOver:"फिर से शुरू करें",selectAll:"सभी चुनें",removeSelected:"चयन हटाएँ",privateRouted:"निजी लिंक मैन्युअल समीक्षा के लिए भेजे जाते हैं।",chooseMode:"जाँच का तरीका चुनें",checkMode:"जाँच मोड",chooseHow:"जाँच का तरीका चुनें",modeIntro:"अपनी ज़रूरत के अनुसार सत्यापन विधि चुनें।",available:"उपलब्ध",notConfigured:"कॉन्फ़िगर नहीं",normalMode:"सामान्य मोड",normalDescription:"सार्वजनिक Telegram पेज प्रीव्यू जाँचें। खाते या API क्रेडेंशियल की ज़रूरत नहीं।",privacyFirst:"गोपनीयता पहले",premiumMode:"प्रीमियम मोड",premiumDescription:"अधिक मेटाडेटा के साथ Telegram API सत्यापन।",premiumUnavailable:"अलग Telethon सेवा आवश्यक",normalLimitation:"सामान्य जाँच Telegram के सार्वजनिक वेब प्रीव्यू का उपयोग करती है। प्रमाणीकरण के बिना निजी लिंक सत्यापित नहीं हो सकते।",resultDetails:"परिणाम विवरण",chooseMetadata:"परिणाम विवरण चुनें",metadataDescription:"परिणाम और निर्यात में दिखाने वाले फ़ील्ड चुनें।",saveDefault:"मेरी डिफ़ॉल्ट सेटिंग के रूप में सहेजें",back:"वापस",startChecking:"जाँच शुरू करें",liveCheck:"लाइव जाँच",checkingLinks:"लिंक जाँचे जा रहे हैं",checkingCarefully:"सार्वजनिक पेज क्रम से और सावधानीपूर्वक जाँचे जा रहे हैं।",running:"जारी",currentLink:"मौजूदा लिंक",elapsed:"बिता समय",estimated:"अनुमानित शेष",pauseHint:"किसी भी समय रोकें। पूरे हुए परिणाम अपने आप सहेजे जाते हैं।",pause:"रोकें",stopSave:"रोकें और सहेजें",resume:"जारी रखें",results:"परिणाम",scanResults:"आपके स्कैन परिणाम",newScan:"नया स्कैन",searchLinks:"लिंक या नाम खोजें",exportResults:"परिणाम निर्यात",exportDescription:"अलग-अलग टेक्स्ट फ़ाइलों के रूप में डाउनलोड करने के लिए श्रेणियाँ चुनें।",downloadSelected:"चयनित डाउनलोड",yourWorkspace:"आपका कार्यक्षेत्र",historyTitle:"स्कैन इतिहास",historyCopy:"जहाँ छोड़ा था वहीं से शुरू करें। हाल के जाँच सत्र यहाँ हैं।",footerPrivacy:"आपका डेटा इसी स्थानीय कार्यक्षेत्र में रहता है",version:"संस्करण 1.0",characters:"अक्षर",linksFound:"लिंक मिले",duplicatesRemoved:"डुप्लिकेट हटाए",ignored:"असंबंधित टेक्स्ट अनदेखा",selected:"चयनित",link:"लिंक",name:"नाम",visibility:"दृश्यता",status:"स्थिति",checkedAt:"जाँच समय",allResults:"सभी परिणाम",valid:"मान्य",expired:"समाप्त",revoked:"रद्द",private:"निजी",restricted:"प्रतिबंधित",usernameNotFound:"उपयोगकर्ता नाम नहीं मिला",invalidFormat:"अमान्य प्रारूप",unknownError:"अज्ञात त्रुटि",nothingToExport:"इस श्रेणी में निर्यात के लिए परिणाम नहीं हैं।",exportReady:"निर्यात तैयार",saved:"सहेजा गया",noLinks:"अभी कोई लिंक नहीं",noResults:"फ़िल्टर से कोई परिणाम नहीं मिला।",noHistory:"अभी कोई जाँच सत्र नहीं है। पूरे स्कैन यहाँ दिखेंगे।",runningState:"जारी",pausedState:"रोका गया",completedState:"पूरा",stoppedState:"रुका",startNew:"नई जाँच शुरू करें",removedLinks:"चयनित लिंक हटा दिए गए।",emptySelection:"जारी रखने के लिए कम से कम एक लिंक चुनें।",extractFirst:"पहले Telegram लिंक वाला टेक्स्ट जोड़ें।",checkingStarted:"जाँच शुरू हुई।",checkingPaused:"जाँच रोकी गई।",checkingResumed:"जाँच फिर शुरू हुई।",checkingStopped:"जाँच रोक दी गई। पूरे परिणाम सहेजे गए।",noCompletedLinks:"दिखाने के लिए कोई पूरा लिंक नहीं है।",uploadError:"फ़ाइल पढ़ी नहीं जा सकी। समर्थित टेक्स्ट फ़ाइल आज़माएँ।",selectCategory:"डाउनलोड करने के लिए कम से कम एक श्रेणी चुनें।",settingsSaved:"आपकी प्राथमिकताएँ सहेजी गईं।",checkFailed:"लिंक जाँचा नहीं जा सका। दोबारा प्रयास या रोकने के लिए स्कैन रोक दिया गया है।",downloadFailed:"निर्यात बनाया नहीं जा सका।",fileLoaded:"फ़ाइल लोड हुई",linksExtracted:"लिंक निकाले गए",privateExplanation:"निजी Telegram लिंक सामान्य मोड में सत्यापित नहीं हो सकते और मैन्युअल जाँच में जाते हैं।",elapsedLabel:"बिता समय"},
    bn: {workspace:"কর্মক্ষেত্র",checker:"লিংক যাচাই",history:"স্ক্যানের ইতিহাস",privateByDesign:"গোপনীয়তা সুরক্ষিত",privateTip:"আপনার লিংক এই সার্ভারেই থাকে। পাবলিক যাচাইয়ে Telegram লগইন লাগে না।",personalSpace:"ব্যক্তিগত স্থান",publicCheck:"পাবলিক লিংক যাচাই",welcomeTitle:"আপনার লিংক কোথায় নিয়ে যায় জানুন।",welcomeCopy:"Telegram লিংক আরও স্পষ্টভাবে দেখুন। এক জায়গায় পেস্ট, পর্যালোচনা ও পাবলিক পেজ যাচাই করুন।",noLogin:"Telegram লগইন লাগবে না",totalLinks:"মোট লিংক",publicValid:"পাবলিক পেজ",manualCheck:"ম্যানুয়াল যাচাই",needsReview:"পর্যালোচনা দরকার",readyToReview:"পর্যালোচনার জন্য প্রস্তুত",confirmedMetadata:"পেজের তথ্য পাওয়া গেছে",privateLinks:"ব্যক্তিগত লিংক",notEnoughEvidence:"যথেষ্ট তথ্য নেই",yourLinks:"আপনার লিংক",addTelegramLinks:"Telegram লিংক যোগ করুন",pasteOrUpload:"শুরু করতে লেখা পেস্ট করুন বা ছোট টেক্সট ফাইল আপলোড করুন।",clear:"মুছুন",pasteText:"আপনার লেখা পেস্ট করুন",extractLinks:"লিংক বের করুন",dropFile:"এখানে ফাইল ছাড়ুন",uploadDescription:"অথবা ডিভাইস থেকে বেছে নিন",browseFiles:"ফাইল দেখুন",fileLimits:"TXT, CSV, LOG, MD · সর্বোচ্চ 2 MB",reviewLinks:"লিংক পর্যালোচনা",foundLinks:"আপনার বের করা লিংক",startOver:"আবার শুরু",selectAll:"সব নির্বাচন",removeSelected:"নির্বাচিত সরান",privateRouted:"ব্যক্তিগত লিংক ম্যানুয়াল পর্যালোচনায় যাবে।",chooseMode:"যাচাই পদ্ধতি বেছে নিন",checkMode:"যাচাই মোড",chooseHow:"কীভাবে যাচাই করবেন বেছে নিন",modeIntro:"আপনার প্রয়োজন অনুযায়ী যাচাই পদ্ধতি বেছে নিন।",available:"চালু",notConfigured:"সেটআপ হয়নি",normalMode:"সাধারণ মোড",normalDescription:"পাবলিক Telegram পেজ প্রিভিউ যাচাই করুন। অ্যাকাউন্ট বা API তথ্য লাগবে না।",privacyFirst:"গোপনীয়তা আগে",premiumMode:"প্রিমিয়াম মোড",premiumDescription:"আরও তথ্যসহ Telegram API যাচাই।",premiumUnavailable:"আলাদা Telethon পরিষেবা দরকার",normalLimitation:"সাধারণ যাচাই Telegram-এর পাবলিক ওয়েব প্রিভিউ ব্যবহার করে। লগইন ছাড়া ব্যক্তিগত লিংক যাচাই করা যায় না।",resultDetails:"ফলাফলের বিবরণ",chooseMetadata:"ফলাফলের বিবরণ বেছে নিন",metadataDescription:"ফলাফল ও এক্সপোর্টে রাখার তথ্য নির্বাচন করুন।",saveDefault:"ডিফল্ট হিসেবে সংরক্ষণ",back:"ফিরে যান",startChecking:"যাচাই শুরু",liveCheck:"লাইভ যাচাই",checkingLinks:"আপনার লিংক যাচাই হচ্ছে",checkingCarefully:"পাবলিক পেজ ক্রমানুসারে সতর্কভাবে যাচাই হচ্ছে।",running:"চলছে",currentLink:"বর্তমান লিংক",elapsed:"অতিবাহিত",estimated:"আনুমানিক বাকি",pauseHint:"যেকোনো সময় বিরতি দিন। সম্পন্ন ফল স্বয়ংক্রিয়ভাবে সেভ হয়।",pause:"বিরতি",stopSave:"থামান ও সেভ",resume:"চালিয়ে যান",results:"ফলাফল",scanResults:"আপনার স্ক্যান ফলাফল",newScan:"নতুন স্ক্যান",searchLinks:"লিংক বা নাম খুঁজুন",exportResults:"ফলাফল এক্সপোর্ট",exportDescription:"আলাদা টেক্সট ফাইল ডাউনলোডের জন্য বিভাগ বাছুন।",downloadSelected:"নির্বাচিত ডাউনলোড",yourWorkspace:"আপনার কর্মক্ষেত্র",historyTitle:"স্ক্যানের ইতিহাস",historyCopy:"যেখানে থেমেছিলেন সেখান থেকে শুরু করুন। সাম্প্রতিক যাচাই এখানে থাকবে।",footerPrivacy:"আপনার তথ্য এই স্থানীয় কর্মক্ষেত্রেই থাকে",version:"সংস্করণ 1.0",characters:"অক্ষর",linksFound:"লিংক পাওয়া গেছে",duplicatesRemoved:"ডুপ্লিকেট বাদ",ignored:"অপ্রাসঙ্গিক লেখা বাদ",selected:"নির্বাচিত",link:"লিংক",name:"নাম",visibility:"দৃশ্যমানতা",status:"অবস্থা",checkedAt:"যাচাইয়ের সময়",allResults:"সব ফলাফল",valid:"সঠিক",expired:"মেয়াদ শেষ",revoked:"বাতিল",private:"ব্যক্তিগত",restricted:"সীমাবদ্ধ",usernameNotFound:"ব্যবহারকারীর নাম নেই",invalidFormat:"ভুল ফরম্যাট",unknownError:"অজানা ত্রুটি",nothingToExport:"এই বিভাগে এক্সপোর্টের ফল নেই।",exportReady:"এক্সপোর্ট প্রস্তুত",saved:"সেভ হয়েছে",noLinks:"এখনও কোনো লিংক নেই",noResults:"ফিল্টারে কোনো ফল মেলেনি।",noHistory:"এখনও কোনো যাচাই সেশন নেই। সম্পন্ন স্ক্যান এখানে দেখাবে।",runningState:"চলছে",pausedState:"বিরতি",completedState:"সম্পন্ন",stoppedState:"থেমেছে",startNew:"নতুন যাচাই শুরু",removedLinks:"নির্বাচিত লিংক সরানো হয়েছে।",emptySelection:"চালিয়ে যেতে অন্তত একটি লিংক বাছুন।",extractFirst:"প্রথমে Telegram লিংকসহ লেখা যোগ করুন।",checkingStarted:"যাচাই শুরু হয়েছে।",checkingPaused:"যাচাই বিরতিতে।",checkingResumed:"যাচাই আবার শুরু হয়েছে।",checkingStopped:"যাচাই থেমেছে। সম্পন্ন ফল সেভ হয়েছে।",noCompletedLinks:"দেখানোর মতো সম্পন্ন লিংক নেই।",uploadError:"ফাইল পড়া যায়নি। সমর্থিত টেক্সট ফাইল চেষ্টা করুন।",selectCategory:"ডাউনলোডের জন্য অন্তত একটি বিভাগ বাছুন।",settingsSaved:"আপনার পছন্দ সেভ হয়েছে।",checkFailed:"লিংক যাচাই হয়নি। আবার চেষ্টা বা থামাতে স্ক্যান বিরতিতে রাখা হয়েছে।",downloadFailed:"এক্সপোর্ট তৈরি করা যায়নি।",fileLoaded:"ফাইল লোড হয়েছে",linksExtracted:"লিংক বের হয়েছে",privateExplanation:"ব্যক্তিগত Telegram লিংক সাধারণ মোডে যাচাই করা যায় না; ম্যানুয়াল চেকে রাখা হয়েছে।",elapsedLabel:"অতিবাহিত"},
    ru: {workspace:"РАБОЧЕЕ ПРОСТРАНСТВО",checker:"Проверка ссылок",history:"История проверок",privateByDesign:"Конфиденциальность прежде всего",privateTip:"Ссылки остаются на сервере. Для проверки публичных страниц вход в Telegram не нужен.",personalSpace:"Личное пространство",publicCheck:"ПРОВЕРКА ПУБЛИЧНЫХ ССЫЛОК",welcomeTitle:"Узнайте, куда ведут ваши ссылки.",welcomeCopy:"Удобный обзор ссылок Telegram: вставляйте, проверяйте и просматривайте публичные страницы.",noLogin:"Вход в Telegram не нужен",totalLinks:"Всего ссылок",publicValid:"Публичные страницы",manualCheck:"Ручная проверка",needsReview:"Нужно проверить",readyToReview:"Готовы к проверке",confirmedMetadata:"Есть данные страницы",privateLinks:"Приватные ссылки",notEnoughEvidence:"Недостаточно данных",yourLinks:"ВАШИ ССЫЛКИ",addTelegramLinks:"Добавьте ссылки Telegram",pasteOrUpload:"Вставьте текст или загрузите небольшой текстовый файл.",clear:"Очистить",pasteText:"Вставьте текст",extractLinks:"Извлечь ссылки",dropFile:"Перетащите файл сюда",uploadDescription:"или выберите на устройстве",browseFiles:"Выбрать файл",fileLimits:"TXT, CSV, LOG, MD · до 2 МБ",reviewLinks:"ПРОВЕРКА ССЫЛОК",foundLinks:"Найденные ссылки",startOver:"Начать заново",selectAll:"Выбрать все",removeSelected:"Удалить выбранное",privateRouted:"Приватные ссылки отправляются на ручную проверку.",chooseMode:"Выбрать режим",checkMode:"РЕЖИМ ПРОВЕРКИ",chooseHow:"Выберите способ проверки",modeIntro:"Выберите подходящий способ проверки.",available:"ДОСТУПНО",notConfigured:"НЕ НАСТРОЕНО",normalMode:"Обычный режим",normalDescription:"Проверка публичных страниц Telegram без аккаунта и API-ключей.",privacyFirst:"Конфиденциальность",premiumMode:"Премиум-режим",premiumDescription:"Проверка через Telegram API с расширенными данными.",premiumUnavailable:"Требуется отдельный сервис Telethon",normalLimitation:"Обычная проверка использует публичные страницы Telegram. Приватные ссылки нельзя достоверно проверить без авторизации.",resultDetails:"ДАННЫЕ РЕЗУЛЬТАТА",chooseMetadata:"Выберите данные результата",metadataDescription:"Выберите поля для списка результатов и экспорта.",saveDefault:"Сохранить по умолчанию",back:"Назад",startChecking:"Начать проверку",liveCheck:"ПРОВЕРКА",checkingLinks:"Проверяем ссылки",checkingCarefully:"Последовательная проверка публичных страниц.",running:"Выполняется",currentLink:"Текущая ссылка",elapsed:"Прошло",estimated:"Осталось примерно",pauseHint:"Можно приостановить в любой момент. Результаты сохраняются автоматически.",pause:"Пауза",stopSave:"Остановить и сохранить",resume:"Продолжить",results:"РЕЗУЛЬТАТЫ",scanResults:"Результаты проверки",newScan:"Новая проверка",searchLinks:"Поиск ссылок или названий",exportResults:"Экспорт результатов",exportDescription:"Выберите категории для загрузки отдельными файлами.",downloadSelected:"Скачать выбранное",yourWorkspace:"ВАШЕ ПРОСТРАНСТВО",historyTitle:"История проверок",historyCopy:"Недавние сеансы проверки доступны здесь.",footerPrivacy:"Данные остаются в локальном пространстве",version:"ВЕРСИЯ 1.0",characters:"символов",linksFound:"ссылок найдено",duplicatesRemoved:"дубликатов удалено",ignored:"посторонних фрагментов",selected:"выбрано",link:"Ссылка",name:"Название",visibility:"Доступ",status:"Статус",checkedAt:"Время проверки",allResults:"Все результаты",valid:"Действительна",expired:"Истекла",revoked:"Отозвана",private:"Приватная",restricted:"Ограничена",usernameNotFound:"Имя не найдено",invalidFormat:"Неверный формат",unknownError:"Неизвестная ошибка",nothingToExport:"В этой категории нет результатов.",exportReady:"Экспорт готов",saved:"Сохранено",noLinks:"Ссылок пока нет",noResults:"Нет результатов по фильтрам.",noHistory:"Сеансов проверки пока нет. Завершённые проверки появятся здесь.",runningState:"ВЫПОЛНЯЕТСЯ",pausedState:"ПАУЗА",completedState:"ЗАВЕРШЕНО",stoppedState:"ОСТАНОВЛЕНО",startNew:"Начать новую проверку",removedLinks:"Выбранные ссылки удалены.",emptySelection:"Выберите хотя бы одну ссылку.",extractFirst:"Сначала добавьте текст со ссылками Telegram.",checkingStarted:"Проверка началась.",checkingPaused:"Проверка приостановлена.",checkingResumed:"Проверка продолжена.",checkingStopped:"Проверка остановлена. Результаты сохранены.",noCompletedLinks:"Пока нет завершённых ссылок.",uploadError:"Не удалось прочитать файл. Выберите текстовый файл.",selectCategory:"Выберите категорию для загрузки.",settingsSaved:"Настройки сохранены.",checkFailed:"Не удалось проверить ссылку. Проверка приостановлена.",downloadFailed:"Не удалось создать экспорт.",fileLoaded:"Файл загружен",linksExtracted:"Ссылки извлечены",privateExplanation:"Приватные ссылки нельзя проверить в обычном режиме; они помещены в ручную проверку.",elapsedLabel:"прошло"},
    zh: {workspace:"工作区",checker:"链接检查",history:"检查历史",privateByDesign:"隐私优先",privateTip:"链接保留在此服务器。检查公开页面无需登录 Telegram。",personalSpace:"个人空间",publicCheck:"公开链接检查",welcomeTitle:"了解链接的去向。",welcomeCopy:"更清晰地查看 Telegram 链接。在一个简洁的工作区中粘贴、审查并检查公开页面。",noLogin:"无需登录 Telegram",totalLinks:"链接总数",publicValid:"公开页面",manualCheck:"手动检查",needsReview:"需要复核",readyToReview:"等待审查",confirmedMetadata:"包含页面信息",privateLinks:"私密链接",notEnoughEvidence:"证据不足",yourLinks:"你的链接",addTelegramLinks:"添加 Telegram 链接",pasteOrUpload:"粘贴文本或上传小型文本文件即可开始。",clear:"清除",pasteText:"粘贴文本",extractLinks:"提取链接",dropFile:"将文件拖到这里",uploadDescription:"或从设备中选择",browseFiles:"浏览文件",fileLimits:"TXT、CSV、LOG、MD · 最大 2 MB",reviewLinks:"审查链接",foundLinks:"已提取的链接",startOver:"重新开始",selectAll:"全选",removeSelected:"移除所选",privateRouted:"私密链接将转入手动检查。",chooseMode:"选择检查模式",checkMode:"检查模式",chooseHow:"选择检查方式",modeIntro:"选择适合你需求的验证方式。",available:"可用",notConfigured:"未配置",normalMode:"普通模式",normalDescription:"检查 Telegram 公开页面预览，无需账号或 API 凭据。",privacyFirst:"隐私优先",premiumMode:"高级模式",premiumDescription:"通过 Telegram API 验证并获取更多信息。",premiumUnavailable:"需要单独的 Telethon 服务",normalLimitation:"普通检查使用 Telegram 公开网页预览。没有 Telegram 身份验证，无法可靠验证私密链接。",resultDetails:"结果详情",chooseMetadata:"选择结果详情",metadataDescription:"选择要保留在结果和导出中的字段。",saveDefault:"保存为默认设置",back:"返回",startChecking:"开始检查",liveCheck:"实时检查",checkingLinks:"正在检查链接",checkingCarefully:"正在按顺序谨慎检查公开页面。",running:"正在运行",currentLink:"当前链接",elapsed:"已用时间",estimated:"预计剩余",pauseHint:"可以随时暂停。已完成结果将自动保存。",pause:"暂停",stopSave:"停止并保存",resume:"继续",results:"结果",scanResults:"检查结果",newScan:"新检查",searchLinks:"搜索链接或名称",exportResults:"导出结果",exportDescription:"选择类别并分别下载文本文件。",downloadSelected:"下载所选项",yourWorkspace:"你的工作区",historyTitle:"检查历史",historyCopy:"最近的检查会话会保存在这里。",footerPrivacy:"数据保留在本地工作区",version:"版本 1.0",characters:"个字符",linksFound:"个链接",duplicatesRemoved:"个重复项已移除",ignored:"段无关文本已忽略",selected:"已选择",link:"链接",name:"名称",visibility:"可见性",status:"状态",checkedAt:"检查时间",allResults:"全部结果",valid:"有效",expired:"已过期",revoked:"已撤销",private:"私密",restricted:"受限",usernameNotFound:"未找到用户名",invalidFormat:"格式无效",unknownError:"未知错误",nothingToExport:"此类别没有可导出的结果。",exportReady:"导出已准备好",saved:"已保存",noLinks:"暂无链接",noResults:"没有符合筛选条件的结果。",noHistory:"暂无检查会话。完成的检查会显示在这里。",runningState:"运行中",pausedState:"已暂停",completedState:"已完成",stoppedState:"已停止",startNew:"开始新检查",removedLinks:"所选链接已移除。",emptySelection:"请至少选择一个链接。",extractFirst:"请先添加包含 Telegram 链接的文本。",checkingStarted:"检查已开始。",checkingPaused:"检查已暂停。",checkingResumed:"检查已继续。",checkingStopped:"检查已停止，已保存完成的结果。",noCompletedLinks:"暂无已完成的链接。",uploadError:"无法读取文件，请尝试受支持的文本文件。",selectCategory:"请选择要下载的类别。",settingsSaved:"偏好设置已保存。",checkFailed:"无法检查此链接。检查已暂停，可重试或停止。",downloadFailed:"无法生成导出文件。",fileLoaded:"文件已加载",linksExtracted:"链接已提取",privateExplanation:"普通模式无法验证私密 Telegram 链接，已将其放入手动检查。",elapsedLabel:"已用"},
    ja: {workspace:"ワークスペース",checker:"リンクチェッカー",history:"チェック履歴",privateByDesign:"プライバシーを重視",privateTip:"リンクはこのサーバーに保存されます。公開ページの確認に Telegram ログインは不要です。",personalSpace:"個人スペース",publicCheck:"公開リンクチェッカー",welcomeTitle:"リンクの行き先を確認しましょう。",welcomeCopy:"Telegram リンクをひと目で確認。貼り付け、確認、公開ページのチェックをひとつの画面で。",noLogin:"Telegram ログイン不要",totalLinks:"リンク合計",publicValid:"公開ページ",manualCheck:"手動確認",needsReview:"要確認",readyToReview:"確認できます",confirmedMetadata:"ページ情報あり",privateLinks:"プライベートリンク",notEnoughEvidence:"情報不足",yourLinks:"リンク",addTelegramLinks:"Telegram リンクを追加",pasteOrUpload:"テキストを貼り付けるか、小さなテキストファイルをアップロードしてください。",clear:"クリア",pasteText:"テキストを貼り付け",extractLinks:"リンクを抽出",dropFile:"ここにファイルをドロップ",uploadDescription:"または端末から選択",browseFiles:"ファイルを選択",fileLimits:"TXT、CSV、LOG、MD · 最大 2 MB",reviewLinks:"リンクを確認",foundLinks:"抽出されたリンク",startOver:"最初からやり直す",selectAll:"すべて選択",removeSelected:"選択を削除",privateRouted:"プライベートリンクは手動確認に回されます。",chooseMode:"チェック方法を選択",checkMode:"チェックモード",chooseHow:"チェック方法を選択",modeIntro:"用途に合った確認方法を選んでください。",available:"利用可能",notConfigured:"未設定",normalMode:"通常モード",normalDescription:"公開 Telegram ページを確認します。アカウントや API 情報は不要です。",privacyFirst:"プライバシー重視",premiumMode:"プレミアムモード",premiumDescription:"Telegram API で詳細情報を確認します。",premiumUnavailable:"別途 Telethon サービスが必要",normalLimitation:"通常モードでは Telegram の公開プレビューを使用します。認証なしでプライベートリンクを確実に確認することはできません。",resultDetails:"結果の詳細",chooseMetadata:"結果の詳細を選択",metadataDescription:"結果とエクスポートに含める項目を選択します。",saveDefault:"既定として保存",back:"戻る",startChecking:"チェックを開始",liveCheck:"ライブチェック",checkingLinks:"リンクを確認中",checkingCarefully:"公開ページを順番に慎重に確認しています。",running:"実行中",currentLink:"現在のリンク",elapsed:"経過時間",estimated:"残り時間",pauseHint:"いつでも一時停止できます。完了した結果は自動保存されます。",pause:"一時停止",stopSave:"停止して保存",resume:"再開",results:"結果",scanResults:"チェック結果",newScan:"新しいチェック",searchLinks:"リンクまたは名前を検索",exportResults:"結果をエクスポート",exportDescription:"カテゴリを選択して別々のテキストファイルをダウンロードします。",downloadSelected:"選択項目をダウンロード",yourWorkspace:"ワークスペース",historyTitle:"チェック履歴",historyCopy:"最近のチェックセッションをここで確認できます。",footerPrivacy:"データはローカルワークスペースに保存されます",version:"バージョン 1.0",characters:"文字",linksFound:"件のリンク",duplicatesRemoved:"件の重複を削除",ignored:"件の無関係なテキストを無視",selected:"件選択",link:"リンク",name:"名前",visibility:"公開範囲",status:"状態",checkedAt:"確認日時",allResults:"すべて",valid:"有効",expired:"期限切れ",revoked:"無効",private:"非公開",restricted:"制限あり",usernameNotFound:"ユーザー名が見つかりません",invalidFormat:"形式が無効",unknownError:"不明なエラー",nothingToExport:"このカテゴリにエクスポートできる結果はありません。",exportReady:"エクスポートの準備完了",saved:"保存しました",noLinks:"リンクはまだありません",noResults:"条件に一致する結果はありません。",noHistory:"チェックセッションはまだありません。完了したスキャンがここに表示されます。",runningState:"実行中",pausedState:"一時停止",completedState:"完了",stoppedState:"停止",startNew:"新しいチェックを開始",removedLinks:"選択したリンクを削除しました。",emptySelection:"続行するにはリンクを1つ以上選択してください。",extractFirst:"まず Telegram リンクを含むテキストを追加してください。",checkingStarted:"チェックを開始しました。",checkingPaused:"チェックを一時停止しました。",checkingResumed:"チェックを再開しました。",checkingStopped:"チェックを停止しました。完了した結果は保存されています。",noCompletedLinks:"完了したリンクはまだありません。",uploadError:"ファイルを読み込めません。対応するテキストファイルを選択してください。",selectCategory:"ダウンロードするカテゴリを選択してください。",settingsSaved:"設定を保存しました。",checkFailed:"リンクを確認できません。再試行または停止できるよう一時停止しました。",downloadFailed:"エクスポートを作成できませんでした。",fileLoaded:"ファイルを読み込みました",linksExtracted:"リンクを抽出しました",privateExplanation:"通常モードでは非公開 Telegram リンクを確認できないため、手動確認に追加しました。",elapsedLabel:"経過"},
    ko: {workspace:"워크스페이스",checker:"링크 검사기",history:"검사 기록",privateByDesign:"개인정보 보호 우선",privateTip:"링크는 이 서버에 보관됩니다. 공개 페이지 검사에는 Telegram 로그인이 필요하지 않습니다.",personalSpace:"개인 공간",publicCheck:"공개 링크 검사",welcomeTitle:"링크가 어디로 연결되는지 확인하세요.",welcomeCopy:"Telegram 링크를 한눈에 확인하세요. 한 공간에서 붙여넣고 검토하고 공개 페이지를 검사할 수 있습니다.",noLogin:"Telegram 로그인 불필요",totalLinks:"전체 링크",publicValid:"공개 페이지",manualCheck:"수동 확인",needsReview:"검토 필요",readyToReview:"검토 준비 완료",confirmedMetadata:"페이지 정보 확인",privateLinks:"비공개 링크",notEnoughEvidence:"정보 부족",yourLinks:"내 링크",addTelegramLinks:"Telegram 링크 추가",pasteOrUpload:"텍스트를 붙여넣거나 작은 텍스트 파일을 업로드하세요.",clear:"지우기",pasteText:"텍스트 붙여넣기",extractLinks:"링크 추출",dropFile:"파일을 여기에 놓으세요",uploadDescription:"또는 기기에서 선택",browseFiles:"파일 찾기",fileLimits:"TXT, CSV, LOG, MD · 최대 2 MB",reviewLinks:"링크 검토",foundLinks:"추출된 링크",startOver:"처음부터",selectAll:"모두 선택",removeSelected:"선택 항목 제거",privateRouted:"비공개 링크는 수동 확인으로 전달됩니다.",chooseMode:"검사 모드 선택",checkMode:"검사 모드",chooseHow:"검사 방법 선택",modeIntro:"필요에 맞는 확인 방법을 선택하세요.",available:"사용 가능",notConfigured:"구성되지 않음",normalMode:"일반 모드",normalDescription:"공개 Telegram 페이지 미리보기를 검사합니다. 계정이나 API 정보가 필요하지 않습니다.",privacyFirst:"개인정보 우선",premiumMode:"프리미엄 모드",premiumDescription:"Telegram API로 더 자세한 정보를 확인합니다.",premiumUnavailable:"별도의 Telethon 서비스 필요",normalLimitation:"일반 검사는 Telegram 공개 웹 미리보기를 사용합니다. 인증 없이 비공개 링크를 정확히 확인할 수 없습니다.",resultDetails:"결과 상세정보",chooseMetadata:"결과 정보 선택",metadataDescription:"결과 목록과 내보내기에 포함할 항목을 선택하세요.",saveDefault:"기본값으로 저장",back:"뒤로",startChecking:"검사 시작",liveCheck:"실시간 검사",checkingLinks:"링크 검사 중",checkingCarefully:"공개 페이지를 순서대로 신중하게 검사합니다.",running:"실행 중",currentLink:"현재 링크",elapsed:"경과 시간",estimated:"예상 남은 시간",pauseHint:"언제든지 일시 중지할 수 있습니다. 완료된 결과는 자동 저장됩니다.",pause:"일시 중지",stopSave:"중지 및 저장",resume:"계속",results:"결과",scanResults:"검사 결과",newScan:"새 검사",searchLinks:"링크 또는 이름 검색",exportResults:"결과 내보내기",exportDescription:"범주를 선택해 별도의 텍스트 파일로 다운로드하세요.",downloadSelected:"선택 항목 다운로드",yourWorkspace:"내 워크스페이스",historyTitle:"검사 기록",historyCopy:"최근 검사 세션을 여기에서 확인할 수 있습니다.",footerPrivacy:"데이터는 로컬 워크스페이스에 보관됩니다",version:"버전 1.0",characters:"자",linksFound:"개 링크",duplicatesRemoved:"개 중복 제거",ignored:"개 관련 없는 텍스트 무시",selected:"개 선택",link:"링크",name:"이름",visibility:"공개 범위",status:"상태",checkedAt:"검사 시간",allResults:"전체 결과",valid:"유효",expired:"만료",revoked:"철회됨",private:"비공개",restricted:"제한됨",usernameNotFound:"사용자 이름을 찾을 수 없음",invalidFormat:"잘못된 형식",unknownError:"알 수 없는 오류",nothingToExport:"이 범주에는 내보낼 결과가 없습니다.",exportReady:"내보내기 준비 완료",saved:"저장됨",noLinks:"아직 링크가 없습니다",noResults:"필터와 일치하는 결과가 없습니다.",noHistory:"아직 검사 세션이 없습니다. 완료된 검사가 여기에 표시됩니다.",runningState:"실행 중",pausedState:"일시 중지",completedState:"완료",stoppedState:"중지됨",startNew:"새 검사 시작",removedLinks:"선택한 링크를 제거했습니다.",emptySelection:"계속하려면 링크를 하나 이상 선택하세요.",extractFirst:"먼저 Telegram 링크가 포함된 텍스트를 추가하세요.",checkingStarted:"검사를 시작했습니다.",checkingPaused:"검사를 일시 중지했습니다.",checkingResumed:"검사를 다시 시작했습니다.",checkingStopped:"검사를 중지하고 완료된 결과를 저장했습니다.",noCompletedLinks:"아직 완료된 링크가 없습니다.",uploadError:"파일을 읽을 수 없습니다. 지원되는 텍스트 파일을 선택하세요.",selectCategory:"다운로드할 범주를 선택하세요.",settingsSaved:"환경설정을 저장했습니다.",checkFailed:"링크를 검사할 수 없습니다. 재시도 또는 중지를 위해 검사를 일시 중지했습니다.",downloadFailed:"내보내기를 만들 수 없습니다.",fileLoaded:"파일을 불러왔습니다",linksExtracted:"링크를 추출했습니다",privateExplanation:"일반 모드에서는 비공개 Telegram 링크를 확인할 수 없어 수동 확인으로 보냈습니다.",elapsedLabel:"경과"},
    es: {workspace:"ESPACIO DE TRABAJO",checker:"Comprobador de enlaces",history:"Historial",privateByDesign:"Privacidad ante todo",privateTip:"Tus enlaces permanecen en este servidor. No necesitas iniciar sesión en Telegram para comprobar páginas públicas.",personalSpace:"Espacio personal",publicCheck:"COMPROBADOR DE ENLACES PÚBLICOS",welcomeTitle:"Descubre adónde llevan tus enlaces.",welcomeCopy:"Una vista más clara de tus enlaces de Telegram. Pega, revisa y comprueba páginas públicas desde un mismo espacio.",noLogin:"No necesitas iniciar sesión en Telegram",totalLinks:"Enlaces totales",publicValid:"Páginas públicas",manualCheck:"Revisión manual",needsReview:"Requiere revisión",readyToReview:"Listos para revisar",confirmedMetadata:"Con datos de página",privateLinks:"Enlaces privados",notEnoughEvidence:"Pruebas insuficientes",yourLinks:"TUS ENLACES",addTelegramLinks:"Añade enlaces de Telegram",pasteOrUpload:"Pega texto o sube un archivo pequeño para comenzar.",clear:"Borrar",pasteText:"Pega tu texto",extractLinks:"Extraer enlaces",dropFile:"Suelta un archivo aquí",uploadDescription:"o selecciónalo en tu dispositivo",browseFiles:"Explorar archivos",fileLimits:"TXT, CSV, LOG, MD · hasta 2 MB",reviewLinks:"REVISAR ENLACES",foundLinks:"Enlaces extraídos",startOver:"Empezar de nuevo",selectAll:"Seleccionar todo",removeSelected:"Eliminar selección",privateRouted:"Los enlaces privados se envían a revisión manual.",chooseMode:"Elegir modo",checkMode:"MODO DE REVISIÓN",chooseHow:"Elige cómo comprobarlos",modeIntro:"Selecciona el método que mejor se adapte a tus necesidades.",available:"DISPONIBLE",notConfigured:"NO CONFIGURADO",normalMode:"Modo normal",normalDescription:"Comprueba páginas públicas de Telegram. No necesitas cuenta ni credenciales API.",privacyFirst:"Privacidad primero",premiumMode:"Modo premium",premiumDescription:"Verificación mediante Telegram API con más datos.",premiumUnavailable:"Requiere un servicio Telethon independiente",normalLimitation:"El modo normal usa vistas públicas de Telegram. No se pueden verificar enlaces privados sin autenticación.",resultDetails:"DETALLES DEL RESULTADO",chooseMetadata:"Elige los detalles",metadataDescription:"Selecciona los campos para los resultados y las exportaciones.",saveDefault:"Guardar como predeterminado",back:"Atrás",startChecking:"Iniciar comprobación",liveCheck:"COMPROBACIÓN EN VIVO",checkingLinks:"Comprobando tus enlaces",checkingCarefully:"Comprobando páginas públicas de forma secuencial.",running:"En curso",currentLink:"Enlace actual",elapsed:"Tiempo transcurrido",estimated:"Tiempo restante",pauseHint:"Puedes pausar en cualquier momento. Los resultados se guardan automáticamente.",pause:"Pausar",stopSave:"Detener y guardar",resume:"Reanudar",results:"RESULTADOS",scanResults:"Resultados del análisis",newScan:"Nuevo análisis",searchLinks:"Buscar enlaces o nombres",exportResults:"Exportar resultados",exportDescription:"Selecciona categorías para descargar archivos de texto separados.",downloadSelected:"Descargar selección",yourWorkspace:"TU ESPACIO",historyTitle:"Historial de análisis",historyCopy:"Tus sesiones recientes estarán aquí.",footerPrivacy:"Tus datos permanecen en tu espacio local",version:"VERSIÓN 1.0",characters:"caracteres",linksFound:"enlaces encontrados",duplicatesRemoved:"duplicados eliminados",ignored:"textos irrelevantes ignorados",selected:"seleccionados",link:"Enlace",name:"Nombre",visibility:"Visibilidad",status:"Estado",checkedAt:"Fecha de revisión",allResults:"Todos",valid:"Válido",expired:"Caducado",revoked:"Revocado",private:"Privado",restricted:"Restringido",usernameNotFound:"Usuario no encontrado",invalidFormat:"Formato no válido",unknownError:"Error desconocido",nothingToExport:"No hay resultados en esta categoría.",exportReady:"Exportación lista",saved:"Guardado",noLinks:"Aún no hay enlaces",noResults:"Ningún resultado coincide con los filtros.",noHistory:"Aún no hay sesiones. Los análisis completados aparecerán aquí.",runningState:"EN CURSO",pausedState:"EN PAUSA",completedState:"COMPLETADO",stoppedState:"DETENIDO",startNew:"Iniciar una nueva comprobación",removedLinks:"Se eliminaron los enlaces seleccionados.",emptySelection:"Selecciona al menos un enlace para continuar.",extractFirst:"Añade primero texto con enlaces de Telegram.",checkingStarted:"Comprobación iniciada.",checkingPaused:"Comprobación pausada.",checkingResumed:"Comprobación reanudada.",checkingStopped:"Comprobación detenida. Se guardaron los resultados completados.",noCompletedLinks:"Aún no hay enlaces completados.",uploadError:"No se pudo leer el archivo. Prueba con un archivo de texto compatible.",selectCategory:"Elige al menos una categoría para descargar.",settingsSaved:"Se guardaron tus preferencias.",checkFailed:"No se pudo comprobar el enlace. El análisis está en pausa para reintentar o detenerlo.",downloadFailed:"No se pudo crear la exportación.",fileLoaded:"Archivo cargado",linksExtracted:"Enlaces extraídos",privateExplanation:"Los enlaces privados no se verifican en modo normal y se envían a revisión manual.",elapsedLabel:"transcurrido"},
    fr: {workspace:"ESPACE DE TRAVAIL",checker:"Vérificateur de liens",history:"Historique",privateByDesign:"La confidentialité avant tout",privateTip:"Vos liens restent sur ce serveur. Aucun compte Telegram n'est nécessaire pour vérifier les pages publiques.",personalSpace:"Espace personnel",publicCheck:"VÉRIFICATEUR DE LIENS PUBLICS",welcomeTitle:"Découvrez où mènent vos liens.",welcomeCopy:"Une vue plus claire de vos liens Telegram. Collez, vérifiez et examinez les pages publiques au même endroit.",noLogin:"Connexion Telegram non requise",totalLinks:"Nombre de liens",publicValid:"Pages publiques",manualCheck:"Vérification manuelle",needsReview:"À examiner",readyToReview:"Prêts à examiner",confirmedMetadata:"Avec les infos de page",privateLinks:"Liens privés",notEnoughEvidence:"Preuves insuffisantes",yourLinks:"VOS LIENS",addTelegramLinks:"Ajouter des liens Telegram",pasteOrUpload:"Collez du texte ou importez un petit fichier texte pour commencer.",clear:"Effacer",pasteText:"Collez votre texte",extractLinks:"Extraire les liens",dropFile:"Déposez un fichier ici",uploadDescription:"ou choisissez sur votre appareil",browseFiles:"Parcourir les fichiers",fileLimits:"TXT, CSV, LOG, MD · 2 Mo maximum",reviewLinks:"EXAMINER LES LIENS",foundLinks:"Liens extraits",startOver:"Recommencer",selectAll:"Tout sélectionner",removeSelected:"Supprimer la sélection",privateRouted:"Les liens privés sont envoyés en vérification manuelle.",chooseMode:"Choisir le mode",checkMode:"MODE DE VÉRIFICATION",chooseHow:"Choisissez une méthode",modeIntro:"Choisissez la vérification adaptée à vos besoins.",available:"DISPONIBLE",notConfigured:"NON CONFIGURÉ",normalMode:"Mode normal",normalDescription:"Vérifiez les aperçus publics Telegram, sans compte ni identifiants API.",privacyFirst:"Confidentialité d'abord",premiumMode:"Mode premium",premiumDescription:"Vérification via l'API Telegram avec plus de métadonnées.",premiumUnavailable:"Nécessite un service Telethon distinct",normalLimitation:"Le mode normal utilise les aperçus publics de Telegram. Les liens privés ne peuvent pas être vérifiés sans authentification.",resultDetails:"DÉTAILS DU RÉSULTAT",chooseMetadata:"Choisir les détails",metadataDescription:"Sélectionnez les champs à conserver dans les résultats et les exports.",saveDefault:"Enregistrer par défaut",back:"Retour",startChecking:"Lancer la vérification",liveCheck:"VÉRIFICATION EN DIRECT",checkingLinks:"Vérification des liens",checkingCarefully:"Vérification séquentielle des pages publiques.",running:"En cours",currentLink:"Lien actuel",elapsed:"Temps écoulé",estimated:"Temps restant estimé",pauseHint:"Mettez en pause à tout moment. Les résultats terminés sont enregistrés automatiquement.",pause:"Pause",stopSave:"Arrêter et enregistrer",resume:"Reprendre",results:"RÉSULTATS",scanResults:"Résultats de l'analyse",newScan:"Nouvelle analyse",searchLinks:"Rechercher un lien ou un nom",exportResults:"Exporter les résultats",exportDescription:"Choisissez les catégories à télécharger dans des fichiers séparés.",downloadSelected:"Télécharger la sélection",yourWorkspace:"VOTRE ESPACE",historyTitle:"Historique des analyses",historyCopy:"Retrouvez ici vos dernières sessions de vérification.",footerPrivacy:"Vos données restent dans votre espace local",version:"VERSION 1.0",characters:"caractères",linksFound:"liens trouvés",duplicatesRemoved:"doublons supprimés",ignored:"textes sans lien ignorés",selected:"sélectionnés",link:"Lien",name:"Nom",visibility:"Visibilité",status:"Statut",checkedAt:"Date de vérification",allResults:"Tous les résultats",valid:"Valide",expired:"Expiré",revoked:"Révoqué",private:"Privé",restricted:"Restreint",usernameNotFound:"Nom d'utilisateur introuvable",invalidFormat:"Format invalide",unknownError:"Erreur inconnue",nothingToExport:"Aucun résultat dans cette catégorie.",exportReady:"Export prêt",saved:"Enregistré",noLinks:"Aucun lien pour le moment",noResults:"Aucun résultat ne correspond aux filtres.",noHistory:"Aucune session pour le moment. Les analyses terminées apparaîtront ici.",runningState:"EN COURS",pausedState:"EN PAUSE",completedState:"TERMINÉ",stoppedState:"ARRÊTÉ",startNew:"Lancer une nouvelle vérification",removedLinks:"Les liens sélectionnés ont été supprimés.",emptySelection:"Sélectionnez au moins un lien pour continuer.",extractFirst:"Ajoutez d'abord du texte contenant des liens Telegram.",checkingStarted:"Vérification lancée.",checkingPaused:"Vérification en pause.",checkingResumed:"Vérification reprise.",checkingStopped:"Vérification arrêtée. Les résultats terminés sont enregistrés.",noCompletedLinks:"Aucun lien vérifié pour le moment.",uploadError:"Impossible de lire le fichier. Choisissez un fichier texte compatible.",selectCategory:"Choisissez une catégorie à télécharger.",settingsSaved:"Préférences enregistrées.",checkFailed:"Impossible de vérifier ce lien. L'analyse est en pause pour réessayer ou arrêter.",downloadFailed:"Impossible de créer l'export.",fileLoaded:"Fichier chargé",linksExtracted:"Liens extraits",privateExplanation:"Les liens privés ne sont pas vérifiables en mode normal et sont placés en vérification manuelle.",elapsedLabel:"écoulé"},
    ar: {workspace:"مساحة العمل",checker:"فاحص الروابط",history:"سجل الفحص",privateByDesign:"الخصوصية أولاً",privateTip:"تبقى روابطك على هذا الخادم. لا يلزم تسجيل الدخول إلى Telegram لفحص الصفحات العامة.",personalSpace:"مساحة شخصية",publicCheck:"فحص الروابط العامة",welcomeTitle:"اكتشف إلى أين تقود روابطك.",welcomeCopy:"نظرة أوضح على روابط Telegram. الصق الروابط وراجعها وافحص الصفحات العامة في مساحة واحدة.",noLogin:"لا يلزم تسجيل الدخول إلى Telegram",totalLinks:"إجمالي الروابط",publicValid:"صفحات عامة",manualCheck:"فحص يدوي",needsReview:"تحتاج إلى مراجعة",readyToReview:"جاهزة للمراجعة",confirmedMetadata:"تحتوي على بيانات الصفحة",privateLinks:"روابط خاصة",notEnoughEvidence:"الأدلة غير كافية",yourLinks:"روابطك",addTelegramLinks:"أضف روابط Telegram",pasteOrUpload:"الصق نصاً أو ارفع ملفاً نصياً صغيراً للبدء.",clear:"مسح",pasteText:"الصق النص",extractLinks:"استخراج الروابط",dropFile:"أفلت الملف هنا",uploadDescription:"أو اختر من جهازك",browseFiles:"تصفح الملفات",fileLimits:"TXT وCSV وLOG وMD · حتى 2 ميغابايت",reviewLinks:"مراجعة الروابط",foundLinks:"الروابط المستخرجة",startOver:"البدء من جديد",selectAll:"تحديد الكل",removeSelected:"إزالة المحدد",privateRouted:"تُنقل الروابط الخاصة إلى المراجعة اليدوية.",chooseMode:"اختر وضع الفحص",checkMode:"وضع الفحص",chooseHow:"اختر طريقة الفحص",modeIntro:"اختر طريقة التحقق المناسبة لاحتياجاتك.",available:"متاح",notConfigured:"غير مُهيأ",normalMode:"الوضع العادي",normalDescription:"افحص معاينات صفحات Telegram العامة دون حساب أو بيانات API.",privacyFirst:"الخصوصية أولاً",premiumMode:"الوضع المميز",premiumDescription:"التحقق عبر Telegram API مع بيانات وصفية أعمق.",premiumUnavailable:"يتطلب خدمة Telethon منفصلة",normalLimitation:"يستخدم الفحص العادي معاينات Telegram العامة. لا يمكن التحقق من الروابط الخاصة بشكل موثوق دون مصادقة Telegram.",resultDetails:"تفاصيل النتيجة",chooseMetadata:"اختر تفاصيل النتيجة",metadataDescription:"حدد الحقول التي تريد تضمينها في النتائج والتصدير.",saveDefault:"حفظ كإعداد افتراضي",back:"رجوع",startChecking:"بدء الفحص",liveCheck:"فحص مباشر",checkingLinks:"جارٍ فحص الروابط",checkingCarefully:"يتم فحص الصفحات العامة بالتتابع بعناية.",running:"قيد التشغيل",currentLink:"الرابط الحالي",elapsed:"الوقت المنقضي",estimated:"الوقت المتبقي",pauseHint:"يمكنك الإيقاف مؤقتاً في أي وقت. تُحفظ النتائج المكتملة تلقائياً.",pause:"إيقاف مؤقت",stopSave:"إيقاف وحفظ",resume:"استئناف",results:"النتائج",scanResults:"نتائج الفحص",newScan:"فحص جديد",searchLinks:"ابحث عن الروابط أو الأسماء",exportResults:"تصدير النتائج",exportDescription:"حدد الفئات لتنزيلها في ملفات نصية منفصلة.",downloadSelected:"تنزيل المحدد",yourWorkspace:"مساحة عملك",historyTitle:"سجل الفحص",historyCopy:"تجد هنا جلسات الفحص الأخيرة.",footerPrivacy:"تبقى بياناتك في مساحة العمل المحلية",version:"الإصدار 1.0",characters:"حرفاً",linksFound:"روابط موجودة",duplicatesRemoved:"تكرارات أزيلت",ignored:"نصوص غير مرتبطة تم تجاهلها",selected:"محدد",link:"الرابط",name:"الاسم",visibility:"الظهور",status:"الحالة",checkedAt:"وقت الفحص",allResults:"كل النتائج",valid:"صالح",expired:"منتهي",revoked:"ملغى",private:"خاص",restricted:"مقيّد",usernameNotFound:"اسم المستخدم غير موجود",invalidFormat:"تنسيق غير صالح",unknownError:"خطأ غير معروف",nothingToExport:"لا توجد نتائج في هذه الفئة.",exportReady:"التصدير جاهز",saved:"تم الحفظ",noLinks:"لا توجد روابط بعد",noResults:"لا توجد نتائج تطابق عوامل التصفية.",noHistory:"لا توجد جلسات فحص بعد. ستظهر عمليات الفحص المكتملة هنا.",runningState:"قيد التشغيل",pausedState:"متوقف مؤقتاً",completedState:"مكتمل",stoppedState:"متوقف",startNew:"بدء فحص جديد",removedLinks:"تمت إزالة الروابط المحددة.",emptySelection:"حدد رابطاً واحداً على الأقل للمتابعة.",extractFirst:"أضف أولاً نصاً يحتوي على روابط Telegram.",checkingStarted:"بدأ الفحص.",checkingPaused:"تم إيقاف الفحص مؤقتاً.",checkingResumed:"تم استئناف الفحص.",checkingStopped:"توقف الفحص. حُفظت النتائج المكتملة.",noCompletedLinks:"لا توجد روابط مكتملة لعرضها بعد.",uploadError:"تعذرت قراءة الملف. جرّب ملفاً نصياً مدعوماً.",selectCategory:"اختر فئة واحدة على الأقل للتنزيل.",settingsSaved:"تم حفظ تفضيلاتك.",checkFailed:"تعذر فحص الرابط. أُوقف الفحص مؤقتاً لإعادة المحاولة أو الإيقاف.",downloadFailed:"تعذر إنشاء التصدير.",fileLoaded:"تم تحميل الملف",linksExtracted:"تم استخراج الروابط",privateExplanation:"لا يمكن التحقق من روابط Telegram الخاصة في الوضع العادي، وقد وُضعت في الفحص اليدوي.",elapsedLabel:"منقضٍ"}
};

const categoryOrder = ["VALID", "EXPIRED", "REVOKED", "PRIVATE", "RESTRICTED", "USERNAME_NOT_FOUND", "INVALID_FORMAT", "UNKNOWN_ERROR"];
const categoryLabels = {VALID:"valid", EXPIRED:"expired", REVOKED:"revoked", PRIVATE:"private", RESTRICTED:"restricted", USERNAME_NOT_FOUND:"usernameNotFound", INVALID_FORMAT:"invalidFormat", UNKNOWN_ERROR:"unknownError"};
const metadataLabels = {link:"link", name:"name", visibility:"visibility", status:"status", checkedAt:"checkedAt"};
const visibilityLabels = {
    en:{Public:"Public",Private:"Private",Unknown:"Unknown"},
    hi:{Public:"सार्वजनिक",Private:"निजी",Unknown:"अज्ञात"},
    bn:{Public:"সর্বজনীন",Private:"ব্যক্তিগত",Unknown:"অজানা"},
    ru:{Public:"Публичная",Private:"Приватная",Unknown:"Неизвестно"},
    zh:{Public:"公开",Private:"私密",Unknown:"未知"},
    ja:{Public:"公開",Private:"非公開",Unknown:"不明"},
    ko:{Public:"공개",Private:"비공개",Unknown:"알 수 없음"},
    es:{Public:"Pública",Private:"Privada",Unknown:"Desconocida"},
    fr:{Public:"Publique",Private:"Privée",Unknown:"Inconnue"},
    ar:{Public:"عامة",Private:"خاصة",Unknown:"غير معروفة"}
};
const additionalTranslations = {
    en:{resetDefault:"Reset default"},
    hi:{resetDefault:"डिफ़ॉल्ट रीसेट करें"},
    bn:{resetDefault:"ডিফল্ট রিসেট করুন"},
    ru:{resetDefault:"Сбросить настройки"},
    zh:{resetDefault:"重置默认设置"},
    ja:{resetDefault:"既定値に戻す"},
    ko:{resetDefault:"기본값 재설정"},
    es:{resetDefault:"Restablecer valores"},
    fr:{resetDefault:"Réinitialiser"},
    ar:{resetDefault:"إعادة ضبط الافتراضي"}
};
const exportNames = {VALID:"working_links.txt", EXPIRED:"expired_links.txt", REVOKED:"revoked_links.txt", PRIVATE:"manual_check_private.txt", RESTRICTED:"restricted_links.txt", USERNAME_NOT_FOUND:"username_not_found.txt", INVALID_FORMAT:"invalid_format.txt", UNKNOWN_ERROR:"unknown_errors.txt"};
const $ = (selector) => document.querySelector(selector);
const state = {
    language:"en", theme:"light", metadata:["link","name","visibility","status","checkedAt"],
    links:[], selected:new Set(), results:[], selectedMetadata:["link","name","visibility","status","checkedAt"],
    jobId:null, jobIds:[], jobState:"idle", running:false, loopActive:false, pauseRequested:false, stopRequested:false,
    startedAt:0, elapsedTimer:null, fileName:"", extractionDuplicates:0
};

function t(key) { return (languages[state.language] && languages[state.language][key]) || additionalTranslations[state.language]?.[key] || languages.en[key] || key; }
function escapeHtml(value) { return String(value ?? "").replace(/[&<>"']/g, (character) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[character])); }
function apiError(error) { return error && error.error && error.error.message ? error.error.message : t("checkFailed"); }
async function request(url, options = {}) {
    const response = await fetch(url, options);
    const contentType = response.headers.get("content-type") || "";
    if (!response.ok) {
        if (contentType.includes("application/json")) throw new Error(apiError(await response.json()));
        throw new Error(t("downloadFailed"));
    }
    if (contentType.includes("application/json")) {
        const body = await response.json();
        if (!body.success) throw new Error(apiError(body));
        return body.data;
    }
    return response;
}
function post(url, data) { return request(url, {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data)}); }
function toast(message, type = "success") {
    const item = document.createElement("div");
    item.className = `toast toast-${type}`;
    item.innerHTML = `<span>${type === "error" ? "!" : "✓"}</span><p>${escapeHtml(message)}</p>`;
    $("#toast-region").append(item);
    window.setTimeout(() => item.remove(), 3800);
}
function applyLanguage() {
    document.documentElement.lang = state.language;
    document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (languages[state.language]?.[key]) element.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
    $("#language-select").value = state.language;
    $("#breadcrumb-current").textContent = t($("#view-history").hidden ? "checker" : "history");
    updateCharacterCount();
    renderAll();
}
function categoryName(category) { return t(categoryLabels[category] || "unknownError"); }
function statusClass(category) { return `status-${category.toLowerCase()}`; }
function updateCharacterCount() {
    const count = ($("#link-input").value || "").length;
    $("#char-count").textContent = `${count.toLocaleString()} ${t("characters")}`;
}
async function persistSettings(settings) {
    try {
        await post("/api/settings", settings);
        return true;
    } catch (error) {
        toast(error.message || t("settingsSaved"), "error");
        return false;
    }
}
function renderMetadataOptions() {
    $("#metadata-options").innerHTML = Object.keys(metadataLabels).map((field) =>
        `<label class="metadata-option"><input type="checkbox" value="${field}" ${state.selectedMetadata.includes(field) ? "checked" : ""}><span class="metadata-check">✓</span><span>${escapeHtml(t(metadataLabels[field]))}</span></label>`
    ).join("");
    $("#metadata-options").querySelectorAll("input").forEach((input) => {
        input.addEventListener("change", () => {
            state.selectedMetadata = [...$("#metadata-options").querySelectorAll("input:checked")].map((item) => item.value);
        });
    });
}
function renderLinkList() {
    const list = $("#link-list");
    if (!state.links.length) {
        list.innerHTML = `<div class="empty-state"><span>⌁</span><strong>${escapeHtml(t("noLinks"))}</strong></div>`;
        $("#selected-count").textContent = `0 ${t("selected")}`;
        $("#continue-button").disabled = true;
        $("#start-check").disabled = true;
        return;
    }
    list.innerHTML = state.links.map((link, index) => {
        const selected = state.selected.has(link);
        const path = new URL(link).pathname;
        const privateLink = /^\/(?:\+|joinchat\/|c\/)/.test(path);
        const kind = privateLink ? t("private") : "t.me";
        return `<div class="link-row"><label class="link-check"><input aria-label="${escapeHtml(t("selectAll"))}: ${escapeHtml(link)}" type="checkbox" data-link="${escapeHtml(link)}" ${selected ? "checked" : ""}><span class="custom-check"></span></label><span class="link-index">${String(index + 1).padStart(2, "0")}</span><span class="link-url" title="${escapeHtml(link)}">${escapeHtml(link)}</span><span class="link-kind ${privateLink ? "private-kind" : ""}">${escapeHtml(kind)}</span></div>`;
    }).join("");
    list.querySelectorAll("[data-link]").forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) state.selected.add(checkbox.dataset.link);
            else state.selected.delete(checkbox.dataset.link);
            updateSelectionCount();
        });
    });
    updateSelectionCount();
}
function updateSelectionCount() {
    $("#selected-count").textContent = `${state.selected.size} ${t("selected")}`;
    $("#select-all").checked = state.links.length > 0 && state.selected.size === state.links.length;
    $("#continue-button").disabled = state.selected.size === 0;
    $("#start-check").disabled = state.selected.size === 0;
}
function renderStats() {
    const total = state.results.length;
    const count = (category) => state.results.filter((result) => result.category === category).length;
    $("#stat-total").textContent = state.links.length || total;
    $("#stat-valid").textContent = count("VALID");
    $("#stat-private").textContent = count("PRIVATE");
    $("#stat-review").textContent = total - count("VALID") - count("PRIVATE");
}
function renderMetadata(result) {
    return state.selectedMetadata.filter((field) => {
        if (field === "link" || field === "status" || field === "checkedAt") return true;
        return result[field] !== null && result[field] !== undefined && result[field] !== "";
    }).map((field) => {
        let value = result[field];
        if (field === "status") value = categoryName(result.category);
        if (field === "checkedAt") value = result.checkedAt || "";
        if (field === "visibility") value = visibilityLabels[state.language]?.[result.visibility] || result.visibility || "";
        if (field === "link") value = result.link;
        if (field === "name") value = result.name;
        return `<span class="result-detail"><b>${escapeHtml(t(metadataLabels[field]))}</b>${escapeHtml(value)}</span>`;
    }).join("");
}
function renderScanStats() {
    const counts = Object.fromEntries(categoryOrder.map((category) => [category, state.results.filter((result) => result.category === category).length]));
    $("#scan-stats").innerHTML = categoryOrder.map((category) => `<div class="scan-stat"><span class="mini-status ${statusClass(category)}"></span><span>${escapeHtml(categoryName(category))}</span><b>${counts[category]}</b></div>`).join("");
    renderStats();
}
function renderLiveResults() {
    const shown = [...state.results].reverse().slice(0, 4);
    $("#live-results").innerHTML = shown.map((result) => `<article class="live-result"><span class="mini-status ${statusClass(result.category)}"></span><div class="live-result-body"><strong>${escapeHtml(categoryName(result.category))}</strong><div class="result-details">${renderMetadata(result)}</div></div></article>`).join("");
}
function renderResultCounters() {
    $("#result-counters").innerHTML = categoryOrder.map((category) => {
        const count = state.results.filter((result) => result.category === category).length;
        return `<button class="counter-chip ${statusClass(category)}" data-category="${category}"><span>${escapeHtml(categoryName(category))}</span><b>${count}</b></button>`;
    }).join("");
    $("#result-filter").innerHTML = `<option value="all">${escapeHtml(t("allResults"))}</option>` + categoryOrder.map((category) => `<option value="${category}">${escapeHtml(categoryName(category))}</option>`).join("");
    $("#export-options").innerHTML = categoryOrder.map((category) => {
        const count = state.results.filter((result) => result.category === category).length;
        return `<label class="export-check"><input type="checkbox" value="${category}" ${count ? "checked" : "disabled"}><span>${escapeHtml(categoryName(category))}</span><small>${count}</small></label>`;
    }).join("");
    $("#result-counters").querySelectorAll("[data-category]").forEach((button) => button.addEventListener("click", () => {
        $("#result-filter").value = button.dataset.category;
        renderResults();
    }));
}
function renderResults() {
    const query = $("#result-search").value.trim().toLowerCase();
    const filter = $("#result-filter").value || "all";
    const filtered = state.results.filter((result) =>
        (filter === "all" || result.category === filter) &&
        (!query || `${result.link} ${result.name || ""} ${result.details || ""}`.toLowerCase().includes(query))
    );
    $("#results-list").innerHTML = filtered.length ? filtered.map((result) =>
        `<article class="result-card"><div class="result-card-top"><span class="result-status ${statusClass(result.category)}"><span class="mini-status ${statusClass(result.category)}"></span>${escapeHtml(categoryName(result.category))}</span><span class="result-time">${escapeHtml(result.checkedAt || "")}</span></div><div class="result-details">${renderMetadata(result)}</div></article>`
    ).join("") : `<div class="empty-state"><span>⌕</span><strong>${escapeHtml(t("noResults"))}</strong></div>`;
}
function renderAll() {
    renderMetadataOptions();
    renderLinkList();
    renderStats();
    renderScanStats();
    renderLiveResults();
    renderResultCounters();
    renderResults();
}
function showError(message) {
    $("#input-error").textContent = message;
    $("#input-error").hidden = false;
}
function hideError() { $("#input-error").hidden = true; }
async function extractText(text, sourceName = "") {
    hideError();
    if (!text.trim()) { showError(t("extractFirst")); return; }
    try {
        const response = await post("/api/extract", {text});
        state.links = response.links;
        state.selected = new Set(response.links);
        state.extractionDuplicates = response.duplicatesRemoved || 0;
        state.fileName = sourceName;
        $("#extraction-summary").textContent = `${response.count} ${t("linksFound")} · ${state.extractionDuplicates} ${t("duplicatesRemoved")}`;
        $("#review-section").hidden = false;
        $("#mode-section").hidden = true;
        $("#progress-section").hidden = true;
        $("#results-section").hidden = true;
        renderLinkList();
        renderStats();
        $("#review-section").scrollIntoView({behavior:"smooth", block:"start"});
        if (response.count) toast(t("linksExtracted"));
        else showError(t("extractFirst"));
    } catch (error) {
        showError(error.message || t("uploadError"));
    }
}
function showModeSection() {
    if (!state.selected.size) { toast(t("emptySelection"), "error"); return; }
    $("#mode-section").hidden = false;
    $("#mode-section").scrollIntoView({behavior:"smooth", block:"start"});
}
function formatTime(seconds) {
    const safe = Math.max(0, Math.floor(seconds));
    return `${String(Math.floor(safe / 60)).padStart(2, "0")}:${String(safe % 60).padStart(2, "0")}`;
}
function updateProgress(currentIndex, total) {
    const count = state.results.length;
    const percent = total ? Math.round(count / total * 100) : 0;
    $("#progress-count").textContent = count;
    $("#progress-total").textContent = total;
    $("#progress-percent").textContent = `${percent}%`;
    $("#progress-fill").style.width = `${percent}%`;
    if (state.startedAt) {
        const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
        $("#elapsed-time").textContent = formatTime(elapsed);
        const remaining = count ? (elapsed / count) * Math.max(0, total - count) : null;
        $("#estimated-time").textContent = remaining === null ? "—" : formatTime(remaining);
    }
    $("#current-link").textContent = currentIndex < total ? [...state.selected][currentIndex] || "—" : "—";
    renderScanStats();
    renderLiveResults();
}
async function setJobState(jobState) {
    state.jobState = jobState;
    if (state.jobId) await post(`/api/jobs/${state.jobId}/state`, {state:jobState});
}
async function beginScan() {
    if (state.running) return;
    if (!state.selected.size) { toast(t("emptySelection"), "error"); return; }
    state.selectedMetadata = state.selectedMetadata.length ? state.selectedMetadata : ["link","status"];
    if ($("#save-default").checked) {
        state.metadata = [...state.selectedMetadata];
        await persistSettings({metadata:state.metadata});
    }
    const links = [...state.selected];
    state.results = [];
    state.startedAt = Date.now();
    state.pauseRequested = false;
    state.stopRequested = false;
    state.running = true;
    state.jobState = "running";
    state.links = [...state.selected];
    try {
        const job = await post("/api/jobs", {links, metadata:state.selectedMetadata});
        state.jobId = job.id;
        state.jobIds = [state.jobId, ...state.jobIds.filter((id) => id !== state.jobId)].slice(0, 20);
        localStorage.setItem("linkwell.jobs", JSON.stringify(state.jobIds));
        localStorage.setItem("linkwell.currentJob", state.jobId);
        await setJobState("running");
    } catch (error) {
        state.running = false;
        toast(error.message, "error");
        return;
    }
    await runScanLoop(links, 0);
}

async function runScanLoop(links, startAt) {
    state.loopActive = true;
    $("#pause-check").disabled = false;
    $("#resume-check").disabled = false;
    $("#stop-check").disabled = false;
    $("#stop-check").hidden = false;
    $("#mode-section").hidden = true;
    $("#progress-section").hidden = false;
    $("#results-section").hidden = true;
    $("#job-badge").innerHTML = `<span class="live-dot"></span>${escapeHtml(t("running"))}`;
    $("#pause-check").hidden = false;
    $("#resume-check").hidden = true;
    updateProgress(0, links.length);
    $("#progress-section").scrollIntoView({behavior:"smooth", block:"start"});
    toast(t("checkingStarted"));
    state.elapsedTimer = window.setInterval(() => updateProgress(state.results.length, links.length), 1000);

    for (let index = startAt; index < links.length; index++) {
        if (state.stopRequested) break;
        while (state.pauseRequested && !state.stopRequested) {
            await new Promise((resolve) => window.setTimeout(resolve, 150));
        }
        if (state.stopRequested) break;
        $("#current-link").textContent = links[index];
        try {
            const result = await post("/api/check", {link:links[index]});
            await post(`/api/jobs/${state.jobId}/results`, {result});
            state.results.push(result);
            updateProgress(index, links.length);
        } catch (error) {
            state.pauseRequested = true;
            await setJobState("paused").catch(() => {});
            $("#job-badge").textContent = t("pausedState");
            $("#pause-check").hidden = true;
            $("#resume-check").hidden = false;
            toast(`${t("checkFailed")} ${error.message || ""}`, "error");
            while (state.pauseRequested && !state.stopRequested) await new Promise((resolve) => window.setTimeout(resolve, 150));
            if (state.stopRequested) break;
            index--;
            continue;
        }
        if (index < links.length - 1) await new Promise((resolve) => window.setTimeout(resolve, 650));
    }

    state.running = false;
    state.loopActive = false;
    window.clearInterval(state.elapsedTimer);
    const stopped = state.stopRequested;
    await setJobState(stopped ? "cancelled" : "completed").catch((error) => toast(error.message, "error"));
    state.stopRequested = false;
    state.pauseRequested = false;
    updateProgress(links.length, links.length);
    $("#progress-title").textContent = stopped ? t("stoppedState") : t("scanResults");
    $("#progress-subtitle").textContent = stopped ? t("checkingStopped") : t("linksExtracted");
    $("#job-badge").textContent = stopped ? t("stoppedState") : t("completedState");
    $("#pause-check").hidden = true;
    $("#resume-check").hidden = true;
    $("#stop-check").hidden = true;
    $("#results-section").hidden = false;
    $("#result-summary").textContent = `${state.results.length} ${t("linksFound")} · ${stopped ? t("stoppedState") : t("completedState")}`;
    renderAll();
    $("#results-section").scrollIntoView({behavior:"smooth", block:"start"});
}
async function pauseScan() {
    if (!state.running || state.pauseRequested) return;
    state.pauseRequested = true;
    $("#pause-check").disabled = true;
    try { await setJobState("paused"); }
    catch (error) { state.pauseRequested = false; $("#pause-check").disabled = false; toast(error.message, "error"); return; }
    $("#job-badge").textContent = t("pausedState");
    $("#pause-check").hidden = true;
    $("#pause-check").disabled = false;
    $("#resume-check").hidden = false;
    toast(t("checkingPaused"));
}
async function resumeScan() {
    if (!state.running || !state.pauseRequested) return;
    $("#resume-check").disabled = true;
    try { await setJobState("running"); }
    catch (error) { $("#resume-check").disabled = false; toast(error.message, "error"); return; }
    state.pauseRequested = false;
    $("#job-badge").innerHTML = `<span class="live-dot"></span>${escapeHtml(t("running"))}`;
    $("#pause-check").hidden = false;
    $("#stop-check").hidden = false;
    $("#resume-check").hidden = true;
    $("#resume-check").disabled = false;
    toast(t("checkingResumed"));
    if (!state.loopActive) await runScanLoop(state.links, state.results.length);
}
async function stopScan() {
    if (!state.running || state.stopRequested) return;
    state.stopRequested = true;
    state.pauseRequested = false;
    $("#stop-check").disabled = true;
    try { await setJobState("stopping"); }
    catch (error) { toast(error.message, "error"); }
    toast(t("checkingStopped"));
}
async function downloadExports() {
    const categories = [...$("#export-options").querySelectorAll("input:checked")].map((input) => input.value);
    if (!categories.length) { toast(t("selectCategory"), "error"); return; }
    let downloaded = 0;
    for (const category of categories) {
        const hasData = state.results.some((result) => result.category === category);
        if (!hasData) continue;
        try {
            const response = await fetch("/api/export", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({category, results:state.results})});
            if (!response.ok) {
                const contentType = response.headers.get("content-type") || "";
                if (contentType.includes("application/json")) throw new Error(apiError(await response.json()));
                throw new Error(t("downloadFailed"));
            }
            const blob = await response.blob();
            const filename = response.headers.get("Content-Disposition")?.match(/filename="([^"]+)"/)?.[1] || exportNames[category];
            const anchor = document.createElement("a");
            anchor.href = URL.createObjectURL(blob);
            anchor.download = filename;
            document.body.append(anchor);
            anchor.click();
            anchor.remove();
            URL.revokeObjectURL(anchor.href);
            downloaded++;
            await new Promise((resolve) => window.setTimeout(resolve, 150));
        } catch (error) {
            toast(error.message || t("downloadFailed"), "error");
        }
    }
    if (downloaded) toast(t("exportReady"));
    else toast(t("nothingToExport"), "error");
}
function resetWorkflow() {
    state.links = [];
    state.selected = new Set();
    state.results = [];
    state.jobId = null;
    state.jobState = "idle";
    state.running = false;
    state.pauseRequested = false;
    state.stopRequested = false;
    localStorage.removeItem("linkwell.currentJob");
    $("#link-input").value = "";
    $("#review-section").hidden = true;
    $("#mode-section").hidden = true;
    $("#progress-section").hidden = true;
    $("#results-section").hidden = true;
    $("#progress-title").textContent = t("checkingLinks");
    updateCharacterCount();
    renderAll();
    window.scrollTo({top:0, behavior:"smooth"});
}
async function showHistory() {
    const list = $("#history-list");
    list.innerHTML = `<div class="empty-state"><span>◷</span><strong>${escapeHtml(t("noHistory"))}</strong></div>`;
    const history = [];
    for (const id of state.jobIds) {
        try {
            const job = await request(`/api/jobs/${id}`);
            history.push(job);
        } catch { /* A deleted or expired local record is omitted from history. */ }
    }
    if (!history.length) return;
    list.innerHTML = history.map((job) => {
        const count = job.results.length;
        const valid = job.results.filter((result) => result.category === "VALID").length;
        return `<button class="history-row" data-history="${job.id}"><span class="history-icon">◷</span><span class="history-info"><strong>${escapeHtml(new Date(job.created_at).toLocaleString())}</strong><small>${count} ${escapeHtml(t("linksFound"))} · ${escapeHtml(t(job.state === "completed" ? "completedState" : job.state === "paused" ? "pausedState" : "stoppedState"))}</small></span><span class="history-valid">${valid} ${escapeHtml(t("valid"))}</span><span>→</span></button>`;
    }).join("");
    list.querySelectorAll("[data-history]").forEach((button) => button.addEventListener("click", () => restoreJob(button.dataset.history)));
}
async function restoreJob(id) {
    try {
        const job = await request(`/api/jobs/${id}`);
        state.jobId = job.id;
        state.links = job.links || [];
        state.selected = new Set(state.links);
        state.results = job.results;
        state.jobState = job.state;
        state.selectedMetadata = job.metadata?.length ? job.metadata : state.metadata;
        $("#view-history").hidden = true;
        $("#view-checker").hidden = false;
        document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === "checker"));
        $("#breadcrumb-current").textContent = t("checker");
        $("#progress-section").hidden = true;
        $("#results-section").hidden = false;
        $("#result-summary").textContent = `${state.results.length} ${t("linksFound")}`;
        renderAll();
    } catch (error) { toast(error.message, "error"); }
}
async function restoreCurrentJob() {
    const id = localStorage.getItem("linkwell.currentJob");
    if (!id || !/^[a-f0-9]{32}$/.test(id)) return;
    try {
        const job = await request(`/api/jobs/${id}`);
        state.jobId = job.id;
        state.links = job.links || [];
        state.selected = new Set(state.links);
        state.results = job.results || [];
        state.selectedMetadata = job.metadata?.length ? job.metadata : state.metadata;
        state.running = ["queued", "running", "paused", "stopping"].includes(job.state);
        state.pauseRequested = state.running;
        state.stopRequested = false;
        state.loopActive = false;
        state.startedAt = Date.now() - Math.max(0, Date.now() - new Date(job.created_at).getTime());
        state.jobIds = [job.id, ...state.jobIds.filter((knownId) => knownId !== job.id)].slice(0, 20);
        localStorage.setItem("linkwell.jobs", JSON.stringify(state.jobIds));
        if (job.state === "running") await setJobState("paused");
        else if (job.state === "stopping") {
            await setJobState("cancelled");
            state.running = false;
            state.pauseRequested = false;
        }
        $("#mode-section").hidden = true;
        $("#review-section").hidden = true;
        if (!state.running) {
            $("#progress-section").hidden = true;
            $("#results-section").hidden = false;
            $("#result-summary").textContent = `${state.results.length} ${t("linksFound")}`;
            $("#stop-check").hidden = true;
        } else {
            $("#progress-section").hidden = false;
            $("#job-badge").textContent = t("pausedState");
            $("#progress-title").textContent = t("checkingLinks");
            $("#progress-subtitle").textContent = t("checkingCarefully");
            $("#pause-check").hidden = true;
            $("#resume-check").hidden = false;
            $("#stop-check").hidden = false;
            updateProgress(state.results.length, state.links.length);
        }
        renderAll();
    } catch (error) { toast(error.message, "error"); }
}
function changeView(view) {
    const history = view === "history";
    $("#view-history").hidden = !history;
    $("#view-checker").hidden = history;
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
    $("#breadcrumb-current").textContent = t(history ? "history" : "checker");
    $("#sidebar").classList.remove("sidebar-open");
    if (history) showHistory();
}
async function init() {
    try {
        const settings = await request("/api/settings");
        state.language = settings.language || "en";
        state.theme = settings.theme || "light";
        state.metadata = Array.isArray(settings.metadata) ? settings.metadata : state.metadata;
        state.selectedMetadata = [...state.metadata];
    } catch (error) { toast(error.message, "error"); }
    try {
        const config = await request("/api/config");
        if (config.premiumAvailable) $("#premium-mode").disabled = false;
    } catch (error) { toast(error.message, "error"); }
    try {
        const savedIds = JSON.parse(localStorage.getItem("linkwell.jobs") || "[]");
        state.jobIds = Array.isArray(savedIds) ? savedIds.filter((id) => /^[a-f0-9]{32}$/.test(id)).slice(0,20) : [];
    } catch { state.jobIds = []; }
    state.theme = localStorage.getItem("linkwell.theme") || state.theme;
    document.documentElement.dataset.theme = state.theme;
    applyLanguage();
    await restoreCurrentJob();
}

$("#extract-button").addEventListener("click", () => extractText($("#link-input").value));
$("#link-input").addEventListener("input", updateCharacterCount);
$("#clear-input").addEventListener("click", () => { $("#link-input").value = ""; hideError(); updateCharacterCount(); });
$("#browse-files").addEventListener("click", () => $("#file-input").click());
$("#file-input").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const extension = file.name.split(".").pop().toLowerCase();
    if (!["txt","csv","log","md"].includes(extension) || file.size > 2_000_000) {
        showError(t("uploadError")); event.target.value = ""; return;
    }
    const form = new FormData();
    form.append("file", file);
    try {
        const response = await request("/api/upload", {method:"POST", body:form});
        $("#link-input").value = await file.text();
        updateCharacterCount();
        state.links = response.links;
        state.selected = new Set(response.links);
        state.fileName = response.filename;
        state.extractionDuplicates = 0;
        $("#extraction-summary").textContent = `${response.count} ${t("linksFound")} · ${t("fileLoaded")}: ${response.filename}`;
        $("#review-section").hidden = false;
        $("#mode-section").hidden = true;
        renderLinkList();
        renderStats();
        $("#review-section").scrollIntoView({behavior:"smooth", block:"start"});
        toast(`${t("fileLoaded")}: ${response.filename}`);
    } catch (error) { showError(error.message || t("uploadError")); }
    event.target.value = "";
});
$("#reset-links").addEventListener("click", resetWorkflow);
$("#select-all").addEventListener("change", (event) => {
    state.selected = event.target.checked ? new Set(state.links) : new Set();
    renderLinkList();
});
$("#remove-selected").addEventListener("click", () => {
    state.links = state.links.filter((link) => !state.selected.has(link));
    state.selected = new Set(state.links);
    $("#extraction-summary").textContent = `${state.links.length} ${t("linksFound")}`;
    renderLinkList();
    renderStats();
    toast(t("removedLinks"));
});
$("#continue-button").addEventListener("click", showModeSection);
$("#back-to-links").addEventListener("click", () => { $("#mode-section").hidden = true; $("#review-section").scrollIntoView({behavior:"smooth"}); });
$("#start-check").addEventListener("click", beginScan);
$("#save-default").addEventListener("change", async (event) => {
    if (!event.target.checked) return;
    state.metadata = [...state.selectedMetadata];
    if (await persistSettings({metadata:state.metadata})) toast(t("saved"));
});
$("#reset-default-metadata").addEventListener("click", async () => {
    state.metadata = ["link","name","visibility","status","checkedAt"];
    state.selectedMetadata = [...state.metadata];
    $("#save-default").checked = false;
    renderMetadataOptions();
    if (await persistSettings({metadata:state.metadata})) toast(t("settingsSaved"));
});
$("#pause-check").addEventListener("click", pauseScan);
$("#resume-check").addEventListener("click", resumeScan);
$("#stop-check").addEventListener("click", stopScan);
$("#scan-again").addEventListener("click", resetWorkflow);
$("#result-search").addEventListener("input", renderResults);
$("#result-filter").addEventListener("change", renderResults);
$("#export-button").addEventListener("click", downloadExports);
$("#language-select").addEventListener("change", async (event) => {
    state.language = event.target.value;
    applyLanguage();
    await persistSettings({language:state.language});
});
$("#theme-toggle").addEventListener("click", async () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = state.theme;
    localStorage.setItem("linkwell.theme", state.theme);
    await persistSettings({theme:state.theme});
});
$("#settings-open").addEventListener("click", () => {
    $("#mode-section").hidden = false;
    $("#mode-section").scrollIntoView({behavior:"smooth"});
});
$("#mobile-menu").addEventListener("click", () => $("#sidebar").classList.toggle("sidebar-open"));
document.querySelectorAll(".nav-item").forEach((item) => item.addEventListener("click", () => changeView(item.dataset.view)));
const uploadPanel = $(".upload-panel");
uploadPanel.addEventListener("dragenter", (event) => { event.preventDefault(); uploadPanel.classList.add("drag-over"); });
uploadPanel.addEventListener("dragover", (event) => { event.preventDefault(); uploadPanel.classList.add("drag-over"); });
uploadPanel.addEventListener("dragleave", () => uploadPanel.classList.remove("drag-over"));
uploadPanel.addEventListener("drop", () => uploadPanel.classList.remove("drag-over"));
document.addEventListener("dragover", (event) => { if (event.dataTransfer?.types.includes("Files")) event.preventDefault(); });
document.addEventListener("drop", async (event) => {
    if (!event.dataTransfer?.files.length) return;
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const input = $("#file-input");
    const transfer = new DataTransfer();
    transfer.items.add(file);
    input.files = transfer.files;
    input.dispatchEvent(new Event("change"));
});
window.addEventListener("beforeunload", (event) => {
    if (state.running) { event.preventDefault(); event.returnValue = ""; }
});
init();
