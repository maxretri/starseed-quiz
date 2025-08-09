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

.save-status {
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 300;
  background: rgba(255, 255, 255, 0.1);
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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
  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');

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
          question: "Your connection to the stars:",
          options: [
            { text: "The Pleiades feels like home", points: { pleiadian: 4 } },
            { text: "I feel connected to Andromeda", points: { andromedan: 4 } },
            { text: "Arcturus resonates with me", points: { arcturian: 4 } },
            { text: "Sirius is my star", points: { sirian: 4, mintaka: 2 } },
            { text: "I appreciate stars but don't feel a special connection", points: { human: 4 } }
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
      },
      ui: {
        progress: "of",
        newJourney: "NEW JOURNEY",
        soulResonance: "SOUL RESONANCE",
        points: "points",
        yourTraits: "YOUR TRAITS",
        mission: "MISSION",
        challenges: "CHALLENGES",
        saving: "Saving to cosmic database…",
        saved: "✨ Data saved to the cosmos",
        error: "Unable to save to cosmic database"
      }
    },
    ru: {
      title: "ЗВЕЗДНЫЙ ОРАКУЛ",
      subtitle: "Откройте ваши космические корни и предназначение души",
      userForm: {
        title: "КОСМИЧЕСКАЯ РЕГИСТРАЦИЯ",
        subtitle: "Прежде чем открыть ваши звездные корни, поделитесь земными деталями",
        nameLabel: "Полное имя",
        namePlaceholder: "Введите ваше имя…",
        ageLabel: "Возраст",
        agePlaceholder: "Ваш возраст…",
        emailLabel: "Email",
        emailPlaceholder: "ваш@email.com",
        instagramLabel: "Instagram",
        instagramPlaceholder: "@yourhandle",
        continueButton: "НАЧАТЬ КОСМИЧЕСКОЕ ПУТЕШЕСТВИЕ",
        requiredFields: "Все поля обязательны"
      },
      questions: [
        {
          question: "Как вы ощущаете себя на Земле?",
          options: [
            { text: "Я всегда чувствовал себя чужим, как будто не принадлежу этому миру", points: { andromedan: 3, lyran: 2, mintaka: 2, orion: 2 } },
            { text: "Мне снится дом среди звезд, и я тоскую по нему", points: { pleiadian: 3, mintaka: 3, blueray: 2 } },
            { text: "Я чувствую, что должен помочь человечеству пробудиться", points: { arcturian: 3, blueray: 3, lemurian: 2 } },
            { text: "Земля кажется тюрьмой, я жажду свободы", points: { andromedan: 4, avian: 3, lyran: 2 } },
            { text: "Я прекрасно чувствую себя дома на Земле и люблю человеческую жизнь", points: { human: 4 } }
          ]
        },
        {
          question: "Что вас больше всего привлекает?",
          options: [
            { text: "Любовь, исцеление сердец и романтика", points: { pleiadian: 4, lemurian: 2 } },
            { text: "Свобода, путешествия и древняя мудрость", points: { andromedan: 4, lyran: 2, avian: 2 } },
            { text: "Наука, технологии и будущее человечества", points: { arcturian: 4, orion: 2 } },
            { text: "Природа, животные и творческое самовыражение", points: { sirian: 4, lemurian: 3, mintaka: 2 } },
            { text: "Карьерный успех, материальный комфорт и семейная жизнь", points: { human: 4 } }
          ]
        },
        {
          question: "Ваша связь со звездами:",
          options: [
            { text: "Плеяды кажутся мне домом", points: { pleiadian: 4 } },
            { text: "Я чувствую связь с Андромедой", points: { andromedan: 4 } },
            { text: "Арктур вызывает во мне отклик", points: { arcturian: 4 } },
            { text: "Сириус - моя звезда", points: { sirian: 4, mintaka: 2 } },
            { text: "Я ценю звезды, но не чувствую особой связи", points: { human: 4 } }
          ]
        }
      ],
      starseedTypes: {
        pleiadian: {
          name: "Плеядианец",
          symbol: "♥",
          description: "Целитель сердец из звездного скопления Плеяды",
          traits: [
            "Крайне эмпатичны и поглощают эмоции других",
            "Мощные целители, сосредоточенные на эмоциональном исцелении",
            "Честны и преданы в отношениях",
            "Борются с самооценкой, но имеют чистые намерения",
            "Обаятельны и естественно привлекательны",
            "Чувствительны к западной медицине и грубой энергии"
          ],
          mission: "Ваша миссия - исцелить раненые сердца человечества и помочь людям вспомнить их божественную природу через безусловную любовь.",
          challenges: "Вы можете бороться с энергетическими вампирами, отдавать свою силу и ставить других выше себя.",
          element: "💎 Кристалл любви",
          frequency: "528 Гц - Частота Любви"
        },
        andromedan: {
          name: "Андромедианец",
          symbol: "⚖",
          description: "Учитель свободы из галактики Андромеда",
          traits: [
            "Сбалансированная мужская и женская энергия",
            "Жаждет свободы превыше всего",
            "Естественный учитель и проводник",
            "Любит путешествия и новые опыты",
            "Одновременно творческий И логический",
            "Тянется к древним цивилизациям и воде"
          ],
          mission: "Ваша миссия - принести свободу, единство и баланс человечеству. Вы здесь, чтобы направить других к освобождению от ограничений.",
          challenges: "Вы можете чувствовать дополнительное разочарование системами Земли и бороться с контролируемой средой.",
          element: "🌊 Вода мудрости",
          frequency: "741 Гц - Частота освобождения"
        },
        arcturian: {
          name: "Арктурианец",
          symbol: "△",
          description: "Инновационный лидер из звездной системы Арктур",
          traits: [
            "Высоко организованы и систематичны",
            "Отлично планируют и проявляют",
            "Сильные мнения, основанные на опыте",
            "Сосредоточены на создании лучшего будущего",
            "Хороши в научном и логическом мышлении",
            "Естественные лидеры и коммуникаторы"
          ],
          mission: "Ваша миссия - вводить новшества и направлять Землю в новое, лучшее будущее через технологии и практическую мудрость.",
          challenges: "Вы можете бороться с чрезмерной эмоциональной отстраненностью или иметь трудности в формировании близких отношений.",
          element: "⚡ Энергия прогресса",
          frequency: "963 Гц - Частота единения"
        },
        sirian: {
          name: "Сирианец",
          symbol: "👁",
          description: "Интуитивный мистик из звездной системы Сириус",
          traits: [
            "Высоко интуитивны и обладают воображением",
            "Глубоко связаны с природой и животными",
            "Предпочитают малые группы большим толпам",
            "Обрабатывают все внутренне",
            "Творческие и артистичные",
            "Застенчивы и сдержанны, но мудры"
          ],
          mission: "Ваша миссия - помочь Земле вспомнить её божественную цель, вдохновляя творчество и делясь древней мудростью.",
          challenges: "Вы можете чувствовать себя изгоем или бороться с непониманием.",
          element: "🐋 Дух океана",
          frequency: "432 Гц - Частота природы"
        },
        lyran: {
          name: "Лирианец",
          symbol: "☀",
          description: "Мужественный первопроходец из созвездия Лира",
          traits: [
            "Авантюрны и бесстрашны",
            "Естественный лидер, любящий внимание",
            "Независимы и сильны духом",
            "Отличные решатели проблем",
            "Уверены в себе и самоуверенны",
            "Тянутся к звездам и космическим тайнам"
          ],
          mission: "Ваша миссия - вдохновить других принять их истинную силу и превзойти ограничения.",
          challenges: "Вы можете чувствовать одиночество или непонимание из-за вашей независимой природы.",
          element: "🔥 Огонь трансформации",
          frequency: "396 Гц - Частота освобождения от страха"
        },
        mintaka: {
          name: "Минтаканец",
          symbol: "🌊",
          description: "Водный мистик с разрушенной планеты Минтака",
          traits: [
            "Глубокая связь с водой и водными существами",
            "Чувствуют тоску по дому сильнее других звездных семян",
            "Очень сочувствующие и чувствительные",
            "Естественные целители и работники света",
            "Сильная связь с дельфинами и китами",
            "Тихие и интроспективные"
          ],
          mission: "Ваша миссия - исцелить воды Земли и помочь человечеству восстановить связь с водной мудростью.",
          challenges: "Глубокая тоска по разрушенному дому может вызывать депрессию.",
          element: "💧 Священная вода",
          frequency: "285 Гц - Частота исцеления"
        },
        blueray: {
          name: "Голубой Луч",
          symbol: "💙",
          description: "Пионер духовности и передатчик высших частот",
          traits: [
            "Высоко чувствительны к энергиям и частотам",
            "Естественные целители и учителя",
            "Сильная связь с высшими измерениями",
            "Первые волны звездных семян на Земле",
            "Эмпатичны до крайности",
            "Сильные экстрасенсорные способности"
          ],
          mission: "Ваша миссия - держать высшие частоты света на Земле и подготовить путь для пробуждения человечества.",
          challenges: "Ваша крайняя чувствительность может быть подавляющей.",
          element: "💎 Кристалл света",
          frequency: "852 Гц - Частота пробуждения"
        },
        orion: {
          name: "Орионец",
          symbol: "⭐",
          description: "Воин света из созвездия Орион",
          traits: [
            "Сильные лидерские качества",
            "Естественные воины за справедливость",
            "Технологически продвинуты",
            "Логичны и аналитичны",
            "Борются с дуальностью света и тьмы",
            "Сильная связь с кристаллами и геометрией"
          ],
          mission: "Ваша миссия - принести баланс между полярностями и помочь исцелить древние войны между светом и тьмой.",
          challenges: "Вы можете бороться с внутренними конфликтами между своей светлой и темной природой.",
          element: "⚔ Мощь баланса",
          frequency: "417 Гц - Частота трансформации"
        },
        lemurian: {
          name: "Лемуриец",
          symbol: "🌺",
          description: "Древний хранитель мудрости погибшей Лемурии",
          traits: [
            "Глубокая связь с древней мудростью Земли",
            "Естественные шаманы и целители",
            "Сильная связь с кристаллами",
            "Чувствуют ответственность за исцеление Земли",
            "Интуитивны и экстрасенсорны",
            "Предпочитают естественный образ жизни"
          ],
          mission: "Ваша миссия - восстановить древние духовные практики и помочь человечеству вспомнить его связь с Землей.",
          challenges: "Вы можете грустить об утерянной духовности человечества.",
          element: "🌿 Дух Земли",
          frequency: "174 Гц - Частота заземления"
        },
        avian: {
          name: "Птичий",
          symbol: "🦅",
          description: "Вознесенное существо с птичьими качествами",
          traits: [
            "Сильная связь с птицами и полетом",
            "Желание духовной свободы",
            "Естественные мистики и провидцы",
            "Высокие духовные идеалы",
            "Сильная связь с высшими измерениями",
            "Чувствуют призвание направлять души к свету"
          ],
          mission: "Ваша миссия - помочь душам подняться к высшему сознанию и обрести духовную свободу.",
          challenges: "Вы можете чувствовать себя слишком отстраненными от земной реальности.",
          element: "🌬 Дыхание духа",
          frequency: "639 Гц - Частота гармонии"
        },
        human: {
          name: "Земной Человек",
          symbol: "🌍",
          description: "Заземленная земная душа, живущая свою первую земную инкарнацию",
          traits: [
            "Чувствуете себя прекрасно дома на Земле",
            "Сосредоточены на практических, земных заботах",
            "Сильная связь с человеческим обществом и культурой",
            "Комфортно с традиционными жизненными путями",
            "Мотивированы семьей, карьерой и материальным успехом",
            "Скептически относитесь к мистическим или потусторонним концепциям"
          ],
          mission: "Ваша миссия - полностью испытать человеческую жизнь, строить общество и учиться через земные вызовы и отношения.",
          challenges: "Вы можете испытывать трудности в понимании более духовно ориентированных людей или чувствовать смущение от мистических концепций.",
          element: "🏔 Сила горы",
          frequency: "256 Гц - Частота Земли"
        }
      },
      ui: {
        progress: "из",
        newJourney: "НОВОЕ ПУТЕШЕСТВИЕ",
        soulResonance: "РЕЗОНАНС ДУШИ",
        points: "points",
        yourTraits: "ВАШИ ЧЕРТЫ",
        mission: "МИССИЯ",
        challenges: "ВЫЗОВЫ",
        saving: "Сохранение в космическую базу данных…",
        saved: "✨ Данные сохранены в космос",
        error: "Не удалось сохранить в космическую базу данных"
      }
    }
  };

  const handleUserInfoSubmit = () => {
    if (userInfo.name && userInfo.age && userInfo.email && userInfo.instagram) {
      setCurrentStep('quiz');
    }
  };

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    const newScores = { ...scores };
    Object.keys(option.points).forEach(type => {
      newScores[type] += option.points[type];
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      setCurrentStep('results');
    }
  };

  const getTopStarseedType = () => {
    const sortedTypes = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return sortedTypes[0][0];
  };

  const resetQuiz = () => {
    setCurrentStep('userInfo');
    setCurrentQuestion(0);
    setUserInfo({ name: '', age: '', email: '', instagram: '' });
    setScores({
      pleiadian: 0, andromedan: 0, arcturian: 0, sirian: 0, lyran: 0,
      mintaka: 0, blueray: 0, orion: 0, lemurian: 0, avian: 0, human: 0
    });
    setShowResults(false);
    setAnswers([]);
    setSaveStatus('');
  };

  const currentContent = content[language];
  const questions = currentContent.questions;

  // Generate stars
  const generateStars = (count, isBig = false) => {
    return Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className={`star ${isBig ? 'star-big' : ''}`}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 3}s`
        }}
      />
    ));
  };

  return (
    <>
      <style>{styles}</style>
      <div className="cosmic-container">
        {/* Animated stars background */}
        <div className="stars-bg">
          {generateStars(50)}
          {generateStars(20, true)}
        </div>

        {/* Language Switcher */}
        <div className="lang-switcher">
          <button
            onClick={() => setLanguage(language === 'en' ? 'ru' : 'en')}
            className="lang-button"
          >
            <Globe size={16} />
            {language === 'en' ? 'РУС' : 'ENG'}
          </button>
        </div>

        {currentStep === 'userInfo' && (
          <div className="content-wrapper">
            <div className="cosmic-card">
              <div className="cosmic-header">
                <h1 className="cosmic-title">{currentContent.userForm.title}</h1>
                <div className="cosmic-divider"></div>
                <p className="cosmic-subtitle">{currentContent.userForm.subtitle}</p>
              </div>

              <div>
                <div className="form-group">
                  <label className="form-label">
                    <User size={16} />
                    {currentContent.userForm.nameLabel}
                  </label>
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                    placeholder={currentContent.userForm.namePlaceholder}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Calendar size={16} />
                    {currentContent.userForm.ageLabel}
                  </label>
                  <input
                    type="number"
                    value={userInfo.age}
                    onChange={(e) => setUserInfo({...userInfo, age: e.target.value})}
                    placeholder={currentContent.userForm.agePlaceholder}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Mail size={16} />
                    {currentContent.userForm.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    placeholder={currentContent.userForm.emailPlaceholder}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Hash size={16} />
                    {currentContent.userForm.instagramLabel}
                  </label>
                  <input
                    type="text"
                    value={userInfo.instagram}
                    onChange={(e) => setUserInfo({...userInfo, instagram: e.target.value})}
                    placeholder={currentContent.userForm.instagramPlaceholder}
                    className="form-input"
                  />
                </div>

                <button
                  onClick={handleUserInfoSubmit}
                  disabled={!userInfo.name || !userInfo.age || !userInfo.email || !userInfo.instagram}
                  className="cosmic-button"
                >
                  {currentContent.userForm.continueButton}
                </button>

                {(!userInfo.name || !userInfo.age || !userInfo.email || !userInfo.instagram) && (
                  <p className="required-text" style={{marginTop: '16px'}}>
                    {currentContent.userForm.requiredFields}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {currentStep === 'quiz' && !showResults && (
          <div className="content-wrapper content-wrapper-medium">
            <div style={{width: '100%'}}>
              <div className="cosmic-header">
                <h1 className="cosmic-title cosmic-title-large">{currentContent.title}</h1>
                <div className="cosmic-divider cosmic-divider-large"></div>
                <p className="cosmic-subtitle">{currentContent.subtitle}</p>
                <p className="question-subtitle">
                  {userInfo.name} • Question {currentQuestion + 1}
                </p>
              </div>

              <div className="progress-container">
                <div className="progress-info">
                  <span className="progress-text">
                    {currentQuestion + 1} {currentContent.ui.progress} {questions.length}
                  </span>
                  <span className="progress-text">
                    {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="cosmic-card">
                <h2 style={{fontSize: '1.25rem', fontWeight: '300', marginBottom: '32px', textAlign: 'center', lineHeight: '1.625'}}>
                  {questions[currentQuestion].question}
                </h2>

                <div className="question-options">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      className="option-button"
                    >
                      <span className="option-text">{option.text}</span>
                      <ChevronRight size={16} className="option-icon" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="geometry-container">
                <svg width="60" height="60" viewBox="0 0 60 60" className="geometry-svg">
                  <circle cx="30" cy="30" r="15" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="30" cy="30" r="8" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="30" cy="30" r="3" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        )}

        {showResults && (
          <div className="content-wrapper content-wrapper-wide">
            <div style={{width: '100%'}}>
              {(() => {
                const topType = getTopStarseedType();
                const result = currentContent.starseedTypes[topType];
                const topScores = Object.entries(scores).sort((a, b) => b[1] - a[1]).slice(0, 3);

                return (
                  <>
                    <div className="cosmic-header">
                      <div className="cosmic-title-huge">{result.symbol}</div>
                      <h1 className="cosmic-title cosmic-title-large">{result.name}</h1>
                      <div className="cosmic-divider cosmic-divider-large"></div>
                      <p className="cosmic-subtitle cosmic-subtitle-large">{result.description}</p>
                      <p className="user-welcome">Welcome, {userInfo.name}</p>
                    </div>

                    <div className="cosmic-card">
                      <div className="results-grid">
                        <div className="traits-section">
                          <h3>
                            <Circle size={16} />
                            {currentContent.ui.yourTraits}
                          </h3>
                          <div className="traits-list">
                            {result.traits.map((trait, index) => (
                              <div key={index} className="trait-item">
                                <div className="trait-bullet"></div>
                                <span>{trait}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mission-section">
                          <div style={{marginBottom: '24px'}}>
                            <h3>
                              <Star size={16} />
                              {currentContent.ui.mission}
                            </h3>
                            <p className="mission-text">{result.mission}</p>
                          </div>
                          
                          <div style={{marginBottom: '24px'}}>
                            <h3>
                              <Moon size={16} />
                              {currentContent.ui.challenges}
                            </h3>
                            <p className="mission-text">{result.challenges}</p>
                          </div>

                          <div className="element-section">
                            <div className="element-symbol">{result.element}</div>
                            <div className="element-frequency">{result.frequency}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="cosmic-card">
                      <h3 style={{fontSize: '1.25rem', fontWeight: '300', marginBottom: '24px', textAlign: 'center'}}>
                        {currentContent.ui.soulResonance}
                      </h3>
                      <div className="scores-grid">
                        {topScores.map(([type, score], index) => (
                          <div key={type} className="score-item">
                            <div className="score-symbol">{currentContent.starseedTypes[type].symbol}</div>
                            <div className="score-name">{currentContent.starseedTypes[type].name}</div>
                            <div className="score-points">{score} {currentContent.ui.points}</div>
                            <div className="score-bar-bg">
                              <div 
                                className="score-bar"
                                style={{ width: `${(score / topScores[0][1]) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="geometry-container">
                      <svg width="100" height="100" viewBox="0 0 100 100" className="geometry-svg">
                        <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="0.5"/>
                        <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="0.5"/>
                        <circle cx="50" cy="50" r="5" fill="none" stroke="white" strokeWidth="0.5"/>
                        <line x1="50" y1="25" x2="50" y2="75" stroke="white" strokeWidth="0.5"/>
                        <line x1="25" y1="50" x2="75" y2="50" stroke="white" strokeWidth="0.5"/>
                      </svg>
                    </div>

                    <div style={{textAlign: 'center'}}>
                      <button onClick={resetQuiz} className="cosmic-button" style={{maxWidth: '300px', margin: '0 auto'}}>
                        {currentContent.ui.newJourney}
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StarseedQuiz;
