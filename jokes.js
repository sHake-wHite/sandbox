// Joke generator module

function getRandomJoke() {
    const jokes = [
        "Why don't programmers like nature? It has too many bugs.",
        "Why do Java developers wear glasses? Because they don't see sharp.",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
        "Why did the computer show up at work late? It had a hard drive.",
        "Why do programmers prefer dark mode? Because light attracts bugs.",
        "What do you call 8 hobbits? A hobbyte.",
        "Why was the JavaScript developer sad? Because he didn't 'null' his feelings.",
        "Why did the developer go broke? Because he used up all his cache.",
        "Why do Python programmers have low self-esteem? Because they're constantly comparing their self to others.",
        "Why did the function return early? Because it had a date with an exception."
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
}