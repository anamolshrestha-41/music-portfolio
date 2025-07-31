import { motion } from 'framer-motion'
import { slideUp } from '../utils/animations'

const LicenseTiers = () => {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      type: "Personal Use",
      features: [
        "Personal projects only",
        "Non-commercial use",
        "Attribution required",
        "Standard quality files",
        "Email support"
      ],
      buttonText: "Download Free",
      buttonClass: "bg-gray-600 hover:bg-gray-700",
      popular: false,
      action: () => window.open('mailto:your-email@example.com?subject=Free License Request', '_blank')
    },
    {
      name: "Commercial",
      price: "$99",
      type: "Commercial License",
      features: [
        "Commercial use allowed",
        "YouTube monetization OK",
        "Social media campaigns",
        "High quality files",
        "Priority support",
        "Usage analytics"
      ],
      buttonText: "Buy License",
      buttonClass: "bg-purple-600 hover:bg-purple-700",
      popular: true,
      gumroadUrl: "https://gumroad.com/l/your-commercial-license"
    },
    {
      name: "Exclusive",
      price: "$499",
      type: "Exclusive Rights",
      features: [
        "Exclusive usage rights",
        "Remove from public sale",
        "Custom modifications",
        "Stems & project files",
        "Direct collaboration",
        "Unlimited revisions"
      ],
      buttonText: "Get Exclusive",
      buttonClass: "bg-yellow-600 hover:bg-yellow-700",
      popular: false,
      action: () => window.open('mailto:your-email@example.com?subject=Exclusive License Inquiry', '_blank')
    }
  ]

  const handlePurchase = (tier) => {
    if (tier.gumroadUrl) {
      window.open(tier.gumroadUrl, '_blank')
    } else if (tier.action) {
      tier.action()
    }
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      variants={slideUp}
    >
      {tiers.map((tier, index) => (
        <motion.div
          key={tier.name}
          className={`relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${
            tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''
          }`}
          variants={slideUp}
          whileHover={{ scale: tier.popular ? 1.05 : 1.02 }}
        >
          {tier.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
          )}
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {tier.name}
            </h3>
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {tier.price}
            </div>
            <p className="text-gray-600 dark:text-gray-300">{tier.type}</p>
          </div>

          <ul className="space-y-3 mb-8">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <button
            onClick={() => handlePurchase(tier)}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors ${tier.buttonClass}`}
          >
            {tier.buttonText}
          </button>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default LicenseTiers