const bergTests = [
    {
        testNumber: 1,
        title: "Sitting to standing",
        instructions: "Please stand up. Try not to use your hand for support.",
        scoreOne: {
            description: "Able to stand without using hands and stabilize independently.",
            score: 4
        },
        scoreTwo: {
            description: "Able to stand independently using hands.",
            score: 3
        },
        scoreThree: {
            description: "Able to stand using hands after several tries.",
            score: 2
        },
        scoreFour: {
            description: "Needs minimal aid to stand or stabilize.",
            score: 1
        },
        scoreFive: {
            description: "Needs moderate or maximal assist to stand.",
            score: 0
        }
    },
    {
        testNumber: 2,
        title: "Standing unsupported",
        instructions: "Please stand for two minutes without holding on.",
        scoreOne: {
            description: "Able to stand safely for 2 minutes.",
            score: 4
        },
        scoreTwo: {
            description: "Able to stand 2 minutes with supervision.",
            score: 3
        },
        scoreThree: {
            description: "Able to stand 30 seconds unsupported.",
            score: 2
        },
        scoreFour: {
            description: "Needs several tries to stand 30 seconds unsupported.",
            score: 1
        },
        scoreFive: {
            description: "Unable to stand 30 seconds unsupported.",
            score: 0
        }
    },
    {
        testNumber: 3,
        title: "Sitting with back unsupported but feet supported on floor or on a stool",
        instructions: "Please sit with arms folded for 2 minutes.",
        scoreOne: {
            description: "Able to sit safely and securely for 2 minutes.",
            score: 4
        },
        scoreTwo: {
            description: "Able to sit 2 minutes under supervision.",
            score: 3
        },
        scoreThree: {
            description: "Able to sit 30 seconds.",
            score: 2
        },
        scoreFour: {
            description: "Able to sit 10 seconds.",
            score: 1
        },
        scoreFive: {
            description: "Unable to sit without support for 10 seconds.",
            score: 0
        }
    },
    {
        testNumber: 4,
        title: "Standing to sitting",
        instructions: "Please sit down.",
        scoreOne: {
            description: "Sits safely with minimal use of hands.",
            score: 4
        },
        scoreTwo: {
            description: "Controls descent by using hands.",
            score: 3
        },
        scoreThree: {
            description: "Uses back of legs against chair to control descent.",
            score: 2
        },
        scoreFour: {
            description: "Sits independently but has uncontrolled descent.",
            score: 1
        },
        scoreFive: {
            description: "Needs assist to sit.",
            score: 0
        }
    },
    {
        testNumber: 5,
        title: "Transfers",
        instructions: "Arrange chair(s) for pivot transfer. Ask subject to transfer one way toward a seat with armrests and one way toward a seat without armrests.",
        scoreOne: {
            description: "Able to transfer safely with minor use of hands.",
            score: 4
        },
        scoreTwo: {
            description: "Able to transfer safely with definite need of hands.",
            score: 3
        },
        scoreThree: {
            description: "Able to transfer with verbal cuing and/or supervision.",
            score: 2
        },
        scoreFour: {
            description: "Needs one person to assist.",
            score: 1
        },
        scoreFive: {
            description: "Needs two people to assist or supervise to be safe.",
            score: 0
        }
    },
    {
        testNumber: 6,
        title: "Standing unsupported with eyes closed",
        instructions: "Please close your eyes and stand still for 10 seconds.",
        scoreOne: {
            description: "Able to stand 10 seconds safely.",
            score: 4
        },
        scoreTwo: {
            description: "Able to stand 10 seconds with supervision.",
            score: 3
        },
        scoreThree: {
            description: "Able to stand 3 seconds.",
            score: 2
        },
        scoreFour: {
            description: "Unable to keep eyes closed for 3 seconds but stays safely.",
            score: 1
        },
        scoreFive: {
            description: "Needs help to keep from falling.",
            score: 0
        }
    },
    {
        testNumber: 7,
        title: "Standing unsupported with feet together",
        instructions: "Place your feet together and stand without holding on.",
        scoreOne: {
            description: "Able to place feet together independently and stand 1 minute safely.",
            score: 4
        },
        scoreTwo: {
            description: "Able to place feet together independently and stand 1 minute with supervision.",
            score: 3
        },
        scoreThree: {
            description: "Able to place feet together independently but unable to hold for 30 seconds.",
            score: 2
        },
        scoreFour: {
            description: "Needs help to attain position but able to stand 15 seconds feet together.",
            score: 1
        },
        scoreFive: {
            description: "Needs help to attain position and unable to hold for 15 seconds.",
            score: 0
        }
    },
    {
        testNumber: 8,
        title: "Reaching forward with outstretched arm while standing",
        instructions: "Lift arm to 90 degrees. Stretch out your fingers and reach forward as far as you can.",
        scoreOne: {
            description: "Can reach forward confidently 25 cm (10 inches).",
            score: 4
        },
        scoreTwo: {
            description: "Can reach forward 12 cm (5 inches).",
            score: 3
        },
        scoreThree: {
            description: "Can reach forward 5 cm (2 inches).",
            score: 2
        },
        scoreFour: {
            description: "Reaches forward but needs supervision.",
            score: 1
        },
        scoreFive: {
            description: "Loses balance while trying/requires external support.",
            score: 0
        }
    },
    {
        testNumber: 9,
        title: "Pick up object from the floor from a standing position",
        instructions: "Pick up the shoe/slipper, which is placed in front of your feet.",
        scoreOne: {
            description: "Able to pick up slipper safely and easily.",
            score: 4
        },
        scoreTwo: {
            description: "Able to pick up slipper but needs supervision.",
            score: 3
        },
        scoreThree: {
            description: "Unable to pick up but reaches 2-5 cm (1-2 inches) from slipper and keeps balance independently.",
            score: 2
        },
        scoreFour: {
            description: "Unable to pick up and needs supervision while trying.",
            score: 1
        },
        scoreFive: {
            description: "Unable to try/needs assist to keep from losing balance or falling.",
            score: 0
        }
    },
    {
        testNumber: 10,
        title: "Turning to look behind over left and right shoulders while standing",
        instructions: "Turn to look directly behind you over toward the left shoulder. Repeat to the right.",
        scoreOne: {
            description: "Looks behind from both sides and weight shifts well.",
            score: 4
        },
        scoreTwo: {
            description: "Looks behind one side only; other side shows less weight shift.",
            score: 3
        },
        scoreThree: {
            description: "Turns sideways only but maintains balance.",
            score: 2
        },
        scoreFour: {
            description: "Needs supervision when turning.",
            score: 1
        },
        scoreFive: {
            description: "Needs assist to keep from losing balance or falling.",
            score: 0
        }
    },
    {
        testNumber: 11,
        title: "Turn 360 degrees",
        instructions: "Turn completely around in a full circle. Pause. Then turn a full circle in the other direction.",
        scoreOne: {
            description: "Able to turn 360 degrees safely in 4 seconds or less.",
            score: 4
        },
        scoreTwo: {
            description: "Able to turn 360 degrees safely one side only 4 seconds or less.",
            score: 3
        },
        scoreThree: {
            description: "Able to turn 360 degrees safely but slowly.",
            score: 2
        },
        scoreFour: {
            description: "Needs close supervision or verbal cuing.",
            score: 1
        },
        scoreFive: {
            description: "Needs assistance while turning.",
            score: 0
        }
    },
    {
        testNumber: 12,
        title: "Place alternate foot on step or stool while standing unsupported",
        instructions: "Place each foot alternately on the step/stool. Continue until each foot has touched the step/stool four times.",
        scoreOne: {
            description: "Able to stand independently and safely and complete 8 steps in 20 seconds.",
            score: 4
        },
        scoreTwo: {
            description: "Able to stand independently and complete 8 steps in >20 seconds.",
            score: 3
        },
        scoreThree: {
            description: "Able to complete 4 steps without aid with supervision.",
            score: 2
        },
        scoreFour: {
            description: "Able to complete >2 steps but needs minimal assist.",
            score: 1
        },
        scoreFive: {
            description: "Needs assistance to keep from falling/unable to try.",
            score: 0
        }
    },
    {
        testNumber: 13,
        title: "Standing unsupported one foot in front",
        instructions: "Place one foot directly in front of the other. If you cannot place your foot directly in front, step far enough ahead that the heel of your forward foot is ahead of the toes of the other foot.",
        scoreOne: {
            description: "Able to place foot tandem independently and hold 30 seconds.",
            score: 4
        },
        scoreTwo: {
            description: "Able to place foot ahead independently and hold 30 seconds.",
            score: 3
        },
        scoreThree: {
            description: "Able to take small step independently and hold 30 seconds.",
            score: 2
        },
        scoreFour: {
            description: "Needs help to step but can hold 15 seconds.",
            score: 1
        },
        scoreFive: {
            description: "Loses balance while stepping or standing.",
            score: 0
        }
    },
    {
        testNumber: 14,
        title: "Standing on one leg",
        instructions: "Stand on one leg as long as you can without holding on.",
        scoreOne: {
            description: "Able to lift leg independently and hold >10 seconds.",
            score: 4
        },
        scoreTwo: {
            description: "Able to lift leg independently and hold 5-10 seconds.",
            score: 3
        },
        scoreThree: {
            description: "Able to lift leg independently and hold 3 seconds.",
            score: 2
        },
        scoreFour: {
            description: "Tries to lift leg; unable to hold 3 seconds but remains standing safely.",
            score: 1
        },
        scoreFive: {
            description: "Unable to try or needs assist to prevent fall.",
            score: 0
        }
    }
    
]

export default bergTests