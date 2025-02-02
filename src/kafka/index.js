const { Kafka } = require("kafkajs");
const { User } = require("../models/User");

const kafka = new Kafka({ clientId: "user-service", brokers: [process.env.KAFKA_BROKER || "kafka:9092"] });

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "user-group" });

const initializeKafka = async () => {
    await producer.connect();
    await consumer.connect();
    await consumer.subscribe({ topic: "user-registration", fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ message }) => {
            if (!message.value) {
                console.error("Received null Kafka message, skipping...");
                return;
            }
            try {
                const userData = JSON.parse(message.value.toString());

                const existingUser = await User.findOne({ email: userData.email });
                if (existingUser) {
                    console.error(`User with email ${userData.email} already exists.`);
                    return;
                }

                await new User(userData).save();
                console.log("✅ User saved to MongoDB:", userData.email);
            } catch (error) {
                console.error("❌ Error processing Kafka message:", error);
            }
        }
    });
};

module.exports = { producer, initializeKafka };
