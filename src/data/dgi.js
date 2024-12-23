const dgiTests = [
    {
        "testNumber": 1,
        "title": "Gait level surface",
        "instructions": "Walk at your normal speed from here to the next mark (20').",
        "scoreThree": {
            "description": "Walks 20', no assistive devices, good speed, no evidence for imbalance, normal gait pattern.",
            "score": 3
        },
        "scoreTwo": {
            "description": "Walks 20', uses assistive devices, slower speed, mild gait deviations.",
            "score": 2
        },
        "scoreOne": {
            "description": "Walks 20', slow speed, abnormal gait pattern, evidence for imbalance.",
            "score": 1
        },
        "scoreZero": {
            "description": "Cannot walk 20' without assistance, severe gait deviations or imbalance.",
            "score": 0
        }
    },
    {
        "testNumber": 2,
        "title": "Change in gait speed",
        "instructions": "Begin walking at your normal pace (for 5'), when I tell you 'go,' walk as fast as you can (for 5'). When I tell you 'slow,' walk as slowly as you can (for 5').",
        "scoreThree": {
            "description": "Able to smoothly change walking speed without loss of balance or gait deviation. Shows a significant difference in walking speeds between normal, fast and slow speeds.",
            "score": 3
        },
        "scoreTwo": {
            "description": "Is able to change speed but demonstrates mild gait deviations, or no gait deviations but unable to achieve a significant change in velocity, or uses an assistive device.",
            "score": 2
        },
        "scoreOne": {
            "description": "Makes only minor adjustments to walking speed, or accomplishes a change in speed with significant gait deviations, or changes speed but has significant gait deviations, or changes speed but loses balance but is able to recover and continue walking.",
            "score": 1
        },
        "scoreZero": {
            "description": "Cannot change speeds, or loses balance and has to reach for wall or be caught.",
            "score": 0
        }
    },
    {
        "testNumber": 3,
        "title": "Gait with horizontal head turns",
        "instructions": "Begin walking at your normal pace. When I tell you to 'look right,' keep walking straight, but turn your head to the right. Keep looking to the right until I tell you, 'look left,' then keep walking straight and turn your head to the left. Keep your head to the left until I tell you 'look straight,' then keep walking straight, but return your head to the center.",
        "scoreThree": {
            "description": "Performs head turns smoothly with no change in gait.",
            "score": 3
        },
        "scoreTwo": {
            "description": "Performs head turns smoothly with slight change in gait velocity, i.e., minor disruption to smooth gait path or uses walking aid.",
            "score": 2
        },
        "scoreOne": {
            "description": "Performs head turns with moderate change in gait velocity, slows down, staggers but recovers, can continue to walk.",
            "score": 1
        },
        "scoreZero": {
            "description": 'Performs task with severe disruption of gait, i.e., staggers outside 15" path, loses balance, stops, reaches for wall.',
            "score": 0
        }
    },
    {
        "testNumber": 4,
        "title": "Gait with vertical head turns",
        "instructions": "Begin walking at your normal pace. When I tell you to 'look up,' keep walking straight, but tip your head up. Keep looking up until I tell you, 'look down,' then keep walking straight and tip your head down. Keep your head down until I tell you 'look straight,' then keep walking straight, but return your head to the center.",
        "scoreThree": {
            "description": "Performs head turns smoothly with no change in gait.",
            "score": 3
        },
        "scoreTwo": {
            "description": "Performs head turns smoothly with slight change in gait velocity, i.e., minor disruption to smooth gait path or uses walking aid.",
            "score": 2
        },
        "scoreOne": {
            "description": "Performs head turns with moderate change in gait velocity, slows down, staggers but recovers, can continue to walk.",
            "score": 1
        },
        "scoreZero": {
            "description": 'Performs task with severe disruption of gait, i.e., staggers outside 15" path, loses balance, stops, reaches for wall.',
            "score": 0
        }
    },
    {
        "testNumber": 5,
        "title": "Gait and pivot turn",
        "instructions": "Begin walking at your normal pace. When I tell you, 'turn and stop,' turn as quickly as you can to face the opposite direction and stop.",
        "scoreThree": {
            "description": "Pivot turns safely within 3 seconds and stops quickly with no loss of balance.",
            "score": 3
        },
        "scoreTwo": {
            "description": "Pivot turns safely in > 3 seconds and stops with no loss of balance.",
            "score": 2
        },
        "scoreOne": {
            "description": "Turns slowly, requires verbal cueing, requires several small steps to catch balance following turn and stop.",
            "score": 1
        },
        "scoreZero": {
            "description": "Cannot turn safely, requires assistance to turn and stop.",
            "score": 0
        }
    },
    {
        "testNumber": 6,
        "title": "Step over obstacle",
        "instructions": "Begin walking at your normal speed. When you come to the shoebox, step over it, not around it, and keep walking.",
        "scoreThree": {
            "description": "Is able to step over the box without changing gait speed, no evidence of imbalance.",
            "score": 3
        },
        "scoreTwo": {
            "description": "Is able to step over box, but must slow down and adjust steps to clear box safely.",
            "score": 2
        },
        "scoreOne": {
            "description": "Is able to step over box but must stop, then step over. May require verbal cueing.",
            "score": 1
        },
        "scoreZero": {
            "description": "Cannot perform without assistance.",
            "score": 0
        }
    },
    {
        "testNumber": 7,
        "title": "Step around obstacles",
        "instructions": "Begin walking at normal speed. When you come to the first cone (about 6' away), walk around the right side of it. When you come to the second cone (6' past first cone), walk around it to the left.",
        "scoreThree": {
            "description": "Is able to walk around cones safely without changing gait speed; no evidence of imbalance.",
            "score": 3
        },
        "scoreTwo": {
            "description": "Is able to step around both cones, but must slow down and adjust steps to clear cones.",
            "score": 2
        },
        "scoreOne": {
            "description": "Is able to clear cones but must significantly slow speed to accomplish task, or requires verbal cueing.",
            "score": 1
        },
        "scoreZero": {
            "description": "Unable to clear cones, walks into one or both cones, or requires physical assistance.",
            "score": 0
        }
    },
    {
        "testNumber": 8,
        "title": "Steps",
        "instructions": "Walk up these stairs as you would at home, i.e., using the railing if necessary. At the top, turn around and walk down.",
        "scoreThree": {
            "description": "Alternating feet, no rail.",
            "score": 3
        },
        "scoreTwo": {
            "description": "Alternating feet, must use rail.",
            "score": 2
        },
        "scoreOne": {
            "description": "Two feet to a stair, must use rail.",
            "score": 1
        },
        "scoreZero": {
            "description": "Cannot do safely.",
            "score": 0
        }
    }
]

export default dgiTests