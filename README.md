# 📊 ParsePay

> Effortless Expense Tracking from Your SMS Inbox 💸

ParsePay is an intelligent Android app that automatically tracks your expenses by parsing your incoming SMS messages. No need to manually log your transactions — ParsePay extracts payment information in real-time and visualizes your spending patterns, securely and offline.

---

## ✨ Features

- 📩 **SMS Parsing**: Detects transactional messages using pattern matching and regex.
- 💰 **Expense Categorization** *(coming soon)*: Auto-classifies expenses by vendor or category.
- 📈 **Offline Insights**: Works completely offline using local storage.
- 🔐 **Privacy-First**: No data leaves your device. No ads, no tracking.
- 📊 **Simple Visuals** *(coming soon)*: Pie charts, trend lines, and daily summaries.

---

## 🚀 Demo

https://user-images.githubusercontent.com/YOUR-USERNAME/demo.mp4 *(Insert a screen recording or gif here)*

---

## 📲 Getting Started

### Prerequisites

- Android device/emulator
- Node.js & npm
- React Native CLI
- Android Studio with SDK installed

### Installation

```bash
git clone https://github.com/divyanshsirohi/ParsePay.git
cd ParsePay
npm install
npx react-native run-android
```
## 🔐 Permissions

The app requires the following Android permissions:

- `RECEIVE_SMS`: To listen for new incoming SMS messages.
- `READ_SMS`: To access and parse existing transactional messages.

These permissions are requested on first launch. If denied, SMS-based expense tracking will not work.

---

## 🧠 How It Works

1. Listens for incoming SMS using `react-native-android-sms-listener`.
2. Filters messages that appear to be transaction-related (e.g., debits, credits, UPI).
3. Applies regex patterns to extract:
   - Amount
   - Transaction type (credit/debit)
   - Merchant or bank name
   - Date and time
4. Saves the parsed data locally using `AsyncStorage`.
5. Displays a simple list of transactions (analytics coming soon).

---

## 📦 Tech Stack

- **React Native**
- **JavaScript (ES6+)**
- **AsyncStorage** – for local persistence
- **Regex-based parsing**
- **Android SMS Receiver API**

---

## 🛠️ Roadmap

- [x] SMS permission request + handling
- [x] Real-time SMS parsing on incoming messages
- [x] Basic local expense storage
- [ ] Pie chart and line chart views
- [ ] Search and filter by amount/date/merchant
- [ ] CSV export or cloud sync (Google Drive)
- [ ] SQLite or Realm integration for performance
- [ ] Optional notification for daily spend summary

---

## 📸 Screenshots

---

## 👨‍💻 Author

Developed by [Divyansh Sirohi](https://github.com/divyanshsirohi)

---

## ⭐️ Support

If this app helps you save time managing expenses, consider giving it a ⭐️ on GitHub!
