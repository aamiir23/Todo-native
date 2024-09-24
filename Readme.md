# GO-GRAB Todo Native App

A React Native Todo List application with Groups and Todos, where all data is stored in an SQLite database. This app allows users to create groups, add todos within those groups, toggle completion status, and delete tasks and groups.

## Features

- Create, update, and delete **Groups**.
- Create, update, toggle, and delete **Todos** within each group.
- All data is persisted using **SQLite**.
- Data loading and display based on SQLite queries.
- Group and Todo management with user-friendly UI.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 12.x)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) (>= 0.64)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- **SQLite** support via the [react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage) plugin.

## Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/todo-native-app.git
cd todo-native-app
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Link the SQLite database (for older React Native versions):

If you're using React Native below 0.60, you may need to link the SQLite storage manually:

```bash
react-native link react-native-sqlite-storage
```

For React Native >= 0.60, auto-linking should handle this for you.

### 4. Run the project:

For Android:

```bash
npx react-native run-android
```

For iOS (requires Mac and Xcode):

```bash
npx react-native run-ios
```

Make sure that Metro is running in the correct folder by starting it separately:

```bash
npx react-native start
```

### 5. Reset cache (optional, if facing issues):

```bash
npx react-native start --reset-cache
```

## Project Structure

```
├── components
│   ├── GroupList.js      # Component to display groups
│   ├── TodoList.js       # Component to display todos within a selected group
│   └── styles.js         # Styling for the app
├── App.js                # Main application logic
├── groups.json           # (Optional) Initial dummy data for testing
├── index.js              # Entry point for the application
├── app.json              # App configuration
└── README.md             # Project documentation
```

## SQLite Database Structure

Two tables are created in the SQLite database:
1. **Groups**
   - `id` (INTEGER, Primary Key)
   - `name` (TEXT)

2. **Todos**
   - `id` (INTEGER, Primary Key)
   - `groupId` (INTEGER, Foreign Key referencing Groups table)
   - `text` (TEXT)
   - `completed` (INTEGER, 0 or 1)

## Core Functionality

### Group Management
- **Create a Group**: Add a new group by entering the group name and clicking "Create Group".
- **Select a Group**: Tap on a group to view the todos inside it.
- **Delete a Group**: Remove a group along with all associated todos by clicking the delete button.

### Todo Management
- **Add a Todo**: Inside a group, add a new todo by entering the text and submitting.
- **Toggle Todo Completion**: Mark a todo as complete/incomplete by clicking on it.
- **Delete a Todo**: Remove a todo from the list.

![Image 1](https://i.postimg.cc/3JY7WzPk/Whats-App-Image-2024-09-24-at-20-49-15-67c59b70.jpg)
![Image 2]([https://ibb.co/RCDSwdx](https://i.postimg.cc/k4TN80T7/Whats-App-Image-2024-09-24-at-20-49-15-b13901e5.jpg))
![Image 3]([https://ibb.co/LN43cYk](https://i.postimg.cc/nLPBh4rL/Whats-App-Image-2024-09-24-at-20-49-15-f70470dc.jpg))

## Troubleshooting

If you encounter errors related to SQLite or database connection:
1. Ensure that SQLite is properly linked in your project. Run:
   ```bash
   npx react-native link react-native-sqlite-storage
   ```
   
2. Make sure Metro Bundler is running in the correct directory:
   ```bash
   cd path/to/your/project
   npx react-native start
   ```

3. Clear any cache if needed:
   ```bash
   npx react-native start --reset-cache
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

