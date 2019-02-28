/**
 * Created By Nikita Mittal
 * 26th Feb 2019
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { Progress } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

//import css
import './Quiz.css'
import CloseIcon from '../../icons/CloseIcon';
import HourGlass from '../../icons/HourGlass';
import Bookmark from '../../icons/Bookmark';
import QuestionCenterIcon from '../../icons/QuestionCenterIcon';
// import OptionOne from '../../icons/OptionOne';
// import OptionTwo from '../../icons/OptionTwo';
// import OptionThree from '../../icons/OptionThree';
// import OptionFour from '../../icons/OptionFour'
import OptionOne from '../../icons/OptionOneIcon.png'
import OptionTwo from '../../icons/OptionTwoIcon.png'
import OptionThree from '../../icons/OptionThreeIcon.png'
import OptionFour from '../../icons/OptionFourIcon.png'
import CorrectOption from '../../icons/CorrectOption';
import IncorrectOption from '../../icons/IncorrectOption';



class Quiz extends PureComponent {
    static propTypes = {

    }

    static defaultProps = {

    }

    constructor(props) {
        super(props)
        this.state = {
            question: "1. Who was the African American who sang “Cosi Fan Tutte” with George Shirley",
            option1: "Camilla Williams",
            option2: "Leontyne Price",
            option3: "Gladys Knight",
            option4: "Aretha Franklin",
            count: 1,
            correctAnswer: "Leontyne Price",
            explainationText: "Among her many honors are the Presidential Medal of Freedom (1964), the Spingarn Medal (1965),[6] the Kennedy Center Honors (1980), the National Medal of Arts (1985), numerous honorary degrees, and 19 Grammy Awards.",
            percent: 4.5,
            optionSelect : ''
        }
    }

    onBack = () => {
        this.props.history.goBack()
    }

    nextQuestion = () => {
        const {count} = this.state
        let nextCount = count + 1
        if(nextCount === 2){
            this.setState({
                question: "She was one of of the first female pilots to obtain a pilots license during the 1920´s. She was also of mixed ancestry",
                option1: "Molly Rose",
                option2: "Bessie Coleman",
                option3: "Amelia Earhart",
                option4: "Mary Jackson",
                count: 2,
                correctAnswer: "Bessie Coleman",
                explainationText: "She developed an early interest in flying, but African Americans, Native Americans, and women had no flight-school opportunities in the United States, so she saved up money to go to France to become a licensed pilot. She later became a successful air show pilot in the United States. ",
                percent: 4.5*2
            })
        } else if(nextCount === 3){
            this.setState({
                question: "She works in the social impact arena, decentralized technology, is an award winner who also is a health and wellness and social justice expert",
                option1: "Indigo Ocean-Dutton",
                option2: "Daisy Ozim",
                option3: "Melissa Sutor",
                option4: "Camille Jones",
                count: 3,
                correctAnswer: "Daisy Ozim",
                explainationText: "Her work is centered in developing systems and practices rooted in sustainability and equity. She works on health programs and policy from the international to local level, has worked to promote equity in the Blockchain ecosystem and supporting the correct application of venture capital.",
                percent: 4.5*3
            })
        } else if(nextCount === 4){
            this.setState({
                question: "She was one of Dr. Louis Leaky’s angels, who made one of the greatest scientifc discoveries regarding humans, primates and the use of tools",
                option1: "Diane Fossey",
                option2: "Birutė Galdikas",
                option3: "Jane Goodall",
                option4: "Bridgette Leaky",
                count: 4,
                correctAnswer: "Jane Goodall",
                explainationText: "Dame Dr. Jane Goodal is an English primatologist and anthropologist.  Considered to be the world's foremost expert on chimpanzees, Goodall is best known for her over 55-year study of social and family interactions of wild chimpanzees in Gombe Stream National Park, Tanzania.",
                percent: 4.5*4
            })
        } else if(nextCount === 5){
            this.setState({
                question: "She is a young Nobel Peace Prize Winner who was shot in the face for standing up for the education of girls,",
                option1: "Malala Yousafzai",
                option2: "Malala Yousat",
                option3: "Malala Safzai",
                option4: "Malala Zaisatyou",
                count: 5,
                correctAnswer: "Malala Yousafzai",
                explainationText:"Malala Yousafzai is a Pakistani activist for female education and the youngest Nobel Prize laureate.[4] She is known for human rights advocacy, especially the education of women and children in her native land.  Her advocacy has grown into an international movement. ",
                percent: 4.5*5
            })
        } else if(nextCount === 6){
            this.setState({
                question: "An English writer and philosopher who believed that women should empower themselves",
                option1: "Elisabeth Bernhard",
                option2: "Mary Wollstonecraft",
                option3: "Marianne Wollstone",
                option4: "Kasia Orlowofska",
                count: 6,
                correctAnswer: "Mary Wollstonecraft",
                explainationText: "Mary Wollstonecraft was an English writer, philosopher, and advocate of women's rights. Today Wollstonecraft is regarded as one of the founding feminist philosophers, and feminists often cite both her life and work as important influences.",
                percent: 4.5*6
            })
        } else if(nextCount === 7){
            this.setState({
                question: "The only person to win a Nobel Prize in two different sciences",
                option1: "Linda B. Buck",
                option2: "Jane Addams",
                option3: "Alva Myrdal",
                option4: "Marie Skłodowska",
                count: 7,
                correctAnswer: "Marie Skłodowska",
                explainationText: "Marie Skłodowska Curie  was a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person and only woman to win twice, and the only person to win a Nobel Prize in two different sciences. ",
                percent: 4.5*7
            })
        } else if(nextCount === 8){
            this.setState({
                question: "She wrote a book about the history of the dollar and at one time was compared to Steve Jobs",
                option1: "Angel Rich",
                option2: "Andrea Cunnigham",
                option3: "Tracey Benton",
                option4: "Joy Johnston",
                count: 8,
                correctAnswer: "Angel Rich",
                explainationText: "Created an algorithm for the stock market to win Goldman Sachs Portfolio Challenge, selling her first marketing plan to Prudential, a founding employee of FINRA, authored the first African American Financial Experience study, invented the top financial literacy product in the world, and was named the “Next Steve Jobs” - Forbes. ",
                percent: 4.5*8
            })
        } else if(nextCount === 9){
            this.setState({
                question: "A Nobel Peace Prize nominee who during the second vatican council contributed to a significant change",
                option1: "Mother Theresa",
                option2: "Hildegard Goss-Mayr",
                option3: "Gerty Theresa Cori",
                option4: "Selma Lagerlöf",
                count: 9,
                correctAnswer: "Hildegard Goss-Mayr",
                explainationText: "She and her husband spoke to the Council Vatican II. In the 1960s/70s, they trained groups worldwide in active nonviolence including Argentina's SERPAJ, whose first coordinator was Nobel Winner Adolfo Pérez Esquivel.   They participated in the preparation of the People Power Revolution in Philippines in 1986.",
                percent: 4.5*9
            })
        } else if(nextCount === 10){
            this.setState({
                question: "A woman of deep wisdom who wrote a poem about why a flying creature sings and was honoured by Barack Obama for her writing, activism and inspiration  ",
                option1: "Tony Morrison",
                option2: "Oprah Winfrey",
                option3: "Aretha Franklin",
                option4: "Maya Angelou",
                count: 10,
                correctAnswer: "Maya Angelou",
                explainationText: "An American poet, singer, and civil rights activist. She published books of essays, poetry, and is credited with a list of plays, movies, and autobiographies.  The first, I Know Why the Caged Bird Sings (1969), brought her international recognition and acclaim. She received dozens of awards and more than 50 honorary degrees. ",
                percent: 4.5*10
            })
        } else if(nextCount === 11){
            this.setState({
                question: "She was the first woman to hold a Prime Minister position in the world",
                option1: "Chandrika Kumaratunga",
                option2: "Simavo Bandaranai",
                option3: "Indira Gandhi",
                option4: "Sirimavo Bandaranaike",
                count: 11,
                correctAnswer: "Sirimavo Bandaranaike",
                explainationText: "She became India’s first woman prime minister and nine years before Golda Meir was appointed PM of Israel. She made the country a republic, nationalized companies and church schools, and squashed a Marxist insurrection. She also gave birth to the future female president of the country Chandrika Kumaratunga. ",
                percent: 4.5*11
            })
        } else if(nextCount === 12){
            this.setState({
                question: " A leading advocate for abolishing slavery, improving workers’ rights, higher education for women, and Woman's Suffrage before the year 1900",
                option1: "Barbara Hersey",
                option2: "Susan B. Anthony",
                option3: "Gloria Steinman",
                option4: "Joanna Nobel",
                count: 12,
                correctAnswer: "Susan B. Anthony",
                explainationText: "The 19th Amendment to the Constitution,which granted the right to vote to all U.S. women over 21 in 1920, is known by her name. In the next 54 years, she published The Revolution, circulated petitions for married women’s property rights, and was arrested for voting (1872). ",
                percent: 4.5*12
            })
        } else if(nextCount === 13){
            this.setState({
                question: " She opened the first family planning centre, and helped form the National Birth Control Council, which led to the Family Planning Association",
                option1: "Marie Stopes",
                option2: "Beth Fields",
                option3: "Sandra Day O'Connor",
                option4: "Mary Stopel",
                count: 13,
                correctAnswer: "Marie Stopes",
                explainationText: "A British author, palaeobotanist and campaigner for eugenics and women's rights. She made significant contributions to plant paleontology and coal classification, and was the first female academic on the faculty of the University of Manchester. She founded the first birth control clinic in Britain.",
                percent: 4.5*13
            })
        } else if(nextCount === 14){
            this.setState({
                question: " The first woman to take home three coveted movies directing trophies for after decades of being ignored .",
                option1: "Penny Marschall",
                option2: "Samatha Holt",
                option3: "Kathryn Bigelow",
                option4: "Emma Kennedy",
                count: 14,
                correctAnswer: "Kathryn Bigelow",
                explainationText: "Is an multi award winning American film director, producer, and screenwriter. Her films include Near Dark (1987), Point Break (1991), Strange Days (1995), K-19: The Widowmaker (2002), The Hurt Locker (2008), Zero Dark Thirty (2012), and Detroit (2017).  ",
                percent: 4.5*14
            })
        } else if(nextCount === 15){
            this.setState({
                question: " Mystically Feminine activist, lecturer, author presented the idea that women could be happy outside of traditional roles and occupations. ",
                option1: "Shirley Chisholm",
                option2: "Betty Friedan",                
                option3: "Charlegne Johnson",
                option4: "Linda Sutter",
                count: 15,
                correctAnswer: "Betty Friedan",
                explainationText: "She was an American feminist writer and activist. A leading figure in the women's movement in the United States, her 1963 book The Feminine Mystique is often credited with sparking the second wave of American feminism in the 20th century.  She co-founded the National Organization for Women (NOW).",
                percent: 4.5*15
            })
        } else if(nextCount === 16){
            this.setState({
                question: "Self-taught automobile safety expert, designer, engineer as well as a star actress in the movie circuit",
                option1: "Eva Wachowski",
                option2: "Carlita Gonzalez",                
                option3: "Valerie Abudala",
                option4: "Florence Lawrence",
                count: 16,
                correctAnswer: "Florence Lawrence",
                explainationText: "She is widely considered the world’s first “movie star.” Lawrence was an auto aficionado and designed the first turn signal. She also designed a brake signal that raised and lowered when a driver hit the brakes, though she never patented either of those inventions. ",
                percent: 4.5*16
            })
        } else if(nextCount === 17){
            this.setState({
                question: "A scout, spy, railroad conductor and nurse during the war. She supported herself after the war by giving speeches and selling her biography",
                option1: "Maye Sampson",
                option2: "Johnanna Brown",                
                option3: "Harper Ferry",
                option4: "Araminta Ross",
                count: 17,
                correctAnswer: "Araminta Ross",
                explainationText: "Harriet Tubman (born Araminta Ross) was an American abolitionist and political activist. Born into slavery, Tubman escaped and subsequently made some thirteen missions to rescue enslaved people, family and friends, using a network of activists and safe houses known as the Underground Railroad. ",
                percent: 4.5*17
            })
        } else if(nextCount === 18){
            this.setState({
                question: "Computer science inventor genius mathematician who co-created a programming language who also won a Computer Sciences Man Of The Year Award.",
                option1: "Nikita Dievelopin",
                option2: "Grace Hopper",                
                option3: "Bonnie Jones",
                option4: "Denise Hopper",
                count: 18,
                correctAnswer: "Grace Hopper",
                explainationText: "She was an American computer scientist and United States Navy rear admiral.  One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first compiler related tools. She co-created the COBOL programming language.",
                percent: 4.5*18
            })
        } else if(nextCount === 19){
            this.setState({
                question: "Her art impacted artists and individuals in a profound way in Japan, Chicago, Paris, Poland and beyond",
                option1: "Magdalena Abakanowicz",
                option2: "Marina Abramovic",                
                option3: "Kasia Orlowkowska",
                option4: "Eva Hochfleisher",
                count: 19,
                correctAnswer: "Magdalena Abakanowicz",
                explainationText: "She was a Polish sculptor and artist. Notable for her use of textiles as a sculptural medium and widely regarded as one of Poland's most internationally acclaimed artists. A professor at the Academy of Fine Arts in Poznań, Poland and a visiting professor at University of California, Los Angeles.",
                percent: 4.5*19
            })
        } else if(nextCount === 20){
            this.setState({
                question: "She was born in what is now Kaliningrad, Russia and is known for her powerful sculptures and for influencing artist Charles White´s work",
                option1: "Katharina Mueller",
                option2: "Bettina Betthaus",                
                option3: "Kathe Kollwitz",
                option4: "Constanza Geld",
                count: 20,
                correctAnswer: "Kathe Kollwitz",
                explainationText: "She was a German artist, who worked with painting, printmaking (including etching, lithography and woodcuts) and sculpture. Her most famous art cycles, including The Weavers and The Peasant War, depict the effects of poverty, hunger, and war on the working class.",
                percent: 4.5*20
            })
        } else if(nextCount === 21){
            this.setState({
                question: "Widowed while very young after being married off as a child she rose above dogma and works passionately towards the cause of women and children",
                option1: "Anita Pridal",
                option2: "R Kalyanamma",                
                option3: "Jasmine Pakriti",
                option4: "Madral Mhubudi",
                count: 21,
                correctAnswer: "R Kalyanamma",
                explainationText: "Married off as a child and widowed at a young age, R Kalyanamma had been a victim of the social norms of her age. But even a lack of education would not stop her from rising above dogma and working towards the cause of women and children. Kalyanamma also always appreciated literature.",
                percent: 4.5*21
            })
        } else if(nextCount === 22){
            this.setState({
                question: "She hoped to prove that unchecked capitalism makes the poor poorer",
                option1: "Magdalena Abakanowicz",
                option2: "Marina Abramovic",                
                option3: "Kasia Orlowkowska",
                option4: "Eva Hochfleisher",
                count: 22,
                correctAnswer: "Elizabeth Magie",
                explainationText: "She was an American game designer and Georgist. She invented and patented The Landlord's Game, the precursor to Monopoly game, to illustrate teachings of the progressive era economist Henry George and to reveal the dangers of land-grabbing.",
                percent: 100
            })
        }
    }


    onFirstSelect = () => {
        // this.setState({
        //     optionSelect : 1
        // })
        this.nextQuestion()
    }

    onSecondSelect = () => {
        // this.setState({
        //     optionSelect : 2
        // })
        this.nextQuestion()
    }

    onThirdSelect = () => {
        // this.setState({
        //     optionSelect : 2
        // })
        this.nextQuestion()
    }

    onFourthSelect = () => {
        this.nextQuestion()
    }

    render() {
        const {question, option1, option2, option3, option4, count, correctAnswer, explainationText, percent} = this.state
        return (
            <div className="quiz-container">
                <div className="quiz-header-container">
                    <CloseIcon size="small" style={{ position: "relative", top: "17px", cursor: "pointer" }} onClick={this.onBack}/>
                    <div className="quiz-header-time-container">
                        <HourGlass style={{ position: "relative", top: "17px", marginRight: "5px" }} />
                        <div className="quiz-header-time-text">8 secs</div>
                    </div>
                    <Bookmark style={{ position: "relative", top: "17px" }} />
                </div>
                <div className="quiz-header-progress-container">
                    <Progress percent={percent} style={{ height: "3px", flex: "1 1 auto" }} />
                    <span className="quiz-header-progress-text-container">{count}/22</span>
                </div>
                {/* {count === 22 && <Link to={'/quiz-result'}>
                <div className="quiz-explaination-container">
                    <div className="quiz-explaination-text-container">Explanation Text:</div>
                    <div className="quiz-explaination-content-container">
                    {explainationText}
                    </div>
                </div></Link>
                }
                {count < 22 &&  <div className="quiz-explaination-container" onClick={this.nextQuestion}>
                    <div className="quiz-explaination-text-container">Explanation Text:</div>
                    <div className="quiz-explaination-content-container">
                    {explainationText}
                    </div>
                </div>} */}
                
                {/* <Link to={'/quiz-result'}> */}
                    <div className="quiz-question-header-container">
                        <QuestionCenterIcon className="quiz-question-center-icon-container" />
                    </div>
                {/* </Link> */}
               
                <div className="quiz-question-text-container">
                   <div className="quiz-question-text">{question}</div>
                </div>
                <div className="quiz-question-option-container">
                    <div className="quiz-question-option-data">
                        <div className="quiz-initial-option-container">
                        {/* <CorrectOption style={{position: "relative",bottom: "7px",right: "10px"}}/> */}
                        {/* <IncorrectOption style={{position: "relative",bottom: "7px",right: "10px"}}/> */}
                            {count === 22 &&  <Link to={'/quiz-result'}>
                            <div className="quiz-odd-option-container" onClick = {this.onFirstSelect}>
                                <img src={OptionOne} className="quiz-option-image-container quiz-option-odd-image"/>
                                {/* <OptionOne className="quiz-option-image-container quiz-option-odd-image" /> */}
                                <div className="quiz-option-odd-text-container">{option1}</div>
                              
                            </div>
                            </Link>
                            }

                            {count < 22 && 
                             <div className="quiz-odd-option-container" onClick = {this.onFirstSelect}>
                             <img src={OptionOne} className="quiz-option-image-container quiz-option-odd-image"/>
                             {/* <OptionOne className="quiz-option-image-container quiz-option-odd-image" /> */}
                             <div className="quiz-option-odd-text-container">{option1}</div>
                           
                            </div>
                            }
                           
                            {/* <CorrectOption style={{position: "relative",bottom: "7px",right: "10px", float:"right"}}/> */}
                            {/* <IncorrectOption  style={{position: "relative",bottom: "7px",right: "10px", float:"right"}}/> */}
                            {count === 22 &&  <Link to={'/quiz-result'}>
                            <div className="quiz-even-option-container" onClick={this.onSecondSelect}>
                                <img src={OptionTwo} className="quiz-option-image-container quiz-option-even-image"/>
                                {/* <OptionTwo className="quiz-option-image-container quiz-option-even-image"/> */}
                                <div className="quiz-option-even-text-container">{option2}</div>
                            </div>
                            </Link>
                            }
                            {count < 22 && 
                                 <div className="quiz-even-option-container" onClick={this.onSecondSelect}>
                                 <img src={OptionTwo} className="quiz-option-image-container quiz-option-even-image"/>
                                 {/* <OptionTwo className="quiz-option-image-container quiz-option-even-image"/> */}
                                 <div className="quiz-option-even-text-container">{option2}</div>
                             </div>
                            }
                            
                           

                        </div>
                        <div className="quiz-last-option-container">
                        {/* <CorrectOption style={{position: "relative",bottom: "7px",right: "10px"}}/> */}
                        {/* <IncorrectOption style={{position: "relative",bottom: "7px",right: "10px"}}/> */}
                            {count === 22 &&  <Link to={'/quiz-result'}>
                                <div className="quiz-odd-option-container" onClick={this.onThirdSelect}>
                                    <img src={OptionThree} className="quiz-option-image-container quiz-option-even-image"/>
                                    {/* <OptionThree className="quiz-option-image-container quiz-option-odd-image"/> */}
                                    <div className="quiz-option-odd-text-container">{option3}</div>
                                </div>
                            </Link>
                            }

                            {count < 22 && 
                                <div className="quiz-odd-option-container" onClick={this.onThirdSelect}>
                                    <img src={OptionThree} className="quiz-option-image-container quiz-option-even-image"/>
                                    {/* <OptionThree className="quiz-option-image-container quiz-option-odd-image"/> */}
                                    <div className="quiz-option-even-text-container">{option3}</div>
                                </div>
                            }
                          
                            {/* <CorrectOption style={{position: "relative",bottom: "7px",right: "10px", float:"right"}}/> */}
                            {/* <IncorrectOption  style={{position: "relative",bottom: "7px",right: "10px", float:"right"}}/> */}
                            {count === 22  &&  <Link to={'/quiz-result'}>
                            <div className="quiz-even-option-container" onClick={this.onFourthSelect}>
                                <img src={OptionFour} className="quiz-option-image-container quiz-option-even-image"/>
                                {/* <OptionFour className="quiz-option-image-container quiz-option-even-image"/> */}
                                <div className="quiz-option-even-text-container">{option4}</div>
                            </div>
                            </Link>}
                            {count < 22 &&   <div className="quiz-even-option-container" onClick={this.onFourthSelect}>
                                <img src={OptionFour} className="quiz-option-image-container quiz-option-even-image"/>
                                {/* <OptionFour className="quiz-option-image-container quiz-option-even-image"/> */}
                                <div className="quiz-option-even-text-container">{option4}</div>
                            </div>}
                           
                        </div>


                    </div>
                </div>

                {/* {count === 22 && <Link to={'/quiz-result'}>
                <div className="quiz-explaination-mobile-container" >
                    <div className="quiz-explaination-mobile-text-container">Explanation Text:</div>
                    <div className="quiz-explaination-mobile-content-container">
                        {explainationText}
                    </div>
                </div>
                </Link>}

                {count === 22 && 
                <div className="quiz-explaination-mobile-container" onClick={this.nextQuestion}>
                    <div className="quiz-explaination-mobile-text-container">Explanation Text:</div>
                    <div className="quiz-explaination-mobile-content-container">
                        {explainationText}
                    </div>
                </div>
               } */}

             





            </div>
        )
    }
}

export default Quiz