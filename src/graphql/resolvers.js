const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const { producer } = require("../kafka/index");

const resolvers = {
    Query: {
        welcome: () => "Welcome, guest!",
        getUser: async (_, { email }) => {
            return User.findOne({ email });
        }
    },
    Mutation: {
        createUser: async (_, { name, email, password }) => {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                throw new Error("Email already in use.");
            }

            if (password.length < 3) {
                throw new Error("Password must be at least 3 characters long.");
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            await producer.send({
                topic: "user-registration",
                messages: [{ value: JSON.stringify({ name, email, password: hashedPassword }) }]
            });

            return "User registration initiated.";
        },

        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user || !(await bcrypt.compare(password, user.password))) {
                throw new Error("Invalid credentials");
            }

            const token = jwt.sign(
                { id: user.id, name: user.name, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );

            return { token, name: user.name, email: user.email };
        }
    }
};

module.exports = { resolvers };
