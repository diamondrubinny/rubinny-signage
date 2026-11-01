<div dir="rtl">

# הגשת הנגן ל-Microsoft Store

**למי:** מי שמנהל את חשבון המפתח של Rubinny ב-Partner Center.
**מה מוגש:** אפליקציית המחשב (`apps/desktop`) כחבילת MSIX, ל-Windows 10 מגרסה 1809 ומעלה ול-Windows 11, ל-x64 ול-arm64.
**התוכנית:** [phases/22-microsoft-store.md](phases/22-microsoft-store.md).

## 1. זהות האפליקציה

הערכים נלקחו מ-Partner Center ← **Product management** ← **Product identity**, והם שמורים ב-`apps/desktop/package.json` (‏`build.appx`). הם ציבוריים: הם מופיעים בכל חבילה.

| ערך                                          | מה זה                                                                    |
| -------------------------------------------- | ------------------------------------------------------------------------ |
| `Rubinny screen`                             | שם האפליקציה בחנות (`displayName`). חייב להיות זהה לשם השמור.            |
| `DiamondRubinny.Rubinnyscreen`               | `Package/Identity/Name` (`identityName`)                                 |
| `CN=A2694403-EEEE-4D3F-80BB-589A9E34AEA9`    | `Package/Identity/Publisher` (`publisher`)                               |
| `Diamond Rubinny`                            | `Package/Properties/PublisherDisplayName` (אומת מול Partner Center)      |
| `9PL1NGDRDRJR`                               | מזהה החנות. דף האפליקציה: https://apps.microsoft.com/detail/9PL1NGDRDRJR |
| `DiamondRubinny.Rubinnyscreen_1q7b68dwp3rpe` | Package Family Name (נגזר מהשם ומה-Publisher)                            |

אם אחד הערכים משתנה ב-Partner Center, מעדכנים אותו ב-`package.json` (וב-CI את שם החבילה בבדיקה).

## 2. בניית החבילות

- **בכל שחרור:** תהליך ה-Release בונה את חבילות החנות ושומר אותן כ-artifact בשם `microsoft-store` (90 יום):
  - `rubinny-screen-<version>-x64.appx`.
  - `rubinny-screen-<version>-arm64.appx`.
- **בלי חתימה:** החבילות לא חתומות, כי החנות חותמת עליהן בעצמה. אי אפשר להתקין אותן ישירות. ההתקנה היא רק מהחנות.
- **בדיקה ב-CI:** בכל commit נבנית החבילה. היא נחתמת בתעודה זמנית לבדיקה, מותקנת על Windows, ונבדקים המניפסט (שם, הפעלה אוטומטית, גרסה מינימלית) והפעלת האפליקציה.

## 3. הגשה (Submission)

ב-Partner Center ← האפליקציה ← **Start your submission**:

1. **Pricing and availability:** ‏Free. שווקים: כל השווקים, או לפי הצורך.
2. **Properties:**
   - **קטגוריה:** ‏Business (או Productivity).
   - **כתובת מדיניות הפרטיות:** `https://github.com/diamondrubinny/freescreensign/blob/HEAD/docs/MICROSOFT-STORE-PRIVACY.md` (‏`HEAD` הוא תמיד הענף הראשי של המאגר).
   - **דרישות מערכת:** מקלדת ועכבר לא נדרשים, רק להגדרה הראשונית.
3. **Age ratings:** שאלון IARC. האפליקציה מציגה תוכן שהארגון עצמו מעלה, ואין בה תקשורת בין משתמשים.
4. **Packages:** מעלים את שני קובצי ה-`.appx` מה-artifact.
5. **Store listings:** עברית (he-IL) ואנגלית (en-US). הטקסטים בסעיף 4. צילומי מסך: לפחות אחד ב-1366×768 ומעלה. אפשר להשתמש ב-[docs/screenshots](screenshots).
6. **Submission options:**
   - **Restricted capabilities:** החנות תבקש הסבר ל-`runFullTrust`. טקסט מוצע:
     > Rubinny Screen is a desktop (Win32) application built with Electron and packaged with the Desktop Bridge. It cannot run without runFullTrust. It uses it only to show the organization's own digital signage server in a full-screen window, to keep the display awake and to start when the user signs in.
   - **Notes for certification:**
     > On first start the app asks for the address of a Rubinny server (open-source digital signage). To test without a server, the setup page and its validation can be checked. Exit full screen with Ctrl+Shift+Alt+Q; Ctrl+Shift+Alt+S returns to the server address page. Source code: https://github.com/diamondrubinny/freescreensign

## 4. טקסטים לדף בחנות (טיוטה)

### עברית

**תיאור:**

> ‏Rubinny Screen הופך כל מחשב Windows לנגן שילוט דיגיטלי. מחברים את המחשב למסך, מזינים את כתובת שרת ה-Rubinny של הארגון, ומאשרים את המסך בלוח הניהול. מאותו רגע המסך מציג את מה שמתוזמן לו: תמונות, סרטונים, מבזקים, זמני תפילה, חדרי ישיבות ועוד.
>
> - מסך מלא, הפעלה אוטומטית עם עליית Windows ומניעת שינה של המסך.
> - ממשיך להציג תוכן גם כשהרשת נופלת.
> - מתחבר רק לשרת שהגדרתם. האפליקציה לא אוספת מידע.
> - קוד פתוח (AGPL-3.0). השרת חינמי ומותקן אצלכם.
>
> נדרש שרת Rubinny. מדריך התקנה: github.com/diamondrubinny/freescreensign

**מאפיינים (Features):** נגן שילוט דיגיטלי במסך מלא; הפעלה עם עליית Windows; עבודה גם בלי רשת; קוד פתוח.

### English

**Description:**

> Rubinny Screen turns any Windows PC into a digital signage player. Connect the PC to a display, enter the address of your organization's Rubinny server, and approve the screen in the dashboard. From then on it shows what is scheduled for it: pictures, videos, tickers, synagogue times, meeting rooms and more.
>
> - Full screen, starts when Windows starts, keeps the display awake.
> - Keeps showing content when the network is down.
> - Connects only to the server you set. The app collects no data.
> - Open source (AGPL-3.0). The server is free and self-hosted.
>
> Requires a Rubinny server. Setup guide: github.com/diamondrubinny/freescreensign

**Features:** Full-screen digital signage player; starts with Windows; works offline; open source.

## 5. אחרי האישור

- **בדיקה ידנית:** התקנה מהחנות על Windows 10 ועל Windows 11.
- **הפעלה אוטומטית:** אחרי הפעלה ראשונה, להפעיל מחדש את המחשב ולוודא שהנגן עולה לבד. ב-Windows, משימת ההפעלה של חבילה נכנסת לתוקף אחרי שהמשתמש פתח את האפליקציה פעם אחת. **דורש אימות** על מכשיר.
- **כיבוי ההפעלה האוטומטית:** אפשר ב-**הגדרות** ← **אפליקציות** ← **הפעלה** (Startup).
- **גרסה חדשה:** כל שחרור בונה חבילות חדשות. מגישים submission חדש עם החבילות בלבד, והחנות מעדכנת את המחשבים.

## 6. נושאים לבדיקה מקצועית

- **רישוי:** ההתאמה בין תנאי Microsoft Store App Developer Agreement לבין AGPL-3.0 ורישיונות רכיבי צד שלישי. **דורש בדיקה משפטית.**
- **פרטיות:** מדיניות הפרטיות של האפליקציה ([MICROSOFT-STORE-PRIVACY.md](MICROSOFT-STORE-PRIVACY.md)) היא טיוטה. **דורש בדיקה משפטית.**

</div>
