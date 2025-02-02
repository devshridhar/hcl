const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const path = require("path");
const { typeDefs } = require("./graphql/schema");
const { resolvers } = require("./graphql/resolvers");
const { initializeKafka } = require("./kafka/index");

dotenv.config();

const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
app.use(express.json());

// ✅ Serve static files for the frontend
app.use(express.static(path.join(__dirname, "..", "public")));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token = req.headers.authorization || "";
        try {
            return { user: jwt.verify(token, process.env.JWT_SECRET) };
        } catch (e) {
            return { user: null };
        }
    }
});

// ✅ Serve HTML UI
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

const startServer = async () => {
    try {
        await server.start();
        server.applyMiddleware({ app });

        // ✅ Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // ✅ Initialize Kafka Consumer
        await initializeKafka();

        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`🚀 GraphQL API running at http://localhost:4000/graphql`);
            console.log(`🖥️ UI Available at: http://localhost:4000/`);
            console.log(`🛡️ API now accessible via Kong at http://localhost:8000/graphql`);
        });
    } catch (error) {
        console.error("❌ Error starting server:", error);
    }
};

startServer().catch(console.error);
