# LogistiConnect

LogistiConnect is a web application that connects manufacturers with transporters to facilitate the transportation and delivery of goods. It provides a platform where manufacturers can create and manage orders, and transporters can view and bid on available orders.

## Features

- **User Authentication**: LogistiConnect offers secure user authentication to ensure that only authorized manufacturers and transporters can access the platform. Users can register an account, log in with their credentials, and maintain a personalized profile.

- **Order Management**: Manufacturers can create new orders by specifying the details such as pickup location, destination, delivery date, and any specific requirements. They can also view and manage their existing orders, including tracking their status and communicating with transporters.

- **Bidding System**: Transporters can browse and search for available orders based on their preferences such as pickup location, delivery date, and cargo type. They can place bids on orders they are interested in, offering their price and delivery timeline. Manufacturers can review the bids and choose the transporter that best meets their requirements.

- **Messaging**: The platform provides a messaging system that allows manufacturers and transporters to communicate and coordinate regarding order details, pickup arrangements, and any other necessary information.

- **Real-time Notifications**: LogistiConnect keeps users informed with real-time notifications about important events such as new bids, bid acceptance, order updates, and messages received. This ensures timely communication and enables quick decision-making.

## Technologies Used

- **Frontend**: The client-side of LogistiConnect is built using React, a popular JavaScript library for building user interfaces. It utilizes ReactJs and Tailwindcss to create an intuitive and responsive user interface.

- **Backend**: The server-side is developed using Node.js and Express.js, providing a robust and scalable backend infrastructure. MongoDB is used as the database to store and retrieve user data, order details, and other relevant information.

- **Authentication**: LogistiConnect implements authentication and authorization using JSON Web Tokens (JWT) to securely manage user sessions and protect sensitive information.

- **Real-time Communication**: WebSocket technology is employed for real-time communication between the client and the server, enabling instant updates and notifications.

## Deployment

The LogistiConnect web application is deployed on Vercel, a cloud platform for static and serverless deployments. The frontend and backend are hosted together to provide a seamless user experience.

The live deployment of LogistiConnect can be accessed at [https://logisti-connect.vercel.app/](https://logisti-connect.vercel.app/).

## Getting Started

To run the LogistiConnect application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ShishirShekhar/LogistiConnect.git`
2. Navigate to the project directory: `cd LogistiConnect`
3. Install dependencies: `npm install`
4. Start the development server: `npm run start`
5. Open the web application in your browser: `http://localhost:3000`

Please note that the application requires the appropriate environment variables to be set for database connection, authentication, and other configurations. Refer to the project's documentation or contact the repository owner for more details.

## Contributing

Contributions to LogistiConnect are welcome! If you find any issues or have ideas for new features, feel free to open an issue or submit a pull request. Make sure to follow the project's code of conduct and guidelines when contributing.

---

Thank you for your interest in LogistiConnect! If you have any questions or need further assistance, please don't hesitate to reach out.
