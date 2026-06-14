import { connectDB } from "./config/db.js";
import app from "./app.js";

// Database connections

connectDB();

//start server

const PORT = process.env.PORT ;
const server = app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`); // callback function

})
// Error Handling

process.on("unhandledRejection", (err) => {
    console.log(`Unhandled Rejection: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");
    server.close(() => process.exit(1));
});

process.on("uncaughtException", (err) => {
    console.log(`uncaught Exception: ${err.message}`);
    console.log("Shutting down the server due to  uncaught Exception");
    server.close(() => process.exit(1));
});

export default server;
