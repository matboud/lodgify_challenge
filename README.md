# Lodgify Grouped Tasks Widget

Lodgify Grouped Tasks Widget is a solution to the Lodgify FE Technical Challenge. The widget is designed to display the progress of a user's profile creation. Users can view tasks grouped into categories and mark tasks as completed. As tasks are marked, the progress bar updates in real-time to reflect the user's progress.

## Features

1. **Progress Tracking**: The widget includes a progress bar that reflects the normalized value of completed tasks.
2. **Interactive Accordion**: Task groups are displayed in an accordion style. Each accordion can be expanded to reveal tasks.
3. **Check Tasks**: Users can mark tasks as done. Completing all tasks in a group highlights the group in green.
4. **Responsive Design**: The widget is designed to be visually appealing and functional on all devices.s

## Technology Stack

- **Next.js**: A popular React.js framework used for the frontend.
- **Tailwind CSS**: A utility-first CSS framework for building custom UIs.
- **Axios**: Utilized for fetching task data from the provided API.

## Installation & Setup

### Prerequisites

Ensure Node.js is installed on your system. If not, you can [download it here](https://nodejs.org/).

### Installing Dependencies

Navigate to the root directory of the project and run:

```bash
npm install
```

### Running the Application in Development Mode

```bash
npm run dev
```

The application should now be accessible at [http://localhost:3000](http://localhost:3000).

## Specifications

- The progress bar displays the normalized sum of the values of checked tasks.
- Each task has a scalar value, and the progress is represented as a percentage of the sum of all task values.
- Tasks are grouped into categories displayed as accordion elements.
- Completing all tasks in a group changes the group color to green.

## Notes on Implementation

The provided mockup and interactive prototype were referenced to ensure the UI closely matches the design intent. The provided API was utilized to fetch task data.

## Feedback and Suggestions

1. The challenge was clear in terms of requirements and expected output.
2. Given the constraints and specifications, an MVP (Minimum Viable Product) approach was adopted to ensure all key features were implemented efficiently.
3. The KISS (Keep It Simple, Stupid) principle was closely followed to ensure code maintainability and readability.
4. External libraries were judiciously chosen to not overshadow core skills and logic implementation.

## Contribution & Feedback

Though this was a challenge submission, any feedback or suggestions are welcome. Feel free to open issues or pull requests if you believe there's room for improvement.

## Acknowledgments

Special thanks to the Lodgify recruitment team for the opportunity and providing clear guidelines and resources.

## License

This project is open-source and available under the MIT License.

---

**Note**: The project was made with lot of ❤️ and ☕️
