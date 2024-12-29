import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.send("Welcome to home page");
});

//get a list of 5 jokes 
app.get('/jokes', (req, res, next) => {

    const jokes = [
        { "id": 1, "title": "Joke 1", "content": "Why don’t skeletons fight each other? They don’t have the guts." },
        { "id": 2, "title": "Joke 2", "content": "Why don’t programmers like nature? It has too many bugs." },
        { "id": 3, "title": "Joke 3", "content": "Why did the web developer go broke? Because he used up all his cache." },
        { "id": 4, "title": "Joke 4", "content": "Why did the chicken join a band? Because it had the drumsticks." },
        { "id": 5, "title": "Joke 5", "content": "Why don’t eggs tell jokes? Because they might crack up." },
        { "id": 6, "title": "Joke 6", "content": "I told my wife she was drawing her eyebrows too high. She looked surprised." },
        { "id": 7, "title": "Joke 7", "content": "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats." },
        { "id": 8, "title": "Joke 8", "content": "What do you call fake spaghetti? An impasta." },
        { "id": 9, "title": "Joke 9", "content": "How does a penguin build its house? Igloos it together." },
        { "id": 10, "title": "Joke 10", "content": "What do you call cheese that isn't yours? Nacho cheese." },
        { "id": 11, "title": "Joke 11", "content": "I couldn’t figure out why I had a headache. Then I realized it was all in my head." },
        { "id": 12, "title": "Joke 12", "content": "Why don't skeletons ever use cell phones? They don't have the guts." },
        { "id": 13, "title": "Joke 13", "content": "Why was the math book sad? Because it had too many problems." },
        { "id": 14, "title": "Joke 14", "content": "Why don’t some couples go to the gym? Because some relationships don’t work out." },
        { "id": 15, "title": "Joke 15", "content": "Why was the computer cold? It left its Windows open." },
        { "id": 16, "title": "Joke 16", "content": "Why can’t you trust an atom? They make up everything." },
        { "id": 17, "title": "Joke 17", "content": "What did the left eye say to the right eye? Between you and me, something smells." },
        { "id": 18, "title": "Joke 18", "content": "What does a cloud wear under his raincoat? Thunderwear." },
        { "id": 19, "title": "Joke 19", "content": "How do you organize a space party? You planet." },
        { "id": 20, "title": "Joke 20", "content": "Why don't oysters donate to charity? Because they're shellfish." },
        { "id": 21, "title": "Joke 21", "content": "What did the janitor say when he jumped out of the closet? Supplies!" },
        { "id": 22, "title": "Joke 22", "content": "What do you call a pile of cats? A meow-tain." },
        { "id": 23, "title": "Joke 23", "content": "What do you call a bear with no teeth? A gummy bear." },
        { "id": 24, "title": "Joke 24", "content": "Why do bees have sticky hair? Because they use honeycombs." },
        { "id": 25, "title": "Joke 25", "content": "Why can't you hear a pterodactyl go to the bathroom? Because the P is silent." },
        { "id": 26, "title": "Joke 26", "content": "What’s orange and sounds like a parrot? A carrot." },
        { "id": 27, "title": "Joke 27", "content": "Why did the scarecrow win an award? Because he was outstanding in his field." },
        { "id": 28, "title": "Joke 28", "content": "Why don’t some couples go to the gym? Because some relationships don’t work out." },
        { "id": 29, "title": "Joke 29", "content": "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'" },
        { "id": 30, "title": "Joke 30", "content": "Why are frogs so happy? Because they eat whatever bugs them." },
        { "id": 31, "title": "Joke 31", "content": "What did one ocean say to the other ocean? Nothing, they just waved." },
        { "id": 32, "title": "Joke 32", "content": "Why don’t ants get sick? Because they have tiny ant-bodies." },
        { "id": 33, "title": "Joke 33", "content": "Why did the golfer bring two pairs of pants? In case he got a hole in one." },
        { "id": 34, "title": "Joke 34", "content": "What’s brown and sticky? A stick." },
        { "id": 35, "title": "Joke 35", "content": "Why did the tomato turn red? Because it saw the salad dressing." },
        { "id": 36, "title": "Joke 36", "content": "Why did the cookie cry? Because his mom was a wafer too long." },
        { "id": 37, "title": "Joke 37", "content": "Why don’t skeletons fight each other? They don’t have the guts." },
        { "id": 38, "title": "Joke 38", "content": "Why did the computer keep its mouth shut? It didn’t want to byte." },
        { "id": 39, "title": "Joke 39", "content": "Why did the bicycle fall over? Because it was two-tired." },
        { "id": 40, "title": "Joke 40", "content": "Why don’t some couples go to the gym? Because some relationships don’t work out." },
        { "id": 41, "title": "Joke 41", "content": "How do you catch a squirrel? Climb up in a tree and act like a nut." },
        { "id": 42, "title": "Joke 42", "content": "Why don’t skeletons use cell phones? They don’t have the guts." },
        { "id": 43, "title": "Joke 43", "content": "I couldn’t figure out why I was feeling depressed, then I realized it was just a phase." },
        { "id": 44, "title": "Joke 44", "content": "Why did the bicycle fall over? Because it was two-tired." },
        { "id": 45, "title": "Joke 45", "content": "Why did the math book look sad? Because it had too many problems." },
        { "id": 46, "title": "Joke 46", "content": "What do you call an alligator in a vest? An investigator." },
        { "id": 47, "title": "Joke 47", "content": "Why do cows have hooves instead of feet? Because they lactose." },
        { "id": 48, "title": "Joke 48", "content": "What do you get when you cross a snowman and a vampire? Frostbite." },
        { "id": 49, "title": "Joke 49", "content": "Why don’t you ever see elephants hiding in trees? Because they’re really good at it." },
        { "id": 50, "title": "Joke 50", "content": "Why was the mushroom invited to every party? Because he was a fungi." },
        { "id": 51, "title": "Joke 51", "content": "Why was the math book sad? Because it had too many problems." },
        { "id": 52, "title": "Joke 52", "content": "What do you get when you cross a snowman and a vampire? Frostbite." },
        { "id": 53, "title": "Joke 53", "content": "Why don’t skeletons fight each other? They don’t have the guts." },
        { "id": 54, "title": "Joke 54", "content": "Why don’t you ever see elephants hiding in trees? Because they’re really good at it." },
        { "id": 55, "title": "Joke 55", "content": "Why don’t oysters share their pearls? Because they’re shellfish." },
        { "id": 56, "title": "Joke 56", "content": "What did the banana say to the dog? Bananas can’t talk." },
        { "id": 57, "title": "Joke 57", "content": "Why did the golfer bring two pairs of pants? In case he got a hole in one." },
        { "id": 58, "title": "Joke 58", "content": "What do you call a pile of cats? A meow-tain." },
        { "id": 59, "title": "Joke 59", "content": "Why do cows wear bells? Because their horns don’t work." },
        { "id": 60, "title": "Joke 60", "content": "What’s the best way to watch a fly fishing tournament? Live stream." },
        { "id": 61, "title": "Joke 61", "content": "Why don’t skeletons use cell phones? They don’t have the guts." },
        { "id": 62, "title": "Joke 62", "content": "Why was the computer cold? It left its Windows open." },
        { "id": 63, "title": "Joke 63", "content": "I told my wife she was drawing her eyebrows too high. She looked surprised." },
        { "id": 64, "title": "Joke 64", "content": "Why did the scarecrow win an award? Because he was outstanding in his field." },
        { "id": 65, "title": "Joke 65", "content": "Why don't skeletons ever use cell phones? They don't have the guts." },
        { "id": 66, "title": "Joke 66", "content": "Why don’t skeletons fight each other? They don’t have the guts." },
        { "id": 67, "title": "Joke 67", "content": "I don’t trust stairs because they’re always up to something." },
        { "id": 68, "title": "Joke 68", "content": "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats." },
        { "id": 69, "title": "Joke 69", "content": "What do you call fake spaghetti? An impasta." },
        { "id": 70, "title": "Joke 70", "content": "Why did the tomato turn red? Because it saw the salad dressing." },
        { "id": 71, "title": "Joke 71", "content": "What do you call a bear with no teeth? A gummy bear." },
        { "id": 72, "title": "Joke 72", "content": "What did the janitor say when he jumped out of the closet? Supplies!" },
        { "id": 73, "title": "Joke 73", "content": "Why can’t you trust an atom? They make up everything." },
        { "id": 74, "title": "Joke 74", "content": "How does a penguin build its house? Igloos it together." },
        { "id": 75, "title": "Joke 75", "content": "I couldn’t figure out why I was feeling depressed, then I realized it was just a phase." },
        { "id": 76, "title": "Joke 76", "content": "What do you call cheese that isn't yours? Nacho cheese." },
        { "id": 77, "title": "Joke 77", "content": "How do you organize a space party? You planet." },
        { "id": 78, "title": "Joke 78", "content": "Why don’t skeletons use cell phones? They don’t have the guts." },
        { "id": 79, "title": "Joke 79", "content": "What do you get when you cross a snowman and a vampire? Frostbite." },
        { "id": 80, "title": "Joke 80", "content": "Why don’t ants get sick? Because they have tiny ant-bodies." },
        { "id": 81, "title": "Joke 81", "content": "Why don’t eggs tell jokes? Because they might crack up." },
        { "id": 82, "title": "Joke 82", "content": "What’s brown and sticky? A stick." },
        { "id": 83, "title": "Joke 83", "content": "Why was the mushroom invited to every party? Because he was a fungi." },
        { "id": 84, "title": "Joke 84", "content": "Why don't skeletons ever use cell phones? They don't have the guts." },
        { "id": 85, "title": "Joke 85", "content": "What do you call a pile of cats? A meow-tain." },
        { "id": 86, "title": "Joke 86", "content": "What did the banana say to the dog? Bananas can’t talk." },
        { "id": 87, "title": "Joke 87", "content": "I told my wife she was drawing her eyebrows too high. She looked surprised." },
        { "id": 88, "title": "Joke 88", "content": "I told my wife she was drawing her eyebrows too high. She looked surprised." },
        { "id": 89, "title": "Joke 89", "content": "Why was the scarecrow invited to the party? Because he was outstanding in his field." },
        { "id": 90, "title": "Joke 90", "content": "Why did the skeleton go to the party alone? He had no body to go with him." },
        { "id": 91, "title": "Joke 91", "content": "Why did the bicycle fall over? It was two-tired." },
        { "id": 92, "title": "Joke 92", "content": "What do you call a pile of cats? A meow-tain." },
        { "id": 93, "title": "Joke 93", "content": "What do you call cheese that isn't yours? Nacho cheese." },
        { "id": 94, "title": "Joke 94", "content": "I couldn’t figure out why I was feeling depressed, then I realized it was just a phase." },
        { "id": 95, "title": "Joke 95", "content": "What’s brown and sticky? A stick." },
        { "id": 96, "title": "Joke 96", "content": "What do you call a bear with no teeth? A gummy bear." },
        { "id": 97, "title": "Joke 97", "content": "Why did the golfer bring two pairs of pants? In case he got a hole in one." },
        { "id": 98, "title": "Joke 98", "content": "Why do cows have hooves instead of feet? Because they lactose." },
        { "id": 99, "title": "Joke 99", "content": "Why don’t oysters donate to charity? Because they’re shellfish." },
        { "id": 100, "title": "Joke 100", "content": "What did the janitor say when he jumped out of the closet? Supplies!" }
      ]
      
 })
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
