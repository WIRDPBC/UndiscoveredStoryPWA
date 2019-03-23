function questions() {
}

questions.prototype.loadPredefinedQuestions = function (res) {
    let questions = {
        question1: {
            description: "Who was the African American who sang “Cosi Fan Tutte” with George Shirley",
            options: {
                option1: "Camilla Williams",
                option2: "Leontyne Price",
                option3: "Gladys Knight",
                option4: "Aretha Franklin"
            },
            correctAnswer: 2,
            explanation: "Among her many honors are the Presidential Medal of Freedom (1964), the Spingarn Medal (1965),[6] the Kennedy Center Honors (1980), the National Medal of Arts (1985), numerous honorary degrees, and 19 Grammy Awards."
        },
        question2: {
            description: "She was one of of the first female pilots to obtain a pilots license during the 1920´s. She was also of mixed ancestry",
            options: {
                option1: "Molly Rose",
                option2: "Bessie Coleman",
                option3: "Amelia Earhart",
                option4: "Mary Jackson"
            },
            correctAnswer: 2,
            explanation: "She developed an early interest in flying, but African Americans, Native Americans, and women had no flight-school opportunities in the United States, so she saved up money to go to France to become a licensed pilot. She later became a successful air show pilot in the United States. "
        },
        question3: {
            description: "She works in the social impact arena,decentralized technology, is an award winner who also is a health and wellness and social justice expert",
            options: {
                option1: "Indigo Ocean-Dutton",
                option2: "Daisy Ozim",
                option3: "Melissa Sutor",
                option4: "Camille Jones"
            },
            correctAnswer: 2,
            explanation: "Her work is centered in developing systems and practices rooted in sustainability and equity. She works on health programs and policy from the international to local level, has worked to promote equity in the Blockchain ecosystem and supporting the correct application of venture capital."
        },
        question4: {
            description: "She was one of Dr. Louis Leaky’s angels, who made one of the greatest scientifc discoveries regarding humans, primates and the use of tools",
            options: {
                option1: "Diane Fossey",
                option2: "Birutė Galdikas",
                option3: "Jane Goodall",
                option4: "Bridgette Leaky"
            },
            correctAnswer: 3,
            explanation: "Dame Dr. Jane Goodal is an English primatologist and anthropologist.  Considered to be the world's foremost expert on chimpanzees, Goodall is best known for her over 55-year study of social and family interactions of wild chimpanzees in Gombe Stream National Park, Tanzania."
        },
        question5: {
            description: "She is a young Nobel Peace Prize Winner who was shot in the face for standing up for the education of girls",
            options: {
                option1: "Malala Yousafzai",
                option2: "Malala Yousat",
                option3: "Malala Safzai",
                option4: "Malala Zaisatyou"
            },
            correctAnswer: 1,
            explanation: "Malala Yousafzai is a Pakistani activist for female education and the youngest Nobel Prize laureate.[4] She is known for human rights advocacy, especially the education of women and children in her native land.  Her advocacy has grown into an international movement."
        },
        question6: {
            description: "An English writer and philosopher who believed that women should empower themselves",
            options: {
                option1: "Elisabeth Bernhard",
                option2: "Mary Wollstonecraft",
                option3: "Marianne Wollstone",
                option4: "Kasia Orlowofska"
            },
            correctAnswer: 2,
            explanation: "Mary Wollstonecraft was an English writer, philosopher, and advocate of women's rights. Today Wollstonecraft is regarded as one of the founding feminist philosophers, and feminists often cite both her life and work as important influences."
        },
        question7: {
            description: "The only person to win a Nobel Prize in two different sciences",
            options: {
                option1: "Linda B. Buck",
                option2: "Jane Addams",
                option3: "Alva Myrdal",
                option4: "Marie Skłodowska"
            },
            correctAnswer: 4,
            explanation: "Marie Skłodowska Curie  was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and only woman to win twice, and the only person to win a Nobel Prize in two different sciences. "
        },
        question8: {
            description: "She wrote a book about the history of the dollar and at one time was compared to Steve Jobs",
            options: {
                option1: "Angel Rich",
                option2: "Andrea Cunnigham",
                option3: "Tracey Benton",
                option4: "Joy Johnston"
            },
            correctAnswer: 1,
            explanation: "Created an algorithm for the stock market to win Goldman Sachs Portfolio Challenge, selling her first marketing plan to Prudential, a founding employee of FINRA, authored the first African American Financial Experience study, invented the top financial literacy product in the world, and was named the “Next Steve Jobs” - Forbes. "
        },
        question9: {
            description: "A Nobel Peace Prize nominee who during the second vatican council contributed to a significant change",
            options: {
                option1: "Mother Theresa",
                option2: "Hildegard Goss-Mayr",
                option3: "Gerty Theresa Cori",
                option4: "Selma Lagerlöf"
            },
            correctAnswer: 2,
            explanation: "She and her husband spoke to the Council Vatican II. In the 1960s/70s, they trained groups worldwide in active nonviolence including Argentina's SERPAJ, whose first coordinator was Nobel Winner Adolfo Pérez Esquivel. They participated in the preparation of the People Power Revolution in Philippines in 1986."
        },
        question10: {
            description: "A woman of deep wisdom who wrote a poem about why a flying creature sings and was honoured by Barack Obama for her writing, activism and inspiration  ",
            options: {
                option1: "Tony Morrison",
                option2: "Oprah Winfrey",
                option3: "Aretha Franklin",
                option4: "Maya Angelou"
            },
            correctAnswer: 4,
            explanation: "An American poet, singer, and civil rights activist. She published books of essays, poetry, and is credited with a list of plays, movies, and autobiographies.  The first, I Know Why the Caged Bird Sings (1969), brought her international recognition and acclaim. She received dozens of awards and more than 50 honorary degrees."
        },
        question11: {
            description: "She was the first woman to hold a Prime Minister position in the world",
            options: {
                option1: "Chandrika Kumaratunga",
                option2: "Simavo Bandaranai",
                option3: "Indira Gandhi",
                option4: "Sirimavo Bandaranaike"
            },
            correctAnswer: 4,
            explanation: "She became India’s first woman prime minister and nine years before Golda Meir was appointed PM of Israel. She made the country a republic, nationalized companies and church schools, and squashed a Marxist insurrection. She also gave birth to the future female president of the country Chandrika Kumaratunga. "
        },
        question12: {
            description: "She opened the first family planning centre, and helped form the National Birth Control Council, which led to the Family Planning Association",
            options: {
                option1: "Marie Stopes",
                option2: "Beth Fields",
                option3: "Sandra Day O'Connor",
                option4: "Mary Stopel"
            },
            correctAnswer: 4,
            explanation: "A British author, palaeobotanist and campaigner for eugenics and women's rights. She made significant contributions to plant paleontology and coal classification, and was the first female academic on the faculty of the University of Manchester. She founded the first birth control clinic in Britain."
        },
        question13: {
            description: "The first woman to take home three coveted movies  directing trophies for after decades of being ignored . ",
            options: {
                option1: "Penny Marschall",
                option2: "Samatha Holt",
                option3: "Kathryn Bigelow",
                option4: "Emma Kennedy"
            },
            correctAnswer: 3,
            explanation: "Is an multi award winning American film director, producer, and screenwriter. Her films include Near Dark (1987), Point Break (1991), Strange Days (1995), K-19: The Widowmaker (2002), The Hurt Locker (2008), Zero Dark Thirty (2012), and Detroit (2017)."
        },
        question14: {
            description: "Mystically Feminine activist, lecturer, author presented the idea that women could be happy outside of traditional roles and occupations. ",
            options: {
                option1: "Shirley Chisholm",
                option2: "Betty Friedan",
                option3: "Charlegne Johnson",
                option4: "Linda Sutter"
            },
            correctAnswer: 2,
            explanation: "She was an American feminist writer and activist. A leading figure in the women's movement in the United States, her 1963 book The Feminine Mystique is often credited with sparking the second wave of American feminism in the 20th century.  She co-founded the National Organization for Women (NOW)."
        },
        question15: {
            description: "Self-taught automobile safety expert, designer, engineer as well as a star actress in the movie circuit",
            options: {
                option1: "Eva Wachowski",
                option2: "Carlita Gonzalez",
                option3: "Valerie Abudala",
                option4: "Florence Lawrence"
            },
            correctAnswer: 4,
            explanation: "She is widely considered the world’s first “movie star.” Lawrence was an auto aficionado and designed the first turn signal. She also designed a brake signal that raised and lowered when a driver hit the brakes, though she never patented either of those inventions."
        },
        question16: {
            description: "A scout, spy, railroad conductor and nurse during the war. She supported herself after the war by giving speeches and selling her biography",
            options: {
                option1: "Maye Sampson",
                option2: "Johnanna Brown",
                option3: "Harper Ferry",
                option4: "Araminta Ross"
            },
            correctAnswer: 4,
            explanation: "Harriet Tubman (born Araminta Ross) was an American abolitionist and political activist. Born into slavery, Tubman escaped and subsequently made some thirteen missions to rescue enslaved people, family and friends, using a network of activists and safe houses known as the Underground Railroad. "
        },
        question17: {
            description: "Computer science inventor genius mathematician who co-created a programming language who also won a Computer Sciences Man Of The Year Award.",
            options: {
                option1: "Nikita Dievelopin",
                option2: "Grace Hopper",
                option3: "Bonnie Jones",
                option4: "Denise Hopper"
            },
            correctAnswer: 2,
            explanation: "She was an American computer scientist and United States Navy rear admiral.  One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first compiler related tools. She co-created the COBOL programming language."
        },
        question18: {
            description: "Her art impacted artists and individuals in a profound way in Japan, Chicago, Paris, Poland and beyond",
            options: {
                option1: "Magdalena Abakanowicz",
                option2: "Marina Abramovic",
                option3: "Kasia Orlowkowska",
                option4: "Eva Hochfleisher"
            },
            correctAnswer: 1,
            explanation: "She was a Polish sculptor and artist. Notable for her use of textiles as a sculptural medium and widely regarded as one of Poland's most internationally acclaimed artists. A professor at the Academy of Fine Arts in Poznań, Poland and a visiting professor at University of California, Los Angeles."
        },
        question19: {
            description: "She was born in what is now Kaliningrad, Russia and is known for her powerful sculptures and for influencing artist Charles White´s work",
            options: {
                option1: "Katharina Mueller",
                option2: "Bettina Betthaus",
                option3: "Kathe Kollwitz",
                option4: "Constanza Geld"
            },
            correctAnswer: 3,
            explanation: "She was a German artist, who worked with painting, printmaking (including etching, lithography and woodcuts) and sculpture. Her most famous art cycles, including The Weavers and The Peasant War, depict the effects of poverty, hunger, and war on the working class."
        },
        question20: {
            description: "Widowed while very young after being married off as a child she rose above dogma and works passionately towards the cause of women and children",
            options: {
                option1: "Anita Pridal",
                option2: "R Kalyanamma",
                option3: "Jasmine Pakriti",
                option4: "Madral Mhubudi"
            },
            correctAnswer: 3,
            explanation: "Married off as a child and widowed at a young age, R Kalyanamma had been a victim of the social norms of her age. But even a lack of education would not stop her from rising above dogma and working towards the cause of women and children. Kalyanamma also always appreciated literature."
        }
    }
    let questionsArray = [];
    questionsArray.push(questions.question1)
    questionsArray.push(questions.question2)
    questionsArray.push(questions.question3)
    questionsArray.push(questions.question4)
    questionsArray.push(questions.question5)
    questionsArray.push(questions.question6)
    questionsArray.push(questions.question7)
    questionsArray.push(questions.question8)
    questionsArray.push(questions.question9)
    questionsArray.push(questions.question10)
    questionsArray.push(questions.question11)
    questionsArray.push(questions.question12)
    questionsArray.push(questions.question13)
    questionsArray.push(questions.question14)
    questionsArray.push(questions.question15)
    questionsArray.push(questions.question16)
    questionsArray.push(questions.question17)
    questionsArray.push(questions.question18)
    questionsArray.push(questions.question19)
    questionsArray.push(questions.question20)

    var shuffledQuestionArray = this.shuffle(questionsArray);
    //var shuffledTopicArray = this.shuffle(yourTopicArray);
    res.send(JSON.stringify(shuffledQuestionArray))
}

questions.prototype.shuffle = function (sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));
        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

module.exports = questions;