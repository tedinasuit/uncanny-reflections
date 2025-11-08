# Constructed Mirror: From Prototype to Exhibition-Ready Installation {#constructed-mirror:-from-prototype-to-exhibition-ready-installation}

**[Constructed Mirror: From Prototype to Exhibition-Ready Installation	1](#constructed-mirror:-from-prototype-to-exhibition-ready-installation)**

[Document Summary	2](#document-summary)

[Introduction: The Challenge	3](#introduction:-the-challenge)

[Part 1: Creating an Infinite Loop	4](#part-1:-creating-an-infinite-loop)

[Part 2: Multilingual Support \- A Community Collaboration	6](#part-2:-multilingual-support---a-community-collaboration)

[Part 3: Visual Fidelity Upgrade	9](#part-3:-visual-fidelity-upgrade)

[Part 4: Performance Optimization \- The Dual GPU Solution	11](#part-4:-performance-optimization---the-dual-gpu-solution)

[**For deepfake process (GPU 1\)	12**](#for-deepfake-process-\(gpu-1\))

[**Or in PyTorch	13**](#or-in-pytorch)

[Part 5: Exhibition Setup \- Physical and Digital Infrastructure	14](#part-5:-exhibition-setup---physical-and-digital-infrastructure)

[Part 6: Results & Reflections	17](#part-6:-results-&-reflections)

[Conclusion	25](#conclusion)

[Technical Appendix	27](#technical-appendix)

[Acknowledgments	28](#acknowledgments)

## 

## 

## Document Summary {#document-summary}

"Constructed Mirror" is an immersive art installation that confronts visitors with a digital doppelgänger: an AI that gradually adopts their voice and face during an intimate conversation. Building on a functional prototype from the previous semester, this report documents the month-long development process that transformed the installation into an exhibition-ready experience for Dutch Design Week.

The development focused on four critical improvements: implementing an infinite loop for continuous operation, adding multilingual support (Dutch and English), upgrading visual fidelity through Unreal Engine 5.6.1, and creating a dual-screen exhibition setup. These enhancements required solving complex technical challenges in real-time AI processing, GPU load balancing, and user experience design.

The result was a successful exhibition at Dutch Design Week, where each visitor experienced a unique, deeply personal conversation with their digital reflection. For example, a therapist discussed the nature of human connection, while a theologian explored whether an AI can truly believe.

## 

## 

## Introduction: The Challenge {#introduction:-the-challenge}

Last semester concluded with a working prototype that successfully demonstrated the core concept: an AI character that could clone a visitor's voice and face during a live conversation. The technical foundation was solid, using Gemini AI for dialogue, F5-TTS for voice cloning, real-time deepfake technology for facial mimicry, and NVIDIA Audio2Face for realistic facial animation on an Unreal Engine MetaHuman.

However, four significant problems stood between the prototype and an exhibition-ready installation:

1. **No Infinite Loop**: Each session required manual intervention. An operator had to start the experience, then refresh the application after each visitor left. This made continuous exhibition operation impossible.  
     
2. **Visual Limitations**: The presentation felt unpolished. The MetaHuman character lacked realism due to Unreal Engine 5.1's limitations, and the stark black background felt uninviting.  
     
3. **English Only**: The prototype only supported English, limiting the personal connection with Dutch-speaking visitors.  
     
4. **Missing Exhibition Interface**: The booth needed external screens to attract visitors without spoiling the deepfake reveal.

This semester's work addressed each of these challenges through careful iteration, community collaboration, and thoughtful UX design.

## ![][image1]

## 

## Part 1: Creating an Infinite Loop {#part-1:-creating-an-infinite-loop}

### The Manual Reset Problem

The original workflow was painfully manual:

1. Manually start the application for each visitor.  
2. Wait for the conversation to complete.  
3. Manually stop the experience.  
4. Manually refresh the application.  
5. Repeat.

For a public exhibition running continuously throughout Dutch Design Week, this was not viable. The installation needed to operate autonomously, gracefully handling the transition between visitors without any staff intervention.

**![][image2]**

### Designing the Automated Flow

The solution required thinking about the installation as a state machine with multiple phases:

**Idle State (Language Selection Screen)**  
When no conversation is active, the system displays the language selection screen. This became the default "home" state, welcoming and ready for the next visitor.

**\[IMAGE PLACEHOLDER: Screenshot of language selection screen\]**

**Active Conversation State**  
Once a language is selected, the full conversation begins, progressing through the scripted experience of voice recording, face capture, and philosophical confrontation.

**Completion State**  
The critical innovation was automatic conversation end detection. The system now recognizes when the scripted dialogue reaches its conclusion without requiring manual intervention.

**Thank You & Countdown**  
Rather than abruptly cutting to the language selection screen, visitors see a "Thank You for Participating" message followed by a countdown (e.g., "New session starting in 10 seconds"). This creates a smoother psychological transition and gives the previous visitor time to exit.

**\[IMAGE PLACEHOLDER: Screenshot of thank you screen with countdown\]**

**Automatic Reset**  
When the countdown completes, the system automatically returns to the language selection screen, ready for the next visitor.

### Handling Extended Idle Time

An important edge case emerged during testing: what happens when the installation sits idle for extended periods, such as during quiet moments at the exhibition?

Keeping a Gemini Live API stream open indefinitely isn't practical, as it consumes resources and can lead to timeouts. The solution was an intelligent pause system:

- After **5 minutes of inactivity** on the language selection screen, the system enters a pause state.  
- The screen displays: **"Say 'Hey' to start"**.  
- The system monitors the microphone for audio peaks.  
- Any significant audio level (someone saying "Hey" or any loud sound) wakes the system.  
- The language selection conversation immediately resumes.

**\[IMAGE PLACEHOLDER: Screenshot of "Say Hey to start" pause screen\]**

This approach balances resource efficiency with instant responsiveness. The system appears always-on while conserving API calls during quiet periods.

### Technical Implementation Notes

The automatic end detection works by monitoring specific trigger phrases in the AI's dialogue. When the final scripted line is delivered, a flag is set that triggers the transition to the thank you screen. The countdown is a simple timer component that dispatches a reset action when it reaches zero.

The audio-triggered wake-up uses the Web Audio API's AnalyserNode to monitor volume levels in real-time. A threshold value ensures that ambient noise doesn't trigger false wake-ups, while still being sensitive enough to respond to intentional sound.

**![][image3]**

## Part 2: Multilingual Support \- A Community Collaboration {#part-2:-multilingual-support---a-community-collaboration}

### The F5-TTS Limitation

The previous semester's voice cloning solution, F5-TTS, produced remarkably high-quality voice clones. The synthesized speech was natural, expressive, and convincingly matched the visitor's voice characteristics. There was just one problem: it only supported English.

For an installation exploring personal identity and human uniqueness, language matters deeply. Having the AI speak to a Dutch visitor in English creates an immediate barrier to immersion and emotional connection. The experience needed to feel personal, and that meant supporting Dutch.

**\[IMAGE PLACEHOLDER: Audio waveform comparison showing F5-TTS output vs. Chatterbox output\]**

### The Quality vs. Language Trade-off

I discovered Chatterbox, a voice cloning model that supported multiple languages, including Dutch. It used zero-shot cloning (requiring only a short voice sample) and could generate speech in the same language as the reference audio. It was a perfect fit.

Except for one significant issue: Chatterbox was dramatically slower than F5-TTS. In my initial tests, generating a single response took around 14 seconds, far too slow for a natural conversation flow. The installation would feel broken if visitors had to wait that long between exchanges.

I faced a difficult decision: prioritize voice quality (F5-TTS) or language support (Chatterbox)?

The answer became clear when I thought about the installation's core purpose. This was not a tech demo showcasing the best possible voice synthesis. It was an experience about personal identity and human connection. Speaking to someone in their native language, even with slightly lower voice quality, creates a far more intimate and impactful encounter than perfect synthesis in a foreign language.

I chose Dutch support. But I needed Chatterbox to be faster.

### 

### A Reddit Collaboration

I posted about my performance concerns on Reddit, explaining the project and the speed challenges. The response surprised me.

**\[IMAGE PLACEHOLDER: Screenshot of Reddit conversation with rsxdalv\]**

A community member named **rsxdalv** replied that he had been experiencing the same frustration and had already started working on optimizations. He had been benchmarking the model extensively, identifying bottlenecks, and applying optimizations like `torch.compile` to dramatically improve inference speed.

His optimized version achieved approximately **5x faster inference**, reducing generation time from \~14 seconds to around **2-3 seconds**. That was fast enough to feel conversational.

He shared his work on GitHub ([https://github.com/rsxdalv/chatterbox/tree/faster](https://github.com/rsxdalv/chatterbox/tree/faster)), and I integrated his optimized version into the installation. This community collaboration was a lifesaver for the project. Without it, multilingual support would not have been feasible within the exhibition timeline.

### 

### Technical Implementation: Tool Calling for Language Selection

With performant Dutch voice cloning now possible, I needed a way to let visitors choose their language naturally, without clunky UI buttons or menus that would break immersion.

The solution leveraged Gemini Live's tool calling capabilities. Here's how it works:

1. **Initial State**: Visitors arrive at the language selection screen, where a Gemini Live API stream is already active.  
     
2. **Natural Language Processing**: Visitors can say things like:  
     
   - "I want Dutch"  
   - "English please"  
   - "Nederlands"  
   - "Ik wil graag in het Nederlands"

   

3. **Tool Call Interpretation**: Gemini Live is smart enough to interpret these varied phrasings and understand the intent. It's not just keyword matching; it's genuine language understanding. If someone says "I'd prefer to speak my native language" in a Dutch accent, Gemini can infer they want Dutch.  
     
4. **Language Activation**: When Gemini determines the language choice, it executes a tool call that:  
     
   - Switches the voice model (English Chatterbox model vs. Dutch Chatterbox model).  
   - Loads the appropriate system prompt (translated and culturally adapted).  
   - Begins the main conversation in the selected language.

**\[IMAGE PLACEHOLDER: Code snippet showing Gemini tool calling setup for language selection\]**

### 

### System Prompt Considerations

While the English and Dutch system prompts are largely translations of each other, some important differences exist:

**Translation of Scripted Questions**: The conversation includes specific questions designed to elicit voice samples:

- "How would you describe the weather today?"  
- "What brought you to Dutch Design Week?"

These needed careful translation to maintain naturalness in Dutch.

**Language Consistency**: The Dutch system prompt includes stronger instructions to maintain Dutch throughout the conversation. Without this, the model occasionally slipped into English when discussing technical concepts. The English prompt has similar reinforcement, but it's less critical since English is Gemini's primary training language.

**\[IMAGE PLACEHOLDER: Side-by-side comparison of English and Dutch system prompts (first few lines)\]**

### Complete F5-TTS Replacement

To keep the architecture clean and reduce complexity, I completely replaced F5-TTS with Chatterbox. While F5-TTS produced higher quality English speech, maintaining two separate voice cloning systems would have added significant complexity for debugging, model loading, and API routing.

The trade-off was worth it: slightly lower voice quality in English conversations, but support for Dutch and a single, unified voice cloning pipeline. In practice, visitors didn't comment on voice quality. They were far more engaged with the content of the conversation and the uncanny experience of hearing "themselves" speak back.

## 

## Part 3: Visual Fidelity Upgrade {#part-3:-visual-fidelity-upgrade}

### The Unreal Engine 5.1 Limitations

The previous semester's MetaHuman, while functional, lacked the visual impact needed for an art installation. The character felt like a tech demo rather than a confronting digital presence. Two factors contributed to this:

1. **Texture Resolution**: Unreal Engine 5.1's MetaHumans used lower-resolution textures, resulting in a somewhat plasticky, uncanny valley appearance.  
2. **Background Presentation**: The stark black background felt clinical and uninviting, more like a corporate demo than an art piece.

For an installation about confronting your digital double, visual fidelity matters enormously. The MetaHuman needed to feel present, real, and slightly unsettling.

**\[IMAGE PLACEHOLDER: Large side-by-side comparison \- UE 5.1 MetaHuman vs. UE 5.6.1 MetaHuman, showing texture detail\]**

### Upgrading to Unreal Engine 5.6.1

Epic Games' Unreal Engine 5.6.1 introduced significant improvements for MetaHumans:

- **8K Texture Support**: Dramatically increased skin, hair, and eye detail.  
- **Improved Subsurface Scattering**: More realistic skin translucency and depth.  
- **Performance Optimizations**: Better GPU efficiency despite higher quality assets.

The upgrade promised everything I needed: better visual quality *and* better performance. But it came with significant migration challenges.

### 

### The NVIDIA Audio2Face Recompilation Challenge

The entire voice-to-animation pipeline depends on NVIDIA Audio2Face (A2F), which takes the Chatterbox-generated speech and drives the MetaHuman's facial animation in real-time. Audio2Face integrates with Unreal Engine via a plugin.

Here's the problem: plugins are compiled for specific Unreal Engine versions. The Audio2Face plugin I had been using was built for UE 5.1. Moving to UE 5.6.1 meant I needed a compatible version, but one didn't exist in the standard distribution.

**\[IMAGE PLACEHOLDER: Screenshot of Unreal Engine plugin compilation output or error messages\]**

The solution required:

1. Obtaining the Audio2Face plugin source code.  
2. Updating dependency references to match UE 5.6.1 APIs.  
3. Recompiling the plugin from source against the new engine version.  
4. Testing for API compatibility issues.

This was a trial-and-error process. Some API calls had changed between versions, requiring adjustments in the plugin code. Error messages were often cryptic, requiring deep dives into Unreal Engine and NVIDIA's Audio2Face documentation.

It took several iterations, but eventually, I got a working build. The recompiled plugin successfully received audio data from the Chatterbox TTS server and drove facial animation on the UE 5.6.1 MetaHuman.

### 

### Creating the New MetaHuman

With the engine upgraded and plugins working, I created a new MetaHuman character using Epic's latest character creator:

- Selected a neutral, approachable appearance.  
- Enabled 8K texture streaming.  
- Configured facial rig for Audio2Face compatibility.  
- Optimized LOD (Level of Detail) settings for close-up viewing.

**\[IMAGE PLACEHOLDER: Screenshot of MetaHuman character creator showing the new character\]**

The difference was immediately noticeable. The character had depth, with realistic skin texture, convincing eye moisture, and subtle asymmetries that made it feel human rather than algorithmic.

### Background Redesign: From Black to Colorful

The previous black void background served a practical purpose (easy to deepfake over), but it felt sterile and uninviting. For an exhibition environment where first impressions matter, the installation needed to feel approachable and intriguing from the outside.

I replaced the black background with a colorful, gradient-based environment. The new design:

- Uses warm, inviting colors that draw attention.  
- Creates depth through layered gradient effects.  
- Maintains sufficient contrast for the deepfake to remain convincing.  
- Feels more like an art piece than a technical demonstration.

**\[IMAGE PLACEHOLDER: Before/after comparison of black background vs. colorful background\]**

### 

### The Performance Bonus

An unexpected benefit of the UE 5.6.1 upgrade was improved GPU efficiency. Epic's engineers had optimized the rendering pipeline significantly, meaning the same visual output required less GPU resources.

This was crucial because the installation runs three computationally intensive processes simultaneously:

1. Unreal Engine rendering the MetaHuman.  
2. Chatterbox performing real-time voice cloning.  
3. Real-time deepfake processing.

The improved GPU efficiency meant more headroom for the deepfake and voice cloning processes, ultimately contributing to the stable 16-20 fps performance achieved in the final installation.

## 

## 

## Part 4: Performance Optimization \- The Dual GPU Solution {#part-4:-performance-optimization---the-dual-gpu-solution}

### The Computational Challenge

Running "Constructed Mirror" pushes modern hardware to its limits. Here is a breakdown of what's happening simultaneously:

**Unreal Engine 5.6.1**:

- Real-time rendering of an 8K-textured MetaHuman.  
- Audio2Face-driven facial animation (60+ blend shapes updating in real-time).  
- Scene lighting and post-processing effects.  
- Target: 30+ fps for smooth animation.

**Chatterbox Voice Cloning**:

- Real-time audio processing and generation.  
- Neural network inference for voice synthesis.  
- Must complete in 2-3 seconds for conversational flow.

**Real-time Deepfake**:

- Frame-by-frame facial replacement.  
- Face detection and landmark tracking.  
- Neural network inference for face swapping.  
- Target: 15-20 fps minimum for acceptable quality.

Running all three on a single GPU, even a flagship RTX 4090, created severe bottlenecks. Frame rates dropped, audio generation stalled, and the deepfake became choppy and unconvincing.

### 

### The Dual RTX 4090 Strategy

The solution was to leverage multiple GPUs and strategically distribute the workload:

**GPU 0 (Primary 4090\)**:

- Unreal Engine rendering.  
- Chatterbox voice cloning.  
- Rationale: These processes benefit from shared VRAM and have complementary load patterns (Unreal is constant, Chatterbox is bursty).

**GPU 1 (Secondary 4090\)**:

- Real-time deepfake processing exclusively.  
- Rationale: Deepfake needs sustained, high GPU utilization and benefits from having the GPU to itself.

**\[IMAGE PLACEHOLDER: Diagram showing process distribution across two GPUs\]**

### Technical Implementation: CUDA Device Selection

GPU assignment in Python/PyTorch is controlled through CUDA device selection. When launching each process, I specified the target GPU through environment variables and PyTorch configuration:

# For deepfake process (GPU 1\) {#for-deepfake-process-(gpu-1)}

**`import`** `os`

`os.environ["CUDA_VISIBLE_DEVICES"] = "1"`

# Or in PyTorch {#or-in-pytorch}

**`import`** `torch`

`device = torch.device("cuda:1")`

`model.to(device)`

For Unreal Engine, GPU assignment is typically handled through Windows graphics settings, ensuring the engine binds to GPU 0 by default.

### The Performance Results

This distribution achieved stable performance:

- **Unreal Engine**: Consistent 30 fps rendering.  
- **Chatterbox**: 2-3 second generation time maintained throughout conversations.  
- **Deepfake**: Stable 16-20 fps.

The 16-20 fps for the deepfake warranted special consideration. While lower than ideal, it proved acceptable in practice:

- Human visual perception doesn't require perfect smoothness for believability in this context.  
- The conversation and content distracted from minor visual artifacts.  
- **Most importantly,** no exhibition visitors commented on choppiness or visual quality issues.

The decision to accept 16-20 fps rather than pursuing higher framerates was pragmatic, as there were diminishing returns in both development time and hardware requirements beyond this point.

**\[IMAGE PLACEHOLDER: GPU monitoring screenshot showing load distribution during operation\]**

## 

## 

## Part 5: Exhibition Setup \- Physical and Digital Infrastructure {#part-5:-exhibition-setup---physical-and-digital-infrastructure}

### The Booth: Physical Constraints

The installation occupied a custom-built booth within the larger "Human Zoo" exhibition at Dutch Design Week. The booth dimensions shaped every technical decision:

**Physical Dimensions**:

- Total booth: 1m wide × 3m deep.  
- Visitor space: 1m × 1.5m (front area).  
- Equipment space: 1m × 1.5m (rear area).

**Equipment Placement**:

- Dual RTX 4090 PC (rear).  
- Studio monitors/speakers (rear).  
- Cable management and power distribution (rear).

**\[IMAGE PLACEHOLDER: Top-down diagram of booth layout showing equipment placement\]**

The compact space was intentional. It created an intimate, slightly claustrophobic environment that intensified the psychological impact of confronting your digital double.

### 

### Display Setup: Interior vs. Exterior

The installation used two displays serving different purposes:

**Interior Display (Main Experience)**:

- 32-inch Xiaomi TV.  
- Portrait orientation (vertical).  
- Shows deepfaked MetaHuman (AI with visitor's face).  
- Only visible to the person inside the booth.

**Exterior Display**:

- Shows clean Unreal Engine output (no deepfake).  
- Attracts visitors and explains the experience.  
- Displays rules and requirements.

**\[IMAGE PLACEHOLDER: Photo of both displays \- interior (with deepfake) and exterior (clean)\]**

This dual-display strategy solved a critical problem: how to attract visitors without spoiling the reveal. The exterior screen showed the MetaHuman speaking and moving naturally, piquing curiosity without giving away the deepfake surprise waiting inside.

### 

### Camera System: Lumix GH5S Setup

Capturing high-quality facial imagery in a dimly lit booth required professional camera equipment:

**Hardware**:

- **Panasonic Lumix GH5S**: Selected for low-light performance.  
- **Dummy battery**: Enabled continuous operation without battery swaps.  
- **Mounted position**: Above the interior display, angled slightly downward.

**Software Pipeline**:

1. **Lumix Tether**: Provides live camera feed to PC.  
   - Allows remote control of camera settings.  
   - Critical feature: adjustable autofocus settings.  
2. **xSplit Broadcaster**: Captures Lumix Tether output.  
   - Converts to virtual webcam stream.  
   - Functionally similar to OBS, chosen for specific compatibility.  
3. **Virtual webcam**: Becomes input for deepfake processing.

**\[IMAGE PLACEHOLDER: Photo showing camera mounting position above display\]**

### 

### The Autofocus Challenge

Initial testing revealed a persistent issue: the camera's autofocus wouldn't consistently lock onto visitor faces. It would "hunt" (focus in and out repeatedly) or lock onto the background instead.

**The Solution**:

- Forced continuous autofocus (AF-C mode), where the camera constantly adjusts focus.  
- Enabled face/eye detection, which gives priority to human faces.  
- Combined approach: The camera continuously hunts but prioritizes faces.

This created reliable face tracking. The slight hunting was imperceptible in the final deepfake output due to the neural network's stabilization.

**\[IMAGE PLACEHOLDER: Screenshot of Lumix Tether showing autofocus settings\]**

### Lighting: Intentionally Dark

The booth was positioned at the darkest section of the exhibition space. While initially a concern, this became an asset.

**Why darkness worked**:

- Created a mysterious, intimate atmosphere.  
- Some overhead ambient light prevented complete darkness.  
- Lumix GH5S's low-light performance handled it well.  
- Darkness focused attention on the illuminated display.  
- Enhanced the psychological intensity of the experience.

The lighting wasn't engineered; it was adapted to and leveraged as an artistic choice.

### 

### Exhibition Rules: Safety and Technical Constraints

The exterior display prominently showed two critical rules:

**1\. Ages 18+ Only**

**Rationale**: Privacy and liability concerns with minors.

- Camera recording inside booth.  
- Complex consent issues with children.  
- Reduced legal/ethical complications.

**2\. Maximum One Person Per Session**

**Rationale**: Technical and experiential.

- **Technical**: Face detection and deepfake confusion with multiple faces.  
- **Experiential**: A one-on-one conversation feels more intimate and personal.  
- Creates stronger psychological impact.  
- Prevents social pressure from affecting responses.

**\[IMAGE PLACEHOLDER: Photo of exterior display showing rules\]**

These constraints were not limitations; they enhanced the experience by ensuring optimal technical performance and emotional impact.

### 

### The Dual Stream Architecture

Getting the right video to the right display required careful routing:

**For Interior Display (Deepfake)**:

1. Unreal Engine renders MetaHuman → OBS Studio captures window.  
2. OBS creates a virtual camera stream.  
3. Deepfake software takes OBS virtual camera \+ Lumix camera.  
4. Deepfaked output is displayed on the interior screen.

**For Exterior Display (Clean)**:

1. Same OBS capture of Unreal Engine.  
2. A custom web app directly displays the OBS stream.  
3. Overlays exhibition rules.  
4. No deepfake processing is applied.

**\[IMAGE PLACEHOLDER: Data flow diagram showing video routing to both displays\]**

This separation ensured the exterior remained inviting while the interior delivered the full confrontational experience.

## 

## 

## Part 6: Results & Reflections {#part-6:-results-&-reflections}

### Exhibition Performance

"Constructed Mirror" ran successfully throughout Dutch Design Week's nine-day exhibition period (October 19-27, 2024), hosting an estimated **900-1200 visitors**. The automated infinite loop worked reliably for intended use cases, though the early exit scenario and Audio2Face crashes required manual intervention throughout.

**Average Session Duration**: 3-4 minutes

This retention rate was remarkable. In an exhibition environment filled with competing attractions and constant stimulation, holding someone's attention for several minutes of an AI conversation represents genuine engagement. The installation was not just technically impressive; it was compelling enough to keep people talking.

### Visitor Reactions: Deeply Personal Conversations

The most striking outcome was not technical, but how personally each visitor engaged with the experience. Because the AI adapted to the conversation naturally (thanks to Gemini's contextual understanding), every session diverged in unique directions:

**The Therapist**: Spent the entire conversation exploring the nature of human connection. Questions emerged organically:

- What makes a connection feel "warm"?  
- Can warmth exist in AI-human interaction?  
- Is authentic connection possible without shared mortality?

**The Theologian**: Steered the conversation toward spiritual questions:

- Can an AI experience genuine belief, or only simulate it?  
- Is faith dependent on consciousness or just behavior?  
- What role does suffering play in authentic spirituality, something an AI cannot experience?

**\[IMAGE PLACEHOLDER: Photo of visitors inside booth (anonymized/from behind)\]**

### 

### Common Themes That Emerged

Across hundreds of conversations, certain themes recurred frequently:

**1\. "Hey, I'm bald\!" (The Hair Problem)** Many visitors immediately noticed that the deepfake only replaced their face, not their hair. The AI appeared with the MetaHuman's hairstyle but the visitor's facial features, creating an uncanny hybrid. This technical limitation sparked interesting discussions about what aspects of appearance define identity. Is your hairstyle part of "you" in a fundamental sense, or just a changeable attribute?

**2\. Creativity and Originality** Visitors frequently questioned whether AI could possess genuine creativity or only recombine existing patterns. Artists and designers were particularly focused on this:

- "Can you create something truly new, or only remix what humans have made?"  
- "Is your creativity real or just very sophisticated pattern matching?"  
- "What makes human art valuable if AI can replicate the style?"

**3\. The Soul Question** Perhaps the most common philosophical territory: does AI have, or could it ever have, a soul? Definitions of "soul" varied wildly between visitors:

- Religious visitors asked about a divine spark and spiritual essence.  
- Philosophical visitors debated consciousness and subjective experience.  
- Pragmatic visitors questioned whether "soul" is even a meaningful concept.

These weren't abstract academic discussions; they were personal, emotional explorations of what people valued about their own humanity.

### 

### A Defining Moment: Maarten van der Glas

One encounter crystallized the installation's success more than any other.

**Maarten van der Glas**, an artist who himself had a Digital Graffiti installation at the same exhibition space, experienced "Constructed Mirror" early in the exhibition. During his conversation with the AI, he engaged thoughtfully but admitted he didn't have direct answers to the questions posed:

*"What distinguishes me, the AI, from you, the human?"*

He left without a resolution, which was exactly as intended. The installation was not designed to provide answers, but to plant questions.

**Several hours later**, Maarten returned. He found me specifically to share that he'd been thinking about the conversation continuously since leaving the booth. He had processed the experience, analyzed the questions in his mind, and formulated his answers.

He proceeded to share a detailed list of responses—his personal framework for understanding human uniqueness in the age of AI. The specifics mattered less than the fact that he had returned at all.

**\[IMAGE PLACEHOLDER: Photo of Maarten van der Glas, if available and with permission\]**

This moment validated the entire project. The installation's success was not in providing answers during the 3-4 minute experience, but in creating an encounter that continued to resonate hours later. Maarten's return demonstrated that the questions remained alive in his mind, demanding consideration and synthesis.

This was precisely the long-term impact described in the original concept document:

*"The experience is designed not just for immediate impact but for continued reflection. While visitors may not formulate a complete answer to what makes them uniquely human during the short installation, the encounter is crafted to remain with them, prompting deeper consideration in the days and weeks that follow."*

Maarten's journey from uncertainty to active reflection embodied this goal perfectly.

### 

### Language Observations

No significant behavioral differences emerged between Dutch and English sessions. Visitors didn't typically experience both language options back-to-back, so comparative feedback was limited.

However, Dutch-speaking visitors often expressed appreciation for the native language support in post-experience discussions. The decision to prioritize language over perfect voice quality proved correct. Linguistic familiarity created a comfort that outweighed subtle audio fidelity differences.

### Technical Stability: The Reality of Exhibition Operation

While the dual-GPU architecture performed well, the exhibition revealed important operational challenges that only emerge under real-world conditions.

#### The Early Exit Problem

**Observation**: Approximately 80-85% of visitors stayed for the complete 3+ minute experience, a remarkable retention rate given modern attention spans. However, 15-20% exited early, leaving the installation mid-conversation.

**Impact**: The automated reset system was designed to trigger only after the scripted conversation concluded. When someone left early, the system remained stuck in conversation mode, waiting for a dialogue completion that would never come.

**Temporary Solution**: I implemented keyboard shortcuts during development; pressing the spacebar triggered an immediate reset. This allowed me or fellow host Jan-Hendrik to quickly reset the experience when we noticed someone had left early.

**\[IMAGE PLACEHOLDER: Code snippet showing spacebar reset shortcut implementation\]**

**Lesson Learned**: Autonomous systems need to handle non-ideal user behavior. Future iterations should include:

- **Empty booth detection**: Camera-based presence detection to automatically reset when the booth is empty for 30+ seconds.  
- **Visitor-accessible reset button**: A clearly labeled physical button inside the booth allowing self-service resets.  
- **Host reset interface**: A tablet or simple web interface outside the booth for staff intervention without accessing the main PC.

The fact that most visitors *did* stay for the full experience was validating. It meant the content was engaging enough to hold attention in a busy exhibition environment where distractions are constant.

#### The Audio2Face Stability Crisis

**The Problem**: The installation crashed 5-6 times per day, always due to the NVIDIA Audio2Face plugin in Unreal Engine.

**Root Cause**: NVIDIA deprecated Omniverse Audio2Face on **October 1st, 2024**, just weeks before Dutch Design Week began (October 19-27, 2024). The timing could not have been worse.

**\[IMAGE PLACEHOLDER: Screenshot of NVIDIA's deprecation announcement\]**

**The New Reality**: NVIDIA now offers Audio2Face as an enterprise service under their ACE (Avatar Cloud Engine) platform:

- Requires a paid subscription for commercial use.  
- A free tier is available for personal/limited use.  
- Dramatically increased complexity:  
  - Must run in a containerized virtual environment.  
  - Requires NVIDIA NGC API key authentication.  
  - A complete backend architecture overhaul is needed.  
  - Different API structure and data formats.

**\[IMAGE PLACEHOLDER: Diagram showing old vs. new Audio2Face architecture complexity\]**

**The Decision**: With only weeks until the exhibition, completely migrating to the new Audio2Face architecture was impossible, as the scope included:

- Setting up Docker/containerized environments.  
- Obtaining and configuring NGC API credentials.  
- Rewriting the entire audio streaming pipeline.  
- Testing stability under exhibition conditions.  
- Learning a completely new API structure.

I made the pragmatic choice: continue using the deprecated local Audio2Face plugin and manage crashes manually.

**Operational Impact**:

- Only Jan-Hendrik (fellow host) and I knew how to restart the system.  
- Required one of us to be present at all times during exhibition hours.  
- Each crash resulted in 2-3 minutes of downtime while restarting Unreal Engine.  
- Visitors during crashes had to wait or return later.

**The Restart Procedure**:

1. Force quit Unreal Engine.  
2. Restart the Audio2Face service.  
3. Relaunch the Unreal Engine project.  
4. Wait for shaders to compile (\~60 seconds).  
5. Verify the audio streaming connection.  
6. Resume normal operation.

This became routine, but it added significant stress to exhibition management.

**\[IMAGE PLACEHOLDER: Photo of Jan-Hendrik and myself managing the installation at DDW\]**

**Future-Proofing Considerations**: This experience highlighted critical dependencies on third-party services. For future installations:

- **Redundancy planning**: Have backup animation systems (even if lower quality).  
- **Early testing**: Begin integration work months in advance to catch deprecation notices.  
- **Vendor diversification**: Don't build critical paths around single-vendor solutions.  
- **Offline-first design**: Minimize dependencies on external services where possible.

The Audio2Face situation exemplifies a broader challenge in cutting-edge technical art: the tools that enable innovation are often experimental, unsupported, or subject to sudden business model changes. Building resilient installations means planning for these disruptions.

### What Worked Well

**1\. The Infinite Loop**: Allowed truly autonomous operation. Staff could focus on managing queue flow rather than technical operation.

**2\. Natural Language Selection**: Visitors never felt they were "operating" a system. The language choice happened conversationally, maintaining immersion from the very beginning.

**3\. Dual-Screen Strategy**: Successfully attracted visitors (exterior) while preserving the surprise (interior).

**4\. One-Person Limit**: Created intimate, focused experiences. Visitors reported feeling genuinely alone with the AI, intensifying the psychological impact.

**5\. Community Collaboration**: The rsxdalv Chatterbox optimization was critical. Open-source collaboration solved what would have been a project-blocking issue.

### 

### What Could Be Improved

**1\. Autonomous Early Exit Handling**: The 15-20% early exit rate revealed gaps in the automated flow.

- **Camera-based presence detection**: Automatically detect when the booth is empty for 30+ seconds.  
- **Visitor-accessible reset button**: A physical button inside the booth for self-service resets.  
- **Host management interface**: A tablet or web interface for remote resets without PC access.  
- Currently, the spacebar shortcut requires technical knowledge and PC access.

**2\. Audio2Face Dependency Risk**: The plugin crashes (5-6 times daily) and NVIDIA's deprecation highlighted fragility.

- **Migrate to new Audio2Face architecture**: Despite complexity, the old plugin is unsustainable.  
- **Develop fallback animation system**: A backup solution if the primary system fails.  
- **Regular stability monitoring**: Automated crash detection and restart scripts.  
- **Vendor diversification**: Explore alternatives to reduce single-vendor dependency.

**3\. Deepfake Framerate**: While 16-20 fps was acceptable, higher framerates (25-30 fps) would improve presence. This would require either more powerful hardware (like an RTX 5090 when available) or algorithmic optimizations in the deepfake model itself.

**4\. Voice Cloning Quality**: Chatterbox served the project well, but future iterations could explore:

- Newer voice models with better quality AND multilingual support.  
- Hybrid approaches (F5-TTS for English, Chatterbox for Dutch).  
- Fine-tuning Chatterbox on additional training data.

**5\. Lighting Control**: While the darkness worked artistically, inconsistent ambient light from the surrounding exhibition sometimes affected face detection. Controlled LED lighting inside the booth (subtle, non-intrusive) could improve camera performance.

**6\. Audio Isolation**: The booth had moderate sound isolation but wasn't fully soundproof. During busy periods, external noise occasionally interfered with microphone input. Better acoustic treatment would improve voice capture quality.

**7\. Feedback Collection**: The installation could benefit from a structured feedback mechanism, perhaps a simple tablet outside where visitors could anonymously share their thoughts. This would provide richer data for future iterations.

### 

### Development Reflections

The month-long development period was intense, characterized by iteration and problem-solving:

**Time Distribution** (approximate):

- UX flow design and testing: 35%  
- Chatterbox backend integration: 25%  
- Unreal Engine upgrade and troubleshooting: 20%  
- Exhibition setup and physical installation: 15%  
- Documentation and refinement: 5%

**Key Lessons**:

**1\. Embrace Trade-offs**: The F5-TTS vs. Chatterbox decision demonstrated that "perfect" technical solutions don't always serve the project's true purpose. Language support mattered more than marginal voice quality improvements.

**2\. Community Resources**: Don't hesitate to engage with open-source communities. The Reddit collaboration with rsxdalv was invaluable and happened because I shared my specific challenge publicly.

**3\. User Testing Reveals Edge Cases**: The 5-minute idle timeout solution only emerged after observing real pauses during exhibition setup. You can't anticipate everything; build in flexibility to add features as needs emerge.

**4\. Physical Space Shapes Experience**: The booth's dimensions, lighting, and isolation weren't just practical constraints; they became integral to the psychological impact. The key is to work *with* your environment, not against it.

**5\. Automate Ruthlessly**: Every manual step eliminated (language selection, reset, stream routing) reduced cognitive load for both visitors and staff. In exhibition contexts, autonomy is reliability.

### Future Directions

Potential enhancements for future iterations:

**Technical**:

- Explore real-time ray tracing in Unreal Engine for even more realistic MetaHuman rendering.  
- Investigate newer deepfake models with better performance/quality ratios.  
- Implement emotion detection to adapt the AI's conversational style dynamically.

**Experiential**:

- Optional post-experience reflection space where visitors can write their thoughts.  
- Compile artwork from all visitor responses (what makes you uniquely human?).  
- Extended conversation modes for visitors who want deeper philosophical exploration.

**Accessibility**:

- Consider audio description support for visually impaired visitors.  
- Explore tactile/haptic elements for additional sensory engagement.

## 

## Conclusion {#conclusion}

"Constructed Mirror" evolved from a functional prototype to an exhibition-ready art installation through systematic problem-solving and iterative refinement. The challenges faced this semester, including creating an infinite loop, adding multilingual support, upgrading visual fidelity, and designing a dual-screen exhibition setup, required both technical skill and design thinking.

The success of the installation at Dutch Design Week validated the development decisions. An estimated 900-1200 visitors engaged deeply and personally over nine days, each finding their own meaning in the confrontation with their digital double. The conversations that emerged, about connection, belief, creativity, and identity, demonstrated that the installation achieved its core goal: prompting genuine reflection on human uniqueness in an age of advancing AI.

The encounter with artist Maarten van der Glas encapsulated the project's ultimate success: he returned hours after his experience, having spent that time processing the AI's questions and formulating his answers. The installation didn't just create a momentary spectacle; it planted questions that continued to grow in visitors' minds long after they left the booth.

Perhaps most importantly, the installation proved that art and technology can create truly transformative experiences when technical sophistication serves emotional and philosophical depth. The deepfake is not the point; it's the vehicle for asking profound questions about what makes us irreplaceably human.

Despite operational challenges like Audio2Face crashes and early exits requiring manual resets, the installation ran successfully throughout the exhibition. These challenges provided valuable lessons for future iterations: the importance of redundancy, autonomous error handling, and reducing dependencies on single vendor solutions.

The project demonstrated that cutting-edge technical art exists at the intersection of capability and fragility. Building resilient installations means anticipating not just ideal conditions, but the messy reality of nine-day public exhibitions where hardware fails, visitors behave unpredictably, and third-party services get deprecated at the worst possible moment.

Yet through all these challenges, the core experience remained powerful. Visitors stayed engaged for 3-4 minutes on average, an eternity in exhibition terms. They left thinking. They returned with answers. They confronted, in a visceral way, the question that defines our technological moment: what remains uniquely human when AI can replicate so much of what we are?

"Constructed Mirror" didn't answer that question. It shouldn't. But it created the space, the discomfort, and the curiosity needed for each visitor to begin finding their own answer.

**\[IMAGE PLACEHOLDER: Final wide shot of the installation in operation at Dutch Design Week\]**

## 

## 

## Technical Appendix {#technical-appendix}

### System Specifications

**Computing Hardware**:

- 2× NVIDIA RTX 4090 (24GB VRAM each)  
- AMD Ryzen 9 7950X3D (or similar high-end CPU)  
- 64GB DDR5 RAM  
- 2TB NVMe SSD (fast loading of models and assets)

**Camera**:

- Panasonic Lumix GH5S  
- Dummy battery for continuous operation  
- Connected via Lumix Tether software

**Displays**:

- Interior: 32" Xiaomi TV (portrait orientation)  
- Exterior: \[Display specifications\]

**Audio**:

- Studio monitors (rear-mounted)  
- Noise-canceling microphone for voice input

### 

### Software Stack

**Core Applications**:

- Unreal Engine 5.6.1 (MetaHuman rendering)  
- NVIDIA Audio2Face (facial animation)  
- Chatterbox (voice cloning) \- rsxdalv optimized branch  
- xSplit Broadcaster (camera capture and virtual webcam)  
- OBS Studio (Unreal Engine window capture)

**Backend Services**:

- Gemini Live API (conversational AI)  
- Custom Flask/FastAPI servers (routing and coordination)  
- Real-time deepfake processing pipeline

**Web Frontend**:

- React-based interface (modified from Gemini-Live console)  
- Web Audio API (microphone input and processing)

### Key GitHub Resources

- **Chatterbox (Optimized)**: [https://github.com/rsxdalv/chatterbox/tree/faster](https://github.com/rsxdalv/chatterbox/tree/faster)  
- **Gemini-Live Console** (used as foundation for codebase): [https://github.com/google-gemini/live-api-web-console](https://github.com/google-gemini/live-api-web-console)

## 

## Acknowledgments {#acknowledgments}

**rsxdalv**: For the critical Chatterbox optimizations that made multilingual support feasible within the project timeline.

**NVIDIA**: For Audio2Face technology and documentation.

**Epic Games**: For Unreal Engine 5 and the MetaHuman framework.

**Google**: For the Gemini Live API and developer resources.

**Dutch Design Week**: For the exhibition platform and the "Human Zoo" collaborative space.

---

*This report documents the development process for "Constructed Mirror" during the second semester of the project. For information about the initial prototype development, see "Mirror, Mirror: Prototype Development Journey."*  


[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnAAAABHCAYAAACH83qfAAAXc0lEQVR4Xu3dh1sUVxcG8O9/isFEwF5AKSsqqCjSVezGHkWs2CuxGzuKHXuLCCoiHVEQkC4gEEss2DnfnLvZDd7LygJb5fV5fo8zZ2Zn7uwuM+/U/R+Jf2UAAAAA4CT+R+KfOgAAwJ6mT48kLy8PiomZRYcObaYvX0po9+41YtjHj0X0+nW+6D5+fBt5eg6gceNGUlBQAC1ZMpvCw8eIYfX1mWJYaOhoWrZsDk2dGiHq798XUGRkEK1du4hOnNwhXhcVFaKNF0gNDZli3CtXDtKrV3kUHT1TaRsAgL0hwAGAQ5o2LYL69etNHz4UiX4OV+fO7RXdI0bojAHuwYOrNHr0cFq/fjEdO/YHrVr9OyUnH6ehQ73I29uT/P11NH78ODHurVsJVFubRk1NBVRWlkIrV86n/PyrYvyZMyeIkNjcXGpsw/37ibR163KlbQAA9oYABwAOi4+0Gbo5XMnD370rUGqd0do8WgY6AABHgQAHAAAA4GQQ4AAAAACcDAKclVQWlis1AAAAAEtAgLOC2uov9PffpNQBAAAALAEBzsKe1X4V4Y09q/uqDAcAAADoLAQ4CzIENxk1q+MCAAAAdBQCnIUYTpuaIo8PAAAA0FEIcBZQ+/T74Y3V1eB0KgAAAFgGAlwnNTY2K2HNFB5Xfr2zaWxodihy+wAAALoCBLhOSDr5TAlp5mh24mvi5GWxN7l9AAAAXQECXAe1dc1bW+TpOQt5OexNbp85mt6UUVnRR+eQr7bfHMp0HFxOymtlGcxxYW+dMi1H8zivSWm3OfLvVijTchaP0sqV5TFHeHK0U5OXxxwlOeXK+2cPealvlLaZ496lamVajuhGfKXSdmeHANcB9c/+e1RIR9U/a1am6wzk5bA3uX3m4AAnT8dRdTTAydNxdMUP3ivLYI7rRxuUaTka3tmT222OgvRKZVrOouB+ubI85hiaHenU5OUxBwc4+f2zh7LHH5W2mSPrZo0yLUd04ygCXJcnfyk6y9lOp8rtb6mq6g1t2bJHdNfVfaSGhi/GawT13V9p7do40V9f/1ngbh5n48YdxvEaGvQB+eHDp8o8ZHL7zIEA53gQ4FQIcM5HXh5zIMDZBgJcF3fnfL3ypbAEeT6W1NBQ9w15eHvJbW9p1apNlJtbQWlpBSKQzZ0bTevXb6OjR8/TwoXLaMWK9RQZOck4flZWKW3YsIMWLFhiDHCFhc/o+vU0mjdvMQKcBgHu+xDgHBMCnPkQ4GwDAa4La/kLC9Ygz89S+vbtS4sW/W6TAMfq6/XXBhqOopnCw/mInKH/v+5mcUSO+9uaBpPbZw5TAc7NzZ1iYmJF965dhyg2dqMyTluqq9+K/9PTi76pl5f/o4ybY8aK29IBrrr6HQUGBovuq1dTleFtMRxBbckQyk+duqYMkxUU1Ck1ZukAt2jRcrp1K0ept9e+fceVmilXrrT+flo6wI0cGajtGG0X3fPnx9D+/SeUcb7Hz2+EUjPIyChWaoZ5GRw7dkEZR2bpAOedGESeccON/f3nDhb/6zIilHFtwTcpRKkxeXnMYSrArVy5QayPsrNN/z0vX76OBgwYpNQ7wtIBzsdnKCUm3lTqeXkVSs2U2bMX0qxZC2j8+MnKsNbs2XNUqRkgwHVR8hfBWqxxOrW+vlbbaFfQ0qUx1L17d3r5MpdSUk5oK+VoiooKoTFj/GnmzAm0atUCLbSsoYSEP+jSpf1040Y8JSUlaBvB40bdunVT2mxvLdtnjp9++onGjBqrTIf16OGqBS/9BqxlgOPTuqdPX6PMzCdUU/NenB7eunUPbdy4ky5fviPG2bp1L23atIvKyl6K/jt38un69fsUEhJBERFRxAGupORvbaWmo3HjwqiwsE77HHLFsNTURyaDzbljV5VlaMv3PqeAgEDtc80kf//RdP78LVGbMGEKDRzoaRznjz/2fRPU9u49ZgzTkZGTxUaDQ9v8+UtErVev3nTy5FXxfri7u1NwcARNnTqLJk2aTl5evnThQjLFxf1J9+4VmFzOorwmZTnawstpKsAdP35Z7ATw8gYEjKZt2/Zr3/HNxuG8ozFokCdFR68whu3i4kaaM2ehFsTuiveAa5s376IRI0aKbv7/1KmrlJtbLr5HS5asptraD2Kc2NjN3w1wctvbwtPfuCxemRZzcXER7+nAgR6k0w0XAS4jo0S835mZJWIcPrI9fHiA6C4re2VchrVrtxoD3JEjifTgQSXNnbtYLC979uyTvs3acvG0Jk+eob0ni0Tw5+8+D9uzJ54qK9/QtGmzTG5Yzx9JUZapLfx5yoHIoFdof/Lcqg9wP/f4WQS4gSt8SZceQbr7EdRvzmBy8+upBKwhe/zJpacLuercyWPDUBq4zIe6uXSj3hMHUM9xfUmXGka6O2E0ZF8A+SSOFa/x2OhH3qfGkPvo3uRzJZi8z44V8xq00tcYHE0FOHmZ2sKf88Lp399R5ACXllZI/fr1p3nzYmjo0OHie20YXlHxj7Yun0b5+dXiu8vrGsOlK0FBodo6Plj7u+wpznJMmzab1q1Td8IYBzi5fW3h9h/cmqxMi5WXv9JPV/v+jR0bItYz12/cp7t3H4rvEw8LDBxHo0aNEX+vXD9+/BIdOnTaOA1u74wZ82jIEB+xbDU1H7T2/0HDhvmL4UVFDZSV9USsR3mHlAOcYZ0sO73zodbmBNqxI1YLx/Pp8+diZXvpbBDg2pBytmOPCukoef7maG4u1b7YaSJ0xcbOp92711BVVaoYZjjyNnHiBAoPD1Ne215ye1vDG868vNaPHhgY/oA7S26fOUwdgYv8d2M0efJMsQF79KhW9IeFTRQbtqio6Vr9o6glJWVRaGikVtdfxxcePlGspLg7OnqlOD08f/5isZFfvXqz9nm8FeNwWFi8OJamT58jNpArVmwQtdjYTUp7mKWPwHFY5M/nxo10Sk7OFW3mMJqUlG0cZ8wY/XJMmDBVDL927Z7o5+XlowK8kly6dI1Y8XL93LkkMT0OBLzCHTUqSAuIo8SycVjkwMMbEQ5NM2bMVdrELH0Ejj8v3pDxxurs2b/E58YreR7GAZPD+Crtc/H29hU1Xs7Q0PHiveB+3vDx/3wqn0/xczdvQC5evC0+uyelL7Tvh/7IQ2Skfro8rtwOZukjcBzYKipe06xZv4sjFBywJk6cpn3PttCTJ89F2/noB1+OwOPzuImJf4kjZ/we8OfC9ZiYVeIyBf48ExIu0tGj54xH0Pk94qPhmzbt1MLgdjp48JS2E3NdvE9nztwQw9et29bqEVlm6SNwzHPTMPG/z8Ug6hM1kNxG9BL9/WZ6Uq+QvtpwP/LcNpzc/HtT3xkeYlifKYPIK2G0CH9D9vqT5xb9NPppw33O6QNb/4Ve1FMLa/xar/jRIhT2iugvQqHP9WAxjrt/Lxq8fTgNWq0j91G9SZcSprSPyctjDlNH4Az4e8brE16XxMXt1Xa450njNFN8fKL2HZiqhaB88XlzqAsMHKftbK0Vn++ZM9dpypTftJ3I52JnS54Hs/QRON4BvngxRVt/ThD/z579u9iJ479F3inknUD+zvG69MCBk9q6ZaNY15w7nyQCK0+Dwxp/d3lHg3eKeaeTv8McavmSHZ42r89454z/Lvlvffz4KUpbWGtH4NauXURfvpQodWeBAPcdqZesc81bW+R2GLx//1jbiBzSNpRbtJXxH/T8eY4yjsxW18DxHyf/AfGRDt5LHDYsQGxM+KaGNWu20vbtB8QeWHJyDk3XNuK8UeeNBx8N4A0QH7nijRAfFeG9MQ4PvDHlP2S+lk6eX1vv1feYCnCOyNIBzlFZOsA5EksHOGdgjQDnDOTlMUdbAc5WLB3gHE1rAc5g7951Ss0ZIMCZwHs18hdAxqcteA900qQZ4jTbyJFjxMX6QUFhNGSItxiHDwvztUF8cf/du4/E9Sstr/1qXTMVFycRH1mT22Vvalv1+PTs4cNnxN66q6sbhYREant/68VNDH5+/tS7d18hJ6dMBDV+D9LSHovwxmGOTz8NHuxFJ05cFvg0webNu4mvY/r555+V+RnI7TMHApzjQYBTIcA5H3l5zIEAZxvfC3AGjrjN/R4EuFbIH7wpfPSID/FyiOMjSHx6ga+H4WtPDBc/79hxUFxvxHdmBgeHi2tTnj5tUqbVGmtcE9dZchvtTW6fORDgHA8CnAoBzvnIy2MOBDjbMCfAsaqqu0rNUSHA/Ss4eJT4/+5F65w2NTe0yeR22pvcPnuT22eOjx+0z/l8hVNoqFbbbw55Oo7u9tlyZRnMkXTc8Zc15UzHlq00z/GXzZSnJR1b5mtnHzo1eXnMUVfuGJ9z8slypW3myL3lGO1vS16y2nZTjhzZqtQcUZcNcF+/PqGDBzdRUdFN0d+jx6/iRoBHGfrHQDiKt/+obbcnuX32JrcPAACgsxobs5Sao+lyAa6sLIWamgqUekslD/W3y8v4sQ98UT3fPch3BvHdg4Z+vnW5ru7Tv48ZqBC33POjFy5duiNOo/I1cnw9F9+Nw49S4EdR3L//2PhrBLKS/I6dUrK2KweqHYrcPgAAAEuYPLnzT26wpi4V4PiIm1wzpSBLfcwFP3aB76rkuy0Z37Y9bdocWrRohbi1mZ9fw8+/4tv7Dx8+Kx61wK+Ljz8n7sTkOzD5mVQ8bPToseI6OX6mljyfwuyO/fg1AAAAWM6SJbOVmqPoEgHu48ciysu7rNTb8ijj2xBneAaYwe7dR4zdfETt5s1M8fiLluPwkbfWuhk/bJFf17LG5HYAAACAfWzbtlKpOYIfPsDdvHlUqbVHa0firInvkJTbAAAAAPaTnX1RqdnbDx/gLKEwp2N3kLbH45xvT5umpZ3tdPgEAAAAy/jttyilZk8/ZIDjn8Z4/Pgvpd4ZVr07tbFZmV9L/MsL9+6dUeoAAABgO5s2xSg1e/nhAlxTU6F4RIhct4SCTOucTn33Wp2XKYcPb6HXr/OVOgAAAFjfq1d5Ss0efqgAd+HCfqVmaXL46qz2hLeW3r8vdNgLKwEAAH5kjvCzWz9MgNu5c5VSs5ZHFjgSV5DV+UeFfPhQaVRamkGNjYXf1DpKng8AAAB86/z5P5WaLf0QAe7AAfOf72Yp8iNG2kueXkc0NNS1qqqqkp4+rVTq5pLnAwAAAKqsrAtKzVacPsCVlCQpNVt5nNuxu1M7etpUFhe3herra0XoCgjwpz17dtH06VNp0qSJohYdvUjrnkTz5s0V/RUVpTRr1m+0Y8c2mjlzJqWk3KJz585QZGQE5efnUkhICGVmpivzAQAAAMfitAGOH8776VORUre19pxOtfQvLJw+fYIKCx+KcFZWVkJ+fn40cmSA6M/OzqDw8FCKjV0hwt2zZ0/pypVLFBoaQmPHjtH6a7TwdtZ41C03N4sWLvydtm7drMwHAAAATLPmDZSmOGWAa2jIVGr2ZM7pVEtc8yaTT322R2VluVJj6en3lPkAAACAaW7urjRlSrhStyanC3B37pxUao6gMOv7p1Pl8R1Fefltysw8r9QBAAC6uslXV5kt6kqsUuusrORipU0GThXg+LSpXHMkcmgzsNQ1b9bEDz9ety5aqQMAAHRVQ7Mj7Srrtunc4zQBbvPmJUrNET1scTrVGqdNbeXUqV04MgcAAF2aHKhszekD3K5dq5WaIzPc2CDXndGnT8V4YDAAAHRJcqCyNacOcPv3b1BqzuDdP2rN2fHvsXbr1o0yL96lpkxfu0o9+KfSPgAAAEuSA5XBz64uxu7BfwYow1vqP2+IUpP5JoUoNea0AS4qKlSpgX3xQwuzL6cQPXS1q+yEOKVtAAAAliQHKqOsSPK5NE7wiBtG3fv/Sq5De4phurRw0t0Lp55j+oj+3uMHGF/XK7Qf9RjiSr2C+5HvjWDqM3kg9Y7oTz5atzKPzgY4eWLOQl4OsBwEOAAA6ArkbNGqrFZqLFMLc+kRoluX2crwljL048kQ4MCiEOAAAKArkLOFrSHAgUW1FeAu7nKjfavdRPe7LFd6na6v55x2F/8vmtJDH8JOuVPFDTf6mOtKXx64Uvl1/fA3GW5UelXfbQoCHAAAWJucLWwNAQ4sqq0AtzlaH8hG+HSn+wnudO1Pd8o5407bYtzobaY+2G2J1o/r79uddINdaOcyN1o915UeX3IXr5enKUOAAwAAa5Ozha1ZPMC5B+ovzHP160n9o71p4FIf6hXSj3z/CqEBWr/7yN768Ub3pr7TPMjnSrDxHHHPsX1JlxlBPufGUp+ogdRvuoe4g8PrRKD+Ndpre4f31587vq8/J9xTmx/fodF3yiDx+oHLfchjo5827UFK2wzk5QDLaSvA2QICHAAAWNuHJvM8b3ik1Czhy2e1TQadCnAcqji4ccDq3ucXcbFeLy18eW4bQbqUUBq4UkceG/xIlxouxncb3ksLc+PEHRo9fNxIdzdMC2O+xulyqPPVXudzeZx4vahdCCLdnTDyvR6sBbpw8ZpfPVzFNH2vjlPahgBnfQhwAAAAes3NpUrNFjoU4FrTw9tNhKxvakNclfFsRV6Ojvrnn6fKD75bS2NjnTJ/R5R1MVkJVKz5IV/vpj9F2tLnB670JV8d3xwfctQaQ4ADAAB7+vr1iVKzJYsFOEcjL0dH6QNcrTFkZWbep8uXLyrhq6Xjx49+019aWiz+f/Ag95t6RkbaN/337t1R5m9tvOfw4kUOVVTcofz8q5SWdpYOH95MsbELaMOGxXTz5lHlNaaOwJXfcBMBLtCvO1X+5Uaxc/T1+A1uVHzZncJG/0orZrnS5d1u4kaFuRN70Kihv4hxYqa70t14d1owqYe4Li444BdK2KSGQQQ4AACwt9ra+0rN1qwe4PiUZ5+oAcbTqH2mDiJdShj1DOpLvleCyVXXkwYs86EhB0eSi7sLDY4fTQMWeyvTaa/yckMYKqXPn4vp/YdCevv2Eb1+nU+vXj2gFy9z6fnzHPr772xqbMwSGhoyhfr6DOHZM1ZKPj4+tHPndi3UrKD09Ht06NABWro0hry8vCg19TbV1dXQyJEBtHbtapo7dw4dOxZPcXFbtNfWiGHLly8T9R07tpOHhwf99ttMMWz8+EhatSqWoqMXUW5uljatlH/boG9PY2O2aB+386XW3lev8rRA+YDevHkolqWpqYA+fiwSy2fLPQFTAa70mhstmeFKQ4d0p4Pr3KgpW1/PPOlOxVfcybO/i+jPOKEPZoMHuBDf6MDdK2e5Upn2eq9BLjQ19FcKG6UPdp9y1fkgwAEAgL2kpBxXavZg/QB3J0z/f5L+mjaPLcP0/Vqw804IpP5zPMnnWjANOTyKuvf7lbxPBIonGMvTaS95OTrKcAq1trb6m6NlBmlpd6mysszYX1VVLsLZf/0Vxu7q6v+6W76mpqZKvM5ZTqGaCnC2hAAHAAC2xmem5Jq9WD/ApYZTn4kDxI0LfBMD06WGiTtKOcQNWqMTPy3RZ9JAcUOE94Ug0S1Pp73k5eiot2+r6cWLGpt4+bJGmb8jQoADAICu5M2bfKVmb1YPcPYiLwdYDgIcAAB0FTU1aUrNESDAQbvdOFJMZzfdsqsdswuUdgEAAFjKly8lglx3FAhwAAAAAC3s27deqTmaNgPc2sQEhzdly0aaGrfpm5q8HAAAAADfc+nSAaXmqNoMcM7g/ftCOnFiOyUm7lGGAQAAAHxPenoiffjwWKk7sh8iwLVm+fK59O7dI6UOAAAAXRs/xH7Bgqn09at9fgbLEn7YANdSfHwcnT//p3jwrTwMAAAAfnzl5bdp1arfxVk7eZgz6hIBTvb8RQ4dOrSFEhK20enTu8XPR/EvNMjjAQAAgPPgXypKuX2CTp3aKQ7e8PZdHudH0SUDXHtxWuefsOKfteLfP6uqShW/HVpWlkIlJbeouDiJiopu0uPHfwmFhQAAANAZvD3lbStvY0tLk8V29+nTNLEt5p+T5NOg8va6K0GAAwAAAHAyCHAAAAAATgYBDgAAAMDJIMABAAAAOBkEOAAAAAAngwAHAAAA4GT+D+T0JMRKTB26AAAAAElFTkSuQmCC>