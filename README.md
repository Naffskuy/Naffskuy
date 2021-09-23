# 📝 | Verify Bot Discord
> **Verify Bot Discord menggunakan discord.js (v13) dan Berbahasa Indonesia serta dikhususkan untuk server Discord SA-MP**
## 🚀 | Fitur
- 1 Command [(prefix)verify]
- Custom Prefix |  **Default:** ```!```
- Bot Activity + Type (Custom)
- Jika Error, Otomatis Menampilkan Error Pada Console
- Menambahkan Role
- Menambahkan Pada Nickname (Custom)
- Merubah Nickname (Max 25)
- Anti NonRpName (Custom)
- Anti Nickname Berbentuk Angka
- Hanya Dapat Menggunakan Command Pada 1 Channel (Custom)
## ℹ️ | Dibutuhkan
- Discord Bot Token | [Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
- NodeJS V16+
- Discord.JS 13+
## ⚙️ | Konfigurasi
Berikut adalah format & contoh config.json
> Note: config.json **Wajib** Untuk Diisi
```json
{
  "Bot": {
    "prefix": "",
    "activity": "",
    "actType": ""
  },
  "Verify": {
    "roleID": "",
    "channelID": "",
    "nickTag": "", 
    "nRpName": []
  }
}
```
Contoh config.json:
```json
{
  "Bot": {
    "prefix": "!",
    "activity": "GITHUB",
    "actType": "WATCHING"
  },
  "Verify": {
    "roleID": "929828476222334",
    "channelID": "877982229998877",
    "nickTag": "[WARGA]",
    "nRpName": [
      "NonRpName1",
      "NonRpName2",
      "NonRpName3",
      ]
  }
}
```
## 👑 | Credits
```Xzanx```
