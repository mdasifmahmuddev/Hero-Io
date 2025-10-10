# 🌎 HERO IO 🌎

A modern AI app store platform where users can browse, search, and install trending applications. Hero-Io provides exceptional apps that are essential for our day-to-day work and make our lives more efficient.

## 📱 Features

- **Browse Apps & Products** 
- **Detailed Product Pages** 
- **Install & Uninstall** 
- **Smart Search** 
- **Advanced Sorting** 
- **Rating Visualization** 
- **Responsive Design** 
- **Installed Apps Management** 

## 🛠️ Technologies Used

- **React** 
- **React Router** 
- **Tailwind CSS** 
- **DaisyUI** 
- **Lucide React** 
- **LocalStorage** 

## 🎯 Key Features Explained

### Product Browsing
- Grid layout with responsive design for mobile, tab, and computer. 
- 8 cards showing basically. 
- Show all button, which goes to the apps page.

### Product Details Page
- All apps are showing from JSON data. 
- Rating with interactive bar. 
- Search added by text. 
- Description section.
- Data put in localStorage integration. 
- Searching by keyword.
- Daisy loading added. 

### Installed Apps Management
- View all installed applications.
- Search through installed apps.
- Sort by  download. 
- Quick uninstall functionality and props appear.
- Real-time app counter.
 
## 📊 JSON File Format 

Using images from open-source Google links.

Each app/product contains:
```json
{
  "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
  "title": "TaskMaster",
  "companyName": "Prodigy Labs",
  "id": 1,
  "description": "A productivity app designed to manage tasks, reminders, and projects efficiently.",
  "size": 45,
  "reviews": 1843,
  "ratingAvg": 4.6,
  "downloads": 120000,
  "ratings": [
    { "name": "1 star", "count": 54 },
    { "name": "2 star", "count": 98 },
    { "name": "3 star", "count": 204 },
    { "name": "4 star", "count": 567 },
    { "name": "5 star", "count": 920 }
  ]
}
```

## 🔧 Utility Functions

### addToDb.js
Using localStorage:
- Add app to installed list. 
- Duplicate data prevention. 
 
## 👨‍💻 Author

Md Asif Mahmud - [https://github.com/mdasifmahmuddev](https://github.com/mdasifmahmuddev)

Live Link - [https://app.netlify.com/teams/mdasifmahmud284/projects](https://app.netlify.com/teams/mdasifmahmud284/projects)




## 🙏 Acknowledgments

- Design inspiration from **Programming Hero**.
- Icons by Lucide React, React Icon. 
- UI design by Tailwind and DaisyUI. 

---
