export default {
  questions: [{
      "number": 1,
      "title": "In the past 6-12 months, how much work have you done on your relationship with yourself?",
      "answers": [{
          "text": "This is something I never think about.",
          "scores": [{
            "catagory": "breaking",
            "value": 1
          }]
        },
        {
          "text": "I think about doing work on myself sometimes, but what for?",
          "scores": [{
            "catagory": "breaking",
            "value": 1
          }]
        },
        {
          "text": "I want to do work on myself, but I don’t know how.",
          "scores": [{
            "catagory": "breaking",
            "value": 1
          }]
        },
        {
          "text": "I do work on myself often, but wouldn’t say it’s a central focus of my life.",
          "scores": [{
            "catagory": "building",
            "value": 1
          }]
        },
        {
          "text": "Working on myself is something I spend considerable time and resources on (either by myself or with the support of others).",
          "scores": [{
            "catagory": "building",
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
            "catagory": "breaking",
            "value": 1
          }]
        },
        {
          "text": "understanding how specific dynamics and patterns are impacting you negatively",
          "scores": [{
            "catagory": "breaking",
            "value": 1
          }]
        },
        {
          "text": "deciding how you might like to alter your habits, attitudes, behaviors and/or context",
          "scores": [{
            "catagory": "building",
            "value": 1
          }]
        },
        {
          "text": "making changes to your habits, attitudes behaviors and/or context",
          "scores": [{
            "catagory": "building",
            "value": 1
          }]
        }
      ],
    },
    {
      "number": 3,
      "title": "What was the impetus to begin working on yourself? (If self-work is not currently your practice, select the reason that would most likely make you start.)",
      "answers": [{
          "text": "sudden significant change in life circumstances",
          "scores": [{
            "catagory": "with_it",
            "value": 1
          }]
        },
        {
          "text": "significant yet expected change in life circumstances",
          "scores": [{
            "catagory": "with_it",
            "value": 1
          }]
        },
        {
          "text": "current partner asked me to",
          "scores": [{
            "catagory": "against_it",
            "value": 1
          }]
        },
        {
          "text": "want to meet a romantic partner and need to sort some things out first",
          "scores": [{
            "catagory": "against_it",
            "value": 1
          }]
        },
        {
          "text": "I've been aware of it for a while and it was finally time to just do it",
          "scores": [{
              "catagory": "with_it",
              "value": 0.25
            },
            {
              "catagory": "against_it",
              "value": 0.75
            }
          ]
        },
        {
          "text": "just wasn't happy with myself and/or my circumstances",
          "scores": [{
              "catagory": "with_it",
              "value": 0.1

            },
            {
              "catagory": "against_it",
              "value": 0.9
            }
          ]
        },
        {
          "text": "saw patterns in my behavior that weren't working for me, so I decided to change them",
          "scores": [{
            "catagory": "against_it",
            "value": 1
          }]
        },
        {
          "text": "I've always done it.",
          "scores": [{
            "catagory": "with_it",
            "value": 1
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
            "catagory": "breaking",
            "value": 1
          }]
        },
        {
          "text": "sometimes",
          "scores": [{
            "catagory": "building",
            "value": 1
          }]
        },
        {
          "text": "never",
          "scores": [{
            "catagory": "breaking",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 5,
      "title": "If you had it your way, are there many things you would want to change about yourself and/or your life as it is today?",
      "answers": [{
          "text": "I’m happy about the way things are. There are few or no things I would like to change about myself and my life.",
          "scores": [{
            "catagory": "building",
            "value": 1
          }]
        },
        {
          "text": "I’m happy with myself, but not my circumstances. There are few or no things I would like to change about myself, and many things I’d like to change about my life.",
          "scores": [{
              "catagory": "building",
              "value": 0.5
            },
            {
              "catagory": "breaking",
              "value": 0.5
            }
          ]
        },
        {
          "text": "I’m happy with my circumstances, but not myself. There are many things I would like to change about myself, and few to no things I’d like to change about my life.",
          "scores": [{
              "catagory": "building",
              "value": 0.5
            },
            {
              "catagory": "breaking",
              "value": 0.5
            }
          ]
        },
        {
          "text": "I’m not happy with myself or my circumstances. There are many things I would like to change about myself and about my life.",
          "scores": [{
            "catagory": "breaking",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 6,
      "title": "How often do the things you want come to pass (for your self and your life)?",
      "answers": [{
          "text": "The things I want for my self and my life always come to pass.",
          "scores": [{
            "catagory": "with_it",
            "value": 1
          }]
        },
        {
          "text": "The things I want for my self and my life often come to pass, but not always.",
          "scores": [{
              "catagory": "with_it",
              "value": 0.65
            },
            {
              "catagory": "against_it",
              "value": 0.35
            }
          ]
        },
        {
          "text": "The things I want for my self and my life sometimes come to pass, but not most of the time.",
          "scores": [{
              "catagory": "with_it",
              "value": 0.35
            },
            {
              "catagory": "against_it",
              "value": 0.65
            }
          ]
        },
        {
          "text": "The things I want for my self and my life never come to pass.",
          "scores": [{
            "catagory": "against_it",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 7,
      "title": "Which of the following best describes the flow of your life over the past 12 months?",
      "answers": [{
          "text": "Things have been falling into place naturally, with minimal pushing on my part",
          "scores": [{
            "catagory": "with_it",
            "value": 1
          }]
        },
        {
          "text": "Things have been falling into place, but it has still taken a lot of effort on my part",
          "scores": [{
              "catagory": "with_it",
              "value": 0.7
            },
            {
              "catagory": "against_it",
              "value": 0.3
            }
          ]
        },
        {
          "text": "Interesting opportunities have arisen but I've had to do a lot of maneuvering to make them happen",
          "scores": [{
              "catagory": "with_it",
              "value": 0.5
            },
            {
              "catagory": "against_it",
              "value": 0.5
            }
          ]
        },
        {
          "text": "It's been an uphill battle at every turn",
          "scores": [{
            "catagory": "against_it",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 8,
      "title": "Looking back over the past few years, how often have things 'worked out' the way they're 'supposed to'?",
      "answers": [{
          "text": "Things work out the way they’re supposed to all the time.",
          "scores": [{
            "catagory": "with_it",
            "value": 1
          }]
        },
        {
          "text": "Things often work out the way they're supposed to, but not all the time.",
          "scores": [{
              "catagory": "with_it",
              "value": 0.7
            },
            {
              "catagory": "against_it",
              "value": 0.3
            }
          ]
        },
        {
          "text": "Things sometimes work out the way they’re supposed to, but not often.",
          "scores": [{
              "catagory": "with_it",
              "value": 0.4
            },
            {
              "catagory": "against_it",
              "value": 0.6
            }
          ]
        },
        {
          "text": "Things never work out the way they’re supposed to.",
          "scores": [{
            "catagory": "against_it",
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
      "number": 9,
      "title": "Are you interested in more closely tuning in to feedback you may be receiving from the world around you?",
      "answers": [{
          "text": "Yes, I would like to tune in more closely",
          "scores": [{
            "catagory": "intuition",
            "value": 1
          }]
        },
        {
          "text": "Maybe",
          "scores": [{
              "catagory": "intuition",
              "value": 0.5
            },
            {
              "catagory": "intention",
              "value": 0.5
            }
          ]
        },
        {
          "text": "No, I would rather stick to what I know and observe",
          "scores": [{
            "catagory": "intention",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 10,
      "title": "Do you prefer to follow your instincts or to make plans and/or work towards goals?",
      "answers": [{
          "text": "Prefer to follow my instincts most or all of the time",
          "scores": [{
            "catagory": "intuition",
            "value": 2
          }]
        },
        {
          "text": "Both, but more instincts",
          "scores": [{
              "catagory": "intuition",
              "value": 1.2
            },
            {
              "catagory": "intention",
              "value": 0.8
            }
          ]
        },
        {
          "text": "Both, but I'm more of a planner",
          "scores": [{
              "catagory": "intuition",
              "value": 0.8
            },
            {
              "catagory": "intention",
              "value": 1.2
            }
          ]
        },
        {
          "text": "I prefer to operate with a plan most or all of the time",
          "scores": [{
            "catagory": "intention",
            "value": 2
          }]
        }
      ]
    },
    {
      "number": 11,
      "title": "Has your approach (instincts vs planning) been working for you?",
      "answers": [{
          "text": "Yes",
          "scores": [{
            "catagory": "with_it",
            "value": 1
          }]
        },
        {
          "text": "No",
          "scores": [{
            "catagory": "against_it",
            "value": 1
          }]
        },
        {
          "text": "sometimes",
          "scores": [{
              "catagory": "with_it",
              "value": 0.5
            },
            {
              "catagory": "against_it",
              "value": 0.5
            }
          ]
        }
      ]
    },
    {
      "number": 12,
      "title": "Please choose the statement that best describes the current state of your professional life.",
      "answers": [{
          "text": "I am comfortably settled in a professional situtation and am fairly clear about what I want in the near future.",
          "scores": [{
            "catagory": "intention",
            "value": 1
          }]
        },
        {
          "text": "I am currently in a professional situation that I'm not satisfied with and would be open to change, but am not clear about what.",
          "scores": [{
              "catagory": "intuition",
              "value": 0.9
            },
            {
              "catagory": "intention",
              "value": 0.1
            }
          ]
        },
        {
          "text": "I am currently in a professional situation that I'm not satisfied with and am quite clear about the path I would prefer to pursue.",
          "scores": [{
              "catagory": "intuition",
              "value": 0.1
            },
            {
              "catagory": "intention",
              "value": 0.9
            }
          ]
        },
        {
          "text": "I'm am trying to figure it out.",
          "scores": [{
            "catagory": "intuition",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 13,
      "title": "Please choose the statement that best describes the current state of your romantic life.",
      "answers": [{
          "text": "I am comfortably settled in my current romantic situation and am sure enough about what I want in the near future.",
          "scores": [{
            "catagory": "intention",
            "value": 1
          }]
        },
        {
          "text": "I am not satisfied with my current romantic situation and would be open to change, but am not clear about what.",
          "scores": [{
              "catagory": "intuition",
              "value": 0.9
            },
            {
              "catagory": "intention",
              "value": 0.1
            }
          ]
        },
        {
          "text": "I am not satisfied with my current romantic situation and am quite clear about what I would like.",
          "scores": [{
              "catagory": "intuition",
              "value": 0.1
            },
            {
              "catagory": "intention",
              "value": 0.9
            }
          ]
        },
        {
          "text": "I'm am trying to figure it out.",
          "scores": [{
            "catagory": "intuition",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 14,
      "title": "Please choose the statement that best describes the current state of your artistic life.",
      "answers": [{
          "text": "I am comfortably settled in my artistic life and am fairly certain about what I want in the near future.",
          "scores": [{
            "catagory": "intention",
            "value": 1
          }]
        },
        {
          "text": "I am not satisfied with my artisitic life and would be open to change, but am not clear about what",
          "scores": [{
              "catagory": "intuition",
              "value": 0.9
            },
            {
              "catagory": "intention",
              "value": 0.1
            }
          ]
        },
        {
          "text": "I am not satisfied with the current state of my artistic life and am quite clear about the changes I would like to make.",
          "scores": [{
              "catagory": "intuition",
              "value": 0.1
            },
            {
              "catagory": "intention",
              "value": 0.9
            }
          ]
        },
        {
          "text": "I'm am trying to figure it out.",
          "scores": [{
            "catagory": "intuition",
            "value": 1
          }]
        },
        {
          "text": "I am not an artist.",
          "scores": [{
            "catagory": "intuition",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 15,
      "title": "Please choose the statement that best describes the current state of your social life.",
      "answers": [{
          "text": "I am comfortably settled in my current social situation and am clear enough about what I want in the near future.",
          "scores": [{
            "catagory": "intention",
            "value": 1
          }]
        },
        {
          "text": "I am not satisfied with my current social situation and would be open to changing it, but am not clear about what I want.",
          "scores": [{
              "catagory": "intuition",
              "value": 0.9
            },
            {
              "catagory": "intention",
              "value": 0.1
            }
          ]
        },
        {
          "text": "I am not satisfied with my current social situation and am quite clear about how I would like to change it.",
          "scores": [{
              "catagory": "intuition",
              "value": 0.1
            },
            {
              "catagory": "intention",
              "value": 0.9
            }
          ]
        },
        {
          "text": "I'm am trying to figure it out.",
          "scores": [{
            "catagory": "intuition",
            "value": 1
          }]
        }
      ]
    },
    {
      "number": 16,
      "title": "Please choose the statement that best describes the current state of your family life.",
      "answers": [{
          "text": "I am comfortably settled in my family situation and am clear enough about what I want in the near future.",
          "scores": [{
            "catagory": "intention",
            "value": 1
          }]
        },
        {
          "text": "I am not satisfied with my current family situation and would be open to changing it, but am not clear about what I want.",
          "scores": [{
              "catagory": "intuition",
              "value": 0.9
            },
            {
              "catagory": "intention",
              "value": 0.1
            }
          ]
        },
        {
          "text": "I am not satisfied with my current family situation and am quite clear about how I would like to change it.",
          "scores": [{
              "catagory": "intuition",
              "value": 0.1
            },
            {
              "catagory": "intention",
              "value": 0.9
            }
          ]
        },
        {
          "text": "I'm am trying to figure it out.",
          "scores": [{
            "catagory": "intuition",
            "value": 1
          }]
        }
      ]
    }
  ]
}
