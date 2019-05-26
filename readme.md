
# Undiscovered Story PWA "Learn and Earn" Cryptocurrency Game and Architecture utilizing Stellar Smart Contracts, Google FireBase and Heroku.


<p align="center"><!-- <img src="https://cloud.githubusercontent.com/assets/124117/22330270/bb6b2728-e408-11e6-9488-d041b317e1e4.png" height="400px"/> -->

<!-- <img src="./images/img1.png" height="400px"/> -->

<img src="./images/img2.png" height="400px"/>


<br />
# Undiscovered Story 
<br />
Undiscovered Story, is a “learn & Earn” Blockchain Progressive Web Application based Trivia game that celebrates the acheivments of Girls & Women throughout history.  The game rewards players with cryptocurrency, is intended for mass adoption and is easy, fun and engaging to play. 

Undiscovered Story, is a “learn & Earn” Blockchain Progressive Web Application based Trivia game that celebrates the acheivments of Girls & Women throughout history.  The game rewards players with cryptocurrency, is intended for mass adoption and is easy, fun and engaging to play.  The game has been designed to support and empower players to be global agents of social change.  

One of the glaring problems with almost every blockchain and cryptocurrency based product or service is that they are generally not easily usable by the average person.  

We have discovered through our face to face interviews and online research with everyday persons, including moms, dads, young adults and teens, that unless a product is easy to use mass adoption of blockchain and cryptocurrency product or service is not going to happen.

# Undiscovered Story Technical Stack *
Undiscovered Story has been built, was released as a beta test product during May 2019 and utilizes a Stellar blockchain smart contract, and a Stellar XLM based token called UDGT. 

The front end is a Progressive Web Application (PWA) built using ReactJS with the backend utilising NodeJS, Stellar, MongoDB, Firebase, Firestore and Heroku.

Every initial registered game player is given the games Stellar wallet with a predetermined amount of Undiscovered Story Game Tokens (UDGT). For every correct answer, a game player is rewarded with a deposit of UDGT into their wallet. When players choose the incorrect answers, a portion of any rewards are also deducted from the game player’s wallet, and distributed to a network of verified charities operating around the world utilizing a Stellar smart contract.

The game also features a permission based social good advertisement system.  Most everyone we have interviewed does not like being interrupted by advertisements, and most either turn down the volume or walk away to do something else while an ad plays.  Our technical solution has permissioned based advertisements at the end of the game leaving the game player in full control. 
The ads feature only a comment bar.  

If a game player views the ad until the end, and offers a constructive comment to the advertising partner, they will receive a reward creating a win-win solution and relationship for the game player and the advertiser.   The game player wins by being rewarded with UDGT, and the advertiser wins by knowing that their ad has been watched fully.

# Offchain gaming mechanism
We are using two services from Firebase: 
Hosting (Our app is hosted on firebase’s hosting platform )
Firestore (That is our realtime database) 

The Firebase service for the database is entirely serving the offchain gaming mechanism. This permits us to perform future game upgrades without affecting the Stellar smart contract and the transctions made through the smart contract. 
This offchain gaming mechanism records the transactions made on the Stellar smart contract, with the responses of every transaction being recorded in the Firebase/Forestore database in realtime.

This implementation allows us to always have a backup record of every transaction that occurs or has occured.  This offchain gaming mechanism allows for extra protection of game user data in case of any major changes or updates to the Stellar network. 

Our team has created more than 16 custom  API’s to serve different modules of our application which involves onchain Stellar smart contract API’s and offchain ( Firebase and Firestore ) and working harmoniusly together.


# The Undiscovered Story Game Token (UDGT) Architecture we designed in house for Stellar Blockchain Gaming
<img src="./images/UDGTStellarGamegenesis.png" height="auto"/>
</p>
