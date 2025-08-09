import React, { useState } from 'react';
import { ChevronRight, Star, Circle, Moon, Globe, User, Mail, Hash, Calendar } from 'lucide-react';

// Embedded styles to prevent reversion
const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #000000;
  color: #ffffff;
  min-height: 100vh;
  overflow-x: hidden;
}

.cosmic-container {
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.stars-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.star {
  position: absolute;
  width: 1px;
  height: 1px;
  background: white;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.star-big {
  width: 2px;
  height: 2px;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.content-wrapper {
  position: relative;
  z-index: 10;
  max-width: 32rem;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.content-wrapper-wide {
  max-width: 56rem;
}

.content-wrapper-medium {
  max-width: 42rem;
}

.cosmic-card {
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 32px;
  backdrop-filter: blur(4px);
  background: rgba(255, 255, 255, 0.05);
  width: 100%;
}

.cosmic-header {
  text-align: center;
  margin-bottom: 32px;
}

.cosmic-title {
  font-size: 1.875rem;
  font-weight: 100;
  margin-bottom: 16px;
}

.cosmic-title-large {
  font-size: 2.25rem;
}

.cosmic-title-huge {
  font-size: 4rem;
}

.cosmic-divider {
  width: 96px;
  height: 1px;
  background: white;
  margin: 0 auto 24px auto;
}

.cosmic-divider-large {
  width: 128px;
}

.cosmic-subtitle {
  font-size: 0.875rem;
  font-weight: 300;
  opacity: 0.7;
}

.cosmic-subtitle-large {
  font-size: 1.125rem;
  opacity: 0.8;
}

.form-group {
  margin-bottom: 24px;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 300;
  margin-bottom: 8px;
  opacity: 0.8;
}

.form-input {
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: white;
  font-size: 0.875rem;
  transition: all 0.3s;
}

.form-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-input:focus {
  border-color: rgba(255, 255, 255, 0.4);
  outline: none;
}

.cosmic-button {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: transparent;
  padding: 16px 32px;
  font-size: 0.875rem;
  font-weight: 300;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.cosmic-button:hover {
  border-color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
}

.cosmic-button:disabled {
  border-color: rgba(255, 255, 255, 0.2);
  opacity: 0.5;
  cursor: not-allowed;
}

.cosmic-button:disabled:hover {
  background: transparent;
}

.lang-switcher {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 20;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: transparent;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 300;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
}

.lang-button:hover {
  border-color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
}

.progress-container {
  margin-bottom: 48px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.progress-text {
  font-size: 0.75rem;
  font-weight: 300;
  opacity: 0.6;
}

.progress-bar-bg {
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  height: 1px;
}

.progress-bar {
  background: white;
  height: 1px;
  transition: all 0.5s;
}

.question-options {
  margin-top: 32px;
}

.option-button {
  width: 100%;
  text-align: left;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  border-radius: 2px;
  font-size: 0.875rem;
  font-weight: 300;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.option-button:hover {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.05);
}

.option-text {
  opacity: 0.8;
}

.option-button:hover .option-text {
  opacity: 1;
}

.option-icon {
  opacity: 0.3;
  transition: all 0.3s;
}

.option-button:hover .option-icon {
  opacity: 0.6;
}

.results-grid {
  display: grid;
  gap: 32px;
  margin-bottom: 32px;
}

@media (min-width: 768px) {
  .results-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.traits-section h3,
.mission-section h3 {
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.traits-list {
  margin-top: 8px;
}

.trait-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.875rem;
  opacity: 0.8;
  margin-bottom: 8px;
}

.trait-bullet {
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  margin-top: 8px;
  flex-shrink: 0;
}

.mission-text {
  font-size: 0.875rem;
  opacity: 0.8;
  line-height: 1.625;
}

.element-section {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 24px;
  text-align: center;
}

.element-symbol {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.element-frequency {
  font-size: 0.75rem;
  opacity: 0.6;
}

.scores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.score-item {
  text-align: center;
}

.score-symbol {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.score-name {
  font-size: 0.875rem;
  font-weight: 300;
  margin-bottom: 4px;
}

.score-points {
  font-size: 0.75rem;
  opacity: 0.6;
}

.score-bar-bg {
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  height: 1px;
  margin-top: 8px;
}

.score-bar {
  background: white;
  height: 1px;
  transition: all 1s;
}

.geometry-container {
  text-align: center;
  margin-bottom: 32px;
}

.geometry-svg {
  opacity: 0.3;
}

.user-welcome {
  font-size: 0.875rem;
  font-weight: 300;
  opacity: 0.6;
  margin-top: 8px;
}

.question-subtitle {
  font-size: 0.75rem;
  font-weight: 300;
  opacity: 0.5;
  margin-top: 8px;
}

.required-text {
  font-size: 0.75rem;
  text-align: center;
  opacity: 0.5;
}
`;

const StarseedQuiz = () => {
  const [currentStep, setCurrentStep] = useState('userInfo');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [language, setLanguage] = useState('en');
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
    email: '',
    instagram: ''
  });
  const [scores, setScores] = useState({
    pleiadian: 0,
    andromedan: 0,
    arcturian: 0,
    sirian: 0,
    lyran: 0,
    mintaka: 0,
    blueray: 0,
    orion: 0,
    lemurian: 0,
    avian: 0,
    human: 0
  });
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState([]);

  const content = {
    en: {
      title: "STELLAR ORACLE",
      subtitle: "Discover your cosmic origins and soul's destiny",
      userForm: {
        title: "COSMIC REGISTRATION",
        subtitle: "Before we discover your starseed origins, share your earthly details",
        nameLabel: "Full Name",
        namePlaceholder: "Enter your name…",
        ageLabel: "Age",
        agePlaceholder: "Your age…",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        instagramLabel: "Instagram Handle",
        instagramPlaceholder: "@yourhandle",
        continueButton: "BEGIN COSMIC JOURNEY",
        requiredFields: "All fields are required"
      },
      questions: [
        {
          question: "How do you feel about Earth and fitting in?",
          options: [
            { text: "I've always felt different and like I don't belong here", points: { andromedan: 3, lyran: 2, mintaka: 2, orion: 2 } },
            { text: "I dream of a home among the stars and feel homesick for it", points: { pleiadian: 3, mintaka: 3, blueray: 2 } },
            { text: "I feel I must help humanity awaken", points: { arcturian: 3, blueray: 3, lemurian: 2 } },
            { text: "Earth feels like a prison, I crave freedom", points: { andromedan: 4, avian: 3, lyran: 2 } },
            { text: "I feel perfectly at home on Earth and love human life", points: { human: 4 } }
          ]
        },
        {
          question: "What attracts you most?",
          options: [
            { text: "Love, healing hearts and romance", points: { pleiadian: 4, lemurian: 2 } },
            { text: "Freedom, travel and ancient wisdom", points: { andromedan: 4, lyran: 2, avian: 2 } },
            { text: "Science, technology and humanity's future", points: { arcturian: 4, orion: 2 } },
            { text: "Nature, animals and creative expression", points: { sirian: 4, lemurian: 3, mintaka: 2 } },
            { text: "Career success, material comfort and family life", points: { human: 4 } }
          ]
        },
        {
          question: "How do you relate to authority and rules?",
          options: [
            { text: "I hate any authority and crave complete freedom", points: { andromedan: 4, lyran: 3, avian: 3 } },
            { text: "I respect rules if they're logical and help society", points: { arcturian: 4, orion: 2, human: 2 } },
            { text: "I avoid conflict but don't like control", points: { pleiadian: 3, sirian: 3, mintaka: 2 } },
            { text: "I challenge authority when it doesn't serve good", points: { blueray: 4, lyran: 3, lemurian: 2 } }
          ]
        },
        {
          question: "What's your connection to emotions?",
          options: [
            { text: "I'm extremely empathic and absorb others' emotions", points: { pleiadian: 4, blueray: 3, sirian: 2 } },
            { text: "I feel deeply but process everything internally", points: { sirian: 4, andromedan: 2, mintaka: 2 } },
            { text: "I have balance between emotions and logic", points: { andromedan: 4, arcturian: 2, lyran: 2, human: 3 } },
            { text: "I'm more focused on practical solutions", points: { arcturian: 3, orion: 3, lyran: 2, human: 3 } }
          ]
        },
        {
          question: "How do you prefer to help others?",
          options: [
            { text: "Through healing, love and emotional support", points: { pleiadian: 4, lemurian: 3, blueray: 2 } },
            { text: "By teaching, guiding and sharing wisdom", points: { andromedan: 4, lyran: 2, arcturian: 2 } },
            { text: "Through innovation and practical solutions", points: { arcturian: 4, orion: 3, human: 2 } },
            { text: "By inspiring creativity and nature connection", points: { sirian: 4, lemurian: 2, avian: 2 } }
          ]
        },
        {
          question: "Your connection to water and nature?",
          options: [
            { text: "I'm deeply connected to water, can't live without it", points: { andromedan: 4, sirian: 3, mintaka: 4 } },
            { text: "All nature energizes me", points: { sirian: 3, lemurian: 4, pleiadian: 2 } },
            { text: "I prefer organized gardens and structure", points: { arcturian: 3, orion: 2, human: 3 } },
            { text: "I'm more drawn to stars than earthly nature", points: { lyran: 4, blueray: 3, avian: 3 } }
          ]
        },
        {
          question: "Your approach to creativity and problem-solving?",
          options: [
            { text: "I'm highly creative and use art for healing", points: { sirian: 4, pleiadian: 3, lemurian: 3 } },
            { text: "I'm both creative AND logical simultaneously", points: { andromedan: 4, blueray: 2 } },
            { text: "I excel at systematic problem-solving", points: { arcturian: 4, orion: 3, human: 2 } },
            { text: "I solve problems unconventionally and intuitively", points: { lyran: 4, avian: 3, mintaka: 2 } }
          ]
        },
        {
          question: "Your relationships and trust?",
          options: [
            { text: "I love deeply and am loyal, but sometimes suffer", points: { pleiadian: 4, lemurian: 2 } },
            { text: "I'm selective, but when I trust it's forever", points: { sirian: 4, andromedan: 2, mintaka: 3 } },
            { text: "I prefer small groups with deep connections", points: { sirian: 3, lyran: 2, blueray: 3 } },
            { text: "People naturally gravitate toward me", points: { lyran: 4, andromedan: 2, arcturian: 2, human: 2 } }
          ]
        },
        {
          question: "How do you see your life purpose?",
          options: [
            { text: "To heal hearts and spread love", points: { pleiadian: 4, lemurian: 2 } },
            { text: "To bring freedom and guide humanity's awakening", points: { andromedan: 4, blueray: 3 } },
            { text: "To create innovations for a better future", points: { arcturian: 4, orion: 2 } },
            { text: "To inspire others to remember their true nature", points: { sirian: 3, lyran: 3, avian: 3 } },
            { text: "To live a good life, raise a family, and contribute to society", points: { human: 4 } }
          ]
        },
        {
          question: "Your connection to ancient civilizations?",
          options: [
            { text: "I'm fascinated by ancient Egypt, Atlantis", points: { andromedan: 4, lyran: 2, orion: 3 } },
            { text: "I study how ancient peoples lived", points: { arcturian: 3, lemurian: 4, human: 1 } },
            { text: "I'm drawn to mystical aspects of antiquity", points: { sirian: 3, pleiadian: 2, blueray: 3 } },
            { text: "I feel I lived in ancient civilizations", points: { lemurian: 4, andromedan: 2, lyran: 2 } }
          ]
        },
        {
          question: "How do you handle conflicts?",
          options: [
            { text: "I hate conflicts and avoid arguments", points: { pleiadian: 4, sirian: 2, mintaka: 3 } },
            { text: "I face challenges fearlessly", points: { lyran: 4, andromedan: 2, avian: 2 } },
            { text: "I approach conflicts systematically", points: { arcturian: 4, orion: 3, human: 2 } },
            { text: "I think deeply before responding", points: { sirian: 4, blueray: 3, andromedan: 2 } }
          ]
        },
        {
          question: "Your ideal lifestyle?",
          options: [
            { text: "Traveling the world as a nomad with complete freedom", points: { andromedan: 4, lyran: 2, avian: 3 } },
            { text: "Peaceful life where I can help and heal", points: { pleiadian: 3, arcturian: 2, lemurian: 3 } },
            { text: "Working on innovations for humanity's future", points: { arcturian: 4, orion: 2 } },
            { text: "Simple life in nature with creativity", points: { sirian: 4, lemurian: 2, mintaka: 3 } },
            { text: "Stable career, nice home, and family traditions", points: { human: 4 } }
          ]
        },
        {
          question: "Your connection to animals?",
          options: [
            { text: "I adore cats and feel connected to them", points: { lyran: 4, sirian: 3, avian: 2 } },
            { text: "I'm drawn to dolphins and sea creatures", points: { andromedan: 4, sirian: 3, mintaka: 4 } },
            { text: "I love all animals equally", points: { pleiadian: 3, lemurian: 4, blueray: 2 } },
            { text: "I'm especially attracted to birds", points: { avian: 4, blueray: 3, orion: 2 } },
            { text: "I like pets but prefer human company", points: { human: 4 } }
          ]
        },
        {
          question: "Your psychic abilities?",
          options: [
            { text: "I have strong intuition and premonitions", points: { sirian: 4, pleiadian: 3, blueray: 3 } },
            { text: "I see auras and feel energies", points: { blueray: 4, lemurian: 3, arcturian: 2 } },
            { text: "I have prophetic dreams", points: { andromedan: 3, mintaka: 4, avian: 3 } },
            { text: "I can sense spirit presence", points: { lemurian: 4, sirian: 3, orion: 2 } },
            { text: "I'm skeptical of psychic phenomena", points: { human: 4, arcturian: 1 } }
          ]
        },
        {
          question: "Your relationship with technology?",
          options: [
            { text: "Technology should serve spiritual development", points: { arcturian: 4, blueray: 3 } },
            { text: "I prefer nature to technology", points: { sirian: 4, lemurian: 3, mintaka: 2 } },
            { text: "Technology is a tool for freedom", points: { andromedan: 3, lyran: 2, avian: 3 } },
            { text: "I use technology for creativity", points: { pleiadian: 2, orion: 3, arcturian: 2 } },
            { text: "Technology makes life easier and more convenient", points: { human: 4 } }
          ]
        },
        {
          question: "Your dreams and visions?",
          options: [
            { text: "I dream of spaceships and other worlds", points: { andromedan: 4, lyran: 3, avian: 3 } },
            { text: "I see crystal cities and light beings", points: { blueray: 4, arcturian: 3, lemurian: 2 } },
            { text: "I dream of oceans and underwater civilizations", points: { mintaka: 4, sirian: 3, andromedan: 2 } },
            { text: "I see ancient temples and rituals", points: { lemurian: 4, orion: 3, sirian: 2 } },
            { text: "I mostly have normal dreams about daily life", points: { human: 4 } }
          ]
        },
        {
          question: "Your mission on Earth feels like:",
          options: [
            { text: "Bringing love and healing to broken hearts", points: { pleiadian: 4, lemurian: 2 } },
            { text: "Freeing humanity from illusions of control", points: { andromedan: 4, lyran: 3, avian: 2 } },
            { text: "Transmitting higher knowledge and technologies", points: { arcturian: 4, orion: 3, blueray: 2 } },
            { text: "Restoring connection to nature and ancient wisdom", points: { sirian: 4, lemurian: 4, mintaka: 3 } },
            { text: "Living a fulfilling human experience", points: { human: 4 } }
          ]
        },
        {
          question: "What upsets you most about the world?",
          options: [
            { text: "Cruelty and lack of compassion", points: { pleiadian: 4, blueray: 3, lemurian: 2 } },
            { text: "Control systems and restriction of freedom", points: { andromedan: 4, lyran: 3, avian: 3 } },
            { text: "Ignorance and rejection of progress", points: { arcturian: 4, orion: 2 } },
            { text: "Destruction of nature and loss of spirituality", points: { sirian: 4, lemurian: 4, mintaka: 3 } },
            { text: "Practical problems like poverty and inequality", points: { human: 4 } }
          ]
        },
        {
          question: "Your connection to the stars:",
          options: [
            { text: "The Pleiades feels like home", points: { pleiadian: 4 } },
            { text: "I feel connected to Andromeda", points: { andromedan: 4 } },
            { text: "Arcturus resonates with me", points: { arcturian: 4 } },
            { text: "Sirius is my star", points: { sirian: 4, mintaka: 2 } },
            { text: "I appreciate stars but don't feel a special connection", points: { human: 4 } }
          ]
        },
        {
          question: "Your perception of time:",
          options: [
            { text: "Time is an illusion, I live in eternity", points: { lemurian: 4, blueray: 3, mintaka: 3 } },
            { text: "I see past, present and future simultaneously", points: { arcturian: 4, orion: 3, avian: 3 } },
            { text: "Time moves in cycles, like nature", points: { sirian: 4, lemurian: 3 } },
            { text: "I feel urgency about my mission on Earth", points: { andromedan: 3, lyran: 3, blueray: 4 } },
            { text: "Time is linear and I plan my life accordingly", points: { human: 4 } }
          ]
        }
      ],
      starseedTypes: {
        pleiadian: {
          name: "Pleiadian",
          symbol: "♥",
          description: "Heart healer from the Pleiades star cluster",
          traits: [
            "Extremely empathic and absorb others' emotions",
            "Powerful healers focused on emotional healing",
            "Honest and loyal in relationships",
            "Struggle with self-worth but have pure intentions",
            "Charming and naturally attractive",
            "Sensitive to Western medicine and harsh energies"
          ],
          mission: "Your mission is to heal humanity's wounded hearts and help people remember their divine nature through unconditional love.",
          challenges: "You may struggle with energy vampires, giving your power away, and putting others before yourself.",
          element: "💎 Crystal of Love",
          frequency: "528 Hz - Love Frequency"
        },
        andromedan: {
          name: "Andromedan",
          symbol: "⚖",
          description: "Freedom teacher from Andromeda galaxy",
          traits: [
            "Balanced masculine and feminine energy",
            "Craves freedom above all else",
            "Natural teacher and guide",
            "Loves travel and new experiences",
            "Both creative AND logical",
            "Drawn to ancient civilizations and water"
          ],
          mission: "Your mission is to bring freedom, unity, and balance to humanity. You're here to guide others to break free from limitations.",
          challenges: "You may feel extra frustrated with Earth's systems and struggle with the controlled environment.",
          element: "🌊 Waters of Wisdom",
          frequency: "741 Hz - Liberation Frequency"
        },
        arcturian: {
          name: "Arcturian",
          symbol: "△",
          description: "Innovative leader from Arcturus star system",
          traits: [
            "Highly organized and systematic",
            "Excellent at planning and manifesting",
            "Strong opinions based on experience",
            "Focused on creating a better future",
            "Good at scientific and logical thinking",
            "Natural leaders and communicators"
          ],
          mission: "Your mission is to innovate and guide Earth into a new, better future through technology and practical wisdom.",
          challenges: "You may struggle with being too emotionally detached or having difficulty forming close relationships.",
          element: "⚡ Energy of Progress",
          frequency: "963 Hz - Unity Frequency"
        },
        sirian: {
          name: "Sirian",
          symbol: "👁",
          description: "Intuitive mystic from Sirius star system",
          traits: [
            "Highly intuitive and imaginative",
            "Deeply connected to nature and animals",
            "Prefer small groups to large crowds",
            "Process everything internally",
            "Creative and artistic",
            "Shy and reserved but wise"
          ],
          mission: "Your mission is to help Earth remember its divine purpose by inspiring creativity and sharing ancient wisdom.",
          challenges: "You may feel like an outcast or struggle with being misunderstood.",
          element: "🐋 Ocean Spirit",
          frequency: "432 Hz - Nature Frequency"
        },
        lyran: {
          name: "Lyran",
          symbol: "☀",
          description: "Courageous pioneer from Lyra constellation",
          traits: [
            "Adventurous and fearless",
            "Natural leader who likes spotlight",
            "Independent and strong-willed",
            "Excellent problem-solvers",
            "Confident and self-assured",
            "Drawn to stars and cosmic mysteries"
          ],
          mission: "Your mission is to inspire others to embrace their true power and transcend limitations.",
          challenges: "You may feel lonely or misunderstood due to your independent nature.",
          element: "🔥 Fire of Transformation",
          frequency: "396 Hz - Liberation from Fear"
        },
        mintaka: {
          name: "Mintakan",
          symbol: "🌊",
          description: "Water mystic from destroyed planet Mintaka",
          traits: [
            "Deep connection to water and aquatic beings",
            "Feel homesickness stronger than other starseeds",
            "Very empathetic and sensitive",
            "Natural healers and lightworkers",
            "Strong connection to dolphins and whales",
            "Quiet and introspective"
          ],
          mission: "Your mission is to heal Earth's waters and help humanity reconnect with aquatic wisdom.",
          challenges: "Deep homesickness for destroyed home may cause depression.",
          element: "💧 Sacred Water",
          frequency: "285 Hz - Healing Frequency"
        },
        blueray: {
          name: "Blue Ray",
          symbol: "💙",
          description: "Spiritual pioneer and transmitter of higher frequencies",
          traits: [
            "Highly sensitive to energies and frequencies",
            "Natural healers and teachers",
            "Strong connection to higher dimensions",
            "First wave starseeds on Earth",
            "Empathic to extremes",
            "Strong psychic abilities"
          ],
          mission: "Your mission is to hold higher frequencies of light on Earth and prepare the way for humanity's awakening.",
          challenges: "Your extreme sensitivity can be overwhelming.",
          element: "💎 Crystal of Light",
          frequency: "852 Hz - Awakening Frequency"
        },
        orion: {
          name: "Orion",
          symbol: "⭐",
          description: "Light warrior from Orion constellation",
          traits: [
            "Strong leadership qualities",
            "Natural warriors for justice",
            "Technologically advanced",
            "Logical and analytical",
            "Struggle with duality of light and dark",
            "Strong connection to crystals and geometry"
          ],
          mission: "Your mission is to bring balance between polarities and help heal ancient wars between light and dark.",
          challenges: "You may struggle with internal conflicts between your light and dark nature.",
          element: "⚔ Power of Balance",
          frequency: "417 Hz - Transformation Frequency"
        },
        lemurian: {
          name: "Lemurian",
          symbol: "🌺",
          description: "Ancient wisdom keeper from lost Lemuria",
          traits: [
            "Deep connection to Earth's ancient wisdom",
            "Natural shamans and healers",
            "Strong connection to crystals",
            "Feel responsible for healing Earth",
            "Intuitive and psychic",
            "Prefer natural lifestyle"
          ],
          mission: "Your mission is to restore ancient spiritual practices and help humanity remember its connection to Earth.",
          challenges: "You may grieve humanity's lost spirituality.",
          element: "🌿 Earth Spirit",
          frequency: "174 Hz - Grounding Frequency"
        },
        avian: {
          name: "Avian",
          symbol: "🦅",
          description: "Ascended being with bird-like qualities",
          traits: [
            "Strong connection to birds and flight",
            "Desire for spiritual freedom",
            "Natural mystics and visionaries",
            "High spiritual ideals",
            "Strong connection to higher dimensions",
            "Feel called to guide souls to light"
          ],
          mission: "Your mission is to help souls rise to higher consciousness and find spiritual freedom.",
          challenges: "You may feel too detached from earthly reality.",
          element: "🌬 Breath of Spirit",
          frequency: "639 Hz - Harmony Frequency"
        },
        human: {
          name: "Earth Human",
          symbol: "🌍",
          description: "Grounded Earth soul living your first Earth incarnation",
          traits: [
            "Feel perfectly at home on Earth",
            "Focused on practical, earthly concerns",
            "Strong connection to human society and culture",
            "Comfortable with conventional life paths",
            "Motivated by family, career, and material success",
            "Skeptical of mystical or otherworldly concepts"
          ],
          mission: "Your mission is to experience human life fully, build society, and learn through earthly challenges and relationships.",
          challenges: "You may struggle to understand more spiritually-oriented people or feel confused by mystical concepts.",
          element: "🏔 Mountain Strength",
          frequency: "256 Hz - Earth Frequency"
        }
            "
