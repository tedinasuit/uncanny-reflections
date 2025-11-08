## De Vliegende Hollander — Virtual Human

### What it is
A mythic, real‑time virtual human of Willem van der Decken—the cursed captain of De Vliegende Hollander—built on top of the Michiel de Ruyter pipeline. It combines MetaHuman character work, a haunted ship environment, supernatural effects, and low‑latency AI conversation to immerse visitors in a living legend.

### Who it’s for
- **Theme parks and live experiences**: Add interactive presence to narrative spaces (e.g., queue storytelling).
- **Museums and cultural venues**: Present folklore and maritime history through conversation, not signage.
- **Education and exhibitions**: Memorable, safe, character‑driven learning.
- **Innovation teams**: Reference implementation for real‑time AI + UE5 character systems.

### Why it stands out
- **Spinoff with polish**: Builds on Michiel’s proven pipeline but adapts every layer—persona, visuals, lighting, and tone—for a ghost‑ship fantasy.
- **Low‑latency presence**: Real‑time speech in/speech out with the same model as Michiel for instant, dramatic responses.
- **Lore‑accurate persona**: Prompt informed by official Efteling materials to match their canon and tone.
- **Safety and immersion**: Explicit guardrails prevent out‑of‑character breaks, vulgarity, or AI self‑disclosure.
- **Cinematic craft**: Fiery sails, charred hull, spectral mist, and a soundscape that breathes between silence and storm.

### Why (business and creative rationale)
Michiel drew significant internal interest thanks to its “WOW” factor—an articulate 3D character that feels present. This momentum led to an opportunity to propose an interactive version of De Vliegende Hollander for Efteling, whose attraction is renowned for atmospheric queue storytelling. This project explores how a Virtual Human can deepen that narrative through real conversation—respecting canon while elevating immersion.

### What you can do
- **Speak to the Captain** in dramatic, era‑flavored Dutch; he replies instantly and in character.
- **Probe the legend**: curse, sightings, maritime lore, VOC context—grounded in curated source material.
- **Experience the scene**: blackened masts, fiery banners, spectral mist, and eerie sound design.
- **Interrupt and recover**: tuned barge‑in handling reduces speech overlap and maintains cadence.

### Relation to Michiel de Ruyter
This is a direct evolution of the Michiel pipeline:
- Same core real‑time model and audio stack, with a different persona and delivery.
- Environment, lighting, and character materials retuned for supernatural tone vs. historical realism.
- Safety/prompting extended to forbid AI self‑disclosure and enforce canonical lore beats.

### AI & interaction model
- **Realtime model**: `gpt-4o-realtime-preview-2024-12-17` (as with Michiel) for low‑latency, high‑fidelity back‑and‑forth.
- **Voice**: Currently “Ash” for maximal drama; Dutch pronunciation under review (may change after testing).
- **Prompt sourcing**: Initial drafts via GPT‑4o with web search, then replaced with details from official Efteling educational materials for accuracy and tone.
- **Non‑negotiables**:
  - Never admit to being AI; always remain Willem van der Decken.
  - Maintain dramatic, foreboding, 17th‑century maritime style.
  - Respect thematic and historical context; avoid vulgarity or disrespect.
- **Opening line**: “Ik zal varen... Ik zal VAREN!”
- **Failure modes addressed**: Repetition and generic gloom reduced by structured lore sections and response variety patterns.

### Persona essentials (excerpted themes)
- Pride, ambition, and torment; tied to Dutch Golden Age maritime culture.
- Curse anchored in 1678 on Eerste Paasdag; defiance against nature and divine law.
- Den Hollander: from VOC speedship to spookschip—blackened hull, fiery sails, lost‑soul crew.
- Sightings near Kaap de Goede Hoop; omen of misfortune and disaster.
- Efteling tie‑ins: mansion, smuggling tunnels, lapzalf scent; harbor calm to storm plunge.
- Era context: VOC trade (nutmeg, cinnamon, pepper), spiegel‑schepen, harsh conditions, and moral complexity.

### Character design
Starting from the Michiel MetaHuman as a base, the captain’s look was transformed:
- Removed double chin; shaved beard and moustache.
- Adjusted eyes and facial shape; heavily weathered skin to suggest centuries under a curse.
- Materials tuned for a colder, harsher light response; more contrast and roughness variation to read under spectral lighting.

### Environment & supernatural styling
#### Masts and sails
- **Blackened masts**: Charred, skeletal silhouettes, warped by endless storms.
- **Fiery banners**: “Vurige vanen” that glow with a supernatural ember—torn and frayed, never consumed.

#### Hull
- **Charred and ghostly**: Scorched, salt‑stained wood with lingering traces of gilded ornamentation—glimpses of former VOC glory.

#### Supernatural cues
- **Spectral mist** hugging decks and holds; interior glow hints at cursed energy.
- **Hovering gait**: The ship appears to skim above waves, defying physics just enough to unsettle.
- **Sound design**: Alternates between suffocating silence and creaks, phantom bells, and distant cries.

### Under the hood (UE5 craft)
- **Built on the Michiel scene grammar** but with distinct art direction and post‑process.
- **Lighting**: Lantern analogs replaced with colder, directional accents; exposure and denoiser budgets reallocated for glow and mist.
- **Physics**: Base buoyancy motion preserved for camera believability; collisions extended for reliable traversal.
- **Materials**: Hand‑authored PBR adjustments for char, ember, and dampness—reads in ray‑traced and fallback paths.

### Methods applied (CMD)
- **Lab: Prototyping** — Iterated on character styling and environmental FX.
- **Library: Best/Good/Bad Practices** — Carried forward what worked from Michiel; avoided prior pitfalls.
- **Stepping Stones: Iteration Cycles** — Tight loops on ghostly VFX, glow, and exposure.
- **Library: Literature Study** — Folklore and Efteling canon informed persona structure and lines.

### Ongoing development
- Preparing for a stakeholder session at Efteling; a “Plan van Aanpak” defines scope, beats, and demo flow.
- Voice selection remains open pending user tests; “Ash” is the dramatic baseline.
- Continued tuning on prompt sections to prevent thematic repetition and expand narrative breadth.

### What I focused on (skills showcased)
- **Narrative systems**: Turning official lore into a robust, safe persona that sustains conversation.
- **Real‑time AI**: Barge‑in handling, latency, streaming voice fidelity.
- **UE5 rendering**: Post‑process mood, denoiser‑aware lighting, and readable ghostly effects.
- **3D ops**: Materials, remodeling, and scale tuning for a cohesive spectral look.
- **Experience design**: Queue‑friendly pacing, safe content by default, and memorable first lines.

### Impact
De Vliegende Hollander shows how a proven virtual‑human stack can pivot from historical realism to richly stylized myth—without losing presence, safety, or responsiveness. For themed entertainment and cultural venues, it points toward interactive storytelling that is both canon‑respectful and emotionally resonant.

### What’s next
- **Stakeholder demo** at Efteling; validate narrative beats and interaction ergonomics.
- **Voice trials** for Dutch clarity vs. dramatic weight; swap if tests support it.
- **VR/spatial options** for natural exploration and presence cues.
- **Deeper scene awareness** so the captain references environmental events in real time.

### In short
An interactive ghost captain you can truly talk to—commanding, tragic, and unforgettable—crafted with the same technical rigor as Michiel but tuned for myth and spectacle.


