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
        {
            "id": 1,
            "title": "Joke Title 1",
            "content": "This is the content of joke number 1. It's a funny one!"
        },
        {
            "id": 2,
            "title": "Joke Title 1",
            "content": "This is the content of joke number 2. It's a funny one!"
        },
        {
            "id": 3,
            "title": "Joke Title 1",
            "content": "This is the content of joke number 3. It's a funny one!"
        },
        {
            "id": 4,
            "title": "Joke Title 4",
            "content": "This is the content of joke number 4. It's a funny one!"
        },
        {
            "id": 5,
            "title": "Joke Title 5",
            "content": "This is the content of joke number 5. It's a funny one!"
        },
        {
            "id": 6,
            "title": "Joke Title 6",
            "content": "This is the content of joke number 6. It's a funny one!"
        },
        {
            "id": 7,
            "title": "Joke Title 7",
            "content": "This is the content of joke number 7. It's a funny one!"
        },
        {
            "id": 8,
            "title": "Joke Title 8",
            "content": "This is the content of joke number 8. It's a funny one!"
        },
        {
            "id": 9,
            "title": "Joke Title 9",
            "content": "This is the content of joke number 9. It's a funny one!"
        },
        {
            "id": 10,
            "title": "Joke Title 10",
            "content": "This is the content of joke number 10. It's a funny one!"
        },
        {
            "id": 11,
            "title": "Joke Title 11",
            "content": "This is the content of joke number 11. It's a funny one!"
        },
        {
            "id": 12,
            "title": "Joke Title 12",
            "content": "This is the content of joke number 12. It's a funny one!"
        },
        {
            "id": 13,
            "title": "Joke Title 13",
            "content": "This is the content of joke number 13. It's a funny one!"
        },
        {
            "id": 14,
            "title": "Joke Title 14",
            "content": "This is the content of joke number 14. It's a funny one!"
        },
        {
            "id": 15,
            "title": "Joke Title 15",
            "content": "This is the content of joke number 15. It's a funny one!"
        },
        {
            "id": 16,
            "title": "Joke Title 16",
            "content": "This is the content of joke number 16. It's a funny one!"
        },
        {
            "id": 17,
            "title": "Joke Title 17",
            "content": "This is the content of joke number 17. It's a funny one!"
        },
        {
            "id": 18,
            "title": "Joke Title 18",
            "content": "This is the content of joke number 18. It's a funny one!"
        },
        {
            "id": 19,
            "title": "Joke Title 19",
            "content": "This is the content of joke number 19. It's a funny one!"
        },
        {
            "id": 20,
            "title": "Joke Title 20",
            "content": "This is the content of joke number 20. It's a funny one!"
        },
        {
            "id": 21,
            "title": "Joke Title 21",
            "content": "This is the content of joke number 21. It's a funny one!"
        },
        {
            "id": 22,
            "title": "Joke Title 22",
            "content": "This is the content of joke number 22. It's a funny one!"
        },
        {
            "id": 23,
            "title": "Joke Title 23",
            "content": "This is the content of joke number 23. It's a funny one!"
        },
        {
            "id": 24,
            "title": "Joke Title 24",
            "content": "This is the content of joke number 24. It's a funny one!"
        },
        {
            "id": 25,
            "title": "Joke Title 25",
            "content": "This is the content of joke number 25. It's a funny one!"
        },
        {
            "id": 26,
            "title": "Joke Title 26",
            "content": "This is the content of joke number 26. It's a funny one!"
        },
        {
            "id": 27,
            "title": "Joke Title 27",
            "content": "This is the content of joke number 27. It's a funny one!"
        },
        {
            "id": 28,
            "title": "Joke Title 28",
            "content": "This is the content of joke number 28. It's a funny one!"
        },
        {
            "id": 29,
            "title": "Joke Title 29",
            "content": "This is the content of joke number 29. It's a funny one!"
        },
        {
            "id": 30,
            "title": "Joke Title 30",
            "content": "This is the content of joke number 30. It's a funny one!"
        },
        {
            "id": 31,
            "title": "Joke Title 31",
            "content": "This is the content of joke number 31. It's a funny one!"
        },
        {
            "id": 32,
            "title": "Joke Title 32",
            "content": "This is the content of joke number 32. It's a funny one!"
        },
        {
            "id": 33,
            "title": "Joke Title 33",
            "content": "This is the content of joke number 33. It's a funny one!"
        },
        {
            "id": 34,
            "title": "Joke Title 34",
            "content": "This is the content of joke number 34. It's a funny one!"
        },
        {
            "id": 35,
            "title": "Joke Title 35",
            "content": "This is the content of joke number 35. It's a funny one!"
        },
        {
            "id": 36,
            "title": "Joke Title 36",
            "content": "This is the content of joke number 36. It's a funny one!"
        },
        {
            "id": 37,
            "title": "Joke Title 37",
            "content": "This is the content of joke number 37. It's a funny one!"
        },
        {
            "id": 38,
            "title": "Joke Title 38",
            "content": "This is the content of joke number 38. It's a funny one!"
        },
        {
            "id": 39,
            "title": "Joke Title 39",
            "content": "This is the content of joke number 39. It's a funny one!"
        },
        {
            "id": 40,
            "title": "Joke Title 40",
            "content": "This is the content of joke number 40. It's a funny one!"
        },
        {
            "id": 41,
            "title": "Joke Title 41",
            "content": "This is the content of joke number 41. It's a funny one!"
        },
        {
            "id": 42,
            "title": "Joke Title 42",
            "content": "This is the content of joke number 42. It's a funny one!"
        },
        {
            "id": 43,
            "title": "Joke Title 43",
            "content": "This is the content of joke number 43. It's a funny one!"
        },
        {
            "id": 44,
            "title": "Joke Title 44",
            "content": "This is the content of joke number 44. It's a funny one!"
        },
        {
            "id": 45,
            "title": "Joke Title 45",
            "content": "This is the content of joke number 45. It's a funny one!"
        },
        {
            "id": 46,
            "title": "Joke Title 46",
            "content": "This is the content of joke number 46. It's a funny one!"
        },
        {
            "id": 47,
            "title": "Joke Title 47",
            "content": "This is the content of joke number 47. It's a funny one!"
        },
        {
            "id": 48,
            "title": "Joke Title 48",
            "content": "This is the content of joke number 48. It's a funny one!"
        },
        {
            "id": 49,
            "title": "Joke Title 49",
            "content": "This is the content of joke number 49. It's a funny one!"
        },
        {
            "id": 50,
            "title": "Joke Title 50",
            "content": "This is the content of joke number 50. It's a funny one!"
        },
        {
            "id": 51,
            "title": "Joke Title 51",
            "content": "This is the content of joke number 51. It's a funny one!"
        },
        {
            "id": 52,
            "title": "Joke Title 52",
            "content": "This is the content of joke number 52. It's a funny one!"
        },
        {
            "id": 53,
            "title": "Joke Title 53",
            "content": "This is the content of joke number 53. It's a funny one!"
        },
        {
            "id": 54,
            "title": "Joke Title 54",
            "content": "This is the content of joke number 54. It's a funny one!"
        },
        {
            "id": 55,
            "title": "Joke Title 55",
            "content": "This is the content of joke number 55. It's a funny one!"
        },
        {
            "id": 56,
            "title": "Joke Title 56",
            "content": "This is the content of joke number 56. It's a funny one!"
        },
        {
            "id": 57,
            "title": "Joke Title 57",
            "content": "This is the content of joke number 57. It's a funny one!"
        },
        {
            "id": 58,
            "title": "Joke Title 58",
            "content": "This is the content of joke number 58. It's a funny one!"
        },
        {
            "id": 59,
            "title": "Joke Title 59",
            "content": "This is the content of joke number 59. It's a funny one!"
        },
        {
            "id": 60,
            "title": "Joke Title 60",
            "content": "This is the content of joke number 60. It's a funny one!"
        },
        {
            "id": 61,
            "title": "Joke Title 61",
            "content": "This is the content of joke number 61. It's a funny one!"
        },
        {
            "id": 62,
            "title": "Joke Title 62",
            "content": "This is the content of joke number 62. It's a funny one!"
        },
        {
            "id": 63,
            "title": "Joke Title 63",
            "content": "This is the content of joke number 63. It's a funny one!"
        },
        {
            "id": 64,
            "title": "Joke Title 64",
            "content": "This is the content of joke number 64. It's a funny one!"
        },
        {
            "id": 65,
            "title": "Joke Title 65",
            "content": "This is the content of joke number 65. It's a funny one!"
        },
        {
            "id": 66,
            "title": "Joke Title 66",
            "content": "This is the content of joke number 66. It's a funny one!"
        },
        {
            "id": 67,
            "title": "Joke Title 67",
            "content": "This is the content of joke number 67. It's a funny one!"
        },
        {
            "id": 68,
            "title": "Joke Title 68",
            "content": "This is the content of joke number 68. It's a funny one!"
        },
        {
            "id": 69,
            "title": "Joke Title 69",
            "content": "This is the content of joke number 69. It's a funny one!"
        },
        {
            "id": 70,
            "title": "Joke Title 70",
            "content": "This is the content of joke number 70. It's a funny one!"
        },
        {
            "id": 71,
            "title": "Joke Title 71",
            "content": "This is the content of joke number 71. It's a funny one!"
        },
        {
            "id": 72,
            "title": "Joke Title 72",
            "content": "This is the content of joke number 72. It's a funny one!"
        },
        {
            "id": 73,
            "title": "Joke Title 73",
            "content": "This is the content of joke number 73. It's a funny one!"
        },
        {
            "id": 74,
            "title": "Joke Title 74",
            "content": "This is the content of joke number 74. It's a funny one!"
        },
        {
            "id": 75,
            "title": "Joke Title 75",
            "content": "This is the content of joke number 75. It's a funny one!"
        },
        {
            "id": 76,
            "title": "Joke Title 76",
            "content": "This is the content of joke number 76. It's a funny one!"
        },
        {
            "id": 77,
            "title": "Joke Title 77",
            "content": "This is the content of joke number 77. It's a funny one!"
        },
        {
            "id": 78,
            "title": "Joke Title 78",
            "content": "This is the content of joke number 78. It's a funny one!"
        },
        {
            "id": 79,
            "title": "Joke Title 79",
            "content": "This is the content of joke number 79. It's a funny one!"
        },
        {
            "id": 80,
            "title": "Joke Title 80",
            "content": "This is the content of joke number 80. It's a funny one!"
        },
        {
            "id": 81,
            "title": "Joke Title 81",
            "content": "This is the content of joke number 81. It's a funny one!"
        },
        {
            "id": 82,
            "title": "Joke Title 82",
            "content": "This is the content of joke number 82. It's a funny one!"
        },
        {
            "id": 83,
            "title": "Joke Title 83",
            "content": "This is the content of joke number 83. It's a funny one!"
        },
        {
            "id": 84,
            "title": "Joke Title 84",
            "content": "This is the content of joke number 84. It's a funny one!"
        },
        {
            "id": 85,
            "title": "Joke Title 85",
            "content": "This is the content of joke number 85. It's a funny one!"
        },
        {
            "id": 86,
            "title": "Joke Title 86",
            "content": "This is the content of joke number 86. It's a funny one!"
        },
        {
            "id": 87,
            "title": "Joke Title 87",
            "content": "This is the content of joke number 87. It's a funny one!"
        },
        {
            "id": 88,
            "title": "Joke Title 88",
            "content": "This is the content of joke number 88. It's a funny one!"
        },
        {
            "id": 89,
            "title": "Joke Title 89",
            "content": "This is the content of joke number 89. It's a funny one!"
        },
        {
            "id": 90,
            "title": "Joke Title 90",
            "content": "This is the content of joke number 90. It's a funny one!"
        },
        {
            "id": 91,
            "title": "Joke Title 91",
            "content": "This is the content of joke number 91. It's a funny one!"
        },
        {
            "id": 92,
            "title": "Joke Title 92",
            "content": "This is the content of joke number 92. It's a funny one!"
        },
        {
            "id": 93,
            "title": "Joke Title 93",
            "content": "This is the content of joke number 93. It's a funny one!"
        },
        {
            "id": 94,
            "title": "Joke Title 94",
            "content": "This is the content of joke number 94. It's a funny one!"
        },
        {
            "id": 95,
            "title": "Joke Title 95",
            "content": "This is the content of joke number 95. It's a funny one!"
        },
        {
            "id": 96,
            "title": "Joke Title 96",
            "content": "This is the content of joke number 96. It's a funny one!"
        },
        {
            "id": 97,
            "title": "Joke Title 97",
            "content": "This is the content of joke number 97. It's a funny one!"
        },
        {
            "id": 98,
            "title": "Joke Title 98",
            "content": "This is the content of joke number 98. It's a funny one!"
        },
        {
            "id": 99,
            "title": "Joke Title 99",
            "content": "This is the content of joke number 99. It's a funny one!"
        },
        {
            "id": 100,
            "title": "Joke Title 100",
            "content": "This is the content of joke number 100. It's a funny one!"
        }
    ]

    res.send(jokes)
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
