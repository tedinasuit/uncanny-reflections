## Researching the psychological impact of 'Mirror,

- Researching the psychological impact of 'Mirror, Mirror' Mirror'
   - Introduction
   - Foundational Research
      - 1. The Problem: AI Anxiety is a Real and Measurable Crisis
      - 2. The Core Mechanism: Why a "Psychological Vaccine" Works
      - 3. The Method: Using Art and Reflection as Tools for Change
   - The core of the research
   - Approach
   - Survey
   - Hypothesis
   - Results
   - References


### Introduction

#### Can a targeted, artistic intervention designed to provoke self-reflection on human

#### identity effectively build psychological resilience against AI-related anxiety?

The fear of AI is not just a vague feeling; it's a measurable stressor. A recent Work in America
survey by the American Psychological Association found that 38% of employees are worried AI
might make their jobs obsolete, and this anxiety is directly linked to poor mental health
outcomes [1].
This is built on earlier findings, like a study of 349 manufacturing employees in _Nature_ , which
found that an employee's perception of AI as a threat to their career negatively impacts their
emotional well-being at work. This relationship is primarily mediated by job stress, as a higher
perceived threat from AI leads to increased stress, which then reduces well-being [2].
I wanted to see if I could reduce the perceived threat by forcing humans to think: _What makes
me special? What makes me irreplaceable?_
This is what inspired the project that I designed for Dutch Design Week. It takes the visitor's
face and voice and asks the user: “What makes you more special than me now?".
This prompts the visitor to think about the topic. The virtual character interrogates the visitor with
really tough questions about what makes an AI less special than a real human and will try to
convince you that you're not any more real than the AI character. These are questions that are
hard to answer and the virtual character knows this, so it encourages the visitor to really think
about it, even after the experience ends.
The ultimate goal of the project is to reduce the perceived AI replacement threat for visitors that
experience 'Mirror, Mirror'.


### Foundational Research

To make sure my project was built on solid ground, I dug deep into the existing psychological
research. What I found was that the core ideas behind 'Mirror, Mirror' are not just supported by
abstract theories. They are a direct response to urgent, real-world psychological shifts
happening right now because of AI. The following sections break down the evidence that forms
the foundation of this project.

#### 1. The Problem: AI Anxiety is a Real and Measurable Crisis

The fear of AI is not just a vague feeling. It's a measurable stressor that is actively harming
people's mental health. A recent Work in America survey by the American Psychological
Association found that a staggering **38% of employees are worried AI might make their jobs
obsolete**. This anxiety is directly linked to poor mental health outcomes [1]. This is not just
about feeling nervous. It is about tangible psychological harm.
This finding builds on a mountain of evidence. My initial inspiration, a study in _Nature_ , found that
an employee's perception of AI as a threat to their career negatively impacts their emotional
well-being at work [2]. More recent research confirms this. It shows that an employee's "AI
awareness," their perception of being vulnerable to replacement, is a direct predictor of
**emotional exhaustion** and job insecurity [10]. The constant pressure and perceived threat from
AI tools that are more efficient than human capabilities erodes a person's sense of
accomplishment. This leads directly to burnout [10].

#### 2. The Core Mechanism: Why a "Psychological Vaccine" Works

My hypothesis that you can make someone more resistant to a threat by exposing them to a
small, controlled version of it is not just a metaphor. It turns out to be a well-established scientific
principle.
● **Inoculation Theory.** This is a classic theory in social psychology [4]. It explains that you
can build up a person's resistance to a persuasive argument or a threatening idea by
exposing them to a weak version of it first. Just like a biological vaccine prepares the
immune system, this "psychological inoculation" gives a person the chance to build up
mental defenses and coping arguments. When they later face a stronger, real-world
version of the threat, they are already prepared and more resilient.


● **Stress Inoculation Training (SIT).** This is the clinical application of the same idea [12].
SIT is a proven cognitive-behavioral therapy that helps people manage stress and
anxiety by gradually exposing them to manageable stressors. Research on SIT shows
that this controlled exposure helps individuals practice their coping skills in a safe
environment. It effectively builds mental "muscle" and reduces their fear response over
time [12].
'Mirror, Mirror' is a direct application of these principles. It provides a controlled, safe "stressor."
This is a direct but non-harmful confrontation with an AI that challenges your identity. The initial
increase in fear the project anticipates is not a side effect. It is the _mechanism_. It is the moment
the psychological immune system gets triggered, starting the process of building long-term
resilience.

#### 3. The Method: Using Art and Reflection as Tools for Change

The choice to make 'Mirror, Mirror' an artistic, reflective experience is also deeply rooted in
science.
● **Art as a Tool to Rewire the Brain.** The project is an art piece for a very specific reason.
Art is a powerful therapeutic tool. Group arts interventions have been shown to reduce
depression and anxiety with effect sizes comparable to traditional medication or therapy
[13]. The reason for this is biological. Engaging with art has been shown to physically
change the brain. It stimulates **neuroplasticity** , which helps form new neural pathways
that can reduce anxiety. It also triggers the release of **dopamine** , the brain's "feel-good"
neurotransmitter tied to motivation and stress reduction [14]. When 'Mirror, Mirror'
pushes a visitor into an artistic experience, it’s not just for show. It is kick-starting a
biological process of change.
● **Self-Reflection as the Engine of Growth.** The core of the experience is self-reflection.
When done right, this is an incredibly powerful psychological process. Research shows
that positive self-reflection improves job performance, reduces health complaints, and
fosters a greater sense of confidence and engagement [15]. 'Mirror, Mirror' is designed to
guide this process constructively. It forces a confrontation and then asks "What makes
_you_ special?". This directs the reflection towards identifying personal strengths and
values, which is the most adaptive and resilience-building form of introspection.


### Approach

The goal is to accurately determine the psychological impact that ‘Mirror, Mirror' has on the
Dutch Design Week audience. This requires a test group with diverse age and diverse interests.
These subjects should all have different expertises. So a media designer, software engineer,
maybe even a manicurist.
Each subject will fill out a carefully curated survey before testing the experience. The survey is
made to determine whether the user is feeling anxious about AI and whether they feel
threatened by AI in their work field. Its design is guided by the core principles found in research
on psychological measurement, such as the work developing the **Threats of Artificial
Intelligence Scale (TAI)** [9], which shows the importance of measuring threat perceptions
directly. This is the “pre-experience” survey.
After five days, they will fill out a similar survey with questions that are directly related to the
questions in the first survey. This is the “post-experience” survey.
The survey will be filled out on a web app. I wanted to build a survey app that creates a unique
ID per test person and then compiles all the results into comprehensive data, whilst also making
the raw data available through a downloadable .csv file. This requires a complex backend,
which is why I chose Convex. Convex is a company that specializes in database hosting.
Convex made an AI-agent website builder called “Chef”, with integrated Convex support. I used
this tool to create my survey web app. This web app also stores the name, age and profession
of each participant, making the data extremely detailed and valuable for my research.


### Survey

The survey was made in collaboration with Gemini 2.5 Pro. The model was given my concept
documents + my work-in-progress research document as context. When working with extremely
smart AI models, it is always key to give as much context as possible. Context is everything.
I gave it requirements. The most important requirement that I gave, was that due to my diverse
test group, the survey had to be understandable for all age groups and all levels of intelligence.
The structure is informed by established research practices to ensure the data is as valuable as
possible.
The survey is split in two parts: Pre-Experience and Post-Experience
**Part 1: Pre-Experience Survey (To be completed before the experience)**

1. Before this experience, how much have you thought about what makes humans unique
    compared to Artificial Intelligence (AI)?
       ☐ A lot
       ☐ A fair amount
       ☐ A little
       ☐ Not at all
2. On a scale of 1 to 5, how do you currently feel about the future of AI in our daily lives
    and jobs?
       ☐ 1 - Very Worried
       ☐ 2 - A little worried
       ☐ 3 - Neutral
       ☐ 4 - A little excited
       ☐ 5 - Very excited
3. Please select the statement that best describes your feelings about AI in your own line of
    work or future career.
       ☐ I see AI as a threat to my job.
       ☐ I am unsure how AI will affect my job.
       ☐ I see AI as a helpful tool for my job.
       ☐ AI is not relevant to my job.


**Part 2: Post-Experience Survey (To be completed several days after the experience)**

1. Since the "Mirror, Mirror" experience, how much have you thought about what makes
    you uniquely human?
       ☐ A lot more than before
       ☐ A little more than before
       ☐ About the same as before
       ☐ Less than before
2. On a scale of 1 to 5, how do you now feel about the future of AI in our daily lives and
    jobs?
       ☐ 1 - Very Worried
       ☐ 2 - A little worried
       ☐ 3 - Neutral
       ☐ 4 - A little excited
       ☐ 5 - Very excited
3. The "Mirror, Mirror" experience is about what makes humans special in a world with
    advanced AI. After the experience, how has your view on your own unique qualities
    changed?
       ☐ I feel more confident about my unique human qualities.
       ☐ My feelings about my unique qualities haven't changed.
       ☐ I feel less confident about my unique human qualities.
4. Please select the statement that now best describes your feelings about AI in your own
    line of work or future career.
       ☐ I see AI as a threat to my job.
       ☐ I am unsure how AI will affect my job.
       ☐ I see AI as a helpful tool for my job.
       ☐ AI is not relevant to my job.


### Hypothesis

The 'Mirror, Mirror' experience is intended to stick with the visitor for weeks. The experience is
supposed to confront them with how dangerous AI can be. This should increase their fear of AI
a bit. Which causes them to think about AI and how to shield themselves from it. This should
make them more resistant against AI and hopefully also decrease their fear. This approach is
similar to a well-known concept in psychology called **Inoculation Theory** , where getting
someone a little bit "sick" with a weak challenge increases their resistance against a bigger
threat later on.
However this process is supposed to take weeks. Due to time constraints, the test period in this
research is roughly a week. Because of that, I have to adapt my hypothesis.
I predict that the post-experience survey will indicate a light increase in fear.


### Results

Sample Demographics and Study Context
The study collected data from 5 participants across creative and technical professions, aged
22-30, including UI/UX Design, Media Design, Software Engineering, and Product
Development. All participants completed pre- and post-experience surveys. It's important to
acknowledge that all participants had some prior awareness of the "Mirror, Mirror" project
through professional or social networks, which may have influenced their responses.
Additionally, this sample size is significantly smaller than typical academic research standards,
limiting statistical validity.
Baseline Measurements and Post-Experience Changes
Before the experience, 80% of participants already thought "a fair amount" about human
uniqueness versus AI. Initial AI sentiment was notably positive (mean: 4.2/5), with 100% viewing
AI as helpful for their work.
The intervention successfully achieved its primary goal: 80% of participants reported increased
contemplation about human uniqueness (40% "a lot more," 40% "a little more"). No one
reported thinking less about it afterward.
AI sentiment became more cautious post-experience (mean decrease from 4.2 to 3.6). 40%
developed more cautious attitudes toward AI, while 60% remained stable. Importantly, no one
became more positive about AI, supporting the theoretical prediction of temporary increased
concern. Despite psychological challenge, 60% felt more confident about their unique human
qualities, with only 20% feeling less confident. Regarding work attitudes, 80% continued seeing
AI as helpful, though 20% shifted from positive to uncertain about AI's workplace impact.


### Conclusion

The study partially supported the adapted hypothesis predicting "light increase in fear" due to
the shortened one-week testing period. 40% showed decreased AI sentiment, but the
intervention's impact was more nuanced than anticipated, revealing both intended psychological
mechanisms and unexpected positive adaptations.
The intervention achieved its goal of stimulating self-reflection, with 80% reporting increased
reflection about human uniqueness. This strengthens what I’ve concluded during the
foundational research: an immersive art installation can trigger deeper self-reflection.
The results provide preliminary evidence that Inoculation Theory can be applied to AI anxiety
through artistic intervention. The fact that 80% engaged in increased self-reflection while
maintaining predominantly positive work attitudes suggests optimal conditions for building
psychological resilience without harmful distress.
The results suggest confrontational but supportive artistic experiences can effectively help
individuals process AI-related anxiety. This intervention model shows potential for educational
settings preparing students for AI-integrated careers and public exhibitions promoting healthy AI
discourse.
Study Limitations and Future Directions
The "Mirror, Mirror" intervention shows promising initial results as a psychological inoculation
tool for AI anxiety. While the shortened testing period and limited sample prevented full
validation, the intervention successfully triggered increased self-reflection. The research
demonstrates that directly confronting difficult questions about human-AI relationships through
supportive artistic experiences may be an effective path toward building psychological resilience
in our AI-integrated future.
Beyond the small sample size and participants' prior project awareness, several limitations must
be acknowledged. The one-week timeframe may not capture the full psychological processing
cycle that inoculation theory predicts. The lack of diverse professional backgrounds limits
understanding of broader population effects.
The next phase should focus on scaling the intervention, conducting longer-term studies with
larger sample sizes. I believe that there’s a huge opportunity at Dutch Design Week to get a
large diverse testing group and I would like to explore possibilities to further my research at the
event.


### References

[1] American Psychological Association. (2023). _Work in America 2023: AI and the Future of Work_. Link:
https://www.apa.org/pubs/reports/work-in-america/2023-ai-workplace
[2] Obrenovic, B., et al. (2024). _The Work Affective Well-being Under the Impact of AI_. Scientific Reports. Link:
https://www.nature.com/articles/s41598-024-75113-w
[3] Kieslich, K., Lünich, M., & Marcinkowski, F. (2021). _The Threats of Artificial Intelligence Scale (TAI)_. International Journal of Social Robotics. Link:
https://link.springer.com/article/10.1007/s12369-020-00734-w
[4] Compton, J., et al. (2022). _New Directions for Inoculation Theory and Affect Research_. Science & Technology of Advanced Materials. Link:
https://sites.dartmouth.edu/jcompton/files/2023/01/Compton-Ivanov-Hester-New-Directions-for-Inoculation-Theory-
and-Affect-Research-STAM-Journal-2022.pdf
[5] Tinio, P. P. L. (2023). _Aesthetic science and the art of the immersive_. Frontiers in Psychology. Link:
https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1192689/full
[6] Martlew, C. (2018). _How systematic self-reflection can help build personal resilience_. LinkedIn. Link:
https://www.linkedin.com/pulse/how-systematic-self-reflection-can-help-build-personal-clive-martlew
[7] Cambridge Judge Business School. (2025). _Human brain vs AI: what makes better decisions?_. Link:
https://www.jbs.cam.ac.uk/2025/human-brain-vs-ai-what-makes-better-decisions/
[8] Thinkers360. (n.d.). _The Uniqueness of Humans and Our Place in the Age of AI_. Link:
https://www.thinkers360.com/tl/blog/members/the-uniqueness-of-humans-and-our-place-in-the-age-of-ai
[9] _Researching the psychological impact of ‘Mirror, Mirror’_. (Internal reference)
[10] Association Between AI Awareness and Emotional Exhaustion. (2024). _PMC_. Link:
https://pmc.ncbi.nlm.nih.gov/articles/PMC12024253/
[11] Is technology harming our emotional resilience? - TPC Leadership. (2024). Link:
https://tpcleadership.com/tpcl-news-views/state-of-the-heart-technology-and-emotional-resilience/
[12] Stress Inoculation Training (SIT) - Mental Health Methods Explained. (n.d.). Link:
https://www.konfidens.com/modalities/stress-inoculation-training
[13] The art of well-being: group activities shown to ease depression and anxiety in older adults. (2025). Link:
https://www.qmul.ac.uk/media/news/2025/science-and-engineering/se/the-art-of-well-being-group-activities-shown-
to-ease-depression-and-anxiety-in-older-adults.html
[14] The Art Therapy Handbook: Creative Exercises for Healing and Self Discovery. (n.d.). Link:
https://www.alabamaart.com/blogs/studionotes/the-art-therapy-handbook-creative-exercises-for-healing-and-self-d
iscovery
[15] Self-Reflection at Work: Why It Matters and How to Do It. (2021). _Annual Reviews_. Link:
https://www.annualreviews.org/doi/pdf/10.1146/annurev-orgpsych-031921-
[16] The relationship between self-reflection and mental health: a meta-analysis review. (2024). _ResearchGate_. Link:
https://www.researchgate.net/publication/388615882_The_relationship_between_self-reflection_and_mental_health_a
_meta-analysis_review
[17] AI Discovers That Not Every Fingerprint Is Unique. (2024). _Columbia Engineering_. Link:
https://www.engineering.columbia.edu/about/news/ai-discovers-not-every-fingerprint-unique
[18] AI Outperforms Humans in Standardized Tests of Creative Potential. (2024). _University of Arkansas_. Link:
https://news.uark.edu/articles/69688/ai-outperforms-humans-in-standardized-tests-of-creative-potential
[19] ChatGPT mimics human cognitive dissonance in psychological experiments, study finds. (2024). _PsyPost_. Link:
https://www.psypost.org/chatgpt-mimics-human-cognitive-dissonance-in-psychological-experiments-study-finds/


