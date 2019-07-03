export default {
  questions: [{
      "number": 1,
      "title": "In the past 6-12 months, how much work have you done on your relationship with yourself?",
      "answers": [{
          "text": "This is something I never think about.",
          "scores": [
            {
            "catagory": "answer_breaking",
            "value": 1
          }
        ]
        },
        {
          "text": "I think about doing work on myself sometimes, but what for?",
          "scores": [{
            "catagory": "answer_breaking",
            "value": 1
          }]
        },
        {
          "text": "I want to do work on myself, but I don’t know how.",
          "scores": [{
            "catagory": "answer_breaking",
            "value": 1
          }]
        },
        {
          "text": "I do work on myself often, but wouldn’t say it’s a central focus of my life.",
          "scores": [{
            "catagory": "answer_building",
            "value": 1
          }]
        },
        {
          "text": "Working on myself is something I spend considerable time and resources on (either by myself or with the support of others).",
          "scores": [{
            "catagory": "answer_building",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 2,
      "title": "Which of the following kinds of support would you be most interested in receiving at this moment in your life?",
      "answers": [{
          "text": "raising your awareness of specific dynamics and patterns that might be impacting you negatively",
          "scores": [{
            "catagory": "answer_breaking",
            "value": 1
          }]
        },
        {
          "text": "understanding how specific dynamics and patterns are impacting you negatively",
          "scores": [{
            "catagory": "answer_breaking",
            "value": 1
          }]
        },
        {
          "text": "deciding how you might like to alter your habits, attitudes, behaviors and/or context",
          "scores": [{
            "catagory": "answer_building",
            "value": 1
          }]
        },
        {
          "text": "making changes to your habits, attitudes behaviors and/or context",
          "scores": [{
            "catagory": "answer_building",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 3,
      "title": "If you answered C, D, or E to the previous question, what was/is the impetus for you to begin working on yourself?",
      "answers": [{
          "text": "sudden significant change in life circumstances",
          "scores": [{
            "catagory": "answer_building",
            "value": 0
          }]
        },
        {
          "text": "significant yet expected change in life circumstances",
          "scores": [{
            "catagory": "answer_building",
            "value": 0
          }]
        },
        {
          "text": "current partner asked me to",
          "scores": [{
            "catagory": "answer_building",
            "value": 0
          }]
        },
        {
          "text": "want to meet a romantic partner and need to sort some things out first",
          "scores": [{
            "catagory": "answer_building",
            "value": 0
          }]
        },
        {
          "text": "I've been aware of it for a while and it was finally time to just do it",
          "scores": [{
            "catagory": "answer_building",
            "value": 0
          }]
        },
        {
          "text": "just wasn't happy with myself and/or my circumstances",
          "scores": [{
            "catagory": "answer_building",
            "value": 0
          }]
        },
        {
          "text": "saw patterns in my behavior that weren't working for me, so I decided to change them",
          "scores": [{
            "catagory": "answer_building",
            "value": 0
          }]
        }
      ]
    },
    {
      "number": 4,
      "title": "Do you believe you have a clear understanding of why you behave the way you do?",
      "answers": [{
          "text": "always",
          "scores": [{
            "catagory": "answer_breaking",
            "value": 1
          }]
        },
        {
          "text": "sometimes",
          "scores": [{
            "catagory": "answer_building",
            "value": 1
          }]
        },
        {
          "text": "never",
          "scores": [{
            "catagory": "answer_breaking",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 5,
      "title": "Do you believe you have a clear understanding of who you are?",
      "answers": [{
          "text": "yes",
          "scores": [{
            "catagory": "answer_building",
            "value": 1
          }]
        },
        {
          "text": "no",
          "scores": [{
            "catagory": "answer_breaking",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 6,
      "title": "If you had it your way, are there many things you would want to change about yourself and/or your life as it is today?",
      "answers": [{
          "text": "I’m happy about the way things are. There are few or no things I would like to change about myself and my life.",
          "scores": [{
            "catagory": "answer_building",
            "value": 1
          }]
        },
        {
          "text": "I’m happy with myself, but not my circumstances. There are few or no things I would like to change about myself, and many things I’d like to change about my life.",
          "scores": [{
              "catagory": "answer_building",
              "value": 0.5
            },
            {
              "catagory": "answer_breaking",
              "value": 0.5
            }
          ]
        },
        {
          "text": "I’m happy with my circumstances, but not myself. There are many things I would like to change about myself, and few to no things I’d like to change about my life.",
          "scores": [{
              "catagory": "answer_building",
              "value": 0.5
            },
            {
              "catagory": "answer_breaking",
              "value": 0.5
            }
          ]
        },
        {
          "text": "I’m not happy with myself or my circumstances. There are many things I would like to change about myself and about my life.",
          "scores": [{
            "catagory": "answer_breaking",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 7,
      "title": "How often do your actions have the impact you desire?",
      "answers": [{
          "text": "My actions always have their desired effect.",
          "scores": [{
            "catagory": "answer_with_it",
            "value": 1
          }]
        },
        {
          "text": "My actions often have their desired effect, but not always.",
          "scores": [{
              "catagory": "answer_with_it",
              "value": 0.65
            },
            {
              "catagory": "answer_against_it",
              "value": 0.35
            }
          ]
        },
        {
          "text": "My actions sometimes have their desired effect, but not most of the time.",
          "scores": [{
              "catagory": "answer_with_it",
              "value": 0.35
            },
            {
              "catagory": "answer_against_it",
              "value": 0.65
            }
          ]
        },
        {
          "text": "My actions never have their desired effect.",
          "scores": [{
            "catagory": "answer_against_it",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 8,
      "title": "Which of the following best describes the flow of your life over the past 12 months?",
      "answers": [{
          "text": "Things have been falling into place naturally, with minimal pushing on my part",
          "scores": [{
            "catagory": "answer_with_it",
            "value": 1
          }]
        },
        {
          "text": "Things have been falling into place, but it has still taken a lot of effort on my part",
          "scores": [{
              "catagory": "answer_with_it",
              "value": 0.7
            },
            {
              "catagory": "answer_against_it",
              "value": 0.3
            }
          ]
        },
        {
          "text": "Interesting opportunities have arisen but I've had to do a lot of maneuvering to make them happen",
          "scores": [{
              "catagory": "answer_with_it",
              "value": 0.5
            },
            {
              "catagory": "answer_against_it",
              "value": 0.5
            }
          ]
        },
        {
          "text": "It's been an uphill battle at every turn",
          "scores": [{
            "catagory": "answer_against_it",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 9,
      "title": "Looking back over the past few years, how often have things 'worked out' the way they're 'supposed to'?",
      "answers": [{
          "text": "Things work out the way they’re supposed to all the time.",
          "scores": [{
            "catagory": "answer_with_it",
            "value": 1
          }]
        },
        {
          "text": "Things often work out the way they're supposed to, but not all the time.",
          "scores": [{
              "catagory": "answer_with_it",
              "value": 0.7
            },
            {
              "catagory": "answer_against_it",
              "value": 0.3
            }
          ]
        },
        {
          "text": "Things sometimes work out the way they’re supposed to, but not often.",
          "scores": [{
              "catagory": "answer_with_it",
              "value": 0.4
            },
            {
              "catagory": "answer_against_it",
              "value": 0.6
            }
          ]
        },
        {
          "text": "Things never work out the way they’re supposed to.",
          "scores": [{
            "catagory": "answer_against_it",
            "value": 1
          }]
        },
        {
          "text": "I don’t believe things are “supposed” to “work out” any specific way.",
          "scores": [{
            "catagory": '',
            "value": 0
          }]
        }
      ]
    },
    {
      "number": 10,
      "title": "Do you perceive yourself receiving unsolicited feedback from the world around you?",
      "answers": [{
          "text": "Yes",
          "scores": [{
            "catagory": '',
            "value": 0
          }]
        },
        {
          "text": "No",
          "scores": [{
            "catagory": '',
            "value": 0
          }]
        },
        {
          "text": "Maybe",
          "scores": [{
            "catagory": '',
            "value": 0
          }]
        }
      ]
    },
    {
      "number": 11,
      "title": "Are you interested in more closely tuning in to feedback you may be receiving from the world around you?",
      "answers": [{
          "text": "Yes, I would like to tune in more closely",
          "scores": [{
            "catagory": "answer_intuition",
            "value": 1
          }]
        },
        {
          "text": "Maybe",
          "scores": [{
              "catagory": "answer_intuition",
              "value": 0.5
            },
            {
              "catagory": "answer_intention",
              "value": 0.5
            }
          ]
        },
        {
          "text": "No, I would rather stick to what I know and observe",
          "scores": [{
            "catagory": "answer_intention",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 12,
      "title": "Do you prefer to follow your instincts or to make plans and/or work towards goals?",
      "answers": [{
          "text": "Prefer to follow my instincts most or all of the time",
          "scores": [{
            "catagory": "answer_intuition",
            "value": 1
          }]
        },
        {
          "text": "Both, but more instincts",
          "scores": [{
              "catagory": "answer_intuition",
              "value": 0.6
            },
            {
              "catagory": "answer_intention",
              "value": 0.4
            }
          ]
        },
        {
          "text": "Both, but I'm more of a planner",
          "scores": [{
              "catagory": "answer_intuition",
              "value": 0.4
            },
            {
              "catagory": "answer_intention",
              "value": 0.6
            }
          ]
        }
      ]
    },
    {
      "number": 13,
      "title": "Has your approach (instincts vs planning) been working for you?",
      "answers": [{
          "text": "Yes",
          "scores": [{
            "catagory": "answer_with_it",
            "value": 1
          }]
        },
        {
          "text": "No",
          "scores": [{
            "catagory": "answer_against_it",
            "value": 1
          }]
        },
        {
          "text": "sometimes",
          "scores": [{
              "catagory": "answer_with_it",
              "value": 0.5
            },
            {
              "catagory": "answer_against_it",
              "value": 0.5
            }
          ]
        }
      ]
    }
  ]
}
