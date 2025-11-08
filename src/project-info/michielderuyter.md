## Michiel de Ruyter — Virtual Human

### What it is
An interactive, real‑time virtual human of Michiel de Ruyter inside Unreal Engine 5. Built with MetaHuman, advanced physics, and ray‑traced lighting, he lives aboard a historically inspired ship at sea. You can speak to him in natural Dutch; he responds instantly with lifelike voice, presence, and historical insight.

### Who it’s for
- **Museums and cultural institutions**: Bring history to life through conversation.
- **Education**: Immersive learning for classrooms and exhibits.
- **Live events and experiences**: Captivating, responsive character on stage or in installations.
- **R&D and innovation teams**: A cutting‑edge reference for real‑time AI + 3D pipelines.

### Why it stands out
- **True real‑time conversation**: Low‑latency speech in/speech out powered by OpenAI’s real‑time APIs.
- **Grounded persona**: Carefully authored system prompt reflects his historic tone—wise, stoic, and dignified—speaking only Dutch.
- **Safety by design**: Explicit guardrails prevent offensive language; refined after real user incidents.
- **Cinematic presence**: MetaHuman character, storm‑sea ship, ray‑traced lighting, and tuned physics deliver a convincing scene.
- **Production‑grade craft**: Custom collisions, optimized ray counts + denoising, and hand‑authored materials for reliable, performant realism.

### What you can do
- **Converse in Dutch** about naval strategy, leadership, voyages, and historical context.
- **Experience presence**: natural voice, expressive face, and responsive timing.
- **Explore the deck**: walk around the ship with stable collisions and believable motion.
- **Interrupt and recover**: barge‑in handling and timing tuned from user testing to reduce speech overlap.
- **Learn with nuance**: balanced, respectful answers to complex topics (e.g., slavery, ethics, war).

### A moment aboard
You step onto the creaking deck as waves slam against the hull. Lanterns glow near the helm. You greet Michiel—he turns, makes eye contact, and replies in steady Dutch: “Wat is uw bevel, edele landgenoot? De zee roept ons tot actie!” He references the weather, the swell, and the strategic situation, then invites you to consider formation and risk. It feels conversational, not scripted.

### How it started
This work builds on our earlier “Max” experiments—from playful banter to kid‑friendly storytelling—evolving into a historically grounded character that leverages modern graphics and real‑time lipsync. The question became: how far can we push realism and presence in a virtual human?

### AI & interaction model
- **Realtime model**: `gpt-4o-realtime-preview-2024-12-17` chosen for low‑latency, high‑fidelity turn‑taking.
- **Voice**: OpenAI “Echo” for authentic Dutch pronunciation and appropriate tone.
- **Persona prompt (essentials)**:
  - Speaks only Dutch; tone is commanding yet wise, dignified, and respectful.
  - Draws on naval leadership, courage, and duty—no vulgarity or disrespect.
  - Opening line: “Wat is uw bevel, edele landgenoot? De zee roept ons tot actie!”
- **Safety & moderation**:
  - Content rules explicitly block sensitive/offensive language after a real test incident.
  - Prompt testing and iteration focused on guardrails and edge cases.
- **Turn‑taking**:
  - Latency‑sensitive streaming; tuned to reduce speech overlap and handle interruptions (“barge‑in”).

### Character design
- **MetaHuman foundation**: Began from the `Cooper` preset, then sculpted to reflect portraiture—long hair, moustache, beard, facial proportions.
- **Iterative refinement**: User feedback revealed ethnicity drift; corrected with targeted sculpting (eye size, facial roundness, double chin) to better match historical paintings.
- **Performance**: Optimized groom, skin, and material settings for real‑time lighting and close‑up readability.

### Environment & scene craft
#### Ocean simulation
- **FluidFlux** for dynamic, performant ocean—licensed via LiveWall—selected for visual quality and production use in titles like Hellblade II.

#### Ship implementation
- **Historical ship model** from the Gaming team; extensive texture authoring and material matching to achieve a cohesive PBR look.
- **Lantern assets** remodeled/scaled using UE5 modeling tools for accurate proportions and placement.

#### Physics and collision
- **Ship physics tuning**: Adjusted buoyancy and locked rotations for stability without losing natural motion.
- **Custom collision mesh**: Hand‑built deck floor and invisible guard rails—necessary due to complex geometry; avoids “bubble” collisions and keeps traversal reliable.

#### Lighting and ray tracing
- **Cinematic lighting**: Lantern key/fill for the face while preserving storm ambience.
- **Ray‑traced optimization**: Maintain sufficient ray counts for clean denoising; use post‑process volumes to control exposure and mood without starving the denoiser.

### Methods applied (CMD)
- **Lab: Prototyping** — Rapid UE5 iteration on character, physics, and lighting.
- **Library: Best/Good/Bad Practices** — Learning from MetaHuman and real‑time pipelines.
- **Workshop: Design Sprints** — Fast cycles on scene composition and interaction.
- **Library: Expert Interview** — Consulted historians for tone and factual grounding.

### User testing & validation
#### Primary test — Bas (Project Lead, Mentor)
- Reaction: “Extremely cool.”
- Observations: Environment noticed later; suggests stronger environmental awareness in responses.
- Finding: Speech overlap when user begins speaking—need tighter interruption handling.

#### Expert review — Tim (Creative Director, LiveWall)
- Strengths: Historical depth and handling of sensitive topics; engaging educational delivery.
- Recommendations: Remove LLM self‑disclosure; deepen emotional range for resonance (e.g., inspiration from notable historical recreations).

#### Unexpected behavior — Dion (Peer)
- Incident: AI responded with an offensive Dutch expletive upon interruption (“boeeieeee”).
- Action: Immediate prompt hardening; explicit prohibitions on vulgarity and disrespect.
- Outcome: Safer default behavior and clearer guardrails.

### What I focused on (skills showcased)
- **Real‑time AI**: Low‑latency speech in/out, prompt engineering, safety constraints.
- **Unreal Engine 5**: MetaHuman, Niagara/FX integration, post‑process, ray tracing.
- **Rendering craft**: Light composition, denoiser‑aware exposure strategy, material polish.
- **Physics & collisions**: Stable traversal on a moving ship; believable motion without nausea.
- **3D content ops**: PBR texturing, asset remodeling, and scale/units consistency.
- **Product thinking**: Turn‑taking, barge‑in handling, emotional tone, and educational value.

### Design principles
- **Authenticity over theatrics**: Dignified tone, historically informed answers.
- **Presence with purpose**: Lighting and motion serve character clarity.
- **Safety as a feature**: Guardrails are explicit, tested, and tuned.
- **Latency matters**: Fast feedback sustains the illusion of personhood.

### Impact
This project turns a textbook figure into a respectful, conversational presence. It demonstrates how modern AI and real‑time 3D can make history felt—useful for exhibits, live experiences, and classrooms—and showcases a robust pipeline for virtual humans that balances performance, aesthetics, and safety.

### What’s next
- **De Vliegende Hollander**: Expanded environment for mythic storytelling and broader audience appeal.
- **VR/Spatial**: Natural exploration and eye‑contact cues enhance presence and learning.
- **Deeper context awareness**: Scene‑aware responses and environmental hooks.
- **Richer emotion**: Subtle variations in tone and pacing for human nuance.

### In short
Michiel de Ruyter is a respectful, lifelike virtual human you can speak with—crafted for realism, safety, and wonder. It blends cutting‑edge AI with filmic real‑time graphics to make Dutch naval history feel present, not distant.


